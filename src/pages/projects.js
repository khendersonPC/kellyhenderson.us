import React, { useState, useEffect } from "react";
//import { Link, useParams } from "react-router-dom";
import CustomSideNav from '../components/CustomSideNav';
import ProjectCard from "../components/ProjectCard";
import {
  Col,
  Row,
} from "react-materialize";

//import "./style.css";
//import "./projectsStyle.css";
//import { motion } from "framer-motion";

function Projects(){
  return (
    <div>
    <CustomSideNav/>
    <div id="portfolio" style={{ backgroundColor: "#F2F7F7", paddingBottom: "5em", paddingLeft: "300px"}}>
    <div className="container">
        
        <Row>
        <Col m={4} s={10}>
            <ProjectCard hrefDeployed= "https://swapify-us.herokuapp.com/" imag="images/swapify.png" title="Swapify" text="Swapify is a web application built with React that allows users to
                                list, connect and swap items with other nearby users." hrefGit= "https://github.com/pfvatterott/Swapify"/>
           </Col>
           <Col m={4} s={10}>
            <ProjectCard hrefDeployed= "https://jab-effects.herokuapp.com/" imag="images/jabs.png" title="Jab Effects" text="Application that surveys users on side
                                effects from COVID vaccines and then allows the user to view commonly experienced
                                symptoms by race, age group, or sex." hrefGit= "https://github.com/krcook1980/Jabs"/>
            </Col>
            {/* <Card hrefDeployed= "https://khendersonpc.github.io/programmingQuiz/" imag={quizImg} title="Interactive Quiz" text="To program this quiz site I learned how to create objects, store them to an array and use JSON." hrefGit= "https://github.com/khendersonPC/programmingQuiz"/> */}
            {/* <Card hrefDeployed= "https://khendersonpc.github.io/employeeDirectory/" imag={employImg} title="Employee Directory" text="A simple app written using React. Fun with arrays and sorting." hrefGit= "https://github.com/khendersonPC/employeeDirectory"/> */}
            <Col m={4} s={10}>
            <ProjectCard hrefDeployed= "https://krcook1980.github.io/Inventory-Organization-Utility/" imag="images/inventory.png" title="Steel Inventory" text="This project was completed for a steel manufacturer who needed help
                                organzing their steelyard. My role was to learn how to use the Google Maps API and
                                create overlays." hrefGit= "https://github.com/krcook1980/Inventory-Organization-Utility"/>
            </Col>
            </Row>
            <Row>
        <Col m={4} s={10}>
            <ProjectCard hrefDeployed= "https://booklistaroo.herokuapp.com/" imag="images/books.png" title="BookListARoo" text="MERN application that allows the user to search for books using the Google Books API and saves them to a database." hrefGit="https://github.com/khendersonPC/bookSearch" />
            </Col>
            <Col m={4} s={10}>
            <ProjectCard hrefDeployed= "https://github.com/khendersonPC/teamSummary" imag="images/team.png" title="Team Build" text="Javascript file built using node and inquirer. Allows a user to build a project team and and index.html file with descriptions of all team members." hrefGit= "https://github.com/khendersonPC/teamSummary"/>
            </Col>
            <Col m={4} s={10}>
            <ProjectCard hrefDeployed= " https://khendersonpc.github.io/weatherApp/" imag="images/weather.png" title="Weather App" text="The focus of this project was to use APIs and local storage. I
                                also
                                added
                                my own images using Adobe Illustrator and animation. I wanted a calm and clean look." hrefGit= "https://github.com/khendersonPC/weatherApp"/>
            
            
        </Col>
        </Row>
              
    </div>
</div>
</div>
    )
}

export default Projects;
