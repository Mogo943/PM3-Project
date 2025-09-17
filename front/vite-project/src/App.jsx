import HomeView from "./views/homeview/HomeView"
import AppointmentsView from "./views/appointmentsview/AppointmentsView"
import ContactUsView from "./views/contactusview/ContactUsView";
import AboutUsView from "./views/aboutusview/AboutUsView";
import Login from "./views/login/Login";
import Register from "./views/register/Register";

import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import { Routes, Route } from "react-router-dom";
import AppointmentForm from "./components/appointmentForm/AppointmentForm";
import ErrorView from "./views/errorview/ErrorView";

function App() {
  return (
    <div className="app">
      <header>
        <NavBar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomeView/>}/>
          <Route path="/appointments" element={<AppointmentsView/>}/>
          <Route path="/appointments/set-appointment" element={<AppointmentForm/>}/>
          <Route path="/contactUs" element={<ContactUsView/>}/>
          <Route path="/aboutUs" element={<AboutUsView/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="*" element={<ErrorView/>}/>
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
