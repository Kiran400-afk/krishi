import React, { useState, useEffect } from 'react';
import { Cloud, Droplets, Wind, Thermometer, CloudRain, Sun, CloudSnow, Umbrella, Calendar, Clock, Leaf } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Weather = () => {
  const { language } = useTheme();
  const [activeTab, setActiveTab] = useState('current');
  const [selectedLocation, setSelectedLocation] = useState('bangalore');
  
  useEffect(() => {
    document.title = language === 'en' ? 'KrishiConnect - Weather Forecast' : 'ಕೃಷಿ ಕನೆಕ್ಟ್ - ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ';
  }, [language]);

  const locations = [
    { value: 'bangalore', label: { en: 'Bangalore', kn: 'ಬೆಂಗಳೂರು' } },
    { value: 'mysore', label: { en: 'Mysore', kn: 'ಮೈಸೂರು' } },
    { value: 'belgaum', label: { en: 'Belgaum', kn: 'ಬೆಳಗಾವಿ' } },
    { value: 'mangalore', label: { en: 'Mangalore', kn: 'ಮಂಗಳೂರು' } },
    { value: 'bellary', label: { en: 'Bellary', kn: 'ಬಳ್ಳಾರಿ' } }
  ];

  // Mock weather data
  const weatherData = {
    current: {
      location: 'bangalore',
      temperature: 28,
      condition: { en: 'Partly Cloudy', kn: 'ಭಾಗಶಃ ಮೋಡ' },
      icon: <Cloud />,
      humidity: 65,
      windSpeed: 12,
      windDirection: 'NE',
      rainChance: 20,
      lastUpdated: '10:15 AM'
    },
    hourly: [
      { time: '11:00', temp: 29, icon: <Sun />, rainChance: 10 },
      { time: '12:00', temp: 30, icon: <Sun />, rainChance: 10 },
      { time: '13:00', temp: 31, icon: <Sun />, rainChance: 15 },
      { time: '14:00', temp: 32, icon: <Cloud />, rainChance: 20 },
      { time: '15:00', temp: 31, icon: <Cloud />, rainChance: 30 },
      { time: '16:00', temp: 30, icon: <CloudRain />, rainChance: 40 },
      { time: '17:00', temp: 28, icon: <CloudRain />, rainChance: 45 },
      { time: '18:00', temp: 27, icon: <Cloud />, rainChance: 30 },
    ],
    daily: [
      { day: { en: 'Today', kn: 'ಇಂದು' }, high: 32, low: 24, icon: <Cloud />, rainChance: 30 },
      { day: { en: 'Tomorrow', kn: 'ನಾಳೆ' }, high: 31, low: 23, icon: <CloudRain />, rainChance: 60 },
      { day: { en: 'Wednesday', kn: 'ಬುಧವಾರ' }, high: 29, low: 22, icon: <CloudRain />, rainChance: 70 },
      { day: { en: 'Thursday', kn: 'ಗುರುವಾರ' }, high: 28, low: 21, icon: <CloudRain />, rainChance: 50 },
      { day: { en: 'Friday', kn: 'ಶುಕ್ರವಾರ' }, high: 30, low: 22, icon: <Cloud />, rainChance: 30 },
      { day: { en: 'Saturday', kn: 'ಶನಿವಾರ' }, high: 31, low: 23, icon: <Sun />, rainChance: 10 },
      { day: { en: 'Sunday', kn: 'ಭಾನುವಾರ' }, high: 32, low: 24, icon: <Sun />, rainChance: 5 },
    ],
    agricultural: [
      {
        title: { en: 'Rainfall Forecast', kn: 'ಮಳೆ ಮುನ್ಸೂಚನೆ' },
        content: { 
          en: 'Expected 25-30mm rainfall in next 3 days. Plan harvesting activities accordingly.', 
          kn: 'ಮುಂದಿನ 3 ದಿನಗಳಲ್ಲಿ 25-30ಮಿಮೀ ಮಳೆ ನಿರೀಕ್ಷೆ. ಅದರಂತೆ ಕೊಯ್ಲು ಚಟುವಟಿಕೆಗಳನ್ನು ಯೋಜಿಸಿ.' 
        },
        icon: <CloudRain className="text-blue-500" />
      },
      {
        title: { en: 'Humidity Advice', kn: 'ಆರ್ದ್ರತೆ ಸಲಹೆ' },
        content: { 
          en: 'High humidity may increase fungal disease risk. Monitor crops closely and apply preventive sprays if needed.', 
          kn: 'ಹೆಚ್ಚಿನ ಆರ್ದ್ರತೆಯು ಶಿಲೀಂಧ್ರ ರೋಗದ ಅಪಾಯವನ್ನು ಹೆಚ್ಚಿಸಬಹುದು. ಬೆಳೆಗಳನ್ನು ನಿಕಟವಾಗಿ ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ ಮತ್ತು ಅಗತ್ಯವಿದ್ದರೆ ತಡೆಗಟ್ಟುವ ಸಿಂಪರಣೆಗಳನ್ನು ಹಾಕಿ.' 
        },
        icon: <Droplets className="text-blue-500" />
      },
      {
        title: { en: 'Wind Advisory', kn: 'ಗಾಳಿ ಸಲಹೆ' },
        content: { 
          en: 'Moderate winds expected. Not suitable for spraying operations in the afternoon.', 
          kn: 'ಮಧ್ಯಮ ಗಾಳಿಗಳು ನಿರೀಕ್ಷಿತವಾಗಿವೆ. ಮಧ್ಯಾಹ್ನದಲ್ಲಿ ಸಿಂಪರಣೆ ಕಾರ್ಯಾಚರಣೆಗಳಿಗೆ ಸೂಕ್ತವಲ್ಲ.' 
        },
        icon: <Wind className="text-blue-500" />
      },
      {
        title: { en: 'Crop Protection', kn: 'ಬೆಳೆ ರಕ್ಷಣೆ' },
        content: { 
          en: 'Cover young seedlings if heavy rainfall occurs. Ensure proper drainage in fields.', 
          kn: 'ಭಾರೀ ಮಳೆಯಾದರೆ ಯುವ ಸಸಿಗಳನ್ನು ಮುಚ್ಚಿ. ಹೊಲಗಳಲ್ಲಿ ಸರಿಯಾದ ಒಳಚರಂಡಿಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.' 
        },
        icon: <Umbrella className="text-blue-500" />
      }
    ]
  };

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          {language === 'en' ? 'Agricultural Weather Forecast' : 'ಕೃಷಿ ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ'}
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between mb-6">
            <div className="mb-4 sm:mb-0">
              <label htmlFor="location" className="block mb-2 font-medium text-gray-700">
                {language === 'en' ? 'Select Location' : 'ಸ್ಥಳವನ್ನು ಆಯ್ಕೆಮಾಡಿ'}
              </label>
              <select
                id="location"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full sm:w-64 p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              >
                {locations.map((location) => (
                  <option key={location.value} value={location.value}>
                    {language === 'en' ? location.label.en : location.label.kn}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center">
              <p className="text-gray-500 text-sm flex items-center">
                <Clock size={16} className="mr-1" />
                {language === 'en' ? 'Last updated: ' : 'ಕೊನೆಯದಾಗಿ ನವೀಕರಿಸಲಾಗಿದೆ: '}
                {weatherData.current.lastUpdated}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap border-b">
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === 'current'
                  ? 'text-green-700 border-b-2 border-green-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('current')}
            >
              {language === 'en' ? 'Current' : 'ಪ್ರಸ್ತುತ'}
            </button>
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === 'hourly'
                  ? 'text-green-700 border-b-2 border-green-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('hourly')}
            >
              {language === 'en' ? 'Hourly' : 'ಗಂಟೆಗೊಮ್ಮೆ'}
            </button>
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === 'daily'
                  ? 'text-green-700 border-b-2 border-green-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('daily')}
            >
              {language === 'en' ? 'Daily' : 'ದಿನಂಪ್ರತಿ'}
            </button>
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === 'agricultural'
                  ? 'text-green-700 border-b-2 border-green-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('agricultural')}
            >
              {language === 'en' ? 'Agricultural' : 'ಕೃಷಿ'}
            </button>
          </div>

          <div className="py-6">
            {activeTab === 'current' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl text-green-600 mb-4">
                      {weatherData.current.icon}
                    </div>
                    <h2 className="text-4xl font-bold mb-2">
                      {weatherData.current.temperature}°C
                    </h2>
                    <p className="text-xl text-gray-600 mb-1">
                      {language === 'en' ? weatherData.current.condition.en : weatherData.current.condition.kn}
                    </p>
                    <p className="text-gray-500">
                      {language === 'en' 
                        ? `${locations.find(l => l.value === selectedLocation)?.label.en}, Karnataka` 
                        : `${locations.find(l => l.value === selectedLocation)?.label.kn}, ಕರ್ನಾಟಕ`}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg flex items-center">
                    <Droplets size={32} className="text-blue-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">
                        {language === 'en' ? 'Humidity' : 'ಆರ್ದ್ರತೆ'}
                      </p>
                      <p className="text-xl font-semibold">{weatherData.current.humidity}%</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg flex items-center">
                    <Wind size={32} className="text-blue-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">
                        {language === 'en' ? 'Wind' : 'ಗಾಳಿ'}
                      </p>
                      <p className="text-xl font-semibold">{weatherData.current.windSpeed} km/h</p>
                      <p className="text-xs text-gray-500">{weatherData.current.windDirection}</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg flex items-center">
                    <CloudRain size={32} className="text-blue-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">
                        {language === 'en' ? 'Rain Chance' : 'ಮಳೆ ಸಾಧ್ಯತೆ'}
                      </p>
                      <p className="text-xl font-semibold">{weatherData.current.rainChance}%</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg flex items-center">
                    <Thermometer size={32} className="text-blue-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">
                        {language === 'en' ? 'Feels Like' : 'ಹೀಗೆ ಭಾಸವಾಗುತ್ತದೆ'}
                      </p>
                      <p className="text-xl font-semibold">{weatherData.current.temperature + 2}°C</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'hourly' && (
              <div className="overflow-x-auto">
                <div className="inline-flex space-x-4 min-w-full pb-2">
                  {weatherData.hourly.map((hour, index) => (
                    <div key={index} className="w-24 flex-shrink-0 bg-white border rounded-lg p-3 text-center">
                      <p className="text-sm font-medium mb-2">{hour.time}</p>
                      <div className="text-3xl text-green-600 mb-2">
                        {hour.icon}
                      </div>
                      <p className="text-xl font-semibold mb-1">{hour.temp}°C</p>
                      <div className="flex items-center justify-center text-xs">
                        <CloudRain size={12} className="text-blue-500 mr-1" />
                        <span>{hour.rainChance}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'daily' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
                {weatherData.daily.map((day, index) => (
                  <div key={index} className="bg-white border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                    <p className="text-sm font-medium mb-2">
                      {language === 'en' ? day.day.en : day.day.kn}
                    </p>
                    <div className="text-3xl text-green-600 mb-3 flex justify-center">
                      {day.icon}
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <span>{language === 'en' ? 'Low' : 'ಕಡಿಮೆ'}</span>
                      <span>{language === 'en' ? 'High' : 'ಹೆಚ್ಚು'}</span>
                    </div>
                    <div className="flex justify-between font-semibold mb-3">
                      <span>{day.low}°</span>
                      <span>{day.high}°</span>
                    </div>
                    <div className="flex items-center justify-center text-sm">
                      <CloudRain size={14} className="text-blue-500 mr-1" />
                      <span>{day.rainChance}%</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'agricultural' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {weatherData.agricultural.map((item, index) => (
                  <div key={index} className="bg-green-50 rounded-lg p-4 flex">
                    <div className="text-3xl mr-4">{item.icon}</div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">
                        {language === 'en' ? item.title.en : item.title.kn}
                      </h3>
                      <p className="text-gray-700">
                        {language === 'en' ? item.content.en : item.content.kn}
                      </p>
                    </div>
                  </div>
                ))}
                
                {/* Crop calendar */}
                <div className="md:col-span-2 mt-4">
                  <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-4 flex items-center">
                      <Calendar size={20} className="mr-2 text-green-600" />
                      {language === 'en' ? 'Seasonal Crop Calendar' : 'ಋತುವಿನ ಬೆಳೆ ಕ್ಯಾಲೆಂಡರ್'}
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase">
                              {language === 'en' ? 'Crop' : 'ಬೆಳೆ'}
                            </th>
                            <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase">
                              {language === 'en' ? 'Sowing' : 'ಬಿತ್ತನೆ'}
                            </th>
                            <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase">
                              {language === 'en' ? 'Harvesting' : 'ಕೊಯ್ಲು'}
                            </th>
                            <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase">
                              {language === 'en' ? 'Weather Advisory' : 'ಹವಾಮಾನ ಸಲಹೆ'}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr>
                            <td className="py-3 px-3 flex items-center">
                              <Leaf size={16} className="mr-2 text-green-600" />
                              <span>{language === 'en' ? 'Rice' : 'ಭತ್ತ'}</span>
                            </td>
                            <td className="py-3 px-3">
                              {language === 'en' ? 'June - July' : 'ಜೂನ್ - ಜುಲೈ'}
                            </td>
                            <td className="py-3 px-3">
                              {language === 'en' ? 'November - December' : 'ನವೆಂಬರ್ - ಡಿಸೆಂಬರ್'}
                            </td>
                            <td className="py-3 px-3 text-blue-600">
                              {language === 'en' ? 'Suitable conditions expected' : 'ಸೂಕ್ತ ಪರಿಸ್ಥಿತಿಗಳು ನಿರೀಕ್ಷಿತವಾಗಿವೆ'}
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-3 flex items-center">
                              <Leaf size={16} className="mr-2 text-green-600" />
                              <span>{language === 'en' ? 'Ragi' : 'ರಾಗಿ'}</span>
                            </td>
                            <td className="py-3 px-3">
                              {language === 'en' ? 'July - August' : 'ಜುಲೈ - ಆಗಸ್ಟ್'}
                            </td>
                            <td className="py-3 px-3">
                              {language === 'en' ? 'November - December' : 'ನವೆಂಬರ್ - ಡಿಸೆಂಬರ್'}
                            </td>
                            <td className="py-3 px-3 text-orange-600">
                              {language === 'en' ? 'Delay sowing by one week' : 'ಒಂದು ವಾರ ಬಿತ್ತನೆಯನ್ನು ವಿಳಂಬ ಮಾಡಿ'}
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-3 flex items-center">
                              <Leaf size={16} className="mr-2 text-green-600" />
                              <span>{language === 'en' ? 'Maize' : 'ಮೆಕ್ಕೆಜೋಳ'}</span>
                            </td>
                            <td className="py-3 px-3">
                              {language === 'en' ? 'May - June' : 'ಮೇ - ಜೂನ್'}
                            </td>
                            <td className="py-3 px-3">
                              {language === 'en' ? 'August - September' : 'ಆಗಸ್ಟ್ - ಸೆಪ್ಟೆಂಬರ್'}
                            </td>
                            <td className="py-3 px-3 text-red-600">
                              {language === 'en' ? 'Monitor for pest activity' : 'ಕೀಟದ ಚಟುವಟಿಕೆಯನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ'}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            {language === 'en' ? 'Weather Alerts & Notifications' : 'ಹವಾಮಾನ ಎಚ್ಚರಿಕೆಗಳು & ಅಧಿಸೂಚನೆಗಳು'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex">
                <div className="mr-4 text-3xl text-yellow-500">⚠️</div>
                <div>
                  <h3 className="font-medium text-yellow-800 mb-1">
                    {language === 'en' ? 'Heavy Rainfall Alert' : 'ಭಾರೀ ಮಳೆ ಎಚ್ಚರಿಕೆ'}
                  </h3>
                  <p className="text-yellow-700 text-sm">
                    {language === 'en' 
                      ? 'Heavy rainfall expected in coastal districts on Wednesday. Take precautionary measures for crop protection.' 
                      : 'ಬುಧವಾರದಂದು ಕರಾವಳಿ ಜಿಲ್ಲೆಗಳಲ್ಲಿ ಭಾರೀ ಮಳೆ ನಿರೀಕ್ಷೆ. ಬೆಳೆ ರಕ್ಷಣೆಗೆ ಮುನ್ನೆಚ್ಚರಿಕೆ ಕ್ರಮಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ.'}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex">
                <div className="mr-4 text-3xl text-blue-500">💧</div>
                <div>
                  <h3 className="font-medium text-blue-800 mb-1">
                    {language === 'en' ? 'Irrigation Advisory' : 'ನೀರಾವರಿ ಸಲಹೆ'}
                  </h3>
                  <p className="text-blue-700 text-sm">
                    {language === 'en' 
                      ? 'Reduce irrigation for crops in northern districts due to expected rainfall in the coming days.' 
                      : 'ಮುಂದಿನ ದಿನಗಳಲ್ಲಿ ನಿರೀಕ್ಷಿತ ಮಳೆಯಿಂದಾಗಿ ಉತ್ತರ ಜಿಲ್ಲೆಗಳಲ್ಲಿ ಬೆಳೆಗಳಿಗೆ ನೀರಾವರಿ ಕಡಿಮೆ ಮಾಡಿ.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <button className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors">
              {language === 'en' ? 'Set Weather Alerts' : 'ಹವಾಮಾನ ಎಚ್ಚರಿಕೆಗಳನ್ನು ಹೊಂದಿಸಿ'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;