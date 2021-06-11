import React from "react";
import { Card, Icon, CardTitle, Col, Row } from 'react-materialize';
//import "../App.css";



function ProjectCard(props) {
    return (
        <div>
        {/* <div className="card" style={{ width: "300px" }}>
            <a href={props.hrefDeployed} target="_blank"><img className="card-img-top" src={props.imag} alt="Card image" style={{ width: "100%" }} /></a>
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.text}</p>
                <a href={props.hrefGit} target="_blank" className="card-link">Github Repo</a>
            </div>
        </div> */}
       
        {/* <Card
            actions={[
                <a key="1" href={props.hrefGit}>Github Repo</a>
            ]}
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image={props.imag}>{props.title}</CardTitle>}
            revealIcon={<Icon>more_vert</Icon>}
        >
            {props.text}
        </Card> */}
       
        <Card
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={props.imag} reveal waves="light"/>}
      reveal={<p>{props.text}</p>}
      revealIcon={<Icon>more_vert</Icon>}
      title={props.title}>
      <p>
      <a href={props.hrefDeployed}>
          Project Link
        </a>
        </p><p>
        <a href={props.hrefGit}>
          GitHub Repo
        </a>
      </p>

</Card>
        </div>
    );

}

// <div class="row">
// <div class="col s12 m7">
//   <div class="card">
//     <div class="card-image">
//       <img src="images/sample-1.jpg">
//       <span class="card-title">Card Title</span>
//     </div>
//     <div class="card-content">
//       <p>I am a very simple card. I am good at containing small bits of information.
//       I am convenient because I require little markup to use effectively.</p>
//     </div>
//     <div class="card-action">
//       <a href="#">This is a link</a>
//     </div>
//   </div>
// </div>
// </div>

export default ProjectCard;