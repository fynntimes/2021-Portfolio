import Page from '../../components/Page/Page';
import FancyHeader from '../../components/FancyHeader/FancyHeader';
import './AboutSection.css';
import GoDown from '../../components/GoDown/GoDown';

export default function AboutSection() {
    return (
        <Page id="aboutSection">
            <FancyHeader>About me</FancyHeader>
            <div class="aboutDetails">
                <img src="images/me.jpg"></img>
                <div>
                    <h2>Biography</h2>
                    <p>I'm a lifelong computer science student. I got started with programming at the age of 6, tinkering with websites and making Java games. The idea that I could build absolutely anything with this one tool was astonishing, and I spent many hours of childhood lost in this virtual world.</p>
                    <br/>
                    <p>Fast forward a decade, and I'm currently a sophomore in college, studying Computer Science at Cornell University. I am also a full stack developer, skilled with JavaScript and PHP, and frameworks like Flutter, React, and Node. In addition, I develop cross-platform mobile apps and Java solutions.</p>
                    <br/>
                    <p>In my spare time, you'll often find me spending time with friends and family, reading, or just planning out what's next. </p>
                    <br />
                    <h2>Skills</h2>
                    <p>
                        <b>Languages:</b> Java, JavaScript, Dart, PHP, TypeScript, Python, OCaml
                    </p>
                    <p>
                        <b>Frameworks:</b> Flutter, Angular, React, Redux, ExpressJS, Laravel
                    </p>
                    <p>
                        <b>Tools:</b> Git, MySQL, MongoDB, Firebase, CircleCI, Jira, Postman
                    </p>
                    <br/>
                    <p>I am in the process of featuring my projects on this portfolio. For now, please refer to my <a href="https://github.com/faizaand/" target="_blank" style={{textDecoration: 'underline'}}>GitHub page</a>.</p>
                </div>
            </div>
        </Page>
    );
}