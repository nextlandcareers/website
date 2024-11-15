import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import ClientsScreen from "./screens/clientsScreen/ClientsScreen";
import JobsScreen from "./screens/jobsScreen/JobsScreen";
import AboutScreen from "./screens/aboutScreen/AboutScreen";
import ServicesScreen from "./screens/servicesScreen/ServicesScreen";
import ContactScreen from "./screens/contactScreen/ContactScreen";
import PrivacyPolicyScreen from "./screens/privacyPolicy/PrivacyPolicyScreen";
import TermsAndConditionsScreen from "./screens/termsAndConditions/TermsAndConditionsScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/clients" element={<ClientsScreen />} />
      <Route path="/jobs" element={<JobsScreen />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/services" element={<ServicesScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/privacy_policy" element={<PrivacyPolicyScreen />} />
      <Route path="/terms_and_conditions" element={<TermsAndConditionsScreen />} />
    </Routes>
  );
}

export default App;
