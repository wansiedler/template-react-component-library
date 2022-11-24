import { useEffect } from "react";
import { selectQuiz, useAppDispatch, useAppSelector } from "~/store/RTKstore";
import { quizTypes, themes } from "~/types";
import { setShowProgress } from "~/store/features/quiz/quizSlice";
import { QuestionHeader } from "./QuestionHeader";
import { Slider } from "./Age/Slider/Slider";
import { AgeStimmeZu } from "./Age/AgeStimmeZu";

export const Vote = ({ story, onAnswer }) => {
    const quiz = useAppSelector(selectQuiz);
    const dispatch = useAppDispatch();

    useEffect(() => {
        // dispatch(setSize(sizes.big));
        dispatch(setShowProgress(true));
    }, []);

    return (
        <>
            <QuestionHeader question={story.question} {...story} />
            <div>
                {story?.subtext && (
                    <div className="subtitle">
                        {quiz.theme === themes.coachella && (
                            <div style={{ fontWeight: "normal" }}>Wären Sie auch gerne mal dabei?</div>
                        )}
                        {quiz.theme === themes.politik ||
                            (quiz.quizType === quizTypes.income && quiz.theme !== themes.workLifeBalance && (
                                <div style={{ fontWeight: "normal" }}>Was sagen die Merkur Leser? </div>
                            ))}
                        {quiz.theme === themes.tiktok && (
                            <div
                                style={{
                                    fontWeight: "normal",
                                    font: "normal normal normal 22px/35px Arial"
                                }}
                            >
                                Wie sieht die Verteilung bei Merkur Lesern aus?
                            </div>
                        )}
                        {quiz.theme === themes.wiesn && (
                            <div
                                style={{
                                    fontWeight: "normal",
                                    font: "normal normal normal 22px/35px Arial"
                                }}
                            >
                                Merkur Stimmungscheck.
                            </div>
                        )}
                        {story.subtext}

                        {quiz.theme === themes.wiesn && (
                            <div
                                style={{
                                    fontWeight: "normal",
                                    font: "normal normal normal 22px/35px Arial"
                                }}
                            >
                                Vergleichen Sie jetzt ihre Stimmung mit den Merkur Lesern
                            </div>
                        )}
                    </div>
                )}
                <Slider rtl={false} onFinalChange={onAnswer} />
                <AgeStimmeZu left={story.votes[0]} right={story.votes[1]} />
            </div>
        </>
    );
};
