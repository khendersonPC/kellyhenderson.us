import React from "react";
//import { Button } from 'react-materialize';
import './style.css';
import {motion} from 'framer-motion';

function Dot(props) {
    return (
        <motion.button
            style={{background: props.color}}
            whileHover = {{
                scale: 1.1,
                // opacity:1,
                backgroundColor: props.hoverColor,
                transition: { duration: 0.2 },
            }}
            
            >
        </motion.button>
            
        

    )

}


export default Dot;