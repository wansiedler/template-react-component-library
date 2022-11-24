import { useEffect, useState } from "react";
import { selectQuiz, useAppDispatch, useAppSelector } from "~/store/RTKstore";
import { answerAge, answerGender, answerMaritalStatus, answerVote, nextStory } from "~/store/features/quiz/quizSlice";
import { sendEvent } from "~/quizAction";
import { eventTypes, quizTypes, slideTypes as types, Story, themes } from "~/types";
import { error, getRandomInt, randomIntFromInterval } from "~/utils";
import { AgeStimmeZu } from "~/components/Quiz/Age/AgeStimmeZu";
import { VoteNew } from "./VoteNew";
import { SelectGroupNew } from "./selectGroupNew";
import { ResultNew } from "./ResultNew";
import Slider from "./Slider";
import Toggle from "./Toggle";
import { Preview } from "./Preview";

/**
 * Returns quiz slide based on story type.
 * @param s
 */
export const storyGenerator = (s: Story) => {
    const story: Story = Object.assign({}, s);

    switch (story.type) {
        case types.preview:
            story.originalContent = () => {
                return <Preview question={story.question} subQuestion={story.subQuestion} image={story.image} />;
            };
            break;

        case types.Vote:
            story.originalContent = (props) => {
                const dispatch = useAppDispatch();
                const quiz = useAppSelector(selectQuiz);
                const [completed, setCompleted] = useState(getRandomInt(1000));
                const onAnswer = (answer) => {
                    dispatch(answerVote(answer));
                    dispatch(nextStory());

                    // console.log({ quiz });

                    //NOTE: Ax-Core needs this event to get first interaction
                    // (!) Remove if this is no longer the first interactive slide
                    sendEvent({
                        eventType: eventTypes.CLICK,
                        quiz
                    });
                };

                useEffect(() => {
                    const timer = setInterval(() => setCompleted(completed + 1), getRandomInt(2000));
                    return () => clearInterval(timer);
                });

                let type = "slider";

                if (
                    (quiz.quizType === quizTypes.age &&
                        [themes.tiktokv2, themes.wmv2, themes.inflationv2, themes.kriegv2].includes(quiz.theme)) ||
                    (quiz.quizType === quizTypes.income && [themes.inflationv2].includes(quiz.theme)) ||
                    quiz.quizType === quizTypes.gender ||
                    quiz.quizType === quizTypes.maritalStatus
                ) {
                    type = "toggle";
                } else if (quiz.quizType === quizTypes.income && [themes.incomev2].includes(quiz.theme)) {
                    type = "select";
                }

                return <VoteNew type={type} onAnswer={onAnswer} {...props} />;
            };
            break;

        case types.selectGroup:
            story.originalContent = (props) => {
                const dispatch = useAppDispatch();
                const quiz = useAppSelector(selectQuiz);
                const onAnswer = (answer) => {
                    switch (quiz.quizType) {
                        case quizTypes.age:
                            dispatch(answerAge(answer));
                            break;
                        case quizTypes.income:
                            dispatch(answerAge(answer));
                            break;
                        case quizTypes.gender:
                            dispatch(answerGender(answer));
                            break;
                        case quizTypes.maritalStatus:
                            dispatch(answerMaritalStatus(answer));
                            break;
                        default:
                            console.error("No answer was dispatched.");
                            break;
                    }

                    quiz.currentIndex === 0 &&
                        sendEvent({
                            eventType: eventTypes.CLICK,
                            quiz
                        });

                    sendEvent({
                        eventType: eventTypes.CHOICE_SELECTED,
                        // valueName: /geschlecht/i.test(props.story.subtext) ? "gender" : "age",
                        valueName: quiz.quizType,
                        value: answer.text.toLowerCase(),
                        quiz
                    });
                    dispatch(nextStory());
                };
                return <SelectGroupNew {...{ onAnswer }} {...props} />;
            };
            break;

        case types.Result:
            story.originalContent = (props) => {
                const quiz = useAppSelector(selectQuiz);

                const getText = () => {
                    switch (quiz.quizType) {
                        case quizTypes.age:
                            return (
                                <>
                                    Ausgewähltes Alter: <b>{quiz.answeredQuestions?.age?.text}</b>
                                </>
                            );
                        case quizTypes.income:
                            return (
                                <>
                                    Ausgewähltes Alter: <b>{quiz.answeredQuestions?.age?.text}</b>
                                </>
                            );
                        case quizTypes.gender:
                            return (
                                <>
                                    Ausgewähltes Geschlecht: <b>{quiz.answeredQuestions?.gender?.text}</b>
                                </>
                            );
                        case quizTypes.maritalStatus:
                            return (
                                <>
                                    Ausgewählter Status: <b>{quiz.answeredQuestions?.maritalStatus?.text}</b>
                                </>
                            );
                        default:
                            return <>Unbekannt</>;
                    }
                };

                // console.log(quiz.answeredQuestions);
                let type = "slider";
                if (
                    (quiz.quizType === quizTypes.age &&
                        [themes.tiktokv2, themes.wmv2, themes.inflationv2].includes(quiz.theme)) ||
                    (quiz.quizType === quizTypes.income && [themes.inflationv2].includes(quiz.theme)) ||
                    quiz.quizType === quizTypes.gender ||
                    quiz.quizType === quizTypes.maritalStatus
                ) {
                    type = "toggle";
                } else if (quiz.quizType === quizTypes.income && [themes.incomev2].includes(quiz.theme)) {
                    type = "select";
                }
                const percentage = randomIntFromInterval(0,100);

                return (
                    <ResultNew
                        story={story}
                        // Renderer={<ResultBars story={story} minRandomValue={20} maxRandomValue={100} />}
                        Renderer={
                            <>
                                <div className="selected-choice">{getText()}</div>
                                {type === "slider" && (
                                    <>
                                        <Slider
                                            key="result-slider"
                                            disabled
                                            className="hslider"
                                            defaultValue={quiz.answeredQuestions.vote}
                                        />
                                        <AgeStimmeZu
                                            left={ story.votes[0] }
                                            right={ story.votes[1] }
                                            percentage={percentage}
                                        />
                                    </>
                                )}
                                {type === "toggle" && (
                                    <div style={{ marginBottom: 20 }}>
                                        <Toggle
                                            disabled
                                            checked={quiz.answeredQuestions.vote[0] === 1}
                                            leftLabel={story.votes[0]}
                                            rightLabel={story.votes[1]}
                                            percentage={percentage}
                                        />
                                    </div>
                                )}

                                {type === "select" && (
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        {/* @ts-ignore */}
                                        <div className="selected-percentage">{percentage}%</div>
                                        <div className="selected-select">{
                                            typeof quiz.answeredQuestions.vote === "object"
                                                ? quiz.answeredQuestions?.vote?.text
                                                : null}
                                        </div>
                                    </div>
                                )}
                            </>
                        }
                    />
                );
            };
            break;

        //NEVER EVER SHOULD WE GET HERE
        default:
            error(`Unknown Type ${story.type} ${JSON.stringify(story)}`);
            break;
    }

    return story;
};
