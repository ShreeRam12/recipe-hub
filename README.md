# 🍽️ Recipe Hub

A modern food application designed to make discovering and exploring recipes a delightful experience. Recipe Hub is built with a mobile-first approach, combining a clean user interface with a scalable frontend and backend architecture.

## 📌 About the Project

**Recipe Hub** is a food application developed to bring recipe-related experiences into one convenient platform. The project follows a separate frontend and backend structure to support maintainability and future development.

## 🛠️ Tech Stack

### Frontend
- React Native
- Expo
- NativeWind
- Tailwind CSS
- Clerk Authentication

### Backend
- Backend technologies and services are maintained separately in the `backend` directory.

## 📂 Project Structure

```text
recipe-hub/
│
├── backend/
│   └── Backend application and services
│
├── frontend/
│   └── recipehub/
│       ├── app/
│       ├── components/
│       ├── screens/
│       ├── assets/
│       ├── global.css
│       ├── metro.config.js
│       └── package.json
│
├── postcss.config.mjs
└── README.md
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git
- Expo CLI / Expo tooling
- Android Studio or Expo Go
- A Clerk account for authentication configuration

### 1. Clone the Repository

```bash
git clone https://github.com/ShreeRam12/recipe-hub.git
```

Navigate into the project:

```bash
cd recipe-hub
```

### 2. Set Up the Frontend

Navigate to the React Native application:

```bash
cd frontend/recipehub
```

Install the dependencies:

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the `frontend/recipehub` directory.

```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Replace `your_clerk_publishable_key` with your actual Clerk publishable key.

**Important:** Never expose secret keys or commit sensitive environment variables to GitHub.

### 4. Start the Application

Run the Expo development server:

```bash
npx expo start
```

You can launch the application using:

- Expo Go on a mobile device
- Android Emulator
- iOS Simulator (on macOS)

## 🔐 Authentication

Recipe Hub uses Clerk for authentication integration.

Authentication configuration requires a valid Clerk publishable key stored in the frontend environment variables.

## 📈 Future Enhancements

Potential improvements for the application include:

- Recipe discovery and search
- Recipe categorization
- Detailed recipe information
- Personalized food recommendations
- Favorite recipes
- User profile management
- Improved mobile user experience

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/your-feature-name
```

3. Commit your changes.

```bash
git commit -m "Add: your feature description"
```

4. Push your branch.

```bash
git push origin feature/your-feature-name
```

5. Open a Pull Request.

## 👨‍💻 Author

**Shree Ram**

GitHub: [@ShreeRam12](https://github.com/ShreeRam12)

## 📄 License

This project is currently available as a public GitHub repository. A license can be added to define permissions for usage, modification, and distribution.

---

⭐ If you find this project interesting, consider giving the repository a star!

**Made with ❤️ for food and technology.**
