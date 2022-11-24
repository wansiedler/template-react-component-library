import { useEffect } from "react";
import { useAppDispatch } from "~/store/RTKstore";
import { setShowProgress } from "~/store/features/quiz/quizSlice";
import { SquidGameChoice } from "../SquidGame/SquidGameChoice";
import { IncomeTitle } from "./IncomeTitle";

export const IncomeStart = ({ story, onAnswer }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setShowProgress(false));
    }, []);

    return (
        <>
            <IncomeTitle title={story.title} subquestion={story.subtext} />
            <h3 className="start-question">{story.question}</h3>
            <div className="answers-wrapper">
                <SquidGameChoice story={story} onAnswer={onAnswer} />
            </div>
        </>
    );
};
