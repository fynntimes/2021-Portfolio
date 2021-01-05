import './FancyHeader.css';

export default function FancyHeader(props) {
    return (
        <div class="fancy-header-wrapper">
            <div className="fancy-header"></div>
            <h1>{props.children}</h1>
        </div>
    );
}
