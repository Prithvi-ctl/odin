import "./Form.css";
import { useState } from "react";
function Form({onSubmitData}){
    const [formData, setFormData] = useState({

    name: "",
    title: "", 
    experience: "",  
    education: "",  
    skills: "",  
    projects: ""   
}); 
    

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitData(formData);
       
    }
  return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Full Name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    placeholder="Title" 
                    name="title" 
                    value={formData.title} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    placeholder="Experience" 
                    name="experience" 
                    value={formData.experience} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    placeholder="Education" 
                    name="education" 
                    value={formData.education} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    placeholder="Skills" 
                    name="skills" 
                    value={formData.skills} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    placeholder="Projects" 
                    name="projects" 
                    value={formData.projects} 
                    onChange={handleChange} 
                />
                <button type="submit">Submit Data</button>
            </form>
        </div>)}


export default Form;