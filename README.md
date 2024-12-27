# Frontend Developer Assignment - CodeAnt AI

This repository contains the frontend implementation of the design provided in the Figma file as part of the Frontend Developer Intern assignment for CodeAnt AI. The project showcases a responsive and functional user interface built using **ReactJS**, HTML, **React Router**, and **CSS**, utilizing **CSS variables** and adhering to best practices for **clean**, **maintainable**, and **scalable code**.

# 🌟 Live Demo  
Include screenshots or a link to a deployed version of the project here.  

[Live Project Link](https://code-ant-ai-pkj2.vercel.app/) 

## 🛠️ Technologies Used
- **ReactJS**: For building the UI components and managing state.
- **React Router**: For seamless navigation between different sections of the application.
- **HTML5**: For structuring the content of the application.
- **CSS3**: For styling and ensuring responsiveness across devices.
- **Vite**: For a fast and optimized development experience.

## 🎨 Features
- Fully functional and responsive UI implementation based on the Figma design.
- Utilization of **CSS variables** for consistent and reusable styling.
- Clean, maintainable, and scalable code structure.
- Adherence to best practices for performance and usability.
- Seamless responsiveness across different screen sizes and devices.
- Implementation of interactive and user-friendly components.
- **React Router** for intuitive navigation between pages.
  
## 🚀 Getting Started

Follow the steps below to run the project locally:

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+ recommended)
- **npm**

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/TusharGupta-Developer/CodeAntAI.git
2. Navigate to the project directory:
   ```bash
   cd CodeAntAI
3. Install dependencies:
   ```bash
   npm install

### Running the Project
1. Start the development server:
   ```bash
   npm run dev
2. Open your browser and visit:
   ```bash
   http://localhost:5173

# 📁 Project Structure:
 ```bash
 ├── public/               # Static assets
├── src/
│   ├── components/       # Reusable React components
│   ├── pages/            # Page components for routing              
│   ├── styles/           # Global and component-specific styles
│   ├── App.jsx           # Root component with routing
│   ├── main.jsx          # Entry point
│   └── App.css and index.css # Global and responsive styles 
├── .gitignore            # Git ignore file
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

  # 🗺️ React Router Integration

The application uses **React Router** for page navigation. Here's how the routing is implemented:

## Example Routes:
- `/` : Home page  
- `/signin` : SignIn page   

### Sample Routing Code in `App.jsx`:
```jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Repositories from "./pages/Home/repositories";
import SignIn from "./pages/SignIn/SignIn";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Repositories />} />  {/* Default child route */}
          <Route path="signin" element={<SignIn />} />
          {/* <Route path="contact" element={<ContactPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

---

# 📝 Notes  
- This project implements the design provided in the Figma file as closely as possible.  
- Utilization of CSS variables ensures consistent and reusable styling across components.  
- Any deviations or creative decisions made during implementation are mentioned in the comments within the code.  

# 🤝 Acknowledgments  
- Thanks to **CodeAnt AI** for the opportunity to work on this project.  
- Design inspiration and guidelines were provided via Figma.  

---

Let me know if you need any further modifications!





