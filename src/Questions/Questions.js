import React, { useEffect, useRef } from "react";

import "./Questions.css";

function Questions() {
  const answerRef = useRef([]);

  useEffect(() => {
    const answerOptions = {
      rootMargin: "1000% 0px -20% 0px",
    };

    const answerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const entryClassList = entry.target.classList;

        if (entry.isIntersecting) {
          entryClassList.remove("answer-closed");
          // console.log("is observed");
          // console.log(entry);
        }

        if (!entry.isIntersecting) {
          entryClassList.add("answer-closed");
          // console.log("not observed");
        }
      });
    }, answerOptions);

    answerRef.current.forEach((ref) => {
      if (ref) {
        answerObserver.observe(ref);
      }
    });
  }, []);

  return (
    <div className="questions-container">
      <h2 className="questions-heading">ČASTO KLADENÉ OTÁZKY</h2>
      <div className="question-tabs">
        <div
          // ref={(el) => (answerRef.current[0] = el)}
          className="question-wrapper"
        >
          {" "}
          <h2 className="question">Hrozi mi ze ma na treningu niekto zbije</h2>
          <div
            ref={(el) => (answerRef.current[0] = el)}
            className="answer answer-closed"
          >
            <p>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              reiciendis, assumenda ex dolore iusto doloremque dignissimos ipsa
              suscipit possimus eos exercitationem, quis, atque quisquam error.
              Molestiae eaque ipsum autem dignissimos!
            </p>
          </div>
        </div>

        <div
          // ref={(el) => (answerRef.current[1] = el)}
          className="question-wrapper"
        >
          {" "}
          <h2 className="question">Hrozi mi ze ma na treningu niekto zbije</h2>
          <div
            ref={(el) => (answerRef.current[1] = el)}
            className="answer answer-closed"
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              reiciendis, assumenda ex dolore iusto doloremque dignissimos ipsa
              suscipit possimus eos exercitationem, quis, atque quisquam error.
              Molestiae eaque ipsum autem dignissimos!
            </p>
          </div>
        </div>

        <div
          // ref={(el) => (answerRef.current[2] = el)}
          className="question-wrapper"
        >
          {" "}
          <h2 className="question">Hrozi mi ze ma na treningu niekto zbije</h2>
          <div
            ref={(el) => (answerRef.current[2] = el)}
            className="answer answer-closed"
          >
            <p>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              reiciendis, assumenda ex dolore iusto doloremque dignissimos ipsa
              suscipit possimus eos exercitationem, quis, atque quisquam error.
              Molestiae eaque ipsum autem dignissimos!
            </p>
          </div>
        </div>

        <div
          // ref={(el) => (answerRef.current[3] = el)}
          className="question-wrapper"
        >
          <h2 className="question">Hrozi mi ze ma na treningu niekto zbije</h2>
          <div
            ref={(el) => (answerRef.current[3] = el)}
            className="answer answer-closed"
          >
            <p>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              reiciendis, assumenda ex dolore iusto doloremque dignissimos ipsa
              suscipit possimus eos exercitationem, quis, atque quisquam error.
              Molestiae eaque ipsum autem dignissimos!
            </p>
          </div>
        </div>

        <div
          // ref={(el) => (answerRef.current[4] = el)}
          className="question-wrapper"
        >
          <h2 className="question">Hrozi mi ze ma na treningu niekto zbije</h2>
          <div
            ref={(el) => (answerRef.current[4] = el)}
            className="answer answer-closed"
          >
            <p>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              reiciendis, assumenda ex dolore iusto doloremque dignissimos ipsa
              suscipit possimus eos exercitationem, quis, atque quisquam error.
              Molestiae eaque ipsum autem dignissimos!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
