import Page from '../../components/Page/Page';
import FancyHeader from '../../components/FancyHeader/FancyHeader';
import './AboutSection.css';

export default function AboutSection() {
    return (
        <Page>
            <FancyHeader>About me</FancyHeader>
            <div class="aboutDetails">
                <img src="https://faizaan.dev/static/avatar-2811f9e9ba343b78084a67e4395e6f6a.jpg"></img>
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
                </div>
            </div>
        </Page>
    );
}