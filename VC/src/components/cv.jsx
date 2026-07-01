import Form from './Form.jsx';
import {useState} from 'react';

function Cv(){
    const [cvData,setCvData] = useState({
        name: "",
        title: "",
        experience: "",
        education: "",
        skills: "",
        projects: ""
    });

    const handleFormSubmit = (data) =>{
        setCvData(data);
    }

    return(
        <div className="cv-container">
            <Form onSubformData ={handleFormSubmit}/>
            <div className="cv-display">
                <h2>Name:{cvData.name}</h2>
                <h2>Title:{cvData.title}</h2>
                <p><strong>Experience:</strong> {cvData.experience}</p>
                <p><strong>Education:</strong> {cvData.education}</p>
                <p><strong>Skills:</strong> {cvData.skills}</p>
                <p><strong>Projects:</strong> {cvData.projects}</p>
            </div>
        </div>
    )
}

export default Cv;