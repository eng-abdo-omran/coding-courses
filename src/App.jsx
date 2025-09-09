import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import CourseDetails from "./pages/CourseDetails";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";

import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/useAuth";
import ScrollToTopButton from "./components/ScrollToTopButton";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Login />;
};

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarFooter = ["/login", "/register"].includes(location.pathname);

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      {children}
      {!hideNavbarFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout/:id" element={<Checkout />} />
        </Routes>
        <ScrollToTopButton />
      </Layout>
    </AuthProvider>
  );
}

export default App;
