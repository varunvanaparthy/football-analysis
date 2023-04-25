import Report1 from "../files/report1.png";
import Report2 from "../files/report2.png";
import Report3 from "../files/report3.png";

import "./Reports.css";

function Reports() {
        return (
            <div className="reports-container">
              <h1 className="reports-title">REPORTS</h1>
              <div className="reports-images-container">
                <div className="report">
                  <img src={Report1} alt="report1"/>
                  <p className="report-description">1. Top 10 Goal Scorers</p>
                </div>

                <div className="report">
                  <img src={Report2} alt="Sample Workflow 2" />
                  <p className="report-description">2. Total Fouls Made</p>
                </div>

                <div className="report">
                  <img src={Report3} alt="Sample Workflow 2" />
                  <p className="report-description">3. Clubs' Win/Loss Ratio</p>
                </div>

              </div>
            </div>
    )
}

export default Reports;