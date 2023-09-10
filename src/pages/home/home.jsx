import './home.css';

const Home = () => {
    return <div className="home">
        <div className="left-side">
            <div className="text font-primary">Hi, I'm Sreenath</div>
            <div className="nav">
                <div className="nav-item">About Me</div>
                <div className="nav-item">My Skills</div>
                <div className="nav-item">My Projects</div>
                <div className="nav-item">My Awards</div>
            </div>
        </div>

        <div className="right-side">
            <div className="img"></div>
            <div className="home-contact">Contact Me</div>
            <div className="socials">
                <img src="/assets/icons/mail.png" alt="E-Mail" className="social" />
                <img src="/assets/icons/github.png" alt="Github" className="social" />
                <img src="/assets/icons/discord.png" alt="Discord" className="social" />
            </div>
        </div>
    </div>;
}

export default Home;