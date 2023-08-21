import React from 'react';

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';
import image from "../images/logos.png";
import { FaUser } from 'react-icons/fa';

const Sidebar = () => {
  

  return (
      <CDBSidebar  textColor="#fff" backgroundColor="#1064bb">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}><img width="150px" src={image}/></CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu style={{ marginLeft: '10px' }}>
            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note"> Profile</CDBSidebarMenuItem>
           



           
            <div className="sidebar-text">
       
        <div className="separator"></div>
        
      </div>
            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">Profile</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">Profile</CDBSidebarMenuItem>
            <div className="sidebar-text"/>
       
        <div className="separator"></div>
            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">Profile</CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

       
      </CDBSidebar>
      
  );
};

export default Sidebar;