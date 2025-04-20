import React from 'react';

const GovHeader = () => {
  return (
    <div className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Left - CM */}
          <div className="flex items-center">
            <img 
              src="https://raitamitra.karnataka.gov.in/assets/images/cm.png" 
              alt="Chief Minister"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="ml-2">
              <h3 className="text-sm font-semibold">SHRI SIDDARAMAIAH</h3>
              <p className="text-xs text-gray-600">Hon'ble Chief Minister | Govt. of Karnataka</p>
            </div>
          </div>

          {/* Center - Department Logo */}
          <div className="flex flex-col items-center text-center">
            <img 
              src="https://raitamitra.karnataka.gov.in/assets/images/emblem.png" 
              alt="Karnataka Government Logo"
              className="h-14 w-auto"
            />
            <div>
              <h2 className="text-lg font-bold">Department of Agriculture(KSDA)</h2>
              <p className="text-sm text-gray-600">Government of Karnataka</p>
            </div>
          </div>

          {/* Right - Agriculture Minister */}
          <div className="flex items-center">
            <div className="mr-2 text-right">
              <h3 className="text-sm font-semibold">Sri N. Chaluvarayaswamy</h3>
              <p className="text-xs text-gray-600">Hon'ble Agriculture Minister | Govt. of Karnataka</p>
            </div>
            <img 
              src="https://raitamitra.karnataka.gov.in/assets/images/agri-min.png" 
              alt="Agriculture Minister"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovHeader;