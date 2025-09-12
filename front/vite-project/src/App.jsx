import HomeView from "./views/homeview/HomeView"
import AppointmentsView from "./views/appointmentsview/AppointmentsView"
import ContactUsView from "./views/contactusview/ContactUsView";
import AboutUsView from "./views/aboutusview/AboutUsView";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <NavBar/>
      {/* <HomeView/> */}
      <AppointmentsView/>
      {/* <ContactUsView/> */}
      {/* <AboutUsView/> */}
      <Footer/>
    </>
  )
}

export default App
