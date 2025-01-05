import React, { useState } from "react";
import '../styles/contact.css'
import emailjs from "emailjs-com";

const Contact = () => {

    const [focusedInput, setFocusedInput] = useState(null);

    const handleFocus = (inputId) => {
        setFocusedInput(inputId);
    };

    const handleBlur = () => {
        setFocusedInput(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace with your Email.js User ID, Service ID, and Template ID
        const userId = "lTc4AOHlAowYp9Hrs";
        const serviceId = "service_taimxoa";
        const templateId = "template_k9m96av";

        emailjs.sendForm(serviceId, templateId, e.target, userId)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
    <section className="contact" id = "contact">
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Contact me</h1>
                <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
        }}>
                <input type="text" id="firstName" name = "from_name" placeholder="First Name" required 
                onFocus={() => handleFocus('firstName')}
                onBlur={handleBlur}
                style={{
                    borderBottomColor: focusedInput === 'firstName' ? '#cf88ff' : '#fff'
                }}
                ></input>

                <input type="text" id="lastName" name = "lastname" placeholder="Last Name" required
                onFocus={() => handleFocus('lastName')}
                onBlur={handleBlur}
                style={{
                    borderBottomColor: focusedInput === 'lastName' ? '#cf88ff' : '#fff'
                }}
                ></input>
                </div>
                <div style={{
                    display: "flex",
                 flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                }}>
                <input type="email" id="mobile" name = "email" placeholder="Email" required
                onFocus={() => handleFocus('mobile')}
                onBlur={handleBlur}
                style={{
                    borderBottomColor: focusedInput === 'mobile' ? '#cf88ff' : '#fff'
                }}
                ></input>

                <input type="text" id="mobile" name = "mobile" placeholder="Mobile" required
                onFocus={() => handleFocus('mobile')}
                onBlur={handleBlur}
                style={{
                    borderBottomColor: focusedInput === 'mobile' ? '#cf88ff' : '#fff'
                }}
                ></input>
                </div>
                <textarea name="message" placeholder="Type your message here"></textarea>
                {/*<input type="submit" value="send" id="button"></input>*/}
            </form>
        </div>
        
    </section>
    )
}

export default Contact