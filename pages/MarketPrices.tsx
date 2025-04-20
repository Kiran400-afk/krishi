import React, { useState, useEffect } from 'react';
import { Search, ArrowUp, ArrowDown, Bell, RefreshCw, Truck, Landmark, Clock, Map, TrendingUp, ArrowRight } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useTheme } from '../contexts/ThemeContext';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MarketPrices = () => {
  const { language } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCrop, setSelectedCrop] = useState<string | null>(null);
  const [selectedMarket, setSelectedMarket] = useState<string | null>(null);
  
  useEffect(() => {
    document.title = language === 'en' ? 'KrishiConnect - Market Prices' : 'ಕೃಷಿ ಕನೆಕ್ಟ್ - ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು';
  }, [language]);

  // Mock price data
  const priceData = [
    { 
      id: 1, 
      crop: { en: 'Tomato', kn: 'ಟೊಮ್ಯಾಟೊ' }, 
      market: { en: 'Bangalore APMC', kn: 'ಬೆಂಗಳೂರು APMC' },
      price: 25.50, 
      unit: 'kg',
      change: 2.30,
      trend: 'up',
      lastUpdated: '2025-04-14T09:30:00'
    },
    { 
      id: 2, 
      crop: { en: 'Onion', kn: 'ಈರುಳ್ಳಿ' }, 
      market: { en: 'Mysore APMC', kn: 'ಮೈಸೂರು APMC' },
      price: 18.75, 
      unit: 'kg',
      change: -1.25,
      trend: 'down',
      lastUpdated: '2025-04-14T10:15:00'
    },
    { 
      id: 3, 
      crop: { en: 'Rice (Sona Masuri)', kn: 'ಅಕ್ಕಿ (ಸೋನಾ ಮಸೂರಿ)' }, 
      market: { en: 'Davanagere APMC', kn: 'ದಾವಣಗೆರೆ APMC' },
      price: 45.00, 
      unit: 'kg',
      change: 0.50,
      trend: 'up',
      lastUpdated: '2025-04-14T08:45:00'
    },
    { 
      id: 4, 
      crop: { en: 'Cotton', kn: 'ಹತ್ತಿ' }, 
      market: { en: 'Hubli APMC', kn: 'ಹುಬ್ಬಳ್ಳಿ APMC' },
      price: 7200, 
      unit: 'quintal',
      change: 150,
      trend: 'up',
      lastUpdated: '2025-04-14T09:00:00'
    },
    { 
      id: 5, 
      crop: { en: 'Potato', kn: 'ಆಲೂಗಡ್ಡೆ' }, 
      market: { en: 'Bangalore APMC', kn: 'ಬೆಂಗಳೂರು APMC' },
      price: 22.30, 
      unit: 'kg',
      change: -0.80,
      trend: 'down',
      lastUpdated: '2025-04-14T10:30:00'
    },
    { 
      id: 6, 
      crop: { en: 'Green Chilli', kn: 'ಹಸಿರು ಮೆಣಸಿನಕಾಯಿ' }, 
      market: { en: 'Mangalore APMC', kn: 'ಮಂಗಳೂರು APMC' },
      price: 35.75, 
      unit: 'kg',
      change: 5.25,
      trend: 'up',
      lastUpdated: '2025-04-14T09:15:00'
    },
    { 
      id: 7, 
      crop: { en: 'Sugarcane', kn: 'ಕಬ್ಬು' }, 
      market: { en: 'Belagavi APMC', kn: 'ಬೆಳಗಾವಿ APMC' },
      price: 3200, 
      unit: 'tonne',
      change: 50,
      trend: 'up',
      lastUpdated: '2025-04-14T11:00:00'
    },
    { 
      id: 8, 
      crop: { en: 'Maize', kn: 'ಮೆಕ್ಕೆಜೋಳ' }, 
      market: { en: 'Mysore APMC', kn: 'ಮೈಸೂರು APMC' },
      price: 1850, 
      unit: 'quintal',
      change: -75,
      trend: 'down',
      lastUpdated: '2025-04-14T08:30:00'
    }
  ];

  // Filter data based on search term
  const filteredPriceData = priceData.filter(item => {
    if (searchTerm === '') return true;
    
    return language === 'en' 
      ? item.crop.en.toLowerCase().includes(searchTerm.toLowerCase())
      : item.crop.kn.includes(searchTerm);
  });

  // Chart data for selected crop
  const chartData = {
    labels: ['10 Days Ago', '8 Days Ago', '6 Days Ago', '4 Days Ago', '2 Days Ago', 'Today'],
    datasets: [
      {
        label: selectedCrop ? (language === 'en' ? selectedCrop : priceData.find(item => item.crop.en === selectedCrop)?.crop.kn) : '',
        data: [22, 24, 26.5, 23.8, 25.2, 25.5],
        borderColor: 'rgb(46, 125, 50)',
        backgroundColor: 'rgba(46, 125, 50, 0.5)',
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: language === 'en' ? 'Price (₹)' : 'ಬೆಲೆ (₹)'
        }
      }
    }
  };

  // Get crop details
  const selectedCropDetails = selectedCrop 
    ? priceData.filter(item => language === 'en' ? item.crop.en === selectedCrop : item.crop.kn === selectedCrop)
    : [];

  // Get market details
  const selectedMarketDetails = selectedMarket
    ? priceData.filter(item => language === 'en' ? item.market.en === selectedMarket : item.market.kn === selectedMarket)
    : [];

  const markets = [...new Set(priceData.map(item => language === 'en' ? item.market.en : item.market.kn))];

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          {language === 'en' ? 'Live Agricultural Market Prices' : 'ಲೈವ್ ಕೃಷಿ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು'}
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-2/3 mb-4 md:mb-0">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={language === 'en' ? "Search crops..." : "ಬೆಳೆಗಳನ್ನು ಹುಡುಕಿ..."}
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <RefreshCw size={16} className="mr-1 text-green-600" />
              <span className="text-sm">
                {language === 'en' ? 'Last updated: 5 minutes ago' : 'ಕೊನೆಯ ನವೀಕರಣ: 5 ನಿಮಿಷಗಳ ಹಿಂದೆ'}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-4 bg-green-50 border-b flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {language === 'en' ? 'Today\'s Market Prices' : 'ಇಂದಿನ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು'}
                </h2>
                <div className="flex space-x-4">
                  <button className="text-sm text-green-700 flex items-center">
                    <Bell size={16} className="mr-1" />
                    {language === 'en' ? 'Set Alert' : 'ಅಲರ್ಟ್ ಹೊಂದಿಸಿ'}
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {language === 'en' ? 'Crop' : 'ಬೆಳೆ'}
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {language === 'en' ? 'Market' : 'ಮಾರುಕಟ್ಟೆ'}
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {language === 'en' ? 'Price (₹)' : 'ಬೆಲೆ (₹)'}
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {language === 'en' ? 'Change' : 'ಬದಲಾವಣೆ'}
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {language === 'en' ? 'Last Updated' : 'ಕೊನೆಯದಾಗಿ ನವೀಕರಿಸಲಾಗಿದೆ'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredPriceData.map((item) => (
                      <tr 
                        key={item.id} 
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => {
                          setSelectedCrop(language === 'en' ? item.crop.en : item.crop.kn);
                          setSelectedMarket(null);
                        }}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">
                            {language === 'en' ? item.crop.en : item.crop.kn}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-gray-500">
                            {language === 'en' ? item.market.en : item.market.kn}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium">
                            ₹{item.price.toFixed(2)}/{item.unit}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className={`flex items-center ${
                            item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {item.trend === 'up' ? (
                              <ArrowUp size={16} className="mr-1" />
                            ) : (
                              <ArrowDown size={16} className="mr-1" />
                            )}
                            {item.change > 0 ? '+' : ''}{item.change.toFixed(2)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                          {new Date(item.lastUpdated).toLocaleTimeString(language === 'en' ? 'en-US' : 'kn', {
                            hour: '2-digit', 
                            minute: '2-digit'
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {filteredPriceData.length === 0 && (
                <div className="py-8 text-center">
                  <p className="text-gray-500">
                    {language === 'en' ? 'No price data found for your search.' : 'ನಿಮ್ಮ ಹುಡುಕಾಟಕ್ಕೆ ಯಾವುದೇ ಬೆಲೆ ಡೇಟಾ ಕಂಡುಬಂದಿಲ್ಲ.'}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-4 bg-blue-50 border-b">
                <h2 className="text-lg font-semibold text-gray-800">
                  {language === 'en' ? 'Market Insights' : 'ಮಾರುಕಟ್ಟೆ ಒಳನೋಟಗಳು'}
                </h2>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <h3 className="font-medium mb-2 text-gray-800 flex items-center">
                    <TrendingUp size={18} className="mr-2 text-green-600" />
                    {language === 'en' ? 'Price Trends' : 'ಬೆಲೆ ಪ್ರವೃತ್ತಿಗಳು'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === 'en' 
                      ? 'Vegetable prices are expected to rise by 5-10% next week due to summer season demand.'
                      : 'ಬೇಸಿಗೆ ಋತುವಿನ ಬೇಡಿಕೆಯಿಂದಾಗಿ ತರಕಾರಿ ಬೆಲೆಗಳು ಮುಂದಿನ ವಾರ 5-10% ಹೆಚ್ಚಾಗುವ ನಿರೀಕ್ಷೆಯಿದೆ.'}
                  </p>
                </div>
                <div className="mb-4">
                  <h3 className="font-medium mb-2 text-gray-800 flex items-center">
                    <Truck size={18} className="mr-2 text-blue-600" />
                    {language === 'en' ? 'Supply Updates' : 'ಪೂರೈಕೆ ಅಪ್‌ಡೇಟ್‌ಗಳು'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === 'en' 
                      ? 'Tomato supply from Kolar district has increased by 15% this week.'
                      : 'ಈ ವಾರ ಕೋಲಾರ ಜಿಲ್ಲೆಯಿಂದ ಟೊಮ್ಯಾಟೊ ಪೂರೈಕೆ 15% ಹೆಚ್ಚಾಗಿದೆ.'}
                  </p>
                </div>
                <div className="mb-4">
                  <h3 className="font-medium mb-2 text-gray-800 flex items-center">
                    <Landmark size={18} className="mr-2 text-purple-600" />
                    {language === 'en' ? 'Government Updates' : 'ಸರ್ಕಾರಿ ಅಪ್‌ಡೇಟ್‌ಗಳು'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === 'en' 
                      ? 'MSP for rice increased by ₹100 per quintal for the upcoming season.'
                      : 'ಮುಂಬರುವ ಋತುವಿಗೆ ಅಕ್ಕಿಗೆ MSP ಕ್ವಿಂಟಲ್‌ಗೆ ₹100 ಹೆಚ್ಚಾಗಿದೆ.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-gray-800 flex items-center">
                    <Clock size={18} className="mr-2 text-orange-600" />
                    {language === 'en' ? 'Upcoming Harvest' : 'ಮುಂಬರುವ ಕೊಯ್ಲು'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === 'en' 
                      ? 'Maize harvest expected to start in South Karnataka regions by first week of May.'
                      : 'ಮೇ ತಿಂಗಳ ಮೊದಲ ವಾರದಿಂದ ದಕ್ಷಿಣ ಕರ್ನಾಟಕದ ಪ್ರದೇಶಗಳಲ್ಲಿ ಮೆಕ್ಕೆಜೋಳದ ಕೊಯ್ಲು ಆರಂಭವಾಗುವ ನಿರೀಕ್ಷೆಯಿದೆ.'}
                  </p>
                </div>
              </div>
            </div>

            {selectedCrop && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="p-4 bg-green-50 border-b">
                  <h3 className="font-medium text-gray-800">
                    {language === 'en' 
                      ? `Price Trend: ${selectedCrop}` 
                      : `ಬೆಲೆ ಪ್ರವೃತ್ತಿ: ${priceData.find(item => item.crop.en === selectedCrop)?.crop.kn}`}
                  </h3>
                </div>
                <div className="p-4">
                  <div className="h-64">
                    <Line options={chartOptions} data={chartData} />
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 bg-yellow-50 border-b">
                <h3 className="font-medium text-gray-800 flex items-center">
                  <Map size={18} className="mr-2 text-green-600" />
                  {language === 'en' ? 'Find Nearby Markets' : 'ಹತ್ತಿರದ ಮಾರುಕಟ್ಟೆಗಳನ್ನು ಹುಡುಕಿ'}
                </h3>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {markets.slice(0, 4).map((market, index) => (
                    <button 
                      key={index}
                      onClick={() => {
                        setSelectedMarket(market);
                        setSelectedCrop(null);
                      }}
                      className={`p-2 text-sm rounded-md transition-colors ${
                        selectedMarket === market
                          ? 'bg-green-700 text-white'
                          : 'bg-white border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {market}
                    </button>
                  ))}
                </div>
                <a 
                  href="#" 
                  className="text-green-700 font-medium text-sm flex items-center"
                >
                  {language === 'en' ? 'View all markets' : 'ಎಲ್ಲಾ ಮಾರುಕಟ್ಟೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ'}
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPrices;