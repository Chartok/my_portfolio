import React from 'react';
import "../styles/Contact.scss"

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <h2 className="heading text-center">Send me an email at: <span>m.bhimjee@outlook.com</span></h2>
            <p className="text-center">Or fill out the form below:</p>
            <form action="#">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="First and Last Name" />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email Address" />
                </div>
                <div className="form-group">
                    <textarea className="form-control" rows="3" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
        </section>
    );
}
