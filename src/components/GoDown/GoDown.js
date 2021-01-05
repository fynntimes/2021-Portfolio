import './GoDown.css';

export default function GoDown(props) {
    return (
        <div className="go-down">
            <a href={props.href}>
                <p>{props.children}</p>
                <i class="fa fa-angle-down fa-lg" aria-hidden="true"></i>
            </a>
        </div>
    );
}
