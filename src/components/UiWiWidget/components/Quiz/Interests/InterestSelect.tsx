import { useEffect } from "react";
import { selectQuiz, useAppDispatch, useAppSelector } from "~/store/RTKstore";
import { setShowProgress } from "~/store/features/quiz/quizSlice";
import { QuestionHeader } from "../QuestionHeader";
import { InterestsChoices } from "./InterestsChoices";

export const InterestSelect = ({ story, onAnswer, onWeiter, ...props }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        // props.action("pause", false)
        dispatch(setShowProgress(true));
        // dispatch(setSize(sizes.big));
    }, []);

    const quiz = useAppSelector(selectQuiz);

    return (
        <>
            <QuestionHeader question={story.question} subquestion={story.subtext} />
            <InterestsChoices story={story} answered={quiz.answeredQuestions.interests} onAnswer={onAnswer} />
            <button
                className={[
                    "submit-button",
                    Object.keys(quiz.answeredQuestions.interests).length ? "selected" : null
                ].join(" ")}
                onClick={onWeiter}
            >
                Weiter
            </button>
        </>
    );
};
