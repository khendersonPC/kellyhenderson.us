import Dot from "../components/Dot";
import { useState } from 'react';
import {
   Col,
   Row,
} from "react-materialize";
import { motion } from 'framer-motion';


function Welcome() {
   const [touched, setTouched] = useState(false);

   //not touched
   if (!touched) {
      return (
         <div style={{ paddingBottom: "0em", paddingLeft: "0px" }}>
            <Row style={{ marginBottom: "0px" }}>
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

            <Row style={{ marginBottom: "0px" }}>
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

            <Row style={{ marginBottom: "0px" }}>
               <Col s={1}>
                  <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
               </Col>
               <Col s={1}>
                  <motion.button
                     onClicked={() => setTouched(true)} onMouseEnter={() => setTouched(true)} onMouseLeave={() => setTouched(false)}
                     style={{ background: "#F29F05" }}
                     whileHover={{
                        scale: 1.25,
                        opacity: 1,
                        backgroundColor: "#F58530",
                        transition: { duration: 0.2 },
                     }}

                  >
                  </motion.button>
                  {/* <button style={{backgroundColor: "#F29F05"}} onClicked={() => setTouched(true)} onMouseEnter={() => setTouched(true)} onMouseLeave={() => setTouched(false)}></button> */}
                  {/* <Dot id = "orangeDot" hoverColor="#F58530" color="#F29F05"></Dot> */}
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

            <Row style={{ marginBottom: "0px" }}>
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

            <Row style={{ marginBottom: "0px" }}>
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

            <Row style={{ marginBottom: "0px" }}>
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

            <Row style={{ marginBottom: "0px" }}>
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
                  <Dot id="pinkDot" hoverColor="#F500A0" color="#F25CAF"></Dot>
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

            <Row style={{ marginBottom: "0px" }}>
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

            <Row style={{ marginBottom: "0px" }}>
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
   //touched
   else {

      return (
         <div style={{ paddingBottom: "0em", paddingLeft: "0px" }}>
            <Row style={{ marginBottom: "0px" }}>
               <Col s={1} style={{ marginLeft: "0px" }}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}><Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}><Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}><Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}><Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>               </Col>
               <Col s={1}><Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}><Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}><Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}><Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
            </Row>

            <Row style={{ marginBottom: "0px" }}>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>               </Col>
               <Col s={1}><Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#048ABF" color="#06b2d8"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
            </Row>

            <Row style={{ marginBottom: "0px" }}>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
               <motion.button
                     onClicked={() => setTouched(true)} onMouseEnter={() => setTouched(true)} onMouseLeave={() => setTouched(false)}
                     style={{ background: "#F58530" }}
                     whileHover={{
                        scale: 1.25,
                        opacity: 1,
                        backgroundColor: "#F58530",
                        transition: { duration: 0.2 },
                     }}

                  >
                  </motion.button>
                  {/* <button style={{ backgroundColor: "#F58530" }} onClicked={() => setTouched(true)} onMouseEnter={() => setTouched(true)} onMouseLeave={() => setTouched(false)}></button> */}
                  {/* <Dot id = "orangeDot" hoverColor="#F58530" color="#F29F05"></Dot> */}

               </Col>
               <Col s={8}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
                  <h2 style={{ color: "#F58530" }}>Hello. My name is Kelly. I like to program.</h2>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
            </Row>

            <Row style={{ marginBottom: "0px" }}>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
            </Row>

            <Row style={{ marginBottom: "0px" }}>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
            </Row>

            <Row style={{ marginBottom: "0px" }}>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
            </Row>

            <Row style={{ marginBottom: "0px" }}>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot id="pinkDot" hoverColor="#F500A0" color="#F25CAF"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
            </Row>

            <Row style={{ marginBottom: "0px" }}>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
            </Row>

            <Row style={{ marginBottom: "0px" }}>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
               <Col s={1}>
                  <Dot hoverColor="#b6d995" color="#b6d995"></Dot>
               </Col>
            </Row>
         </div>
      )
   }
}
export default Welcome;