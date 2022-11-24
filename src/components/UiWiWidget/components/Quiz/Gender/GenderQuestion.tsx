import { useEffect } from "react";
import { useAppDispatch } from "~/store/RTKstore";
import { setFinished } from "~/store/features/quiz/quizSlice";
import { QuestionHeader } from "../QuestionHeader";
import { Subtext } from "../Subtext";
import { GenderChoice } from "./GenderChoice";

export const GenderQuestion = ({ story, onAnswer, ...props }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        props.action("pause", false);
        dispatch(setFinished());
    }, []);

    return (
        <>
            <QuestionHeader question={story.question} />
            <Subtext subtext={story.subtext} />
            <GenderChoice story={story} onAnswer={onAnswer} />
        </>
    );
};
