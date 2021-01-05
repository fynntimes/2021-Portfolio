import './Page.css'

export default function Page(props) {
    return (
        <div className="section">
            <div className="page-wrapper">
                {props.children}
            </div>
        </div>
    );
}
