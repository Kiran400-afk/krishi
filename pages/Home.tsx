import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CloudRain, Scaling as Seedling, Sprout, BarChart3, FileText } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import FeatureCard from '../components/home/FeatureCard';
import HeroSection from '../components/home/HeroSection';
import NewsSection from '../components/home/NewsSection';
import LoginRegister from './LoginRegister';
import photo from '../img/photo.jpg';

const Home = () => {
  const { language } = useTheme();

  useEffect(() => {
    document.title = language === 'en' ? 'AgriVerseAI - Home' : 'AgriVerseAI - ಮುಖಪುಟ';
  }, [language]);

  const features = [
    {
      title: language === 'en' ? 'Soil Analysis' : 'ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆ',
      description: language === 'en' 
        ? 'Get detailed soil health analysis and crop recommendations based on your location.' 
        : 'ನಿಮ್ಮ ಸ್ಥಳದ ಆಧಾರದಲ್ಲಿ ವಿವರವಾದ ಮಣ್ಣಿನ ಆರೋಗ್ಯ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಬೆಳೆ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ.',
      icon: <Seedling className="w-10 h-10 text-green-700" />,
      path: '/soil-analysis'
    },
    {
      title: language === 'en' ? 'Disease Detection' : 'ರೋಗ ಪತ್ತೆ',
      description: language === 'en' 
        ? 'Upload images of your crops to detect diseases and get treatment recommendations.' 
        : 'ರೋಗಗಳನ್ನು ಪತ್ತೆಹಚ್ಚಲು ಮತ್ತು ಚಿಕಿತ್ಸಾ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಲು ನಿಮ್ಮ ಬೆಳೆಗಳ ಚಿತ್ರಗಳನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ.',
      icon: <Sprout className="w-10 h-10 text-green-700" />,
      path: '/disease-detection'
    },
    {
      title: language === 'en' ? 'Weather Forecast' : 'ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ',
      description: language === 'en' 
        ? 'Get hyperlocal weather forecasts and agricultural weather advisories.' 
        : 'ಸ್ಥಳೀಯ ಹವಾಮಾನ ಮುನ್ಸೂಚನೆಗಳು ಮತ್ತು ಕೃಷಿ ಹವಾಮಾನ ಸಲಹೆಗಳನ್ನು ಪಡೆಯಿರಿ.',
      icon: <CloudRain className="w-10 h-10 text-green-700" />,
      path: '/weather'
    },
    {
      title: language === 'en' ? 'Market Prices' : 'ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು',
      description: language === 'en' 
        ? 'Track live market prices and receive alerts for price changes of your crops.' 
        : 'ಲೈವ್ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ ಮತ್ತು ನಿಮ್ಮ ಬೆಳೆಗಳ ಬೆಲೆ ಬದಲಾವಣೆಗಳಿಗೆ ಎಚ್ಚರಿಕೆಗಳನ್ನು ಸ್ವೀಕರಿಸಿ.',
      icon: <BarChart3 className="w-10 h-10 text-green-700" />,
      path: '/market-prices'
    },
    {
      title: language === 'en' ? 'Government Schemes' : 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು',
      description: language === 'en' 
        ? 'Explore government schemes and check your eligibility with direct application links.' 
        : 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ ಮತ್ತು ನೇರ ಅಪ್ಲಿಕೇಶನ್ ಲಿಂಕ್‌ಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಅರ್ಹತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ.',
      icon: <FileText className="w-10 h-10 text-green-700" />,
      path: '/government-schemes'
    },
    {
      title: language === 'en' ? 'Karnataka Map' : 'ಕರ್ನಾಟಕ ನಕ್ಷೆ',
      description: language === 'en' 
        ? 'Explore interactive map showing weather, crop suitability, and agricultural patterns.' 
        : 'ಹವಾಮಾನ, ಬೆಳೆ ಸೂಕ್ತತೆ ಮತ್ತು ಕೃಷಿ ಮಾದರಿಗಳನ್ನು ತೋರಿಸುವ ಸಂವಾದಾತ್ಮಕ ನಕ್ಷೆಯನ್ನು ಅನ್ವೇಷಿಸಿ.',
      icon: <ArrowRight className="w-10 h-10 text-green-700" />,
      path: '/map'
    }
  ];

  return (
    <div>
      {/* Photo banner below navbar, full width, no extra white space */}
      <img
        src={photo}
        alt="Karnataka Agriculture Banner"
        className="w-full h-64 object-cover object-center m-0 p-0 border-b-4 border-green-700 shadow-md"
        style={{ display: 'block' }}
      />
      {/* Header image below navbar */}
      <div className="w-full flex justify-center bg-white border-b border-gray-200">
        <img src="/src/img/photo.jpg" alt="KSDA Header" className="w-full object-cover max-h-16" />
      </div>
      <HeroSection />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {language === 'en' ? 'Our Services' : 'ನಮ್ಮ ಸೇವೆಗಳು'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                path={feature.path}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                {language === 'en' ? 'Why KrishiConnect?' : 'ಏಕೆ ಕೃಷಿ ಕನೆಕ್ಟ್?'}
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-green-600 text-white rounded-full w-6 h-6 mr-3 flex-shrink-0 mt-1">1</span>
                  <p>
                    {language === 'en' 
                      ? "Accurate AI-powered recommendations tailored to Karnataka\'s agricultural conditions"
                      : 'ಕರ್ನಾಟಕದ ಕೃಷಿ ಪರಿಸ್ಥಿತಿಗಳಿಗೆ ಹೊಂದಿಕೊಳ್ಳುವಂತೆ ನಿಖರವಾದ AI-ಆಧಾರಿತ ಶಿಫಾರಸುಗಳು'}
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-green-600 text-white rounded-full w-6 h-6 mr-3 flex-shrink-0 mt-1">2</span>
                  <p>
                    {language === 'en' 
                      ? 'Real-time data and updates from government sources and agricultural markets'
                      : 'ಸರ್ಕಾರಿ ಮೂಲಗಳು ಮತ್ತು ಕೃಷಿ ಮಾರುಕಟ್ಟೆಗಳಿಂದ ರಿಯಲ್-ಟೈಮ್ ಡೇಟಾ ಮತ್ತು ಅಪ್ಡೇಟ್‌ಗಳು'}
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-green-600 text-white rounded-full w-6 h-6 mr-3 flex-shrink-0 mt-1">3</span>
                  <p>
                    {language === 'en' 
                      ? 'Bilingual support in English and Kannada for wider accessibility'
                      : 'ಹೆಚ್ಚಿನ ಪ್ರವೇಶಕ್ಕಾಗಿ ಇಂಗ್ಲಿಷ್ ಮತ್ತು ಕನ್ನಡದಲ್ಲಿ ದ್ವಿಭಾಷಾ ಬೆಂಬಲ'}
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-green-600 text-white rounded-full w-6 h-6 mr-3 flex-shrink-0 mt-1">4</span>
                  <p>
                    {language === 'en' 
                      ? 'Voice-enabled interactions for farmers who prefer speaking over typing'
                      : 'ಟೈಪ್ ಮಾಡುವ ಬದಲು ಮಾತನಾಡಲು ಇಷ್ಟಪಡುವ ರೈತರಿಗೆ ಧ್ವನಿ-ಸಕ್ರಿಯಗೊಳಿಸಿದ ಸಂವಹನಗಳು'}
                  </p>
                </li>
              </ul>
              <div className="mt-8">
                <Link 
                  to="/map" 
                  className="inline-flex items-center px-5 py-3 bg-green-700 text-white rounded-md font-medium hover:bg-green-800 transition-colors"
                >
                  {language === 'en' ? 'Explore Interactive Map' : 'ಸಂವಾದಾತ್ಮಕ ನಕ್ಷೆಯನ್ನು ಅನ್ವೇಷಿಸಿ'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Farmer using technology" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <LoginRegister />

      <NewsSection />
    </div>
  );
};

export default Home;