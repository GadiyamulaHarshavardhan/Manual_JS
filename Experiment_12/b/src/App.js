import React, { useState } from 'react';
import '../styles/index.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: "What does ReactJS primarily use for state management?",
      options: [
        { answerText: "Redux", isCorrect: true },
        { answerText: "jQuery", isCorrect: false },
        { answerText: "Axios", isCorrect: false },
        { answerText: "Express", isCorrect: false }
      ]
    },
    {
      questionText: "Which company developed ReactJS?",
      options: [
        { answerText: "Google", isCorrect: false },
        { answerText: "Facebook", isCorrect: true },
        { answerText: "Netflix", isCorrect: false },
        { answerText: "Twitter", isCorrect: false }
      ]
    },
    {
      questionText: "What is ReactJS?",
      options: [
        { answerText: "A library for building UI", isCorrect: true },
        { answerText: "A framework for server-side rendering", isCorrect: false },
        { answerText: "A database", isCorrect: false },
        { answerText: "A styling tool", isCorrect: false }
      ]
    },
    {
      questionText: "Which of the following is used to pass data to a component in React?",
      options: [
        { answerText: "Events", isCorrect: false },
        { answerText: "Hooks", isCorrect: false },
        { answerText: "Props", isCorrect: true },
        { answerText: "State", isCorrect: false }
      ]
    },
    {
      questionText: "Which hook is used to manage state in React?",
      options: [
        { answerText: "useEffect", isCorrect: false },
        { answerText: "useState", isCorrect: true },
        { answerText: "useRef", isCorrect: false },
        { answerText: "useContext", isCorrect: false }
      ]
    }
  ];

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="container">
      <h1>React Quiz App</h1>

      {showScore ? (
        <div className="score-section">
          <h2>You scored {score} out of {questions.length}</h2>
          <button onClick={restartQuiz} className="restart-button">
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}/{questions.length}</span>
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option.isCorrect)}
                className="answer-button"
              >
                {option.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;