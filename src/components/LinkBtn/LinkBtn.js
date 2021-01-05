import './LinkBtn.css';

export default function LinkBtn(props) {
    return (
        <a href={props.href}>
            <div className="link-btn">{props.children}</div>
        </a>
    );
}