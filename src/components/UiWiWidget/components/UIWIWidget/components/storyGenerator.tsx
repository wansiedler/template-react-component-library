import { useEffect, useState } from "react";
import { eventTypes, slideTypes as types, Story, themes } from "~/types";
import { selectQuiz, useAppDispatch, useAppSelector } from "~/store/RTKstore";
import {
    answerAge,
    answerVote,
    continueQuiz,
    answerGender,
    genderQuestionAnswer,
    incomeAnswer,
    nextStory,
    selectInterest,
    selectInterestAnswer,
    setShowProgress,
    squidGameQuestionAnswer
} from "~/store/features/quiz/quizSlice";
import { sendEvent } from "~/quizAction";
import { error, getRandomInt, log } from "~/utils";

import { IncomeStart } from "../../Quiz/Income/IncomeStart";
import { Vote } from "../../Quiz/Vote";
import { NewsletterQuiz } from "../../Quiz/Interests/Newsletter/NewsletterQuiz";
import { GenderPicture } from "../../Quiz/Gender/GenderPicture";
import { Idle } from "../../Quiz/Idle/Idle";
import { GenderQuestion } from "../../Quiz/Gender/GenderQuestion";
import { GenderConfirm } from "../../Quiz/Gender/GenderConfirm";
import { GenderResult } from "../../Quiz/Gender/GenderResult";
import { SelectGroup } from "../../Quiz/selectGroup";
import { Result } from "../../Quiz/Result/Result";
import { InterestSelect } from "../../Quiz/Interests/InterestSelect";
import { Question } from "../../Quiz/Interests/Question";
import { SquidGameStartBlank } from "../../Quiz/SquidGame/StartSlides/SquidGameStartBlank";
import { SquidGameStartCounter } from "../../Quiz/SquidGame/StartSlides/SquidGameStartCounter";
import { SquidGameStartGif } from "../../Quiz/SquidGame/StartSlides/SquidGameStartGif";
import { SquidGameQuestion } from "../../Quiz/SquidGame/SquidGameQuestion";
import { SquidGameResult } from "../../Quiz/SquidGame/SquidGameResult";
import { IncomeResult } from "../../Quiz/Income/IncomeResult";
import { InterestsResult } from "../../Quiz/Interests/InterestsResult";
import ResultBars from "../../Quiz/Result/ResultBars/ResultBars";
import { Preview } from "./new/Preview";

/**
 * Returns quiz slide based on story type.
 * @param s
 */
export const storyGenerator = (s: Story) => {
    const story: Story = Object.assign({}, s);
    log(story.type);

    switch (story.type) {
        //NEWSLETTER
        case types.newsletter:
            story.originalContent = ({ ...props }) => {
                return <NewsletterQuiz story={story} {...props} />;
            };
            break;

        //NEWSLETTER
        case types.newsletterSeparate:
            story.originalContent = ({ ...props }) => {
                // @ts-ignore
                return <NewsletterSeparate {...props} />;
            };
            break;

        //IDLE
        case types.idle:
            story.originalContent = (props) => {
                const dispatch = useAppDispatch();
                const onAnswer = () => {
                    dispatch(continueQuiz({}));
                };
                props.action("pause", false);
                const quiz = useAppSelector(selectQuiz);
                return <Idle {...{ onAnswer }} {...props} />;
            };
            break;

        //GENDER
        case types.genderPicture:
            story.originalContent = (props) => {
                const dispatch = useAppDispatch();
                const quiz = useAppSelector(selectQuiz);
                dispatch(setShowProgress(true));
                props.setProgressVisualiser("counter");
                props.action("play", true);

                return <GenderPicture {...props} />;
            };
            break;
        case types.genderQuestion:
            story.originalContent = (props) => {
                const quiz = useAppSelector(selectQuiz);
                const dispatch = useAppDispatch();

                const onAnswer = (answer) => {
                    dispatch(genderQuestionAnswer(answer));
                    dispatch(nextStory());

                    //NOTE: Ax-Core needs this event to get first interaction
                    // (!) Remove if this is no longer the first interactive slide
                    if (quiz.currentIndex === 1) {
                        sendEvent({
                            eventType: eventTypes.CLICK,
                            quiz
                        });
                    }
                };
                return <GenderQuestion {...{ onAnswer }} {...props} />;
            };
            break;
        case types.genderConfirm:
            story.originalContent = (props) => {
                const dispatch = useAppDispatch();
                dispatch(setShowProgress(false));
                const quiz = useAppSelector(selectQuiz);
                const onAnswer = (value) => {
                    dispatch(answerGender(value));
                    sendEvent({
                        eventType: eventTypes.CHOICE_SELECTED,
                        valueName: "gender",
                        value: value.toString(),
                        quiz
                    });

                    dispatch(nextStory());
                };
                return <GenderConfirm onAnswer={onAnswer} {...props} />;
            };
            break;
        case types.genderResults:
            story.originalContent = (props) => {
                const dispatch = useAppDispatch();
                const quiz = useAppSelector(selectQuiz);

                dispatch(setShowProgress(false));
                return <GenderResult {...props} />;
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

                    //NOTE: Ax-Core needs this event to get first interaction
                    // (!) Remove if this is no longer the first interactive slide
                    sendEvent({
                        eventType: eventTypes.CLICK,
                        quiz
                    });
                };
                const teilgenommen = (
                    <div>
                        <p>Vergleichen Sie jetzt Ihre Meinung mit anderen Merkur Lesern.</p>
                    </div>
                );
                useEffect(() => {
                    const timer = setInterval(() => setCompleted(completed + 1), getRandomInt(2000));
                    return () => clearInterval(timer);
                });
                return <Vote onAnswer={onAnswer} {...props} subtext={teilgenommen} />;
            };
            break;
        case types.selectGroup:
            story.originalContent = (props) => {
                const dispatch = useAppDispatch();
                const quiz = useAppSelector(selectQuiz);
                const onAnswer = (answer) => {
                    dispatch(answerAge(answer));

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
                return <SelectGroup {...{ onAnswer }} {...props} />;
            };
            break;
        case types.Result:
            story.originalContent = (props) => {
                const quiz = useAppSelector(selectQuiz);
                return (
                    <Result
                        story={story}
                        quizType={quiz.quizType}
                        Renderer={<ResultBars story={story} minRandomValue={20} maxRandomValue={100} />}
                    />
                );
            };
            break;

        //INTERESTS
        case types.interestsSelect:
            story.originalContent = (props) => {
                const quiz = useAppSelector(selectQuiz);
                const dispatch = useAppDispatch();
                const onAnswer = (topic) => {
                    topic = topic.toLowerCase();
                    dispatch(
                        selectInterest({
                            topic,
                            interestsAmount: props.story.choiceAmount
                        })
                    );
                };
                const onWeiter = (topic) => {
                    // if (Object.keys(quiz.answeredQuestions.interests).length < story.choiceAmount) return;
                    if (!Object.keys(quiz.answeredQuestions.interests).length) return;
                    sendEvent({
                        eventType: eventTypes.CLICK,
                        quiz
                    });
                    Object.keys(quiz.answeredQuestions.interests).map((interest) => {
                        sendEvent({
                            eventType: eventTypes.CHOICE_SELECTED,
                            valueName: "interest",
                            value: interest,
                            quiz
                        });
                    });
                    dispatch(nextStory());
                };
                return <InterestSelect onAnswer={onAnswer} onWeiter={onWeiter} {...props} />;
            };
            break;
        case types.Question:
            story.originalContent = (props) => {
                const quiz = useAppSelector(selectQuiz);
                const dispatch = useAppDispatch();

                const [choice, setChoice] = useState(false);
                const [reveal, setReveal] = useState(false);

                useEffect(() => {
                    return () => {};
                }, []);

                const onAnswer = (answer, all) => {
                    // if (quiz.theme === themes.tatort) return;
                    dispatch(
                        selectInterestAnswer({
                            topic: props.story.topic,
                            answer,
                            all
                        })
                    );
                };
                const onWeiter = (topic) => {
                    quiz.answeredQuestions.interests[props.story.topic]?.length &&
                        (() => {
                            setReveal(true);
                            setTimeout(() => {
                                dispatch(nextStory());
                            }, 1000);

                            if (quiz.theme === themes.tatort || quiz.theme === themes.urlaub) {
                                sendEvent({
                                    eventType: eventTypes.CLICK,
                                    quiz
                                });
                            }
                        })();
                };

                return (
                    <Question
                        {...{ reveal }}
                        onAnswer={onAnswer}
                        onWeiter={onWeiter}
                        choice={choice}
                        {...props}
                        story={story}
                    />
                );
            };
            break;

        case types.preview:
            story.originalContent = () => {
                return <Preview question={story.question} subQuestion={story.subQuestion} image={story.image} />;
            };
            break;

        case types.interestsResult:
            story.originalContent = (props) => {
                const quiz = useAppSelector(selectQuiz);
                return <InterestsResult {...props} groups={story.groups} />;
            };
            break;

        // SQUID GAME
        case types.squidGameStart:
            story.originalContent = (props) => {
                const quiz = useAppSelector(selectQuiz);
                const dispatch = useAppDispatch();
                const onAnswer = () => {
                    sendEvent({
                        eventType: eventTypes.CLICK,
                        quiz
                    });
                    // dispatch(setSize("rectangular"));
                    dispatch(nextStory());
                };

                //TODO
                // "variant-1" no starting slide
                // "variant-2" man in robe
                // "variant-3" cookies
                // "variant-4" the looking doll

                switch (quiz.variantId) {
                    case "variant-2":
                        return <SquidGameStartBlank {...{ onAnswer }} {...props} />;
                    case "variant-3":
                        return <SquidGameStartCounter {...{ onAnswer }} {...props} />;
                    case "variant-4":
                        return <SquidGameStartGif {...{ onAnswer }} {...props} />;
                    default:
                        return <SquidGameStartBlank {...{ onAnswer }} {...props} />;
                }
            };
            break;
        case types.squidGameQuestion:
            story.originalContent = (props) => {
                const quiz = useAppSelector(selectQuiz);
                const dispatch = useAppDispatch();
                const onAnswer = (answer) => {
                    dispatch(squidGameQuestionAnswer(answer.text));
                    sendEvent({
                        eventType: eventTypes.CHOICE_SELECTED,
                        valueName: props.story.subtext,
                        value: answer.text,
                        quiz
                    });

                    dispatch(nextStory());
                };
                return <SquidGameQuestion {...{ onAnswer }} {...props} />;
            };
            break;
        case types.squidGameResult:
            story.originalContent = (props) => {
                const quiz = useAppSelector(selectQuiz);
                return <SquidGameResult {...props} />;
            };
            break;

        case types.incomeStart:
            story.originalContent = (props) => {
                const quiz = useAppSelector(selectQuiz);
                const dispatch = useAppDispatch();
                const onAnswer = (answer) => {
                    sendEvent({
                        eventType: eventTypes.CLICK,
                        quiz
                    });

                    // dispatch(setSize("rectangular"));
                    //dispatch(nextStory());
                    dispatch(incomeAnswer(answer));
                    sendEvent({
                        eventType: eventTypes.CHOICE_SELECTED,
                        valueName: props.story.subtext,
                        value: answer.text,
                        quiz
                    });
                    dispatch(nextStory());
                };
                return <IncomeStart {...{ onAnswer }} {...props} />;
            };
            break;

        case types.incomeResult:
            story.originalContent = (props) => {
                const quiz = useAppSelector(selectQuiz);

                return <IncomeResult {...props} />;
            };
            break;

        //NEVER EVER SHOULD WE GET HERE
        default:
            error(`Unknown Type ${story.type} ${JSON.stringify(story)}`);
            break;
    }
    // story.content = (props) => {
    //       const Content = props.story.originalContent;
    //       return <Content {...props} />;
    // };
    return story;
};
