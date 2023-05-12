import QuestionCard from "../QuestionCard/QuestionCard";

function SetQuestion({ setNumber }: { setNumber: Number }) {
    
    switch (setNumber) {
        case 1:
            return(
                <div>
                    <QuestionCard 
                        imgURL="https://images.lucid.app/images/6665f3d1-c20b-4ab8-a605-c8f170a26b3c/content" 
                        question={"There is an item in the Sims 4 that is a statue of Baby Yoda from the Mandalorian that is purchasable and can be placed in game. What is the name of this item, and how much does it cost in Simoleons (§)?"}
                        questionNumber={1}
                        answers={[
                            {
                                questionAnswer: "Baby Yoda Statue",
                                description: "Purchasable for §404"
                            },
                            {
                                questionAnswer: "The Baby Alien Statue",
                                description: "Purchasable for §1010"
                            },
                            {
                                questionAnswer: "The Child Statue",
                                description: "Purchasable for §504"
                            },
                            {
                                questionAnswer: "Majestic Child Statue",
                                description: "Purchasable for §752"
                            }
                        ]}
                        partialCode={"Y"}
                        rightAnswerIndex={"2"}
                        setNumber={setNumber}
                    />
                    <QuestionCard 
                        imgURL="https://images.lucid.app/images/09be46a5-d609-47d6-a229-8d7847fcf46d/content" 
                        question={`The Cowplant is very popular among the Sims community and is notorious for eating and sometimes swallowing Sims. Which of the following is NOT an interaction your Sim can have with a Cowplant?`}
                        questionNumber={2}
                        answers={[
                            {
                                questionAnswer: "Milk",
                                description: "The sim will milk the Cowplant, producing a special kind of milk. When consumed, the milk will give the Sim a moodlet based on the moodlet that the Sim that the Cowplant swallowed."
                            },
                            {
                                questionAnswer: "Feed",
                                description: "The sim will feed the Cowplant a raw pack of meat. This will prevent the Cowplant from eating your Sims!"
                            },
                            {
                                questionAnswer: "Eat Cake",
                                description: "When the Cowplant sticks a cake out of it's mouth, it means that it is hungry. The sim will reach out, take the cake, and be swallowed whole by the Cowplant."
                            },
                            {
                                questionAnswer: "Trim",
                                description: "The sim will trim leaves and stems to prevent the Cowplant from overgrowing and taking over their gardens."
                            }
                        ]}
                        partialCode={"O"}
                        rightAnswerIndex={"3"}
                        setNumber={setNumber}
                    />
                    <QuestionCard 
                        imgURL="https://images.lucid.app/images/bf228230-a0a3-43c5-9d6d-2d50b7a8f4d3/content" 
                        question={"The NanoCan is the most expensive trashcan in the game. Sims can earn Simoleons from it for every item they throw away. How many simoleons (§) do they make per item?"}
                        questionNumber={3}
                        answers={[
                            {
                                questionAnswer: "§120",
                                description: "The sim earns §120 for every item thrown into the bin."
                            },
                            {
                                questionAnswer: "§100",
                                description: "The sim makes §100 for every item thrown into the bin."
                            },
                            {
                                questionAnswer: "§25",
                                description: "The sims make §25 for every sim living in the current household for every item thrown into the bin."
                            },
                            {
                                questionAnswer: "§10",
                                description: "The sims make §10 for every sim living in the current household for every item thrown into the bin."
                            }
                        ]}
                        partialCode={"D"}
                        rightAnswerIndex={"3"}
                        setNumber={setNumber}
                    />
                    <QuestionCard 
                        imgURL="https://images.lucid.app/images/a09262b9-27b1-4905-be5f-19357f3023aa/content" 
                        question={"The Sims 4 released a hot tub for the game on one of their anniversaries. Which anniversary did they release it on?"}
                        questionNumber={4}
                        answers={[
                            {
                                questionAnswer: `5th Anniversary`,
                                description: ""
                            },
                            {
                                questionAnswer: `10th Anniversary`,
                                description: ""
                            },
                            {
                                questionAnswer: `20th Anniversary`,
                                description: ""
                            },
                            {
                                questionAnswer: `25th Anniversary`,
                                description: ""
                            }
                        ]}
                        partialCode={"A"}
                        rightAnswerIndex={"2"}
                        setNumber={setNumber}
                    />
                </div>
            )

        case 2:
            return(
                <div>
                    <QuestionCard 
                        imgURL="https://images.lucid.app/images/a7b2c54c-4f93-45ab-82a0-be316a25e20b/content" 
                        question={"In the world of Sims, this animal serves a crucial role in protecting chickens and rabbits from foxes. However, this animal  takes on a deeper  significance, as the an unofficial mascot. What is this beloved creature? "}
                        questionNumber={5}
                        answers={[
                            {
                                questionAnswer: "Bear",
                                description: "Growl!"
                            },
                            {
                                questionAnswer: "Cows",
                                description: "MOOOOOOOOOO."
                            },
                            {
                                questionAnswer: "Birds",
                                description: "Chrip-chirp, tweet!"
                            },
                            {
                                questionAnswer: "Llama",
                                description: "Buh-whaaaaa!"
                            }
                        ]}
                        partialCode={"W"}
                        rightAnswerIndex={"3"}
                        setNumber={setNumber}
                    />
                    <QuestionCard 
                        imgURL="https://images.lucid.app/images/56415691-0d66-4e92-854a-66602ed1f0e9/content" 
                        question={`When the Sims was first released, it came with an official and real language that the Sims characters spoke in. What is the language that the Sims Speak in?`}
                        questionNumber={6}
                        answers={[
                            {
                                questionAnswer: "Simspeak",
                                description: "1984."
                            },
                            {
                                questionAnswer: "Simlish",
                                description: ""
                            },
                            {
                                questionAnswer: "Simese",
                                description: "Twins."
                            },
                            {
                                questionAnswer: "Simish",
                                description: ""
                            }
                        ]}
                        partialCode={"I"}
                        rightAnswerIndex={"1"}
                        setNumber={setNumber}
                    />
                    <QuestionCard 
                        imgURL="https://images.lucid.app/images/811fb45d-26c1-44d2-9aa9-4cbc4646aed5/content" 
                        question={"Sims initially had only one official world, but now there are multiple worlds available to explore. Which of the following is not one of the official worlds in Sims 4?"}
                        questionNumber={7}
                        answers={[
                            {
                                questionAnswer: "Willow Creek",
                                description: ""
                            },
                            {
                                questionAnswer: "Magnolia Promenade",
                                description: ""
                            },
                            {
                                questionAnswer: "Windenburg",
                                description: ""
                            },
                            {
                                questionAnswer: "Pleasantville",
                                description: ""
                            }
                        ]}
                        partialCode={"L"}
                        rightAnswerIndex={"3"}
                        setNumber={setNumber}
                    />
                    <QuestionCard 
                        imgURL="https://images.lucid.app/images/5f75800c-eabc-47ba-aeef-21a404ea7156/content" 
                        question={"The Cowplant was first introduced as an Easter egg. However, due to its popularity, it made subsequent appearances. When was the Cowplant introduced into the Sims franchise?"}
                        questionNumber={8}
                        answers={[
                            {
                                questionAnswer: `Sims 1`,
                                description: "The Original!"
                            },
                            {
                                questionAnswer: `Sims 2`,
                                description: ""
                            },
                            {
                                questionAnswer: `Sims 3`,
                                description: ""
                            },
                            {
                                questionAnswer: `Sims 4`,
                                description: "The Freshest!"
                            }
                        ]}
                        partialCode={"L"}
                        rightAnswerIndex={"1"}
                        setNumber={setNumber}
                    />
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
                    <QuestionCard 
                        imgURL="https://images.lucid.app/images/13c110f4-b49f-4195-94dd-2c735af224c0/content" 
                        question={"In the Sims 4, there are characters who are already generated in your worlds. Name this Sims 4 character, with their correct traits and professions."}
                        questionNumber={13}
                        answers={[
                            {
                                questionAnswer: "Mortimer Goth",
                                description: `Job: Freelance Article Writter\
                                Traits: Bookworm, Outgoing, Creative`
                            },
                            {
                                questionAnswer: "Malcolm Landgraab",
                                description: `Job: High School Student\
                                Traits: Snob, Evil, Dastardly`
                            },
                            {
                                questionAnswer: "Bob Pancakes",
                                description: `Job: Unemployed\
                                Traits: Slob, Gloomy, Loner`
                            },
                            {
                                questionAnswer: "Don Lothario",
                                description: `Job: Unemployed\
                                Traits: Active, Noncommittal, Romantic`
                            }
                        ]}
                        partialCode={"S"}
                        rightAnswerIndex={"2"}
                        setNumber={setNumber}
                    />
                    <QuestionCard 
                        imgURL="https://images.lucid.app/images/0eb43efa-b7e5-4b48-93f6-baf0c54e234a/content" 
                        question={`In the Sims 4, there are characters who have special powers, known as occults. Name this Sims 4 character, with their correct occult.`}
                        questionNumber={14}
                        answers={[
                            {
                                questionAnswer: "Count Vladislaus Straud IV",
                                description: "A Vampire"
                            },
                            {
                                questionAnswer: "L. Faba",
                                description: "A Vampire"
                            },
                            {
                                questionAnswer: "Count Vladislaus Straud III",
                                description: "An alien."
                            },
                            {
                                questionAnswer: "Simeon Silversweater",
                                description: "A Spellcaster."
                            }
                        ]}
                        partialCode={"I"}
                        rightAnswerIndex={"0"}
                        setNumber={setNumber}
                    />
                    <QuestionCard 
                        imgURL="https://images.lucid.app/images/437e1522-1c22-4331-9724-6188f915d964/content" 
                        question={"In the Sims 4, there are characters who are already generated in your worlds. Match this Sims 4 Character with their name and traits!"}
                        questionNumber={15}
                        answers={[
                            {
                                questionAnswer: "Nancy Landgraab",
                                description: `Ambitious Snob Materialistic`
                            },
                            {
                                questionAnswer: "Nina Caliente",
                                description: `Lazy Hot-Headed Romantic`
                            },
                            {
                                questionAnswer: "Eliza Pancakes",
                                description: "Materialistic Neat Perfectionist"
                            },
                            {
                                questionAnswer: "Katrina Caliente",
                                description: "Hot-Headed Family-Oriented Romantic"
                            }
                        ]}
                        partialCode={"M"}
                        rightAnswerIndex={"1"}
                        setNumber={setNumber}
                    />
                    <QuestionCard 
                        imgURL="https://images.lucid.app/images/dd355b2e-1b96-42af-8d02-3c97e0ea4afb/content" 
                        question={"In the Sims 4 expansion pack,  Cats and Dogs, there are animals who are already generated in your worlds. Match this Sims 4 pet with their name and traits!"}
                        questionNumber={16}
                        answers={[
                            {
                                questionAnswer: `Rosie`,
                                description: "Loyal Glutton Playful"
                            },
                            {
                                questionAnswer: `Mayor Whiskers`,
                                description: "Friendly Talkative Aloof"
                            },
                            {
                                questionAnswer: `Bartholomew A. Bittlebun, Jr.`,
                                description: "Fluffy Spoiled Affectionate"
                            },
                            {
                                questionAnswer: `Bartholomew A. Bittlebun Sr.`,
                                description: "Playful Skittish Talkative"
                            }
                        ]}
                        partialCode={"S"}
                        rightAnswerIndex={"1"}
                        setNumber={setNumber}
                    />
                </div>
            );
    
        default:
            return(
                <div>SET QUESTIONS</div>
            );
    }
}

export default SetQuestion;