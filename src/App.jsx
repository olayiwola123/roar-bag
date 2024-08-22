// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import LandingPage from "./components/LandingPage";
// import NavWrapper from "./components/NavWrapper";
// import Contact from "./components/Contact/Contact";
// import Company from "./components/Company/Company";
// import Login from "./components/Login/Login";
// import MediaCenter from "./components/MeadiaCenter/MeadiaCenter";
// import Portfolio from "./components/Portfolio/Portfolio";

// import ProtectedRoute from "./components/ProtectedRoute";
// import { AuthProvider } from "./context/AuthContext";

// const App = () => {
//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 800,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <AuthProvider>
//       <Router>
//         <NavWrapper>
//           <Routes>
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/contact" element={<Company />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/media" element={<MediaCenter />} />
//             <Route path="/portfolio" element={<Portfolio />} />
//             {/* <ProtectedRoute path="/admin/dashboard" element={<AdminDashboard />} /> */}
//           </Routes>
//         </NavWrapper>
//         <Route element={<PrivateRoutes />}>
//           <Route path="dashboard" element={<Dashboard />} />
//         </Route>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import LandingPage from "./components/LandingPage";
import NavWrapper from "./components/NavWrapper";
import Company from "./components/Company/Company";
import Login from "./components/Login/Login";
import MediaCenter from "./components/MeadiaCenter/MeadiaCenter";
import Portfolio from "./components/Portfolio/Portfolio";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoutes from "./components/PrivateRoutes";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Product";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes with NavWrapper */}
          <Route element={<NavWrapper />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<Company />} />
            <Route path="/login" element={<Login />} />
            <Route path="/media" element={<MediaCenter />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Route>

          {/* Protected Routes without NavWrapper */}
          <Route >
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/products" element={< Products/>} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

