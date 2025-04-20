import React, { useState, useEffect } from 'react';
import { PlusCircle, Upload, Camera, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const SoilAnalysis = () => {
  const { language } = useTheme();
  const [activeTab, setActiveTab] = useState('submit');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedSoilType, setSelectedSoilType] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    document.title = language === 'en' ? 'KrishiConnect - Soil Analysis' : 'ಕೃಷಿ ಕನೆಕ್ಟ್ - ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆ';
  }, [language]);

  const districts = [
    { value: '', label: { en: 'Select District', kn: 'ಜಿಲ್ಲೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ' } },
    { value: 'bangalore', label: { en: 'Bangalore', kn: 'ಬೆಂಗಳೂರು' } },
    { value: 'mysore', label: { en: 'Mysore', kn: 'ಮೈಸೂರು' } },
    { value: 'belgaum', label: { en: 'Belgaum', kn: 'ಬೆಳಗಾವಿ' } },
    { value: 'mangalore', label: { en: 'Mangalore', kn: 'ಮಂಗಳೂರು' } },
    { value: 'bellary', label: { en: 'Bellary', kn: 'ಬಳ್ಳಾರಿ' } }
  ];

  const soilTypes = [
    { value: '', label: { en: 'Select Soil Type', kn: 'ಮಣ್ಣಿನ ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ' } },
    { value: 'red', label: { en: 'Red Soil', kn: 'ಕೆಂಪು ಮಣ್ಣು' } },
    { value: 'black', label: { en: 'Black Soil', kn: 'ಕಪ್ಪು ಮಣ್ಣು' } },
    { value: 'alluvial', label: { en: 'Alluvial Soil', kn: 'ಒಂದಾವಣಿ ಮಣ್ಣು' } },
    { value: 'laterite', label: { en: 'Laterite Soil', kn: 'ಲ್ಯಾಟರೈಟ್ ಮಣ್ಣು' } },
    { value: 'sandy', label: { en: 'Sandy Soil', kn: 'ಮರಳು ಮಣ್ಣು' } }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);
    // In a real app, this would submit data to a backend
  };

  const cropRecommendations = [
    {
      name: { en: 'Rice', kn: 'ಭತ್ತ' },
      suitability: 'high',
      description: { 
        en: 'Ideal for your soil type with high nitrogen content. Best planted before monsoon.',
        kn: 'ಹೆಚ್ಚಿನ ನೈಟ್ರೋಜನ್ ಅಂಶದೊಂದಿಗೆ ನಿಮ್ಮ ಮಣ್ಣಿನ ಪ್ರಕಾರಕ್ಕೆ ಸೂಕ್ತವಾಗಿದೆ. ಮುಂಗಾರಿನ ಮೊದಲು ನೆಡಲು ಉತ್ತಮ.'
      }
    },
    {
      name: { en: 'Sugarcane', kn: 'ಕಬ್ಬು' },
      suitability: 'high',
      description: { 
        en: 'Well-suited for your soil conditions. Requires regular irrigation.',
        kn: 'ನಿಮ್ಮ ಮಣ್ಣಿನ ಪರಿಸ್ಥಿತಿಗಳಿಗೆ ಸರಿಯಾಗಿ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ. ನಿಯಮಿತ ನೀರಾವರಿ ಅಗತ್ಯವಿದೆ.'
      }
    },
    {
      name: { en: 'Cotton', kn: 'ಹತ್ತಿ' },
      suitability: 'medium',
      description: { 
        en: 'Moderately suitable. May require additional potassium supplements.',
        kn: 'ಮಧ್ಯಮವಾಗಿ ಸೂಕ್ತವಾಗಿದೆ. ಹೆಚ್ಚುವರಿ ಪೊಟ್ಯಾಸಿಯಂ ಪೂರಕಗಳ ಅಗತ್ಯವಿರಬಹುದು.'
      }
    },
    {
      name: { en: 'Maize', kn: 'ಮೆಕ್ಕೆಜೋಳ' },
      suitability: 'low',
      description: { 
        en: 'Not ideal for your soil type. Would require significant soil amendments.',
        kn: 'ನಿಮ್ಮ ಮಣ್ಣಿನ ಪ್ರಕಾರಕ್ಕೆ ಸೂಕ್ತವಲ್ಲ. ಗಣನೀಯ ಮಣ್ಣಿನ ತಿದ್ದುಪಡಿಗಳ ಅಗತ್ಯವಿರುತ್ತದೆ.'
      }
    }
  ];

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          {language === 'en' ? 'Soil Analysis & Crop Recommendations' : 'ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆ & ಬೆಳೆ ಶಿಫಾರಸುಗಳು'}
        </h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="flex border-b">
            <button
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === 'submit'
                  ? 'text-green-700 border-b-2 border-green-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('submit')}
            >
              {language === 'en' ? 'Submit Sample' : 'ಮಾದರಿ ಸಲ್ಲಿಸಿ'}
            </button>
            <button
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === 'results'
                  ? 'text-green-700 border-b-2 border-green-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('results')}
            >
              {language === 'en' ? 'Analysis Results' : 'ವಿಶ್ಲೇಷಣೆ ಫಲಿತಾಂಶಗಳು'}
            </button>
            <button
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeTab === 'recommendations'
                  ? 'text-green-700 border-b-2 border-green-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('recommendations')}
            >
              {language === 'en' ? 'Crop Recommendations' : 'ಬೆಳೆ ಶಿಫಾರಸುಗಳು'}
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'submit' && (
              <div>
                <div className="max-w-2xl mx-auto">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-8 bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-start">
                        <Info className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-blue-800">
                            {language === 'en' ? 'How to collect soil samples' : 'ಮಣ್ಣಿನ ಮಾದರಿಗಳನ್ನು ಹೇಗೆ ಸಂಗ್ರಹಿಸುವುದು'}
                          </h3>
                          <ul className="mt-2 text-blue-700 text-sm space-y-1">
                            <li>
                              {language === 'en' 
                                ? '1. Collect samples from 5-10 different spots in your field' 
                                : '1. ನಿಮ್ಮ ಹೊಲದಲ್ಲಿ 5-10 ವಿಭಿನ್ನ ಸ್ಥಳಗಳಿಂದ ಮಾದರಿಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ'}
                            </li>
                            <li>
                              {language === 'en' 
                                ? '2. Dig 6-8 inches deep for each sample' 
                                : '2. ಪ್ರತಿ ಮಾದರಿಗೆ 6-8 ಇಂಚು ಆಳವಾಗಿ ಅಗೆಯಿರಿ'}
                            </li>
                            <li>
                              {language === 'en' 
                                ? '3. Mix all samples thoroughly in a clean container' 
                                : '3. ಎಲ್ಲಾ ಮಾದರಿಗಳನ್ನು ಶುಚಿಯಾದ ಕಂಟೇನರ್‌ನಲ್ಲಿ ಸಂಪೂರ್ಣವಾಗಿ ಮಿಶ್ರಣ ಮಾಡಿ'}
                            </li>
                            <li>
                              {language === 'en' 
                                ? '4. Air-dry the soil (do not use heat)' 
                                : '4. ಮಣ್ಣನ್ನು ಗಾಳಿ-ಒಣಗಿಸಿ (ಶಾಖವನ್ನು ಬಳಸಬೇಡಿ)'}
                            </li>
                            <li>
                              {language === 'en' 
                                ? '5. Pack about 500g of soil in a clean plastic bag' 
                                : '5. ಸುಮಾರು 500g ಮಣ್ಣನ್ನು ಶುಚಿಯಾದ ಪ್ಲಾಸ್ಟಿಕ್ ಚೀಲದಲ್ಲಿ ಪ್ಯಾಕ್ ಮಾಡಿ'}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="district" className="block mb-2 font-medium text-gray-700">
                          {language === 'en' ? 'District' : 'ಜಿಲ್ಲೆ'}
                        </label>
                        <select
                          id="district"
                          value={selectedDistrict}
                          onChange={(e) => setSelectedDistrict(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                          required
                        >
                          {districts.map((district) => (
                            <option key={district.value} value={district.value}>
                              {language === 'en' ? district.label.en : district.label.kn}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="soilType" className="block mb-2 font-medium text-gray-700">
                          {language === 'en' ? 'Soil Type (if known)' : 'ಮಣ್ಣಿನ ಪ್ರಕಾರ (ತಿಳಿದಿದ್ದರೆ)'}
                        </label>
                        <select
                          id="soilType"
                          value={selectedSoilType}
                          onChange={(e) => setSelectedSoilType(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                        >
                          {soilTypes.map((soil) => (
                            <option key={soil.value} value={soil.value}>
                              {language === 'en' ? soil.label.en : soil.label.kn}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="address" className="block mb-2 font-medium text-gray-700">
                        {language === 'en' ? 'Farm Location' : 'ಹೊಲದ ಸ್ಥಳ'}
                      </label>
                      <textarea
                        id="address"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                        rows={3}
                        placeholder={language === 'en' ? 'Enter your farm address or location details' : 'ನಿಮ್ಮ ಹೊಲದ ವಿಳಾಸ ಅಥವಾ ಸ್ಥಳದ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ'}
                        required
                      ></textarea>
                    </div>

                    <div className="mb-6">
                      <label className="block mb-2 font-medium text-gray-700">
                        {language === 'en' ? 'Sample Submission Method' : 'ಮಾದರಿ ಸಲ್ಲಿಕೆ ವಿಧಾನ'}
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border border-gray-200 rounded-lg p-4 hover:border-green-500 cursor-pointer">
                          <div className="flex flex-col items-center text-center">
                            <Upload className="w-10 h-10 text-green-600 mb-2" />
                            <h4 className="font-medium">
                              {language === 'en' ? 'Upload Images' : 'ಚಿತ್ರಗಳನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ'}
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">
                              {language === 'en' ? 'Upload soil sample images' : 'ಮಣ್ಣಿನ ಮಾದರಿ ಚಿತ್ರಗಳನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ'}
                            </p>
                          </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4 hover:border-green-500 cursor-pointer">
                          <div className="flex flex-col items-center text-center">
                            <Camera className="w-10 h-10 text-green-600 mb-2" />
                            <h4 className="font-medium">
                              {language === 'en' ? 'Kiosk Photo' : 'ಕಿಯೋಸ್ಕ್ ಫೋಟೋ'}
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">
                              {language === 'en' ? 'Visit nearest soil kiosk' : 'ಹತ್ತಿರದ ಮಣ್ಣಿನ ಕಿಯೋಸ್ಕ್‌ಗೆ ಭೇಟಿ ನೀಡಿ'}
                            </p>
                          </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4 hover:border-green-500 cursor-pointer">
                          <div className="flex flex-col items-center text-center">
                            <PlusCircle className="w-10 h-10 text-green-600 mb-2" />
                            <h4 className="font-medium">
                              {language === 'en' ? 'Physical Sample' : 'ಭೌತಿಕ ಮಾದರಿ'}
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">
                              {language === 'en' ? 'Bring to testing center' : 'ಪರೀಕ್ಷಾ ಕೇಂದ್ರಕ್ಕೆ ತನ್ನಿ'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="photos" className="block mb-2 font-medium text-gray-700">
                        {language === 'en' ? 'Upload Soil Photos (Optional)' : 'ಮಣ್ಣಿನ ಫೋಟೋಗಳನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ (ಐಚ್ಛಿಕ)'}
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none"
                            >
                              <span>
                                {language === 'en' ? 'Upload files' : 'ಫೈಲ್‌ಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ'}
                              </span>
                              <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                            </label>
                            <p className="pl-1">
                              {language === 'en' ? 'or drag and drop' : 'ಅಥವಾ ಎಳೆದು ಬಿಡಿ'}
                            </p>
                          </div>
                          <p className="text-xs text-gray-500">
                            {language === 'en' ? 'PNG, JPG, GIF up to 10MB' : 'PNG, JPG, GIF 10MB ವರೆಗೆ'}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-green-700 text-white font-medium rounded-lg hover:bg-green-800 transition-colors"
                      >
                        {language === 'en' ? 'Submit for Analysis' : 'ವಿಶ್ಲೇಷಣೆಗೆ ಸಲ್ಲಿಸಿ'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {activeTab === 'results' && (
              <div>
                {hasSubmitted ? (
                  <div className="max-w-3xl mx-auto">
                    <div className="bg-green-50 p-4 rounded-lg mb-6 flex items-start">
                      <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-green-800">
                          {language === 'en' ? 'Analysis Complete' : 'ವಿಶ್ಲೇಷಣೆ ಪೂರ್ಣಗೊಂಡಿದೆ'}
                        </h3>
                        <p className="text-green-700 text-sm">
                          {language === 'en' 
                            ? 'Your soil sample has been analyzed successfully. View detailed results below.' 
                            : 'ನಿಮ್ಮ ಮಣ್ಣಿನ ಮಾದರಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ವಿಶ್ಲೇಷಿಸಲಾಗಿದೆ. ವಿವರವಾದ ಫಲಿತಾಂಶಗಳನ್ನು ಕೆಳಗೆ ವೀಕ್ಷಿಸಿ.'}
                        </p>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mb-6">
                      <div className="p-6">
                        <h3 className="text-lg font-semibold mb-4">
                          {language === 'en' ? 'Soil Composition' : 'ಮಣ್ಣಿನ ರಚನೆ'}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div className="bg-gray-50 p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold text-green-700">42%</div>
                            <div className="text-gray-600 mt-2">
                              {language === 'en' ? 'Sand' : 'ಮರಳು'}
                            </div>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold text-green-700">33%</div>
                            <div className="text-gray-600 mt-2">
                              {language === 'en' ? 'Silt' : 'ಮೇಕಲು ಮಣ್ಣು'}
                            </div>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold text-green-700">25%</div>
                            <div className="text-gray-600 mt-2">
                              {language === 'en' ? 'Clay' : 'ಕೆಸರು ಮಣ್ಣು'}
                            </div>
                          </div>
                        </div>

                        <h3 className="text-lg font-semibold mb-4">
                          {language === 'en' ? 'Nutrient Levels' : 'ಪೋಷಕಾಂಶ ಮಟ್ಟಗಳು'}
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">
                                {language === 'en' ? 'Nitrogen (N)' : 'ಸಾರಜನಕ (N)'}
                              </span>
                              <span className="text-red-500 font-medium">
                                {language === 'en' ? 'Low (120 kg/ha)' : 'ಕಡಿಮೆ (120 ಕೆಜಿ/ಹೆ)'}
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">
                                {language === 'en' ? 'Phosphorus (P)' : 'ರಂಜಕ (P)'}
                              </span>
                              <span className="text-yellow-500 font-medium">
                                {language === 'en' ? 'Medium (25 kg/ha)' : 'ಮಧ್ಯಮ (25 ಕೆಜಿ/ಹೆ)'}
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">
                                {language === 'en' ? 'Potassium (K)' : 'ಪೊಟ್ಯಾಸಿಯಮ್ (K)'}
                              </span>
                              <span className="text-green-500 font-medium">
                                {language === 'en' ? 'High (320 kg/ha)' : 'ಹೆಚ್ಚು (320 ಕೆಜಿ/ಹೆ)'}
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                          <div>
                            <h3 className="text-lg font-semibold mb-4">
                              {language === 'en' ? 'pH & Organic Matter' : 'pH & ಸಾವಯವ ವಸ್ತು'}
                            </h3>
                            <div className="space-y-4">
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="font-medium">pH</span>
                                  <span className="font-medium">6.8</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 relative">
                                  <div className="absolute top-0 left-0 w-full h-full">
                                    <div className="h-full rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
                                  </div>
                                  <div 
                                    className="absolute h-5 w-2 bg-black rounded-full top-1/2 transform -translate-y-1/2" 
                                    style={{ left: 'calc(6.8 / 14 * 100%)' }}
                                  ></div>
                                </div>
                                <div className="flex justify-between text-xs mt-1">
                                  <span>0</span>
                                  <span>7</span>
                                  <span>14</span>
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="font-medium">
                                    {language === 'en' ? 'Organic Matter' : 'ಸಾವಯವ ವಸ್ತು'}
                                  </span>
                                  <span className="text-green-500 font-medium">2.8%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '56%' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-4">
                              {language === 'en' ? 'Secondary Nutrients' : 'ದ್ವಿತೀಯ ಪೋಷಕಾಂಶಗಳು'}
                            </h3>
                            <div className="space-y-4">
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="font-medium">
                                    {language === 'en' ? 'Calcium (Ca)' : 'ಕ್ಯಾಲ್ಸಿಯಮ್ (Ca)'}
                                  </span>
                                  <span className="text-gray-600">1250 ppm</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                  <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="font-medium">
                                    {language === 'en' ? 'Magnesium (Mg)' : 'ಮೆಗ್ನೀಸಿಯಮ್ (Mg)'}
                                  </span>
                                  <span className="text-gray-600">180 ppm</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                  <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="font-medium">
                                    {language === 'en' ? 'Sulfur (S)' : 'ಗಂಧಕ (S)'}
                                  </span>
                                  <span className="text-gray-600">12 ppm</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                  <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg mb-6 flex items-start">
                      <AlertTriangle className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-yellow-800">
                          {language === 'en' ? 'Action Needed' : 'ಕ್ರಮ ಅಗತ್ಯವಿದೆ'}
                        </h3>
                        <p className="text-yellow-700 text-sm">
                          {language === 'en' 
                            ? 'Your soil requires nitrogen supplementation. Recommended to add nitrogen-rich fertilizers or grow nitrogen-fixing crops like legumes.' 
                            : 'ನಿಮ್ಮ ಮಣ್ಣಿಗೆ ನೈಟ್ರೋಜನ್ ಪೂರಕ ಅಗತ್ಯವಿದೆ. ನೈಟ್ರೋಜನ್ ಹೊಂದಿರುವ ರಸಗೊಬ್ಬರಗಳನ್ನು ಸೇರಿಸಲು ಅಥವಾ ಕಾಳುಗಳಂತಹ ನೈಟ್ರೋಜನ್ ಸ್ಥಿರೀಕರಣ ಬೆಳೆಗಳನ್ನು ಬೆಳೆಯಲು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.'}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="mb-4">
                      <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">
                      {language === 'en' ? 'No Results Available' : 'ಯಾವುದೇ ಫಲಿತಾಂಶಗಳು ಲಭ್ಯವಿಲ್ಲ'}
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      {language === 'en' 
                        ? 'You have not submitted any soil samples for analysis yet. Please go to the "Submit Sample" tab to get started.' 
                        : 'ನೀವು ಇನ್ನೂ ವಿಶ್ಲೇಷಣೆಗಾಗಿ ಯಾವುದೇ ಮಣ್ಣಿನ ಮಾದರಿಗಳನ್ನು ಸಲ್ಲಿಸಿಲ್ಲ. ಪ್ರಾರಂಭಿಸಲು ದಯವಿಟ್ಟು "ಮಾದರಿ ಸಲ್ಲಿಸಿ" ಟ್ಯಾಬ್‌ಗೆ ಹೋಗಿ.'}
                    </p>
                    <button 
                      onClick={() => setActiveTab('submit')}
                      className="mt-4 px-6 py-2 bg-green-700 text-white font-medium rounded-md hover:bg-green-800 transition-colors"
                    >
                      {language === 'en' ? 'Submit a Sample' : 'ಮಾದರಿಯನ್ನು ಸಲ್ಲಿಸಿ'}
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'recommendations' && (
              <div>
                {hasSubmitted ? (
                  <div className="max-w-3xl mx-auto">
                    <div className="bg-green-50 p-4 rounded-lg mb-6">
                      <h3 className="font-medium text-green-800 mb-1">
                        {language === 'en' ? 'Crop Recommendations Based on Your Soil Analysis' : 'ನಿಮ್ಮ ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆಯ ಆಧಾರದಲ್ಲಿ ಬೆಳೆ ಶಿಫಾರಸುಗಳು'}
                      </h3>
                      <p className="text-green-700 text-sm">
                        {language === 'en' 
                          ? 'Based on your soil composition, pH level, and nutrient profile, the following crops are recommended for optimal yield.' 
                          : 'ನಿಮ್ಮ ಮಣ್ಣಿನ ಸಂಯೋಜನೆ, pH ಮಟ್ಟ ಮತ್ತು ಪೋಷಕಾಂಶ ಪ್ರೊಫೈಲ್ ಆಧಾರದ ಮೇಲೆ, ಅತ್ಯುತ್ತಮ ಇಳುವರಿಗಾಗಿ ಕೆಳಗಿನ ಬೆಳೆಗಳನ್ನು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.'}
                      </p>
                    </div>

                    <div className="space-y-6">
                      {cropRecommendations.map((crop, index) => (
                        <div 
                          key={index}
                          className={`bg-white border rounded-lg shadow-sm overflow-hidden ${
                            crop.suitability === 'high' 
                              ? 'border-green-500' 
                              : crop.suitability === 'medium'
                                ? 'border-yellow-500'
                                : 'border-red-500'
                          }`}
                        >
                          <div 
                            className={`p-4 ${
                              crop.suitability === 'high' 
                                ? 'bg-green-50' 
                                : crop.suitability === 'medium'
                                  ? 'bg-yellow-50'
                                  : 'bg-red-50'
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              <h3 className="text-lg font-semibold">
                                {language === 'en' ? crop.name.en : crop.name.kn}
                              </h3>
                              <span 
                                className={`px-3 py-1 rounded-full text-sm font-medium ${
                                  crop.suitability === 'high' 
                                    ? 'bg-green-500 text-white' 
                                    : crop.suitability === 'medium'
                                      ? 'bg-yellow-500 text-white'
                                      : 'bg-red-500 text-white'
                                }`}
                              >
                                {crop.suitability === 'high' 
                                  ? (language === 'en' ? 'Highly Suitable' : 'ಅತ್ಯಂತ ಸೂಕ್ತ') 
                                  : crop.suitability === 'medium'
                                    ? (language === 'en' ? 'Moderately Suitable' : 'ಮಧ್ಯಮವಾಗಿ ಸೂಕ್ತ')
                                    : (language === 'en' ? 'Less Suitable' : 'ಕಡಿಮೆ ಸೂಕ್ತ')}
                              </span>
                            </div>
                          </div>
                          <div className="p-4">
                            <p className="mb-4">
                              {language === 'en' ? crop.description.en : crop.description.kn}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">
                                {language === 'en' ? 'Water Needs: Medium' : 'ನೀರಿನ ಅಗತ್ಯಗಳು: ಮಧ್ಯಮ'}
                              </span>
                              <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">
                                {language === 'en' ? 'Growing Period: 120 days' : 'ಬೆಳೆಯುವ ಅವಧಿ: 120 ದಿನಗಳು'}
                              </span>
                              <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">
                                {language === 'en' ? 'Best Season: Kharif' : 'ಉತ್ತಮ ಋತು: ಖಾರಿಫ್'}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <h3 className="text-lg font-semibold mb-4">
                        {language === 'en' ? 'Fertilizer Recommendations' : 'ರಸಗೊಬ್ಬರ ಶಿಫಾರಸುಗಳು'}
                      </h3>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="py-2 text-left">
                                {language === 'en' ? 'Nutrient' : 'ಪೋಷಕಾಂಶ'}
                              </th>
                              <th className="py-2 text-left">
                                {language === 'en' ? 'Current Level' : 'ಪ್ರಸ್ತುತ ಮಟ್ಟ'}
                              </th>
                              <th className="py-2 text-left">
                                {language === 'en' ? 'Recommended Action' : 'ಶಿಫಾರಸು ಮಾಡಿದ ಕ್ರಮ'}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="py-3">
                                {language === 'en' ? 'Nitrogen (N)' : 'ಸಾರಜನಕ (N)'}
                              </td>
                              <td className="py-3 text-red-500">
                                {language === 'en' ? 'Low' : 'ಕಡಿಮೆ'}
                              </td>
                              <td className="py-3">
                                {language === 'en' 
                                  ? 'Apply Urea (45kg/acre)' 
                                  : 'ಯೂರಿಯಾ ಹಾಕಿ (45 ಕೆಜಿ/ಎಕರೆ)'}
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3">
                                {language === 'en' ? 'Phosphorus (P)' : 'ರಂಜಕ (P)'}
                              </td>
                              <td className="py-3 text-yellow-500">
                                {language === 'en' ? 'Medium' : 'ಮಧ್ಯಮ'}
                              </td>
                              <td className="py-3">
                                {language === 'en' 
                                  ? 'Apply DAP (25kg/acre)' 
                                  : 'DAP ಹಾಕಿ (25 ಕೆಜಿ/ಎಕರೆ)'}
                              </td>
                            </tr>
                            <tr>
                              <td className="py-3">
                                {language === 'en' ? 'Potassium (K)' : 'ಪೊಟ್ಯಾಸಿಯಮ್ (K)'}
                              </td>
                              <td className="py-3 text-green-500">
                                {language === 'en' ? 'High' : 'ಹೆಚ್ಚು'}
                              </td>
                              <td className="py-3">
                                {language === 'en' 
                                  ? 'No action needed' 
                                  : 'ಯಾವುದೇ ಕ್ರಮ ಅಗತ್ಯವಿಲ್ಲ'}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="mb-4">
                      <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">
                      {language === 'en' ? 'No Recommendations Available' : 'ಯಾವುದೇ ಶಿಫಾರಸುಗಳು ಲಭ್ಯವಿಲ್ಲ'}
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      {language === 'en' 
                        ? 'You need to submit a soil sample first to get personalized crop recommendations. Please go to the "Submit Sample" tab.' 
                        : 'ವೈಯಕ್ತಿಕ ಬೆಳೆ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಲು ನೀವು ಮೊದಲು ಮಣ್ಣಿನ ಮಾದರಿಯನ್ನು ಸಲ್ಲಿಸಬೇಕು. ದಯವಿಟ್ಟು "ಮಾದರಿ ಸಲ್ಲಿಸಿ" ಟ್ಯಾಬ್‌ಗೆ ಹೋಗಿ.'}
                    </p>
                    <button 
                      onClick={() => setActiveTab('submit')}
                      className="mt-4 px-6 py-2 bg-green-700 text-white font-medium rounded-md hover:bg-green-800 transition-colors"
                    >
                      {language === 'en' ? 'Submit a Sample' : 'ಮಾದರಿಯನ್ನು ಸಲ್ಲಿಸಿ'}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoilAnalysis;