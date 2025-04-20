import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode, language, setLanguage } = useTheme();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: language === 'en' ? 'Home' : 'ಮುಖಪುಟ', path: '/' },
    { name: language === 'en' ? 'Map Analysis' : 'ನಕ್ಷೆ ವಿಶ್ಲೇಷಣೆ', path: '/map' },
    { name: language === 'en' ? 'Soil Analysis' : 'ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆ', path: '/soil-analysis' },
    { name: language === 'en' ? 'Disease Detection' : 'ರೋಗ ಪತ್ತೆ', path: '/disease-detection' },
    { name: language === 'en' ? 'Govt. Schemes' : 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು', path: '/government-schemes' },
    { name: language === 'en' ? 'Market Prices' : 'ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು', path: '/market-prices' },
    { name: language === 'en' ? 'Weather' : 'ಹವಾಮಾನ', path: '/weather' },
  ];

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="text-green-700 text-2xl font-bold flex items-center">
            <span className="text-3xl mr-2">🌱</span>
            <span>AgriVerseAI</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-sm font-medium hover:text-green-700 transition-colors ${
                location.pathname === link.path ? 'text-green-700 font-semibold' : 'text-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'kn' : 'en')}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Toggle language"
          >
            <Globe size={20} />
          </button>
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-50 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out pt-20`}
      >
        <div className="flex flex-col space-y-4 p-4">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`py-2 px-4 rounded-md ${
                location.pathname === link.path ? 'bg-green-700 text-white' : 'text-gray-800'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex space-x-4 py-2 px-4">
            <button 
              onClick={() => setLanguage(language === 'en' ? 'kn' : 'en')}
              className="flex items-center space-x-2"
              aria-label="Toggle language"
            >
              <Globe size={20} />
              <span>{language === 'en' ? 'ಕನ್ನಡ' : 'English'}</span>
            </button>
            <button 
              onClick={toggleDarkMode} 
              className="flex items-center space-x-2"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              <span>{language === 'en' ? (darkMode ? 'Light Mode' : 'Dark Mode') : (darkMode ? 'ಬೆಳಕಿನ ಮೋಡ್' : 'ಡಾರ್ಕ್ ಮೋಡ್')}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;