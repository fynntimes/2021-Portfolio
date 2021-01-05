import './Page.css'

export default function Page(props) {
    return (
        <div id={props.id} className="section">
            <div className="page-wrapper">
                {props.children}
            </div>
        </div>
    );
}
