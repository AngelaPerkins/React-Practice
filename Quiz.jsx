//consulted Coding with Sloba Tutorial

import { useState } from "react";
import { resultInitialState } from "./constants";

// eslint-disable-next-line react/prop-types
const Quiz = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIndex, setAnswerIndex] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [result, setResult] = useState(resultInitialState);
    const [showResult, setShowResult] = useState(false);

    // eslint-disable-next-line react/prop-types
    const{ question, choices, correctAnswer} = questions[currentQuestion];
    const onAnswerClick = (answer, index) => {
            setAnswerIndex(index);
            if (answer === correctAnswer) {
                    setAnswer(true);
            } else {
                    setAnswer(false);
                }
            };
    const onClickNext = () => {
        setAnswerIndex(null);
        setResult((prev) => 
            answer
                ? {
                    ...prev,
                    score: prev.score + 10,
                    correctAnswers:prev.correctAnswers +1, 
                } 
                : {
                    ...prev,
                    wrongAnswers: prev.wrongAnswers + 1,
                }
        );

        if(currentQuestion !== questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
            setCurrentQuestion(0);
            setShowResult(true);
        }
        

    };

    return (
        <div className="quiz-container">
            {!showResult ? (
                <>
                    <span className="active-question-number">{currentQuestion + 1}</span>
                    <span className="total-questions">/{questions.length}</span>
                    <h2>{question}</h2>
                        <ul>
                            {choices.map((answer, index) => (
                         <li 
                            onClick={() => onAnswerClick(answer, index)}
                            key={answer}
                            className={answerIndex === index ? "selected-answer" : null}
                        >
                            {answer}

                         </li>
                ))
            }
                        </ul>
                            <div className="footer">
                                <button onClick={onClickNext} disabled={answerIndex === null}>
                                 {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                                </button>
                            </div>
                </>
            ) : <div className="result">
                <h3>Result</h3>
                <p>
                    Total Questions: <span>{questions.length}</span>
                </p>
                <p>
                    Total Score: <span>{result.score}</span>
                </p>
                <p>
                    Total Correct Answers: <span>{result.correctAnswers}</span>
                </p>
                <p>
                    Total Wrong Answers: <span>{result.wrongAnswers}</span>
                </p>
                
                </div>}
    
        
    </div>
    );
    };

export default Quiz;
