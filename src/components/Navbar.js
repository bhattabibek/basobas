import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import avatar from "../images/image.jpg";
import { IoMoonOutline } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa';
import { IoNotificationsOutline } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';

import {
  CDBNavbar,
  CDBNavBrand,
  CDBNavItem,
  CDBNavLink,
  CDBDropDown,
  CDBDropDownMenu,
  CDBDropDownToggle,
  CDBBtn,
  CDBNavToggle,
  CDBIcon,
  CDBCollapse,
  CDBNavbarNav,
  CDBContainer,
} from 'cdbreact';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';

const Navbar = () => {
  const [collapse2, setCollapse2] = useState(false);

  const bgBlack = {  };

  return (
    <CDBContainer >
      <Router style={{ width: '100%',backgroundColor: 'red', color: '#43ade1' }}>
        <CDBNavbar  scrolling>
          <CDBNavBrand href="/">
        
          </CDBNavBrand>
         
           <div className="search-bar">
           <input className="search-box" style={{ border: "1px solid #ebebea" }} type="text" placeholder="Search" />

      
      </div>
      
      <div className="avatar icons">
  
      <IoMoonOutline size={26}  color="#42ade2" />
      <FaShoppingCart size={26} color="#42ade2" />
      <IoNotificationsOutline color="#42ade2" size={26} />
      <MdDashboard size={26} color="#42ade2" />

        <img width={"50px"} src={avatar} alt="Avatar" />
      </div>
        </CDBNavbar>
      </Router>
    </CDBContainer>
  );
};
export default Navbar;