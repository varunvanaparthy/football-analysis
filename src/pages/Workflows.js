import workflow1 from "../files/WF1.png";
import workflow2 from "../files/WF2.png";

import "./Workflows.css";

const Workflows = () => {
    return (
      <div className="wf-container">
        <h1 className="wf-title">WORKFLOWS</h1>
        <div className="wf-images-container">
          <div className="wf-image">
            <img src={workflow1} alt="Sample Workflow 1"/>
            <p className="image-description">Sample Workflow 1</p>
          </div>
          <div className="wf-image">
            <img src={workflow2} alt="Sample Workflow 2" />
            <p className="image-description">Sample Workflow 2</p>
          </div>
        </div>
      </div>
    );
  };
  

export default Workflows;