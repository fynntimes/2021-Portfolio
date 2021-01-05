import './AboutMe.css';
import LinkBtn from "../LinkBtn/LinkBtn";

export default function AboutMe(props) {
    return (
        <div id="aboutMeWrapper">
            <div id="aboutMe">
                <div>
                    <h2>Hi, I'm</h2>
                    <h1>Faizaan Datoo.</h1>
                </div>
                <div id="aboutButtons">
                    <LinkBtn href="https://github.com/faizaand/" target="_blank"><i class="fab fa-github"></i>GitHub</LinkBtn>
                    <LinkBtn href="#"><i class="fas fa-paperclip"></i>Resume</LinkBtn>
                    <LinkBtn href="mailto:fad35@cornell.edu"><i class="fas fa-inbox"></i>Email</LinkBtn>
                    <LinkBtn href="https://www.linkedin.com/in/faizaand/" target="_blank"><i class="fab fa-linkedin"></i>LinkedIn</LinkBtn>
                </div>
            </div>
        </div>
    );
}
