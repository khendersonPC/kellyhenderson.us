import React from "react";
//import { Link } from "react-router-dom";
//import "./style.css";
import 'materialize-css';
import { SideNav, SideNavItem } from 'react-materialize';

//import { Icon } from "react-materialize";
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function CustomSideNav() {
  return (

    
      <SideNav

        style={{ background: "#f15caf" }}

      >


      
      <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
          <a href="welcome">
            <img src="images/IMG_300.jpg" width="200px" height="200px" alt="" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
          </a>
        </div>
        {/* <SideNavItem
      user={{
        //background: '../../../public/images/IMG_300.jpg',
        email: 'futsaldevotee@gmail.com',
        image: 'images/IMG_300.jpg',
        name: 'Kelly Henderson'
      }}
      userView
    /> */}
        <SideNavItem href="/about">
          About Me
      </SideNavItem>
        <SideNavItem href="/projects">
          Projects
      </SideNavItem>
        <SideNavItem href="/contact">
          Contact
      </SideNavItem>
        <SideNavItem href="files/KellyHendersonResume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
      </SideNavItem>
        <div style={{ margin: "auto", width: "50%", paddingBottom: "5.5em", paddingTop: "40px" }}>

          <a href="mailto:futsaldevotee@gmail.com"><i className="fa fa-envelope-o" style={{ fontSize: "26px", color: "black", paddingLeft: "0.5em" }} /></a>
          <a href="https://github.com/khendersonPC" target="_blank"><i className="fa fa-github" style={{ fontSize: "26px", color: "black", paddingLeft: "0.5em" }} /></a>
          <a href="http://www.linkedin.com/in/kelly-henderson-9b353016a" target="_blank"><i className="fa fa-linkedin" style={{ fontSize: "26px", color: "black", paddingLeft: "0.5em" }} /></a>
          <a href="https://www.facebook.com/kelly.henderson.3975/" target="_blank"><i className='fa fa-facebook-official' style={{ fontSize: "26px", color: "black", paddingLeft: "0.5em" }} /></a>

        </div>

      </SideNav>
    
  )
}

export default CustomSideNav;
