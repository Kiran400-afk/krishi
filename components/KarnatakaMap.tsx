// @ts-nocheck
import React from 'react';

const KARNATAKA_DISTRICTS = [
  'Bagalkot', 'Ballari', 'Belagavi', 'Bengaluru Rural', 'Bengaluru Urban', 'Bidar',
  'Chamarajanagar', 'Chikkaballapur', 'Chikkamagaluru', 'Chitradurga', 'Dakshina Kannada',
  'Davanagere', 'Dharwad', 'Gadag', 'Hassan', 'Haveri', 'Kalaburagi', 'Kodagu',
  'Kolar', 'Koppal', 'Mandya', 'Mysuru', 'Raichur', 'Ramanagara', 'Shivamogga',
  'Tumakuru', 'Udupi', 'Uttara Kannada', 'Vijayapura', 'Yadgir'
];

const KarnatakaMap = () => {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-2xl border-4 border-blue-200 animate-fade-in bg-white flex flex-col items-center">
      {/* Embedded live satellite map */}
      <div className="w-full max-w-2xl aspect-video mb-6 border-b-2 border-green-200">
        <iframe
          src="https://satellites.pro/#5.399252,85.319824,5"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Karnataka Satellite Map"
          className="w-full h-full rounded-t-xl"
        />
      </div>
      {/* Live weather for all districts */}
      <div className="w-full max-w-2xl px-4 py-6">
        <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">Live Weather in Karnataka Districts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {KARNATAKA_DISTRICTS.map((district) => (
            <div key={district} className="flex items-center justify-between bg-green-50 rounded-lg shadow p-3">
              <span className="font-semibold text-gray-800">{district}</span>
              <span className="text-green-700 font-mono" id={`weather-${district.replace(/\s/g, '')}`}>Loading...</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KarnatakaMap;