import './skills.css';

const Skills = () => {
    const skills = ['python', 'javascript', 'c', 'htmlcss', 'react'];
    return <div className="skills">
        <div className="heading font-primary">
            My Skills
        </div>
        <div className="skills-container">
            {
                skills.map(e => {
                    return <div className="skill">
                        <img src={`/assets/icons/${e}.png`} alt="" />
                    </div>
                })
            }
        </div>
    </div>
}

export default Skills;