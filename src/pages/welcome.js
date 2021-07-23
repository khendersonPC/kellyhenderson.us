import Dot from "../components/Dot";
import { useState } from 'react';
import {
   Col,
   Row,
} from "react-materialize";
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import CustomSideNav from "../components/CustomSideNav";


function Welcome() {
   const history = useHistory();
   const [touched, setTouched] = useState(false);
   const [pinkTouched, setPinkTouched] = useState(false);
   console.log(pinkTouched);
   //not touched
   if (!touched) {
      if (!pinkTouched) {
         return (
            <div style={{ paddingTop: ".5em", paddingBottom: "0em", paddingLeft: "0px" }}>
               <Row style={{ marginBottom: "5px" }}>
                  <Col s={1} style={{ marginLeft: "0px" }}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
               </Row>

               <Row style={{ marginBottom: "5px" }}>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
               </Row>

               <Row style={{ marginBottom: "5px" }}>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <motion.button
                        // onClick={() => setTouched(true)} 
                        onMouseEnter={() => setTouched(true)} onMouseLeave={() => setTouched(false)}
                        style={{ background: "#F29F05" }}
                        whileHover={{
                           scale: 1.1,
                           opacity: 1,
                           backgroundColor: "#F58530",
                           transition: { duration: 0.2 },
                        }}

                     >
                     </motion.button>


                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
               </Row>

               <Row style={{ marginBottom: "5px" }}>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
               </Row>

               <Row style={{ marginBottom: "5px" }}>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
               </Row>

               <Row style={{ marginBottom: "5px" }}>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
               </Row>

               <Row style={{ marginBottom: "5px" }}>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>

                  </Col>
                  <Col s={1}>
                     <motion.button style={{ backgroundColor: "#F25CAF" }} onClick={() => history.push("/about")} 
                     onMouseEnter={() => setPinkTouched(true)} onMouseLeave={() => setPinkTouched(false)}
                     whileHover={{
                        scale: 1.1,
                        opacity: 1,
                        backgroundColor: "#F500A0",
                        transition: { duration: 0.2 },
                     }}></motion.button>

                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
               </Row>

               <Row style={{ marginBottom: "5px" }}>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
               </Row>

               <Row style={{ marginBottom: "5px" }}>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
                  <Col s={1}>
                     <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
                  </Col>
               </Row>
            </div>
         )
      }
      else{
         return(
            <div style={{ paddingTop: ".5em", paddingBottom: "0em", paddingLeft: "0px" }}>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{ duration: 1 }}
            >
            <CustomSideNav></CustomSideNav>
            </motion.div>
            <Row style={{ marginBottom: "5px" }}>
               <Col s={1} style={{ marginLeft: "0px" }}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>

               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}><button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}><button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}><button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}><button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>               </Col>
               <Col s={1}><button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}><button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}><button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}><button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
            </Row>

            <Row style={{ marginBottom: "5px" }}>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>               </Col>
               <Col s={1}><button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
            </Row>

            <Row style={{ marginBottom: "5px" }}>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
               <button style={{ backgroundColor: '#b6d995' }} ></button>

               </Col>
               <Col s={8}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
                 
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
            </Row>

            <Row style={{ marginBottom: "5px" }}>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
            </Row>

            <Row style={{ marginBottom: "5px" }}>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
            </Row>

            <Row style={{ marginBottom: "5px" }}>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
            </Row>

            <Row style={{ marginBottom: "5px" }}>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
               <motion.button style={{ backgroundColor: "#f15caf" }} onClick={() => history.push("/about")} 
            onMouseEnter={() => setPinkTouched(true)} onMouseLeave={() => setPinkTouched(false)}
            whileHover={{
               scale: 1.1,
               opacity: 1,
               backgroundColor: "#f15caf",
               transition: { duration: 0.2 },
            }}></motion.button>
               
                  {/* <Dot id="pinkDot" hoverColor="#F500A0" color="#F25CAF"></Dot> */}
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
            </Row>

            <Row style={{ marginBottom: "5px" }}>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
            </Row>

            <Row style={{ marginBottom: "5px" }}>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
            </Row>
         </div>


            
         )
      }
   }
   //touched
   else {

      return (
         <div style={{ paddingTop: ".5em", paddingBottom: "0em", paddingLeft: "0px" }}>
            <Row style={{ marginBottom: "5px" }}>
               <Col s={1} style={{ marginLeft: "0px" }}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>

               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}><button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}><button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}><button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}><button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>               </Col>
               <Col s={1}><button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}><button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}><button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}><button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
            </Row>

            <Row style={{ marginBottom: "5px" }}>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>               </Col>
               <Col s={1}><button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
            </Row>

            <Row style={{ marginBottom: "5px" }}>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <motion.button
                     // onClick={() => setTouched(false)} 
                     onMouseEnter={() => setTouched(true)} onMouseLeave={() => setTouched(false)}
                     style={{ background: "#F58530" }}
                     whileHover={{
                        scale: 1.1,
                        opacity: 1,
                        backgroundColor: "#F58530",
                        transition: { duration: 0.2 },
                     }}

                  >
                  </motion.button>



               </Col>
               <Col s={8}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
                  <h2 style={{ color: "#F58530" }}>Hello. My name is Kelly. I like to program.</h2>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
            </Row>

            <Row style={{ marginBottom: "5px" }}>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
            </Row>

            <Row style={{ marginBottom: "5px" }}>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
            </Row>

            <Row style={{ marginBottom: "5px" }}>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
            </Row>

            <Row style={{ marginBottom: "5px" }}>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
               <motion.button
                        // onClick={() => setPinkTouched(true)} 
                        onMouseEnter={() => setPinkTouched(true)} onMouseLeave={() => setPinkTouched(false)}
                        style={{ background: "#f15caf" }}
                        whileHover={{
                           scale: 1.2,
                           opacity: 1,
                           backgroundColor: "#f15caf",
                           transition: { duration: 0.2 },
                        }}

                     >
                     </motion.button>
                  <Dot id="pinkDot" hoverColor="#F500A0" color="#F25CAF"></Dot>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
            </Row>

            <Row style={{ marginBottom: "5px" }}>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
            </Row>

            <Row style={{ marginBottom: "5px" }}>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
               <Col s={1}>
                  <button style={{ backgroundColor: '#b6d995' }} ></button>
               </Col>
            </Row>
         </div>
      )
   }
}
export default Welcome;