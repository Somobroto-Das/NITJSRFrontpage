import React, { useState } from 'react';
import { Drawer } from "antd";
import logo from '../assets/logo_new1.85cf87db.png';

function Navbar() {
  const commonStyles = {
    fontSize: '2.1rem',
    color: '#274187',
    fontWeight: 800,
    letterSpacing: '0.5px',
  };

  const [visible, setVisible] = useState(false);

  return (
    <div className="navbar fixed top-0 z-50 bg-base-100 max-w-full">
      <div className="w-full px-20 flex justify-between items-center">
        <div className="logo1 py-4 style={{marginLeft:'175px'}}">
          <img alt="log" src={logo} style={{ maxHeight: '100px', marginLeft: '-15px' }}/>
        </div>
        <div className="CollegeName" style={{marginLeft:'150px'}}>
          <div className='h2 mx-5 px-20'>
            <h2 style={commonStyles} className="sc-fKFyDc ikLYKH">
              राष्ट्रीय प्रौद्योगिकी संस्थान जमशेदपुर
            </h2>
          </div>
          <h1 style={commonStyles} className="sc-fKFyDc iXTdBg">
            National Institute of Technology Jamshedpur
          </h1>
        </div>
        <div className="rescore-drawer__handler mx-auto px-15">
          <button className="btn btn-info my-3 px-4" onClick={() => {setVisible(true)}}>
            Click Here!!
          </button>
          <Drawer
            visible={visible}
            closable={false}
            onClose={() => setVisible(false)}
          >
            {["Institute","Administration","Academics","Students","Research","People","Tender","Notices","Cells","Central Facilities"].map((item,index) => (
              <div key={index}>
                <div className="dropdown w-100">
                  <div tabIndex={0} role="button" className="btn m-1 bg-blue-300 hover:bg-blue-800 text-black">{item}</div>
                  <ul tabIndex={0} className="menu dropdown-content bg-blue-800 z-[1] w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                  </ul>
                </div>
              </div>
            ))}
            <button className="btn btn-info my-3 px-4" onClick={() => {setVisible(false)}}>
              Close
            </button>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
