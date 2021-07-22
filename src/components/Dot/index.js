import React from "react";
//import { Button } from 'react-materialize';
import './style.css';
import {motion} from 'framer-motion';

function Dot() {
    return (
        <motion.button
            whileHover = {{
                scale: 1.25,
                opacity:1,
                backgroundColor: "#048ABF",
                transition: { duration: 0.2 },
            }}
            
            >
        </motion.button>
            
        

    )

}


export default Dot;