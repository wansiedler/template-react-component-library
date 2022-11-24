import * as React from "react";
import { useEffect } from "react";
import { useAppDispatch } from "~/store/RTKstore";
import { setFinished } from "~/store/features/quiz/quizSlice";
import { quizTypes, Story } from "~/types";
import { QuestionHeader } from "../QuestionHeader";
import { Subtext } from "../../Quiz/Subtext";

type ResultProps = {
    story: Story;
    Renderer: React.ReactNode;
    quizType: string;
};
export const Result = ({ story, quizType, Renderer }: ResultProps): JSX.Element => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setFinished());
    }, []);

    return (
        <>
            <QuestionHeader question={story.question} />
            <div>{Renderer}</div>
        </>
    );
};
