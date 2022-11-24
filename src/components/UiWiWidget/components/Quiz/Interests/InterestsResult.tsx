import { useEffect } from "react";
import { selectQuiz, useAppDispatch, useAppSelector } from "~/store/RTKstore";
import { setFinished, setShowProgress } from "~/store/features/quiz/quizSlice";
import { capitalizeFirstLetter } from "~/utils";
import { themes } from "~/types";
import { ProgressBar } from "../../ProgressBar/ProgressBar";
import { QuestionHeader } from "../QuestionHeader";
import { GrillMan } from "./GrillMan";

export const InterestsResult = ({ story }) => {
    const dispatch = useAppDispatch();
    const quiz = useAppSelector(selectQuiz);
    const choices = Object.keys(quiz.answeredQuestions.interests);

    useEffect(() => {
        dispatch(setShowProgress(true));
        dispatch(setFinished());
    }, []);

    const getInterestsResults = () => {
        return choices.map((choice, key) => (
            <div className="interests-result-progress" key={key}>
                <span className="result-label">{capitalizeFirstLetter(choice)}</span>
                <ProgressBar
                    completed={
                        50 * quiz.answeredQuestions.interests[choice].filter((v) => v.correct && v.correct).length
                    }
                    round={true}
                    interestResultLabel={
                        quiz.answeredQuestions.interests[choice].filter((v) => v.correct && v.correct).length
                    }
                    selectedAnswer={true}
                />
            </div>
        ));
    };
    return (
        <>
            <QuestionHeader question={story.question} />
            {story.subtext && <div className="label-ergebnis"> {story.subtext} </div>}

            {(quiz.theme !== themes.grill && (
                <>
                    <div className="label-ergebnis">
                        Im Vergleich zu unseren Lesern sind <br />
                        <span style={{ fontWeight: 600 }}>20%</span> besser als Sie
                    </div>
                    <div className="answer-results-container">{getInterestsResults()}</div>
                </>
            )) || (
                <div className="result-column-container">
                    {Object.keys(quiz.answeredQuestions.interests).map((choice, idx) => (
                        <GrillMan
                            key={idx}
                            data={{
                                value: 50 * quiz.answeredQuestions.interests[choice].filter((v) => v.correct).length,
                                topic: capitalizeFirstLetter(choice)
                            }}
                            idx={idx}
                        />
                    ))}
                </div>
            )}
        </>
    );
};
