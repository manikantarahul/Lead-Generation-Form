import { useState } from 'react'
import "./Form.css"
import axios from "axios"
import toast from 'react-hot-toast';
function Form() {

    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({
        Name:"",
        email: "",
        Company:"",
        Message:"",
        
    });
   
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const getNewUser = (e) => {
        e.preventDefault(); 
        // Front-end validation (optional but good practice)
       
        if (
            !formData.Name ||
            !formData.email ||
            !formData.Company||
            !formData.Message 
        ) {
            toast("Please fill  all required fields", {
                style: {
                    background: 'red',
                    color: 'white',
                    fontWeight: "bold",
                    fontFamily: "cursive"
                }
            });
            
        }else{

       

        axios.post("http://localhost:1323/submit-form", formData)
            .then((resp) => {
                
                    if (resp.status === 200 || resp.status === 201) 
                        {
                            toast("Form submitted Sucessfully", {
                            style: {
                                background: 'red',
                                color: 'white',
                                fontWeight: "bold",
                                fontFamily: "cursive"
                        },
                    })
                   
                } else {
                    toast("Failed to submit form", {
                        style: {
                            background: 'red',
                            color: 'white',
                            fontWeight: "bold",
                            fontFamily: "cursive"
                        },
                    })

                }
                setFormData({
                    Name:"",
                    email: "",
                    Company:"",
                    Message:"", 
                });
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            });
        }
    };
    return (
        <div className='main-signup-container'>
            <div className="signup-container">
                <form className="signup-form" >
                    <h2>Signup</h2>
                    <div className="input-group">
                        <input
                            type="text"
                            name="Name"
                            placeholder="Name"
                            value={formData.Name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            name="Company"
                            placeholder="Company"
                            value={formData.Company}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            name="Message"
                            placeholder="Message"
                            value={formData.Message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button  onClick={getNewUser}>submit</button>
                </form>
            </div>

        </div>
    )
}

export default Form