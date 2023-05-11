import QuestionCard from "../QuestionCard/QuestionCard";

function SetQuestion({ setNumber }: { setNumber: Number }) {
    
    switch (setNumber) {
        case 1:
            return(
                <div>

                </div>
            )

        case 2:
            return(
                <div>

                </div>
            );

        case 3:
            return (
                <div>
                    <QuestionCard 
                        imgURL="https://simsvip.com/wp-content/uploads/2018/07/07-02-18_7-42-50-AM.png" 
                        question={"What is the character name of the scarecrow that sims4 players can interact with, and helps tend to their garden?"}
                        questionNumber={9}
                        answers={[
                            {
                                questionAnswer: "Patchy the Straw Man",
                                description: ""
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
                    <QuestionCard 
                        imgURL="https://images.lucid.app/images/c87e7d54-f75c-414c-b863-5726fe977d99/content" 
                        question={`What is the relationship level needed from your sims to reach "Good Friend" status with other sims? `}
                        questionNumber={10}
                        answers={[
                            {
                                questionAnswer: "50%",
                                description: ""
                            },
                            {
                                questionAnswer: "100%",
                                description: "All or nothing"
                            },
                            {
                                questionAnswer: "60%",
                                description: ""
                            },
                            {
                                questionAnswer: "55%",
                                description: ""
                            }
                        ]}
                        partialCode={"P"}
                        rightAnswerIndex={"2"}
                        setNumber={setNumber}
                    />
                    <QuestionCard 
                        imgURL="https://images.lucid.app/images/2083427d-a7f0-4dc1-9e1c-1cb7fd829bf6/content" 
                        question={"Which of the following is not apart of the friendly interactions in base Sim4?"}
                        questionNumber={11}
                        answers={[
                            {
                                questionAnswer: "Dare",
                                description: "Dare them to do the cinnamon challenge"
                            },
                            {
                                questionAnswer: "Playful Teasing",
                                description: ""
                            },
                            {
                                questionAnswer: "Console",
                                description: "A well needed ear."
                            },
                            {
                                questionAnswer: "Tickle",
                                description: ""
                            }
                        ]}
                        partialCode={"C"}
                        rightAnswerIndex={"1"}
                        setNumber={setNumber}
                    />
                    <QuestionCard 
                        imgURL="https://images.lucid.app/images/b3406abc-a9e7-4129-8030-768aaff42a25/content" 
                        question={"If your sim is a vampire, what can you say to other sims?"}
                        questionNumber={12}
                        answers={[
                            {
                                questionAnswer: `"Bleh..."`,
                                description: ""
                            },
                            {
                                questionAnswer: `"Boo..."`,
                                description: "A little too scary"
                            },
                            {
                                questionAnswer: `"Bite..."`,
                                description: ""
                            },
                            {
                                questionAnswer: `"Thirst..."`,
                                description: ""
                            }
                        ]}
                        partialCode={"S"}
                        rightAnswerIndex={"0"}
                        setNumber={setNumber}
                    />
                </div>
            );

        case 4:
            return (
                <div>

                </div>
            );
    
        default:
            return(
                <div>SET QUESTIONS</div>
            );
    }
}

export default SetQuestion;