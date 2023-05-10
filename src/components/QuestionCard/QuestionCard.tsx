import { useState } from "react";
import "./QuestionCard.css";
import plumbob from "./plumbob.png";

function QuestionCard({ imgURL, question, questionNumber, answers, partialCode, rightAnswerIndex, setNumber }: { imgURL: string, question: String, questionNumber: Number, answers: any, partialCode: String, rightAnswerIndex: String, setNumber: Number }) {
    const [radioValue, setRadioValue] = useState("0");
    const localStorageAddress = `set${setNumber}-q${questionNumber}`;
    
    const getSet = localStorage.getItem(localStorageAddress)

    function checkAnswer() {
        if (radioValue === rightAnswerIndex) {
            localStorage.setItem(localStorageAddress, "true");
            window.location.reload();
        }
    }

    return (
        <div className={`card m-5 ${getSet || getSet === "false" ? "completed" : "uncompleted"}`}>
            <div className="mt-3">
                <img src={plumbob} alt="plumbob icon" width={50} />
            </div>

            <div className="container my-4">
                <div className="row">
                    <div className="col">
                        <p className="fw-bold fs-2">Question {questionNumber.toString()}:</p>
                        <p className="fs-3">{question}</p>
                    </div>
                    <div className="col">
                        <img src={imgURL} alt="question-img" className="img-border"/>
                    </div>
                </div>
            </div>

            <div className="container text-start">
                {answers.map((answer: any, index: Number) => {
                    return (
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="flexRadioDefault" 
                                id={`flexRadioDefault${index}}`} 
                                value={index.toString()}
                                onChange={(e) => setRadioValue(e.target.value)} 
                            />
                            <label className="form-check-label fw-bold" htmlFor={`flexRadioDefault${index}}`}>
                                {answer.questionAnswer}
                            </label>
                            <p className="form-check-label">
                                -{answer.description}
                            </p>
                        </div>
                    )
                })}
            </div>

            <div className="container text-center my-3">
                <button type="button" className="btn btn-dark btn-lg mx-4" onClick={checkAnswer}>ENTER</button>
                
                {getSet || getSet === "false"
                ?
                <span>Get Code: {partialCode}</span>
                : <span>Get Code: _</span>
                }
            </div>
        </div>
    );
}

export default QuestionCard;