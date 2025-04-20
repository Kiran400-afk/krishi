import React from 'react';
import { Calendar, User } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const NewsSection = () => {
  const { language } = useTheme();

  const news = [
    {
      id: 1,
      title: {
        en: 'New Subsidy for Organic Farming Announced',
        kn: 'ಸಾವಯವ ಕೃಷಿಗೆ ಹೊಸ ಸಬ್ಸಿಡಿ ಘೋಷಿಸಲಾಗಿದೆ'
      },
      summary: {
        en: 'The government has announced a new subsidy scheme to promote organic farming practices across Karnataka.',
        kn: 'ಕರ್ನಾಟಕದಾದ್ಯಂತ ಸಾವಯವ ಕೃಷಿ ಪದ್ಧತಿಗಳನ್ನು ಉತ್ತೇಜಿಸಲು ಸರ್ಕಾರವು ಹೊಸ ಸಬ್ಸಿಡಿ ಯೋಜನೆಯನ್ನು ಘೋಷಿಸಿದೆ.'
      },
      date: '2025-04-10',
      author: 'Dept. of Agriculture',
      image: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      title: {
        en: 'Monsoon Forecast Released for Karnataka',
        kn: 'ಕರ್ನಾಟಕಕ್ಕೆ ಮುಂಗಾರು ಮುನ್ಸೂಚನೆ ಬಿಡುಗಡೆ'
      },
      summary: {
        en: 'The meteorological department has released its monsoon forecast for the upcoming season with regional breakdowns.',
        kn: 'ಹವಾಮಾನ ಇಲಾಖೆಯು ಪ್ರಾದೇಶಿಕ ವಿಶ್ಲೇಷಣೆಯೊಂದಿಗೆ ಮುಂಬರುವ ಋತುವಿಗೆ ತನ್ನ ಮುಂಗಾರು ಮುನ್ಸೂಚನೆಯನ್ನು ಬಿಡುಗಡೆ ಮಾಡಿದೆ.'
      },
      date: '2025-04-05',
      author: 'Meteorological Center',
      image: 'https://images.pexels.com/photos/2527562/pexels-photo-2527562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      title: {
        en: 'Record Crop Production Expected This Year',
        kn: 'ಈ ವರ್ಷ ದಾಖಲೆಯ ಬೆಳೆ ಉತ್ಪಾದನೆ ನಿರೀಕ್ಷೆ'
      },
      summary: {
        en: 'With favorable weather conditions and improved agricultural practices, Karnataka is expected to see record crop yields this year.',
        kn: 'ಅನುಕೂಲಕರ ಹವಾಮಾನ ಪರಿಸ್ಥಿತಿಗಳು ಮತ್ತು ಸುಧಾರಿತ ಕೃಷಿ ಪದ್ಧತಿಗಳೊಂದಿಗೆ, ಕರ್ನಾಟಕವು ಈ ವರ್ಷ ದಾಖಲೆಯ ಬೆಳೆ ಇಳುವರಿಯನ್ನು ಕಾಣುವ ನಿರೀಕ್ಷೆಯಿದೆ.'
      },
      date: '2025-03-28',
      author: 'Ministry of Agriculture',
      image: 'https://images.pexels.com/photos/1483880/pexels-photo-1483880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          {language === 'en' ? 'Latest Agricultural News' : 'ಇತ್ತೀಚಿನ ಕೃಷಿ ಸುದ್ದಿ'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={language === 'en' ? item.title.en : item.title.kn} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{new Date(item.date).toLocaleDateString(language === 'en' ? 'en-US' : 'kn')}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    <span>{item.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'en' ? item.title.en : item.title.kn}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === 'en' ? item.summary.en : item.summary.kn}
                </p>
                <a 
                  href="#" 
                  className="text-green-700 font-medium hover:text-green-800"
                >
                  {language === 'en' ? 'Read More' : 'ಮತ್ತಷ್ಟು ಓದಿ'} →
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="inline-block px-6 py-3 border-2 border-green-700 text-green-700 font-medium rounded-md hover:bg-green-700 hover:text-white transition-colors">
            {language === 'en' ? 'View All News' : 'ಎಲ್ಲಾ ಸುದ್ದಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;