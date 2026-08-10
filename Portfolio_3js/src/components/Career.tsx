import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          WHAT I'VE
          <br /> <span>BEEN BUILDING</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ENGINEERING</h4>
                <h5>SOFTWARE DEVELOPMENT</h5>
              </div>
            </div>
            <p>
              Full-stack systems • Backend • APIs • Databases
              <br />
              <br />
              <span style={{ color: "#264de4", fontWeight: "bold" }}>THEAX</span>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ARTIFICIAL INTELLIGENCE</h4>
                <h5>AI SUBJECT MATTER EXPERT</h5>
              </div>
            </div>
            <p>
              Agentic AI • RAG • LangChain • CrewAI
              <br />
              PyTorch • Generative AI • AI Applications
              <br />
              <br />
              <span style={{ color: "#264de4", fontWeight: "bold" }}>THEAX</span>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>KNOWLEDGE TRANSFER</h4>
                <h5>300+ STUDENTS MENTORED</h5>
              </div>
            </div>
            <p>
              Workshops • Technical Training • AI Education
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
