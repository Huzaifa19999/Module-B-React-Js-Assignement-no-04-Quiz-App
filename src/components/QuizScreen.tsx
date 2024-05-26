import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function QuizScreen() {
  const questions = [
    {
      question: "HTML Stands For _________",
      options: [
        "Anchor Text Language",
        "HTML",
        "Case Cading Style Sheet",
        "HyperText markup language",
      ],
      correctAns: "HyperText markup language",
    },
    {
      question: "CSS Stands For _________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "JS Stands For _________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "DOM Stands For _________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "RAM Stands For _________",
      options: ["Read Only Memory", "Dom", "Random Access Memory", "For Pc"],
      correctAns: "Random Access Memory",
    },
    {
      question: "ROM Stands For _________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mark, setmark] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleOptionClick = (selectedOption:any) => {
    if (selectedOption === questions[currentIndex].correctAns) {
      setmark(mark + 1);
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const resetQuiz = () => {

    setCurrentIndex(0);
    setmark(0);
    setIsCompleted(false);
  }

  return (
    <div className="container mt-5">
      {isCompleted ? (
        <div className="card text-center">
          <div className="card-header">
            Quiz Completed!
          </div>
          <div className="card-body">
            <h5 className="card-title">Your marks: {mark}/{questions.length}</h5>
            <h5 className="card-title">Your Percentage: {mark/questions.length*100}%</h5>
            <h2 className="card-text">Thank you for participating!</h2>
            <button onClick={resetQuiz}  className="btn mt-5 btn-primary btn-lg w-25">Reset Quiz</button>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-header text-center">
            Question {currentIndex + 1}/{questions.length}
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">{questions[currentIndex].question}</h5>
            <div className="row">
              {questions[currentIndex].options.map((x, i) => (
                <div key={i} className="col-md-6 d-flex justify-content-center p-2">
                  <button
                    onClick={() => handleOptionClick(x)}
                    className="btn btn-primary btn-lg w-100"
                  >
                    {x}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
