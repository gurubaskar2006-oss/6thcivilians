import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/sections/Navbar';
import Footer from './components/sections/Footer';
import WhatsAppWidget from './components/ui/WhatsAppWidget';
import ScrollToHashElement from './components/ui/ScrollToHashElement';
import Home from './pages/Home';
import CoursesPage from './pages/CoursesPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <div className="font-sans antialiased text-brand-charcoal dark:text-brand-parchmentLight">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>
        <Footer />
        <WhatsAppWidget />
      </div>
    </BrowserRouter>
  );
}

export default App;
