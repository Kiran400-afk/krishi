import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Mic, Image, Volume2 } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface ChatAssistantProps {
  show: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const ChatAssistant: React.FC<ChatAssistantProps> = ({ show, onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { language } = useTheme();

  const initialMessage: Message = {
    id: '1',
    text: language === 'en' 
      ? 'Hello! I\'m your KrishiConnect Assistant. How can I help you today with farming, crops, or government schemes?' 
      : 'ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ ಕೃಷಿ ಕನೆಕ್ಟ್ ಸಹಾಯಕ. ಕೃಷಿ, ಬೆಳೆಗಳು ಅಥವಾ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?',
    sender: 'assistant',
    timestamp: new Date(),
  };

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([initialMessage]);
    }
  }, [language]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, show]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, newUserMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = {
        en: [
          "I'm checking the latest data for you.",
          "Based on your soil type, rice and sugarcane would be ideal crops for this season.",
          "The current market price for tomatoes is ₹25/kg in Bangalore.",
          "I recommend applying for the PM-KISAN scheme. The next application period opens next week.",
          "Your crop appears to have leaf blight. I suggest using neem oil as an organic treatment."
        ],
        kn: [
          "ನಾನು ನಿಮಗಾಗಿ ಇತ್ತೀಚಿನ ಡೇಟಾವನ್ನು ಪರಿಶೀಲಿಸುತ್ತಿದ್ದೇನೆ.",
          "ನಿಮ್ಮ ಮಣ್ಣಿನ ಪ್ರಕಾರ, ಈ ಋತುವಿನಲ್ಲಿ ಭತ್ತ ಮತ್ತು ಕಬ್ಬು ಆದರ್ಶ ಬೆಳೆಗಳಾಗಿರುತ್ತವೆ.",
          "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಟೊಮ್ಯಾಟೋಗಳ ಪ್ರಸ್ತುತ ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ₹25/ಕೆಜಿ.",
          "ನಾನು ಪಿಎಂ-ಕಿಸಾನ್ ಯೋಜನೆಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಶಿಫಾರಸು ಮಾಡುತ್ತೇನೆ. ಮುಂದಿನ ಅಪ್ಲಿಕೇಶನ್ ಅವಧಿ ಮುಂದಿನ ವಾರ ಆರಂಭವಾಗುತ್ತದೆ.",
          "ನಿಮ್ಮ ಬೆಳೆಯು ಎಲೆ ಬ್ಲೈಟ್ ಅನ್ನು ಹೊಂದಿರುವಂತೆ ಕಾಣುತ್ತದೆ. ಸಾವಯವ ಚಿಕಿತ್ಸೆಯಾಗಿ ಬೇವಿನ ಎಣ್ಣೆಯನ್ನು ಬಳಸಲು ನಾನು ಸಲಹೆ ನೀಡುತ್ತೇನೆ."
        ]
      };

      const randomIndex = Math.floor(Math.random() * responses[language].length);
      const newAssistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[language][randomIndex],
        sender: 'assistant',
        timestamp: new Date(),
      };

      setMessages([...messages, newUserMessage, newAssistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleVoiceInput = () => {
    setIsRecording(!isRecording);
    // In a real implementation, this would connect to speech recognition API
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false);
        setInput(language === 'en' ? 'What crops are best for red soil?' : 'ಕೆಂಪು ಮಣ್ಣಿಗೆ ಯಾವ ಬೆಳೆಗಳು ಉತ್ತಮ?');
      }, 3000);
    }
  };

  const handleImageUpload = () => {
    // In a real implementation, this would open a file upload dialog
    alert(language === 'en' ? 'Image upload feature coming soon!' : 'ಚಿತ್ರ ಅಪ್ಲೋಡ್ ವೈಶಿಷ್ಟ್ಯವು ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ!');
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 p-4">
      <div className="bg-white rounded-lg w-full max-w-md flex flex-col h-[80vh] shadow-2xl">
        <div className="bg-green-700 text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
          <h3 className="font-semibold">
            {language === 'en' ? 'AI Farm Assistant' : 'ಕೃಷಿ ಸಹಾಯಕ'}
          </h3>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <X size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 ${
                message.sender === 'user' ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block rounded-lg px-4 py-2 max-w-[80%] ${
                  message.sender === 'user'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                <p>{message.text}</p>
                <p className="text-xs mt-1 opacity-70">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center space-x-2 text-left mb-4">
              <div className="inline-block rounded-lg px-4 py-2 bg-gray-200 text-gray-800">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="p-4 border-t">
          <div className="flex items-center space-x-2">
            <button
              onClick={handleVoiceInput}
              className={`p-2 rounded-full ${
                isRecording ? 'bg-red-500 text-white animate-pulse' : 'bg-gray-200'
              }`}
              aria-label="Voice input"
            >
              <Mic size={20} />
            </button>
            <button
              onClick={handleImageUpload}
              className="p-2 rounded-full bg-gray-200"
              aria-label="Upload image"
            >
              <Image size={20} />
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={language === 'en' ? 'Type your message...' : 'ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಟೈಪ್ ಮಾಡಿ...'}
              className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleSendMessage}
              disabled={input.trim() === ''}
              className={`p-2 rounded-full ${
                input.trim() === '' ? 'bg-gray-200 text-gray-500' : 'bg-green-600 text-white'
              }`}
              aria-label="Send message"
            >
              <Send size={20} />
            </button>
          </div>
          {isRecording && (
            <div className="text-center mt-2 text-sm text-red-500">
              {language === 'en' ? 'Listening...' : 'ಆಲಿಸುತ್ತಿದೆ...'}
            </div>
          )}
          <div className="mt-2 flex justify-center">
            <button className="text-xs text-gray-500 flex items-center">
              <Volume2 size={14} className="mr-1" />
              {language === 'en' ? 'Text to speech enabled' : 'ಧ್ವನಿ ಮೂಲಕ ಉತ್ತರ ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatAssistant;