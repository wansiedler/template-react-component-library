import { QuestionHeader } from "./QuestionHeader";
import { QuestionFrame } from "./QuestionFrame";
import { nextStory } from "~/store/features/quiz/quizSlice";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { selectQuiz, useAppDispatch, useAppSelector } from "~/store/RTKstore";

type PreviewProps = {
    question: string;
    subQuestion: string;
    image: string;
};

/**
 * Displays image preview that transitions to an interactive story if visible in viewport
 * @param question
 * @param subQuestion
 * @param image
 * @constructor
 */
export const Preview = ({ question, subQuestion = "", image }: PreviewProps): JSX.Element => {
    const { ref, inView } = useInView({
        threshold: 0.5
    });
    const quiz = useAppSelector(selectQuiz);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (
            inView &&
            quiz.currentIndex === 0
        ) {
            setTimeout(() => {
                dispatch(nextStory());
            }, 1000);
        }
    }, [inView]);

    return (
        <QuestionFrame noPadding={true}>
            <QuestionHeader question={question} subQuestion={subQuestion} />
            <img ref={ref} className="background" src={image} alt="background image" />
        </QuestionFrame>
    );
};
