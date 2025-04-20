import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { MapPin, Filter, Cloud, Droplets, Sun, Wind } from 'lucide-react';
import KarnatakaMap from '../components/KarnatakaMap';

const MapAnalysis = () => {
  const { language } = useTheme();
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [filter, setFilter] = useState('weather'); // weather, crops, soil

  useEffect(() => {
    document.title = language === 'en' ? 'KrishiConnect - Map Analysis' : 'ಕೃಷಿ ಕನೆಕ್ಟ್ - ನಕ್ಷೆ ವಿಶ್ಲೇಷಣೆ';
  }, [language]);

  const handleDistrictClick = (district: string) => {
    setSelectedDistrict(district);
  };

  const districts = [
    { id: 1, name: { en: 'Bangalore Urban', kn: 'ಬೆಂಗಳೂರು ನಗರ' }, weather: 'Sunny', rainfall: '4mm', humidity: '65%', crops: ['Ragi', 'Vegetables', 'Flowers'] },
    { id: 2, name: { en: 'Mysore', kn: 'ಮೈಸೂರು' }, weather: 'Partly Cloudy', rainfall: '2mm', humidity: '60%', crops: ['Rice', 'Sugarcane', 'Cotton'] },
    { id: 3, name: { en: 'Belgaum', kn: 'ಬೆಳಗಾವಿ' }, weather: 'Cloudy', rainfall: '8mm', humidity: '75%', crops: ['Jowar', 'Sugarcane', 'Tobacco'] },
    { id: 4, name: { en: 'Mangalore', kn: 'ಮಂಗಳೂರು' }, weather: 'Rainy', rainfall: '12mm', humidity: '90%', crops: ['Rice', 'Coconut', 'Arecanut'] },
    { id: 5, name: { en: 'Bellary', kn: 'ಬಳ್ಳಾರಿ' }, weather: 'Sunny', rainfall: '0mm', humidity: '45%', crops: ['Cotton', 'Jowar', 'Sunflower'] }
  ];

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          {language === 'en' ? 'Karnataka Agricultural Map Analysis' : 'ಕರ್ನಾಟಕ ಕೃಷಿ ನಕ್ಷೆ ವಿಶ್ಲೇಷಣೆ'}
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold mb-2">
                {language === 'en' ? 'Interactive Map' : 'ಸಂವಾದಾತ್ಮಕ ನಕ್ಷೆ'}
              </h2>
              <p className="text-gray-600">
                {language === 'en' 
                  ? 'Explore Karnataka\'s agricultural data by district' 
                  : 'ಜಿಲ್ಲೆವಾರು ಕರ್ನಾಟಕದ ಕೃಷಿ ಮಾಹಿತಿಯನ್ನು ಅನ್ವೇಷಿಸಿ'}
              </p>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={() => setFilter('weather')} 
                className={`px-4 py-2 rounded-md flex items-center ${filter === 'weather' ? 'bg-green-700 text-white' : 'bg-gray-100'}`}
              >
                <Cloud size={16} className="mr-2" />
                {language === 'en' ? 'Weather' : 'ಹವಾಮಾನ'}
              </button>
              <button 
                onClick={() => setFilter('crops')} 
                className={`px-4 py-2 rounded-md flex items-center ${filter === 'crops' ? 'bg-green-700 text-white' : 'bg-gray-100'}`}
              >
                <Filter size={16} className="mr-2" />
                {language === 'en' ? 'Crops' : 'ಬೆಳೆಗಳು'}
              </button>
              <button 
                onClick={() => setFilter('soil')} 
                className={`px-4 py-2 rounded-md flex items-center ${filter === 'soil' ? 'bg-green-700 text-white' : 'bg-gray-100'}`}
              >
                <MapPin size={16} className="mr-2" />
                {language === 'en' ? 'Soil' : 'ಮಣ್ಣು'}
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3 relative">
              <KarnatakaMap />
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                {districts.map((district) => (
                  <button
                    key={district.id}
                    className={`p-2 text-sm rounded-md transition-colors ${
                      selectedDistrict === district.name.en
                        ? 'bg-green-700 text-white'
                        : 'bg-white border border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => handleDistrictClick(district.name.en)}
                  >
                    {language === 'en' ? district.name.en : district.name.kn}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:w-1/3">
              {selectedDistrict ? (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {language === 'en' 
                      ? selectedDistrict 
                      : districts.find(d => d.name.en === selectedDistrict)?.name.kn}
                  </h3>
                  
                  {filter === 'weather' && (
                    <div>
                      <h4 className="font-medium mb-3 text-gray-700">
                        {language === 'en' ? 'Weather Information' : 'ಹವಾಮಾನ ಮಾಹಿತಿ'}
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Cloud className="w-5 h-5 mr-3 text-blue-500" />
                          <span className="text-gray-700 font-medium">
                            {language === 'en' ? 'Condition:' : 'ಸ್ಥಿತಿ:'} 
                          </span>
                          <span className="ml-2">
                            {districts.find(d => d.name.en === selectedDistrict)?.weather}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Droplets className="w-5 h-5 mr-3 text-blue-500" />
                          <span className="text-gray-700 font-medium">
                            {language === 'en' ? 'Rainfall:' : 'ಮಳೆ:'}
                          </span>
                          <span className="ml-2">
                            {districts.find(d => d.name.en === selectedDistrict)?.rainfall}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Wind className="w-5 h-5 mr-3 text-blue-500" />
                          <span className="text-gray-700 font-medium">
                            {language === 'en' ? 'Humidity:' : 'ತೇವಾಂಶ:'}
                          </span>
                          <span className="ml-2">
                            {districts.find(d => d.name.en === selectedDistrict)?.humidity}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {filter === 'crops' && (
                    <div>
                      <h4 className="font-medium mb-3 text-gray-700">
                        {language === 'en' ? 'Suitable Crops' : 'ಸೂಕ್ತ ಬೆಳೆಗಳು'}
                      </h4>
                      <ul className="space-y-2">
                        {districts.find(d => d.name.en === selectedDistrict)?.crops.map((crop, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                            {crop}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
                        <h5 className="font-medium text-green-800 mb-1">
                          {language === 'en' ? 'Recommended Action' : 'ಶಿಫಾರಸು ಮಾಡಲಾದ ಕ್ರಮ'}
                        </h5>
                        <p className="text-green-700 text-sm">
                          {language === 'en'
                            ? 'Current conditions are optimal for planting. Consider soil preparation for the upcoming season.'
                            : 'ಪ್ರಸ್ತುತ ಪರಿಸ್ಥಿತಿಗಳು ನೆಡುವುದಕ್ಕೆ ಸೂಕ್ತವಾಗಿವೆ. ಮುಂಬರುವ ಋತುವಿಗೆ ಮಣ್ಣಿನ ತಯಾರಿಯನ್ನು ಪರಿಗಣಿಸಿ.'}
                        </p>
                      </div>
                    </div>
                  )}

                  {filter === 'soil' && (
                    <div>
                      <h4 className="font-medium mb-3 text-gray-700">
                        {language === 'en' ? 'Soil Information' : 'ಮಣ್ಣಿನ ಮಾಹಿತಿ'}
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <span className="block text-gray-700 font-medium mb-1">
                            {language === 'en' ? 'Soil Type:' : 'ಮಣ್ಣಿನ ಪ್ರಕಾರ:'}
                          </span>
                          <div className="h-2 w-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"></div>
                          <div className="flex justify-between text-xs mt-1">
                            <span>{language === 'en' ? 'Red Soil' : 'ಕೆಂಪು ಮಣ್ಣು'}</span>
                            <span>{language === 'en' ? 'Black Soil' : 'ಕಪ್ಪು ಮಣ್ಣು'}</span>
                            <span>{language === 'en' ? 'Alluvial' : 'ಒಂದಾವಣಿ'}</span>
                          </div>
                        </div>
                        <div>
                          <span className="block text-gray-700 font-medium mb-1">
                            {language === 'en' ? 'pH Level:' : 'pH ಮಟ್ಟ:'}
                          </span>
                          <span className="text-lg">6.8</span>
                          <span className="text-gray-500 ml-2">
                            {language === 'en' ? '(Slightly Acidic)' : '(ಸ್ವಲ್ಪ ಆಮ್ಲೀಯ)'}
                          </span>
                        </div>
                        <div>
                          <span className="block text-gray-700 font-medium mb-1">
                            {language === 'en' ? 'Nutrient Status:' : 'ಪೋಷಕಾಂಶ ಸ್ಥಿತಿ:'}
                          </span>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="text-center p-2 bg-gray-100 rounded">
                              <span className="block font-medium">N</span>
                              <span className="text-red-500">Low</span>
                            </div>
                            <div className="text-center p-2 bg-gray-100 rounded">
                              <span className="block font-medium">P</span>
                              <span className="text-yellow-500">Medium</span>
                            </div>
                            <div className="text-center p-2 bg-gray-100 rounded">
                              <span className="block font-medium">K</span>
                              <span className="text-green-500">High</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center justify-center h-full">
                  <MapPin className="w-12 h-12 text-gray-400 mb-4" />
                  <p className="text-gray-500 text-center">
                    {language === 'en' 
                      ? 'Select a district on the map to view detailed information' 
                      : 'ವಿವರವಾದ ಮಾಹಿತಿಯನ್ನು ವೀಕ್ಷಿಸಲು ನಕ್ಷೆಯಲ್ಲಿ ಜಿಲ್ಲೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            {language === 'en' ? 'Map Legend' : 'ನಕ್ಷೆ ಲೆಜೆಂಡ್'}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 bg-red-500 rounded-full mb-2"></div>
              <span className="text-sm text-center">
                {language === 'en' ? 'High Risk Area' : 'ಅಧಿಕ ಅಪಾಯದ ಪ್ರದೇಶ'}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 bg-yellow-500 rounded-full mb-2"></div>
              <span className="text-sm text-center">
                {language === 'en' ? 'Medium Risk Area' : 'ಮಧ್ಯಮ ಅಪಾಯದ ಪ್ರದೇಶ'}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 bg-green-500 rounded-full mb-2"></div>
              <span className="text-sm text-center">
                {language === 'en' ? 'Low Risk Area' : 'ಕಡಿಮೆ ಅಪಾಯದ ಪ್ರದೇಶ'}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 bg-blue-500 rounded-full mb-2"></div>
              <span className="text-sm text-center">
                {language === 'en' ? 'Water Bodies' : 'ಜಲಮೂಲಗಳು'}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 bg-purple-500 rounded-full mb-2"></div>
              <span className="text-sm text-center">
                {language === 'en' ? 'Heavy Rainfall' : 'ಭಾರೀ ಮಳೆ'}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 bg-orange-500 rounded-full mb-2"></div>
              <span className="text-sm text-center">
                {language === 'en' ? 'Drought Prone' : 'ಬರ ಪೀಡಿತ'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapAnalysis;