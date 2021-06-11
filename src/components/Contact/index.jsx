import React from 'react';

function Contact(props) {
    return (
        <div>
            <div>
                <p>Phone: +84903330994</p>
                <p>Email: ntanduc94@gmail.com</p>
                <p>Follow me:
                    <a href="#">fb</a>
                    <a href="#">ln</a>
                    <a href="#">github</a>
                </p>
            </div>
            <form>
                <h2>SEND ME A NOTE</h2>
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="email" placeholder="Email" />
                <textarea name="description" placeholder="Tell me more about your needs..." rows="10" />
                <button>Send Message</button>
            </form>
        </div>
    );
}

export default Contact;