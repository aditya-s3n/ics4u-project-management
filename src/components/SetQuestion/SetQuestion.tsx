import QuestionCard from "../QuestionCard/QuestionCard";

function SetQuestion({ setNumber }: { setNumber: Number }) {
    return (
        <div>
            <QuestionCard 
                imgURL="./set3/q1.png" 
                question={"What is the character name of the scarecrow that sims4 players can interact with, and helps tend to their garden?"}
                questionNumber={1}
                answers={[
                    {
                        questionAnswer: "Patchy the Straw Man",
                        description: "THis is a description"
                    },
                    {
                        questionAnswer: "Henry the Straw Man",
                        description: ""
                    },
                    {
                        questionAnswer: "Henriette the Straw Woman",
                        description: ""
                    },
                    {
                        questionAnswer: "This Interaction Doesn't Exist",
                        description: ""
                    }
                ]}
                partialCode={"N"}
                rightAnswerIndex={"0"}
                setNumber={setNumber}
            />
        </div>
    );
}

export default SetQuestion;