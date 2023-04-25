import "./ScDesign.css";
import schemaImage from "../files/fact-constellation-schema.jpg";

function ScDesign() {
    return (
    <div className="scDesignHolder">
        <h1 id="sc-design-title">SCHEMA DESIGN</h1>
        <div className="schema-holder">
            <img src={schemaImage} alt="fact constellation schema" id="schema-image"></img>
        </div>
    </div>
    )
}

export default ScDesign;