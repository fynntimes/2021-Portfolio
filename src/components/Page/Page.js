import './Page.css'

export default function Page(props) {
    return (
        <div className="section">
            {props.children}
        </div>
    );
}
