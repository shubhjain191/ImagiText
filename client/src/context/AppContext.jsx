import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [credit, setCredit] = useState(5); // Changed to number with default 0
    const [isLoading, setIsLoading] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const navigate = useNavigate()

    const loadCreditsData = async () => {
        if (!token) {
            console.log('No token available, skipping credits load');
            return;
        }

        setIsLoading(true);
        try {
            console.log('Loading credits with token:', token);
            const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            console.log('Credits API Response:', data);

            if (data.success) {
                console.log('Setting credits to:', data.credits);
                // Ensure credits is a number
                const creditValue = parseInt(data.credits) || 0;
                setCredit(creditValue);
                
                if (data.User) {
                    console.log('Updating user data:', data.User);
                    setUser(data.User);
                    localStorage.setItem('user', JSON.stringify(data.User));
                }
            } else {
                console.log('Credits API returned success: false');
                throw new Error(data.message || 'Failed to load credits');
            }
        } catch (error) {
            console.error('Error loading credits:', error);
            if (error.response?.status === 401 || error.response?.status === 403) {
                toast.error("Session expired. Please login again.");
                logout(); // Clear token and user data
            } else {
                toast.error(error.response?.data?.message || "Failed to load credits");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (credentials) => {
        setIsLoading(true);
        try {
            console.log('Attempting login...');
            const { data } = await axios.post(`${backendUrl}/api/auth/login`, credentials);

            console.log('Login Response:', data);

            if (data.success && data.token) {
                // Set token first
                setToken(data.token);
                localStorage.setItem('token', data.token);

                // If user data is included in login response, set it
                if (data.user) {
                    console.log('Setting user data:', data.user);
                    setUser(data.user);
                    localStorage.setItem('user', JSON.stringify(data.user));
                }

                // Load credits immediately after setting the token
                await loadCreditsData();

                setShowLogin(false);
                toast.success("Login successful!");
            }
        } catch (error) {
            console.error('Login error:', error);
            toast.error(error.response?.data?.message || "Login failed");
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const generateImage = async(prompt) => {
        try {
            
            const { data } = await axios.post(backendUrl + '/api/image/generate-image', {prompt}, {headers: {token}})

            if (data.success) {
                loadCreditsData()
                return data.resultImage
            } else {
                toast.error(data.message)
                loadCreditsData()
                if (data.creditBalance === 0) {
                    navigate('/buy')
                }
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    const logout = () => {
        console.log('Logging out, clearing data...');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken('');
        setUser(null);
        setCredit(0);
        setIsDropdownOpen(false);
        toast.success("Logged out successfully");
    };

    // Load credits when token changes
    useEffect(() => {
        console.log('Token changed, current token:', token);
        if (token) {
            loadCreditsData();
        }
    }, [token]);

    // Refresh credits periodically
    useEffect(() => {
        if (token) {
            const interval = setInterval(loadCreditsData, 300000); // 5 minutes
            return () => clearInterval(interval);
        }
    }, [token]);

    const value = {
        user,
        setUser,
        showLogin,
        setShowLogin,
        backendUrl,
        token,
        setToken,
        credit,
        setCredit,
        loadCreditsData,
        logout,
        login,
        isLoading,
        isDropdownOpen,
        setIsDropdownOpen,
        generateImage
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;