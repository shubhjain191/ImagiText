# 🚀 ImagiText – Transform Your Imagination into Reality with AI! 🎨

ImagiText is a **powerful AI-driven Text-to-Image Generator** that brings your imagination to life! Simply input text, and our advanced AI models will generate stunning visuals. Whether you’re an artist, designer, or just someone exploring AI creativity, ImagiText is your go-to tool.  

---

#### 🎨 **Screenshots**
![image](https://github.com/user-attachments/assets/36fe6878-4849-4589-94d2-55261db1a1eb)
![image](https://github.com/user-attachments/assets/f3e6e418-d5f7-4e14-9797-4c7dc9d6f1eb)
![image](https://github.com/user-attachments/assets/5a59ea3b-f802-4507-bb4c-f6060bb29544)

---

## 🌟 Features  

✅ AI-powered **Text-to-Image** Generation 🎭  
✅ **Real-time Processing** with High Accuracy ⚡  
✅ **User Authentication & Personalized Experience** 🛡️  
✅ **Download & Share** AI-Generated Images 📤  
✅ **Responsive UI** for a seamless experience across devices 📱  

---

## 🛠️ Tech Stack  

- **Frontend:** React.js (Vite) + Tailwind CSS  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB (Mongoose ORM)  
- **Authentication:** JWT (JSON Web Tokens)  
- **AI Integration:** ClipDrop API  

---

## 🚀 Getting Started  

### 🔹 Clone the Repository
```bash
git clone https://github.com/yourusername/ImagiText.git
cd ImagiText
```

### 🔹 Install Dependencies
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 🔹 Set Up Environment Variables
Create a `.env` file in the **server** directory and add:
```env
MONGODB_URL="your_mongodb_connection_string"
JWT_SECRET="your_secret_key"
CLIPDROP_API="your_clipdrop_api_key"
```

### 🔹 Start the Application
```bash
# Start the backend
cd server
npm run server

# Start the frontend
cd ../client
npm run dev
```
🚀 Your app is now running.

---

## 🔹 User Authentication  
| Method | Endpoint          | Description        |
|--------|------------------|--------------------|
| POST   | /api/auth/register | Register a new user |
| POST   | /api/auth/login    | Login user         |
| GET    | /api/auth/user     | Get user details   |

---

## 🔹 Image Generation  
| Method | Endpoint      | Description                 |
|--------|--------------|-----------------------------|
| POST   | /api/generate | Generate an image from text |
| GET    | /api/images   | Fetch generated images      |

---

## 🤝 Contributing  
We welcome contributions! 🚀  

1. Fork the repository  
2. Create a new branch: `git checkout -b feature-name`  
3. Make your changes & commit: `git commit -m "Added a new feature"`  
4. Push the branch: `git push origin feature-name`  
5. Submit a Pull Request 🎉  

---

## 📜 License  
This project is licensed under the **MIT License**. Feel free to use and modify it.  

---

## 🔗 Connect With Us  
💬 Have a question? **Open an issue!**  
🌟 Like this project? **Give it a star ⭐ on GitHub!**  
📧 Contact: **shubhjain191@gmail.com**


  

