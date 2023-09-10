import './contact.css';
import { useState } from 'react';

const Contact = () => {
    const [submitDisplay, setSubmitDisplay] = useState('none');
    const [statusDisplay, setStatusDisplay] = useState('none');
    const [status, setStatus] = useState(<span>Sending...</span>);
    const inputted = (e) => {
        if (!e.target.value) {
            setStatusDisplay('none');
            setSubmitDisplay('none');
            return;
        }
        setSubmitDisplay('block');
    }

    const submit = (e) => {
        e.preventDefault();
        const data = {}
        for (let i of e.target.elements) {
            data[i.id] = i.value;
        }
        if (!(data.email && data.name && data.msg)) {
            return;
        }
        fetch('https://sreenathorg-mail.sreenath.org', {
            method: "POST",
            body: `name=${data.name}&email=${data.email}&msg=${data.msg}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(res => res.json().then(d => {
            if (d.error) {
                setStatus(<span style={{color: "red"}}>Message Failed</span>);
            }
            else {
                setStatus(<span style={{color: "green"}}>Message Sent</span>);
            }
            e.target.reset();
        }));
        setStatusDisplay("block");
    }
    return <div className="contact" id="contact">
        <div className="heading font-primary">Contact Me</div>
        <div className="socials">
            <a href="mailto:sreenathsreekrishna21@gmail.com">
                <img src="/assets/icons/mail.png" alt="E-Mail" className="social" />
            </a>
            <a href="https://github.com/SreenathSreekrishna" target="_blank" rel="noreferrer">
                <img src="/assets/icons/github.png" alt="Github" className="social" />
            </a>
            <a href="https://discord.com/users/933911132408799272" target="_blank" rel="noreferrer">
                <img src="/assets/icons/discord.png" alt="Discord" className="social" />
            </a>
        </div>
        <div className="contact-box">
            <form className="contact-form" onSubmit={submit}>
                <div className="name input">
                    <input type="text" id="name" placeholder="Name" autoComplete="nope" required/>
                </div>
                <div className="email input">
                    <input type="email" id="email" placeholder="Email" autoComplete="nope" required/>
                </div>
                <div className="msg input">
                    <textarea id="msg" placeholder="Type your message here ..." onInput={inputted} />
                    <div className="submit-button" style={{display:submitDisplay}}>
                        <button id="submit" type="submit"></button>
                        <div className="status-msg" style={{display:statusDisplay}}>{status}</div>
                    </div>
                </div>
            </form>
        </div>
    </div>
}

export default Contact;