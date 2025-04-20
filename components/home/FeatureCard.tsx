import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, path }) => {
  const { language } = useTheme();
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={path}
        className="inline-flex items-center text-green-700 hover:text-green-800 font-medium"
      >
        {language === 'en' ? 'Learn More' : 'ಹೆಚ್ಚು ತಿಳಿಯಿರಿ'} 
        <ArrowRight className="ml-2 w-4 h-4" />
      </Link>
    </div>
  );
};

export default FeatureCard;