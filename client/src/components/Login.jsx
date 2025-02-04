import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets'; 
import { AppContext } from '../context/AppContext'; 
import { motion, AnimatePresence } from 'framer-motion'; 
import { toast } from 'react-toastify';
import axios from 'axios'

const Login = () => {
    // State to toggle between 'Login' and 'Sign Up' modes
    const [state, setState] = useState('Login');

    // Destructuring context values to control the visibility of the login modal
    const { showLogin, setShowLogin, setToken, setUser, backendUrl } = useContext(AppContext);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            if (state === 'Login') {
                console.log("Attempting login...");
                const { data } = await axios.post(`${backendUrl}/api/user/login`, { email, password });
                console.log("Login response:", data);
    
                if (data.success) {
                    setToken(data.token);
                    setUser(data.user);
                    localStorage.setItem('token', data.token);
                    setShowLogin(false);
                    toast.success("Login Successful");
                } else {
                    toast.error(data.message || "Login failed");
                }
            } else {
                console.log("Attempting registration...");
                const { data } = await axios.post(`${backendUrl}/api/user/register`, { name, email, password });
                console.log("Registration response:", data);
    
                if (data.success) {
                    setToken(data.token);
                    setUser(data.user);
                    localStorage.setItem('token', data.token);
                    setShowLogin(false);
                    toast.success("Account Created Successfully");
                } else {
                    toast.error(data.message || "Registration failed");
                }
            }
        } catch (error) {
            console.error("Error:", error.response?.data || error);
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    };
    

    // Effect to disable body scroll when the login modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden'; // Disable scrolling
        return () => {
            document.body.style.overflow = 'unset'; // Re-enable scrolling when the component unmounts
        };
    }, []);

    // Animation variants for the modal
    const modalVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
    };

    // Animation variants for form elements
    const formElementVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    };

    return (
        <AnimatePresence>
            {showLogin && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Login/Sign Up form */}
                    <motion.form onSubmit={onSubmitHandler}
                        className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md relative"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Form title */}
                        <motion.h1
                            className="text-3xl font-bold mb-6 text-center text-gray-800"
                            variants={formElementVariants}
                        >
                            {state}
                        </motion.h1>
                        {/* Welcome message */}
                        <motion.p
                            className="text-center text-gray-600 mb-8"
                            variants={formElementVariants}
                        >
                            Welcome back! Please {state === 'Login' ? 'Sign in' : 'Sign up'} to continue
                        </motion.p>

                        {/* Full Name input (only shown in 'Sign Up' mode) */}
                        {state !== 'Login' && (
                            <motion.div
                                className="flex items-center gap-3 mb-6"
                                variants={formElementVariants}
                            >
                                <img src={assets.user_icon} alt="User" className="w-6 h-6" />
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={e => setName(e.target.value)} value={name}
                                />
                            </motion.div>
                        )}

                        {/* Email input */}
                        <motion.div
                            className="flex items-center gap-3 mb-6"
                            variants={formElementVariants}
                        >
                            <img src={assets.email_icon} alt="Email" className="w-6 h-6" />
                            <input
                                type="email"
                                placeholder="Email id"
                                required
                                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={e => setEmail(e.target.value)} value={email}
                            />
                        </motion.div>

                        {/* Password input */}
                        <motion.div
                            className="flex items-center gap-3 mb-6"
                            variants={formElementVariants}
                        >
                            <img src={assets.lock_icon} alt="Password" className="w-6 h-6" />
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={e => setPassword(e.target.value)} value={password}
                            />
                        </motion.div>

                        {/* Forgot Password link (only shown in 'Login' mode) */}
                        {state === 'Login' && (
                            <motion.p
                                className="text-right text-blue-600 hover:text-blue-700 cursor-pointer mb-6"
                                variants={formElementVariants}
                            >
                                Forgot Password?
                            </motion.p>
                        )}

                        {/* Submit button (changes text based on 'Login' or 'Sign Up' mode) */}
                        <motion.button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                            variants={formElementVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {state === 'Login' ? 'Login' : 'Create Account'}
                        </motion.button>

                        {/* Toggle between 'Login' and 'Sign Up' modes */}
                        <motion.div
                            className="text-center mt-6 text-gray-600"
                            variants={formElementVariants}
                        >
                            {state === 'Login' ? (
                                <p>
                                    Don't have an account?{' '}
                                    <span
                                        onClick={() => setState('Sign Up')}
                                        className="text-blue-600 hover:text-blue-700 cursor-pointer font-semibold"
                                    >
                                        Sign Up
                                    </span>
                                </p>
                            ) : (
                                <p>
                                    Already have an account?{' '}
                                    <span
                                        onClick={() => setState('Login')}
                                        className="text-blue-600 hover:text-blue-700 cursor-pointer font-semibold"
                                    >
                                        Login
                                    </span>
                                </p>
                            )}
                        </motion.div>

                        {/* Close button to hide the login modal */}
                        <motion.img
                            onClick={() => setShowLogin(false)}
                            src={assets.cross_icon}
                            alt="Close"
                            className="absolute top-4 right-4 w-6 h-6 cursor-pointer hover:opacity-80"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    </motion.form>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Login;