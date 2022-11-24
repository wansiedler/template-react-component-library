import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Story } from "~/types";
import { selectQuiz, useAppDispatch, useAppSelector } from "~/store/RTKstore";
import { setFinished } from "~/store/features/quiz/quizSlice";
import { QuestionHeader } from "./QuestionHeader";
import { QuestionFrame } from "./QuestionFrame";
import { restartAge } from "~/quizAction";

type ResultProps = {
    story: Story;
    Renderer: React.ReactNode;
};
export const ResultNew = ({ story, Renderer }: ResultProps): JSX.Element => {
    const dispatch = useAppDispatch();
    const transitionRef = useRef();
    const [inProp, setInProp] = useState(false);
    const animationDelay = 500;
    const animationDuration = 500;
    const { question, subQuestion, subtext } = story;

    useEffect(() => {
        dispatch(setFinished());
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setInProp(true);
        }, animationDelay);
    }, []);

    return (
        <QuestionFrame>
            {/* @ts-ignore */}
            <CSSTransition
                nodeRef={transitionRef}
                classNames="story"
                in={inProp}
                unmountOnExit
                timeout={animationDuration}
            >
                {() => (
                    <div ref={transitionRef}>
                        <QuestionHeader question={question} subQuestion={subQuestion} />
                        <div className="subtitle">{subtext}</div>
                        <div>{Renderer}</div>
                        <button
                            className="restart-button"
                            onClick={() => dispatch(restartAge())}>
                            {/*<img src={require("./Icons/repeat-button.png")} alt={"repeat icon"} style={{ height: "11px" }}/>*/}
                            Quiz wiederholen
                        </button>
                    </div>
                )}
            </CSSTransition>
        </QuestionFrame>
    );
};
