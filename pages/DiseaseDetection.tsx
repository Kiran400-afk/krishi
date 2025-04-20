import React, { useState, useEffect } from 'react';
import { Upload, Camera, Info, AlertTriangle, Scan, PlusCircle, CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const DiseaseDetection = () => {
  const { language } = useTheme();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{
    detected: boolean;
    disease: string;
    confidence: number;
    treatment: string;
    prevention: string;
  } | null>(null);

  useEffect(() => {
    document.title = language === 'en' ? 'KrishiConnect - Disease Detection' : 'ಕೃಷಿ ಕನೆಕ್ಟ್ - ರೋಗ ಪತ್ತೆ';
  }, [language]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
        setAnalysisResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraCapture = () => {
    // In a real app, this would activate the device camera
    alert(language === 'en' ? 'Camera functionality would be activated here' : 'ಕ್ಯಾಮೆರಾ ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಇಲ್ಲಿ ಸಕ್ರಿಯಗೊಳಿಸಲಾಗುತ್ತದೆ');
  };

  const analyzeImage = () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis with setTimeout
    setTimeout(() => {
      // Mock result - in a real app this would come from an AI model
      setAnalysisResult({
        detected: true,
        disease: language === 'en' ? 'Leaf Blight' : 'ಎಲೆ ಬ್ಲೈಟ್',
        confidence: 92,
        treatment: language === 'en' 
          ? 'Apply copper-based fungicide early in the morning. Remove and destroy infected leaves.'
          : 'ಬೆಳಿಗ್ಗೆ ಬೇಗನೆ ತಾಮ್ರ ಆಧಾರಿತ ಶಿಲೀಂಧ್ರನಾಶಕವನ್ನು ಹಾಕಿ. ಸೋಂಕಿತ ಎಲೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ ಮತ್ತು ನಾಶಪಡಿಸಿ.',
        prevention: language === 'en'
          ? 'Maintain proper spacing between plants for good air circulation. Avoid overhead irrigation that can spread spores.'
          : 'ಉತ್ತಮ ಗಾಳಿ ಸಂಚಾರಕ್ಕಾಗಿ ಸಸ್ಯಗಳ ನಡುವೆ ಸರಿಯಾದ ಅಂತರವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಿ. ಬೀಜಗಳನ್ನು ಹರಡಬಹುದಾದ ಮೇಲಿನಿಂದ ನೀರಾವರಿಯನ್ನು ತಪ್ಪಿಸಿ.'
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const resetAnalysis = () => {
    setSelectedImage(null);
    setAnalysisResult(null);
  };

  const commonDiseases = [
    {
      name: { en: 'Leaf Blight', kn: 'ಎಲೆ ಬ್ಲೈಟ್' },
      crops: { en: 'Rice, Maize, Tomato', kn: 'ಭತ್ತ, ಮೆಕ್ಕೆಜೋಳ, ಟೊಮ್ಯಾಟೊ' },
      symptoms: { 
        en: 'Brown or black lesions on leaves that expand rapidly', 
        kn: 'ಎಲೆಗಳ ಮೇಲೆ ವೇಗವಾಗಿ ವಿಸ್ತರಿಸುವ ಕಂದು ಅಥವಾ ಕಪ್ಪು ಗಾಯಗಳು' 
      }
    },
    {
      name: { en: 'Powdery Mildew', kn: 'ಪೌಡರಿ ಮಿಲ್ಡ್ಯೂ' },
      crops: { en: 'Grapes, Mango, Cucumber', kn: 'ದ್ರಾಕ್ಷಿ, ಮಾವು, ಸೌತೆಕಾಯಿ' },
      symptoms: { 
        en: 'White powdery coating on leaves and stems', 
        kn: 'ಎಲೆಗಳು ಮತ್ತು ಕಾಂಡಗಳ ಮೇಲೆ ಬಿಳಿ ಪುಡಿ ಲೇಪನ' 
      }
    },
    {
      name: { en: 'Bacterial Wilt', kn: 'ಬ್ಯಾಕ್ಟೀರಿಯಲ್ ವಿಲ್ಟ್' },
      crops: { en: 'Tomato, Brinjal, Potato', kn: 'ಟೊಮ್ಯಾಟೊ, ಬದನೆ, ಆಲೂಗಡ್ಡೆ' },
      symptoms: { 
        en: 'Sudden wilting of the plant even when soil is moist', 
        kn: 'ಮಣ್ಣು ತೇವವಾಗಿದ್ದರೂ ಸಸ್ಯದ ಇದಕ್ಕಿದ್ದಂತೆ ಬಾಡುವಿಕೆ' 
      }
    }
  ];

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          {language === 'en' ? 'AI Crop Disease Detection' : 'AI ಬೆಳೆ ರೋಗ ಪತ್ತೆ'}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold mb-2">
                  {language === 'en' ? 'Upload Plant Image' : 'ಸಸ್ಯದ ಚಿತ್ರವನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ'}
                </h2>
                <p className="text-gray-600 mb-4">
                  {language === 'en' 
                    ? 'Upload a clear image of the affected plant part for accurate disease detection' 
                    : 'ನಿಖರವಾದ ರೋಗ ಪತ್ತೆಗಾಗಿ ಪ್ರಭಾವಿತ ಸಸ್ಯದ ಭಾಗದ ಸ್ಪಷ್ಟ ಚಿತ್ರವನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ'}
                </p>

                {!selectedImage ? (
                  <div className="mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-10 h-10 text-green-600 mb-3" />
                          <p className="mb-2 text-sm text-gray-700 font-medium">
                            {language === 'en' ? 'Upload from device' : 'ಸಾಧನದಿಂದ ಅಪ್ಲೋಡ್ ಮಾಡಿ'}
                          </p>
                          <p className="text-xs text-gray-500">
                            {language === 'en' ? 'PNG or JPG (MAX. 10MB)' : 'PNG ಅಥವಾ JPG (ಗರಿಷ್ಠ 10MB)'}
                          </p>
                        </div>
                        <input 
                          type="file" 
                          className="hidden" 
                          accept="image/png, image/jpeg" 
                          onChange={handleImageUpload}
                        />
                      </label>
                      
                      <button 
                        onClick={handleCameraCapture}
                        className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <Camera className="w-10 h-10 text-green-600 mb-3" />
                        <p className="mb-2 text-sm text-gray-700 font-medium">
                          {language === 'en' ? 'Take a photo' : 'ಫೋಟೋ ತೆಗೆಯಿರಿ'}
                        </p>
                        <p className="text-xs text-gray-500">
                          {language === 'en' ? 'Use your device camera' : 'ನಿಮ್ಮ ಸಾಧನದ ಕ್ಯಾಮೆರಾವನ್ನು ಬಳಸಿ'}
                        </p>
                      </button>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-start">
                        <Info className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-blue-800">
                            {language === 'en' ? 'Tips for best results' : 'ಉತ್ತಮ ಫಲಿತಾಂಶಗಳಿಗೆ ಸಲಹೆಗಳು'}
                          </h3>
                          <ul className="mt-2 text-blue-700 text-sm space-y-1">
                            <li>
                              {language === 'en' 
                                ? '• Ensure good lighting and focus on the affected area' 
                                : '• ಉತ್ತಮ ಬೆಳಕನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ ಮತ್ತು ಪ್ರಭಾವಿತ ಪ್ರದೇಶದ ಮೇಲೆ ಗಮನ ಕೇಂದ್ರೀಕರಿಸಿ'}
                            </li>
                            <li>
                              {language === 'en' 
                                ? '• Include both healthy and diseased parts for comparison' 
                                : '• ಹೋಲಿಕೆಗಾಗಿ ಆರೋಗ್ಯಕರ ಮತ್ತು ರೋಗಗ್ರಸ್ತ ಭಾಗಗಳೆರಡನ್ನೂ ಸೇರಿಸಿ'}
                            </li>
                            <li>
                              {language === 'en' 
                                ? '• Take multiple photos from different angles if needed' 
                                : '• ಅಗತ್ಯವಿದ್ದರೆ ವಿಭಿನ್ನ ಕೋನಗಳಿಂದ ಬಹು ಫೋಟೋಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ'}
                            </li>
                            <li>
                              {language === 'en' 
                                ? '• Avoid shadows or glare on the plant surface' 
                                : '• ಸಸ್ಯದ ಮೇಲ್ಮೈಯಲ್ಲಿ ನೆರಳು ಅಥವಾ ಹೊಳಪನ್ನು ತಪ್ಪಿಸಿ'}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4">
                    <div className="mb-6 relative">
                      <img 
                        src={selectedImage} 
                        alt="Selected plant" 
                        className="w-full max-h-96 object-contain rounded-lg border"
                      />
                      <button
                        onClick={resetAnalysis}
                        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                      >
                        <AlertTriangle size={18} className="text-red-500" />
                      </button>
                    </div>
                    
                    {!analysisResult && (
                      <div className="flex justify-center">
                        <button
                          onClick={analyzeImage}
                          disabled={isAnalyzing}
                          className={`flex items-center px-6 py-3 ${
                            isAnalyzing 
                              ? 'bg-gray-400 cursor-not-allowed' 
                              : 'bg-green-700 hover:bg-green-800'
                          } text-white font-medium rounded-lg transition-colors`}
                        >
                          {isAnalyzing ? (
                            <>
                              <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                              {language === 'en' ? 'Analyzing...' : 'ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...'}
                            </>
                          ) : (
                            <>
                              <Scan size={20} className="mr-2" />
                              {language === 'en' ? 'Analyze Image' : 'ಚಿತ್ರವನ್ನು ವಿಶ್ಲೇಷಿಸಿ'}
                            </>
                          )}
                        </button>
                      </div>
                    )}
                    
                    {analysisResult && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-start mb-4">
                          <CheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h3 className="font-medium text-green-800 text-lg">
                              {language === 'en' ? 'Analysis Complete' : 'ವಿಶ್ಲೇಷಣೆ ಪೂರ್ಣಗೊಂಡಿದೆ'}
                            </h3>
                            <p className="text-green-700 text-sm">
                              {language === 'en' 
                                ? `Detected with ${analysisResult.confidence}% confidence` 
                                : `${analysisResult.confidence}% ವಿಶ್ವಾಸದೊಂದಿಗೆ ಪತ್ತೆಯಾಗಿದೆ`}
                            </p>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">
                            {language === 'en' ? 'Detected Disease:' : 'ಪತ್ತೆಯಾದ ರೋಗ:'}
                          </h4>
                          <p className="text-lg font-bold text-red-600 mb-2">{analysisResult.disease}</p>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">
                            {language === 'en' ? 'Recommended Treatment:' : 'ಶಿಫಾರಸು ಮಾಡಿದ ಚಿಕಿತ್ಸೆ:'}
                          </h4>
                          <p className="text-gray-800">{analysisResult.treatment}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">
                            {language === 'en' ? 'Prevention:' : 'ತಡೆಗಟ್ಟುವಿಕೆ:'}
                          </h4>
                          <p className="text-gray-800">{analysisResult.prevention}</p>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <button
                            onClick={resetAnalysis}
                            className="flex items-center px-6 py-2 border-2 border-green-700 text-green-700 font-medium rounded-lg hover:bg-green-50 transition-colors"
                          >
                            <PlusCircle size={18} className="mr-2" />
                            {language === 'en' ? 'Analyze Another Image' : 'ಮತ್ತೊಂದು ಚಿತ್ರವನ್ನು ವಿಶ್ಲೇಷಿಸಿ'}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-6 border-b bg-green-50">
                <h2 className="text-xl font-semibold">
                  {language === 'en' ? 'Common Crop Diseases' : 'ಸಾಮಾನ್ಯ ಬೆಳೆ ರೋಗಗಳು'}
                </h2>
              </div>
              <div className="p-4">
                <ul className="divide-y">
                  {commonDiseases.map((disease, index) => (
                    <li key={index} className="py-4">
                      <h3 className="font-semibold text-green-800 mb-1">
                        {language === 'en' ? disease.name.en : disease.name.kn}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        <span className="font-medium">
                          {language === 'en' ? 'Affects: ' : 'ಪ್ರಭಾವ: '}
                        </span>
                        {language === 'en' ? disease.crops.en : disease.crops.kn}
                      </p>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">
                          {language === 'en' ? 'Symptoms: ' : 'ಲಕ್ಷಣಗಳು: '}
                        </span>
                        {language === 'en' ? disease.symptoms.en : disease.symptoms.kn}
                      </p>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4">
                  <button className="w-full py-2 bg-green-700 hover:bg-green-800 text-white rounded-md transition-colors">
                    {language === 'en' ? 'View All Diseases' : 'ಎಲ್ಲಾ ರೋಗಗಳನ್ನು ವೀಕ್ಷಿಸಿ'}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 bg-yellow-50">
                <h2 className="text-lg font-semibold mb-2">
                  {language === 'en' ? 'Need Expert Help?' : 'ತಜ್ಞರ ಸಹಾಯ ಬೇಕೇ?'}
                </h2>
                <p className="text-sm text-gray-700 mb-4">
                  {language === 'en' 
                    ? 'Connect with agricultural experts for personalized advice' 
                    : 'ವೈಯಕ್ತಿಕ ಸಲಹೆಗಾಗಿ ಕೃಷಿ ತಜ್ಞರೊಂದಿಗೆ ಸಂಪರ್ಕ ಹೊಂದಿ'}
                </p>
                <button className="w-full py-2 border border-green-700 text-green-700 rounded-md hover:bg-green-50 transition-colors">
                  {language === 'en' ? 'Contact Expert' : 'ತಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಿ'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetection;