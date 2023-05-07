function QuestionCard({ imgURL, question, questionNumber, answers }: { imgURL: String, question: String, questionNumber: Number, answers: any }) {
    return (
        <div className="card">
            <div className="card-header">
                <h4>Question {questionNumber.toString()}:</h4>
                <h5>{question}</h5>
            </div>

            <div className="card-body">
                {answers.map((answer: any, index: Number) => {
                    return(
                        <div>
                            <p>{index.toString()}. {answer}</p> 
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default QuestionCard;