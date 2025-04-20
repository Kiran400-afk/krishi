import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const HeroSection = () => {
  const { language } = useTheme();

  return (
    <div className="relative h-[95vh] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-green-900/60 z-10"></div>
      <img 
        src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="Karnataka farm" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center z-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl animate-fadeIn">
          {language === 'en' 
            ? 'Empowering Karnataka Farmers with Technology' 
            : 'ತಂತ್ರಜ್ಞಾನದ ಮೂಲಕ ಕರ್ನಾಟಕದ ರೈತರನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸುವುದು'}
        </h1>
        <p className="text-xl text-white/90 mb-10 max-w-2xl">
          {language === 'en' 
            ? 'Your AI-powered companion for soil analysis, crop recommendations, disease detection, and government schemes.' 
            : 'ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆ, ಬೆಳೆ ಶಿಫಾರಸುಗಳು, ರೋಗ ಪತ್ತೆ ಮತ್ತು ಸರ್ಕಾರಿ ಯೋಜನೆಗಳಿಗಾಗಿ ನಿಮ್ಮ AI-ಆಧಾರಿತ ಸಂಗಾತಿ.'}
        </p>
        
        {/* Search bar */}
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-2 mb-12">
          <div className="flex flex-col sm:flex-row">
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder={language === 'en' ? "Search crops, schemes, or ask a question..." : "ಬೆಳೆಗಳು, ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ ಅಥವಾ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ..."}
                className="w-full p-3 pl-10 border-0 focus:ring-0 rounded-lg"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <select className="p-3 border-0 border-l sm:border-l bg-transparent text-gray-600 focus:ring-0 my-2 sm:my-0">
              <option value="all">{language === 'en' ? 'All Categories' : 'ಎಲ್ಲಾ ವರ್ಗಗಳು'}</option>
              <option value="crops">{language === 'en' ? 'Crops' : 'ಬೆಳೆಗಳು'}</option>
              <option value="schemes">{language === 'en' ? 'Schemes' : 'ಯೋಜನೆಗಳು'}</option>
              <option value="weather">{language === 'en' ? 'Weather' : 'ಹವಾಮಾನ'}</option>
            </select>
            <button className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              {language === 'en' ? 'Search' : 'ಹುಡುಕಿ'}
            </button>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-white">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold">30+</p>
            <p className="text-sm md:text-base mt-2 text-gray-200">{language === 'en' ? 'Districts Covered' : 'ಜಿಲ್ಲೆಗಳು'}</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold">100+</p>
            <p className="text-sm md:text-base mt-2 text-gray-200">{language === 'en' ? 'Crop Varieties' : 'ಬೆಳೆ ವಿಧಗಳು'}</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold">50+</p>
            <p className="text-sm md:text-base mt-2 text-gray-200">{language === 'en' ? 'Govt. Schemes' : 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು'}</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold">24/7</p>
            <p className="text-sm md:text-base mt-2 text-gray-200">{language === 'en' ? 'AI Support' : 'AI ಬೆಂಬಲ'}</p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white" size={32} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;