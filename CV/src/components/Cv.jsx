import {useState} from 'react';
import Form from './Form.jsx';

function Cv(){
    const [cvData,setCvData] = useState({
        name:"John Doe",
        title:"Software Engineer",
        experience:"5 years of experience in web development",
        education:"Bachelor's degree in Computer",
        skills:"JavaScript, React, Node.js",
        projects:"Project A, Project B, Project C"

    });

    const handleFormSubmit = (submittedData) =>{
        setCvData(submittedData);
    }

    return(
        <div className="cv-container">
            <Form onSubmitData={handleFormSubmit}/>
            <div className="cv-display">
                <h1>{cvData.name}</h1>
                <h2>{cvData.title}</h2>
                <p><strong>Experience:</strong> {cvData.experience}</p>
                <p><strong>Education:</strong> {cvData.education}</p>
                <p><strong>Skills:</strong> {cvData.skills}</p>
                <p><strong>Projects:</strong> {cvData.projects}</p>
            </div>
        </div>
)       
    }


    export default Cv;
