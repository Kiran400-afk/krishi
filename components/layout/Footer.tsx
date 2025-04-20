import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Footer = () => {
  const { language } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{language === 'en' ? 'KrishiConnect' : 'ಕೃಷಿ ಕನೆಕ್ಟ್'}</h3>
            <p className="mb-4 text-gray-300">
              {language === 'en' 
                ? 'Empowering Karnataka farmers with technology, information, and support.' 
                : 'ತಂತ್ರಜ್ಞಾನ, ಮಾಹಿತಿ ಮತ್ತು ಬೆಂಬಲದೊಂದಿಗೆ ಕರ್ನಾಟಕದ ರೈತರನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸುವುದು.'}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-300 transition-colors" aria-label="Github">
                <Github size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-300 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-300 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-300 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{language === 'en' ? 'Quick Links' : 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು'}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'en' ? 'Home' : 'ಮುಖಪುಟ'}
                </Link>
              </li>
              <li>
                <Link to="/soil-analysis" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'en' ? 'Soil Analysis' : 'ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆ'}
                </Link>
              </li>
              <li>
                <Link to="/disease-detection" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'en' ? 'Disease Detection' : 'ರೋಗ ಪತ್ತೆ'}
                </Link>
              </li>
              <li>
                <Link to="/government-schemes" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'en' ? 'Government Schemes' : 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು'}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{language === 'en' ? 'Government Links' : 'ಸರ್ಕಾರಿ ಲಿಂಕ್‌ಗಳು'}</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://raitamitra.karnataka.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'en' ? 'Raitha Mitra' : 'ರೈತ ಮಿತ್ರ'}
                </a>
              </li>
              <li>
                <a href="https://www.karnataka.gov.in/english" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'en' ? 'Karnataka Government' : 'ಕರ್ನಾಟಕ ಸರ್ಕಾರ'}
                </a>
              </li>
              <li>
                <a href="https://krishika.karnataka.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'en' ? 'Department of Agriculture' : 'ಕೃಷಿ ಇಲಾಖೆ'}
                </a>
              </li>
              <li>
                <a href="https://www.kisaanstore.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'en' ? 'Kisaan Store' : 'ಕಿಸಾನ್ ಸ್ಟೋರ್'}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{language === 'en' ? 'Contact Us' : 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ'}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>
                  {language === 'en' 
                    ? 'Department of Agriculture, MS Building, Bangalore, Karnataka - 560001' 
                    : 'ಕೃಷಿ ಇಲಾಖೆ, ಎಂಎಸ್ ಬಿಲ್ಡಿಂಗ್, ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ - 560001'}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} />
                <span>080-22222222</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} />
                <span>info@krishiconnect.karnataka.gov.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-green-700 text-center text-gray-300">
          <p>
            {language === 'en' 
              ? `© ${currentYear} KrishiConnect. All rights reserved. Government of Karnataka.` 
              : `© ${currentYear} ಕೃಷಿ ಕನೆಕ್ಟ್. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ. ಕರ್ನಾಟಕ ಸರ್ಕಾರ.`}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;