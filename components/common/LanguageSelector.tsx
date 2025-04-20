import React from 'react';
import { Globe } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useTheme();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'kn' : 'en')}
      className="flex items-center space-x-2 text-gray-700 hover:text-green-700 transition-colors"
    >
      <Globe size={18} />
      <span>{language === 'en' ? 'ಕನ್ನಡ' : 'English'}</span>
    </button>
  );
};

export default LanguageSelector;