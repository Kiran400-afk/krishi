import React, { useState, useEffect } from 'react';
import { Search, Filter, ExternalLink, Calendar, Award, Info, CheckCircle, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const GovernmentSchemes = () => {
  const { language } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  
  useEffect(() => {
    document.title = language === 'en' ? 'KrishiConnect - Government Schemes' : 'ಕೃಷಿ ಕನೆಕ್ಟ್ - ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು';
  }, [language]);

  const schemes = [
    {
      id: 1,
      name: {
        en: 'PM Kisan Samman Nidhi Yojana',
        kn: 'ಪಿಎಂ ಕಿಸಾನ್ ಸಮ್ಮಾನ್ ನಿಧಿ ಯೋಜನೆ'
      },
      description: {
        en: 'Income support of ₹6,000 per year in three equal installments to all land holding farmer families.',
        kn: 'ಎಲ್ಲಾ ಭೂಮಿ ಹೊಂದಿರುವ ರೈತ ಕುಟುಂಬಗಳಿಗೆ ವರ್ಷಕ್ಕೆ ₹6,000 ಆದಾಯ ಬೆಂಬಲವನ್ನು ಮೂರು ಸಮಾನ ಕಂತುಗಳಲ್ಲಿ ನೀಡಲಾಗುತ್ತದೆ.'
      },
      eligibility: {
        en: 'All land holding farmers with cultivable land.',
        kn: 'ಕೃಷಿಯೋಗ್ಯ ಭೂಮಿಯನ್ನು ಹೊಂದಿರುವ ಎಲ್ಲಾ ರೈತರು.'
      },
      deadline: '2025-12-31',
      category: 'income',
      applyLink: 'https://pmkisan.gov.in/',
      logo: '🌾'
    },
    {
      id: 2,
      name: {
        en: 'Pradhan Mantri Fasal Bima Yojana',
        kn: 'ಪ್ರಧಾನ ಮಂತ್ರಿ ಫಸಲ್ ಬೀಮಾ ಯೋಜನೆ'
      },
      description: {
        en: 'Crop insurance scheme to protect farmers from crop loss due to natural calamities.',
        kn: 'ನೈಸರ್ಗಿಕ ವಿಕೋಪಗಳಿಂದಾಗಿ ಬೆಳೆ ನಷ್ಟದಿಂದ ರೈತರನ್ನು ರಕ್ಷಿಸಲು ಬೆಳೆ ವಿಮಾ ಯೋಜನೆ.'
      },
      eligibility: {
        en: 'All farmers growing notified crops and paying premium before deadline.',
        kn: 'ಅಧಿಸೂಚಿತ ಬೆಳೆಗಳನ್ನು ಬೆಳೆಯುವ ಮತ್ತು ಕೊನೆಯ ದಿನಾಂಕದ ಮೊದಲು ಪ್ರೀಮಿಯಂ ಪಾವತಿಸುವ ಎಲ್ಲಾ ರೈತರು.'
      },
      deadline: '2025-07-31',
      category: 'insurance',
      applyLink: 'https://pmfby.gov.in/',
      logo: '🛡️'
    },
    {
      id: 3,
      name: {
        en: 'Krishak Bandhu Scheme',
        kn: 'ಕೃಷಕ ಬಂಧು ಯೋಜನೆ'
      },
      description: {
        en: 'Financial assistance of ₹5,000 per acre per year for crop cultivation.',
        kn: 'ಬೆಳೆ ಕೃಷಿಗಾಗಿ ವರ್ಷಕ್ಕೆ ಎಕರೆಗೆ ₹5,000 ಹಣಕಾಸಿನ ನೆರವು.'
      },
      eligibility: {
        en: 'Small and marginal farmers with less than 2 acres of land.',
        kn: '2 ಎಕರೆಗಿಂತ ಕಡಿಮೆ ಭೂಮಿ ಹೊಂದಿರುವ ಸಣ್ಣ ಮತ್ತು ಅತಿ ಸಣ್ಣ ರೈತರು.'
      },
      deadline: '2025-06-30',
      category: 'subsidy',
      applyLink: 'https://krishakbandhu.net/',
      logo: '💰'
    },
    {
      id: 4,
      name: {
        en: 'Karnataka Organic Farming Incentive',
        kn: 'ಕರ್ನಾಟಕ ಸಾವಯವ ಕೃಷಿ ಪ್ರೋತ್ಸಾಹ'
      },
      description: {
        en: 'Additional subsidy of ₹10,000 per hectare for farmers practicing certified organic farming.',
        kn: 'ಪ್ರಮಾಣಿತ ಸಾವಯವ ಕೃಷಿಯನ್ನು ಅಭ್ಯಾಸ ಮಾಡುವ ರೈತರಿಗೆ ಹೆಕ್ಟೇರ್‌ಗೆ ₹10,000 ಹೆಚ್ಚುವರಿ ಸಬ್ಸಿಡಿ.'
      },
      eligibility: {
        en: 'Farmers with organic certification practicing organic farming for at least 2 years.',
        kn: 'ಕನಿಷ್ಠ 2 ವರ್ಷಗಳಿಂದ ಸಾವಯವ ಕೃಷಿಯನ್ನು ಅಭ್ಯಾಸ ಮಾಡುತ್ತಿರುವ ಸಾವಯವ ಪ್ರಮಾಣಪತ್ರ ಹೊಂದಿರುವ ರೈತರು.'
      },
      deadline: '2025-09-15',
      category: 'organic',
      applyLink: 'https://raitamitra.karnataka.gov.in/organicfarming',
      logo: '🌿'
    },
    {
      id: 5,
      name: {
        en: 'Solar Pump Subsidy Scheme',
        kn: 'ಸೌರ ಪಂಪ್ ಸಬ್ಸಿಡಿ ಯೋಜನೆ'
      },
      description: {
        en: 'Up to 90% subsidy on solar water pumps for irrigation to reduce dependency on grid electricity.',
        kn: 'ಗ್ರಿಡ್ ವಿದ್ಯುತ್ ಮೇಲಿನ ಅವಲಂಬನೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಲು ನೀರಾವರಿಗಾಗಿ ಸೌರ ನೀರಿನ ಪಂಪ್‌ಗಳ ಮೇಲೆ 90% ವರೆಗೆ ಸಬ್ಸಿಡಿ.'
      },
      eligibility: {
        en: 'Farmers with valid land records and no previous solar pump subsidy availed.',
        kn: 'ಮಾನ್ಯ ಭೂಮಿ ದಾಖಲೆಗಳನ್ನು ಹೊಂದಿರುವ ಮತ್ತು ಯಾವುದೇ ಹಿಂದಿನ ಸೌರ ಪಂಪ್ ಸಬ್ಸಿಡಿಯನ್ನು ಪಡೆಯದ ರೈತರು.'
      },
      deadline: '2025-03-31',
      category: 'equipment',
      applyLink: 'https://www.karnatakaenergy.gov.in/solarpumps',
      logo: '☀️'
    },
    {
      id: 6,
      name: {
        en: 'Micro Irrigation Scheme',
        kn: 'ಸೂಕ್ಷ್ಮ ನೀರಾವರಿ ಯೋಜನೆ'
      },
      description: {
        en: 'Up to 55% subsidy on drip and sprinkler irrigation systems to promote water conservation.',
        kn: 'ನೀರಿನ ಸಂರಕ್ಷಣೆಯನ್ನು ಉತ್ತೇಜಿಸಲು ಹನಿ ಮತ್ತು ಸಿಂಪರಣೆ ನೀರಾವರಿ ವ್ಯವಸ್ಥೆಗಳ ಮೇಲೆ 55% ವರೆಗೆ ಸಬ್ಸಿಡಿ.'
      },
      eligibility: {
        en: 'All categories of farmers with focus on small and marginal farmers.',
        kn: 'ಸಣ್ಣ ಮತ್ತು ಅತಿ ಸಣ್ಣ ರೈತರ ಮೇಲೆ ಗಮನ ಹರಿಸಿ ಎಲ್ಲಾ ವರ್ಗದ ರೈತರು.'
      },
      deadline: '2025-08-31',
      category: 'equipment',
      applyLink: 'https://pmksy.gov.in/microirrigation/',
      logo: '💧'
    }
  ];

  const filteredSchemes = schemes
    .filter(scheme => {
      const nameMatch = language === 'en' 
        ? scheme.name.en.toLowerCase().includes(searchTerm.toLowerCase())
        : scheme.name.kn.includes(searchTerm);
      
      return nameMatch && (filterCategory === 'all' || scheme.category === filterCategory);
    });

  const categoryLabels = {
    all: { en: 'All Categories', kn: 'ಎಲ್ಲಾ ವರ್ಗಗಳು' },
    income: { en: 'Income Support', kn: 'ಆದಾಯ ಬೆಂಬಲ' },
    insurance: { en: 'Insurance', kn: 'ವಿಮೆ' },
    subsidy: { en: 'Subsidies', kn: 'ಸಬ್ಸಿಡಿಗಳು' },
    organic: { en: 'Organic Farming', kn: 'ಸಾವಯವ ಕೃಷಿ' },
    equipment: { en: 'Equipment', kn: 'ಉಪಕರಣಗಳು' }
  };

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          {language === 'en' ? 'Government Schemes for Farmers' : 'ರೈತರಿಗಾಗಿ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು'}
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={language === 'en' ? "Search schemes by name..." : "ಹೆಸರಿನ ಮೂಲಕ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ..."}
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            <div>
              <div className="relative">
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 appearance-none bg-white"
                >
                  {Object.entries(categoryLabels).map(([value, labels]) => (
                    <option key={value} value={value}>
                      {language === 'en' ? labels.en : labels.kn}
                    </option>
                  ))}
                </select>
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start">
              <Info className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-800">
                  {language === 'en' ? 'Important Note' : 'ಮಹತ್ವದ ಟಿಪ್ಪಣಿ'}
                </h3>
                <p className="text-yellow-700 text-sm">
                  {language === 'en' 
                    ? 'Application deadlines may change. Visit the official website or contact your local agricultural office for the most up-to-date information.' 
                    : 'ಅಪ್ಲಿಕೇಶನ್ ಕೊನೆಯ ದಿನಾಂಕಗಳು ಬದಲಾಗಬಹುದು. ಇತ್ತೀಚಿನ ಮಾಹಿತಿಗಾಗಿ ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್‌ಗೆ ಭೇಟಿ ನೀಡಿ ಅಥವಾ ನಿಮ್ಮ ಸ್ಥಳೀಯ ಕೃಷಿ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {filteredSchemes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSchemes.map((scheme) => (
              <div key={scheme.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="text-4xl mr-4 mt-1">{scheme.logo}</div>
                    <div>
                      <h2 className="text-xl font-semibold mb-2">
                        {language === 'en' ? scheme.name.en : scheme.name.kn}
                      </h2>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <Award size={12} className="mr-1" />
                          {language === 'en' ? categoryLabels[scheme.category].en : categoryLabels[scheme.category].kn}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          <Calendar size={12} className="mr-1" />
                          {language === 'en' ? 'Deadline: ' : 'ಕೊನೆಯ ದಿನಾಂಕ: '}
                          {new Date(scheme.deadline).toLocaleDateString(language === 'en' ? 'en-US' : 'kn')}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {language === 'en' ? scheme.description.en : scheme.description.kn}
                      </p>
                      <div className="mb-4">
                        <h3 className="font-medium text-gray-700 mb-1">
                          {language === 'en' ? 'Eligibility:' : 'ಅರ್ಹತೆ:'}
                        </h3>
                        <p className="text-gray-600">
                          {language === 'en' ? scheme.eligibility.en : scheme.eligibility.kn}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Users size={16} className="mr-1" />
                          <span>
                            {language === 'en' ? 'Over 2.5M farmers benefited' : '2.5 ಮಿಲಿಯನ್‌ಗಿಂತ ಹೆಚ್ಚು ರೈತರು ಪ್ರಯೋಜನವನ್ನು ಪಡೆದುಕೊಂಡಿದ್ದಾರೆ'}
                          </span>
                        </div>
                        <a 
                          href={scheme.applyLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-green-700 hover:text-green-800 font-medium"
                        >
                          {language === 'en' ? 'Apply Now' : 'ಈಗ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ'} 
                          <ExternalLink size={16} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="inline-flex items-center justify-center bg-red-100 rounded-full p-4 mb-4">
              <AlertTriangle className="text-red-500" size={24} />
            </div>
            <h3 className="text-lg font-medium mb-2">
              {language === 'en' ? 'No schemes found' : 'ಯಾವುದೇ ಯೋಜನೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ'}
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              {language === 'en' 
                ? 'We couldn\'t find any schemes matching your search criteria. Please try a different search term or category filter.' 
                : 'ನಿಮ್ಮ ಹುಡುಕಾಟ ಮಾನದಂಡಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುವ ಯಾವುದೇ ಯೋಜನೆಗಳನ್ನು ನಾವು ಕಂಡುಕೊಳ್ಳಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಬೇರೆ ಹುಡುಕಾಟ ಪದ ಅಥವಾ ವರ್ಗ ಫಿಲ್ಟರ್ ಅನ್ನು ಪ್ರಯತ್ನಿಸಿ.'}
            </p>
          </div>
        )}

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start mb-4">
            <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-green-800 text-xl">
                {language === 'en' ? 'Need Help Applying?' : 'ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಸಹಾಯ ಬೇಕೇ?'}
              </h3>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <h4 className="font-medium mb-2">
                {language === 'en' ? 'Visit Local Office' : 'ಸ್ಥಳೀಯ ಕಚೇರಿಗೆ ಭೇಟಿ ನೀಡಿ'}
              </h4>
              <p className="text-sm text-gray-600">
                {language === 'en' 
                  ? 'Visit your nearest agricultural office for in-person assistance' 
                  : 'ವೈಯಕ್ತಿಕ ಸಹಾಯಕ್ಕಾಗಿ ನಿಮ್ಮ ಹತ್ತಿರದ ಕೃಷಿ ಕಚೇರಿಗೆ ಭೇಟಿ ನೀಡಿ'}
              </p>
            </div>
            <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <h4 className="font-medium mb-2">
                {language === 'en' ? 'Call Helpline' : 'ಸಹಾಯವಾಣಿಗೆ ಕರೆ ಮಾಡಿ'}
              </h4>
              <p className="text-sm text-gray-600">
                {language === 'en' 
                  ? 'Call our toll-free helpline at 1800-XXX-XXXX' 
                  : 'ನಮ್ಮ ಉಚಿತ ಸಹಾಯವಾಣಿಗೆ 1800-XXX-XXXX ನಲ್ಲಿ ಕರೆ ಮಾಡಿ'}
              </p>
            </div>
            <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <h4 className="font-medium mb-2">
                {language === 'en' ? 'Online Support' : 'ಆನ್‌ಲೈನ್ ಬೆಂಬಲ'}
              </h4>
              <p className="text-sm text-gray-600">
                {language === 'en' 
                  ? 'Chat with our support team through the AI assistant' 
                  : 'AI ಸಹಾಯಕ ಮೂಲಕ ನಮ್ಮ ಬೆಂಬಲ ತಂಡದೊಂದಿಗೆ ಚಾಟ್ ಮಾಡಿ'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentSchemes;