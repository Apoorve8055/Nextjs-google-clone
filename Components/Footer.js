import React from 'react'

function Footer() {
    return (
        <div className={`flex flex-col divide-y-[1px] divide-gray-200 mt-auto -mb-0`}>
          <div className="p-3 ">
          <a className="link">India</a>
          </div>
            
      
            <div className="grid sm:grid-cols-2 grid-cols-1">

            <div className="flex space-x-8 p-3 justify-center md:justify-start">
                <a className="link">About</a>
                <a className="link">Advertising</a>
                <a className="link">Business</a>
                <a className="link hidden md:block ">How Search works</a>
            </div>
            
            <div className="flex space-x-8 p-3 justify-center md:justify-end ">
              <a className="link">Privacy</a>
              <a className="link">Terms</a>
              <a className="link">Settings</a>
            </div>

            </div>
          </div>
    )
}

export default Footer;
