import React, { useState, useEffect } from "react";
import CustomSideNav from '../components/CustomSideNav';
//import { Link, useParams } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import {
  Col,
  Row,
} from "react-materialize";
function About(){
    return(
      <div>
        <CustomSideNav/>
      
                <div style={{ backgroundColor: "#F2F7F7", paddingBottom: "5em", paddingLeft: "300px"}}>
             
                    Currently, I teach computer science (Java, Python) to rowdy groups of teenagers and have been
                    doing so for 15 years. As
                    such,
                    I enjoy a challenge. I am a pro-active problem-solver who likes to use time effectively and
                    efficiently.
                    <br/><br/>
                    I am passionate about getting more girls into computer science classes and thus, more women into
                    the
                    field. I believe in practicing what I preach. <span style={{color:"#2C4373"}}><strong>I am ready to
                            make the jump from teaching to industry.</strong></span><br/><br/>

                    I appreciate perfectly groomed mountain trails, workouts that leave my body feeling like jelly
                    and
                    getting to know cities all over the world.<br/><br/>
                    <span
                        style={{fontSize: "x-large; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>I
                        constantly strive to learn more and do better.</span>
                </div>
                </div>
                )

            }
            export default About;