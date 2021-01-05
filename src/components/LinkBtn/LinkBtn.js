import './LinkBtn.css';

export default function LinkBtn(props) {
    return (
        <a {...props}>
            <div className="link-btn">{props.children}</div>
        </a>
    );
}