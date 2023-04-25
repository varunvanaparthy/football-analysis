import './DbDesign.css';
import dbarchImage from "../files/db-architecture.jpg";

function DbDesign() {
    return (
        <div className="dbDesignHolder">
            <h1 id="db-design-title">DATABASE DESIGN</h1>
            <div className="db-image-holder">
                <img src={dbarchImage} alt="db-architecture" id="db-image"></img>
            </div>
        </div>
    )
}

export default DbDesign;