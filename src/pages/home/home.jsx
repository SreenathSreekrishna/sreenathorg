import './home.css';

const Home = () => {
    return <div className="home">
        <div className="left-side">
            <div className="text font-primary">Hi, I'm Sreenath</div>
            <div className="nav">
                <div className="nav-item">
                    <a href="#about">About Me</a>
                </div>
                <div className="nav-item">
                    <a href="#skills">My Skills</a>
                </div>
                <div className="nav-item">
                    <a href="#projects">My Projects</a>
                </div>
                <div className="nav-item">
                    <a href="#awards">My Awards</a>
                </div>
            </div>
        </div>

        <div className="right-side">
            <div className="img"></div>
            <div className="home-contact">
                <a href="#contact">Contact Me</a>
            </div>
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
        </div>
    </div>;
}

export default Home;