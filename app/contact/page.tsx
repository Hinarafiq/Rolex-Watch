import React from "react";

const Contact = () => {
    return (
        <div>
            <section className="contact">
                <h2 className="fade-in">Contact Us</h2>
                <form>
                    <input type="text" placeholder="Enter your full name" required/>
                    <input type="email" placeholder="Enter your email address" required/>
                    <input type="text" placeholder="Enter your phone number"/>
                    <textarea placeholder="Enter your message" rows={5} required></textarea>
                    <button type="submit">Send Your Message.</button>
                </form>
            </section>
        </div>
    )
}

export default Contact