import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { QuestionHeader } from "./QuestionHeader";
import { selectQuiz, useAppSelector } from "~/store/RTKstore";
import { quizTypes, Story } from "~/types";
import { QuestionFrame } from "./QuestionFrame";
import { maritalStatusChoicesNew } from "~/components/Quiz/MaritalStatusNew/maritalStatusNewUserStory";

export const SelectGroupNew = ({ story, onAnswer }: { story: Story; onAnswer: (text) => void }) => {
    const transitionRef = useRef();
    const [inProp, setInProp] = useState(false);
    const animationDelay = 500;
    const animationDuration = 500;

    useEffect(() => {
        setTimeout(() => {
            setInProp(true);
        }, animationDelay);
    }, []);

    const quiz = useAppSelector(selectQuiz);

    const label = (answer, idx) => {
        return (
            <button
                key={answer.id}
                className="select-button"
                onClick={(event) => {
                    event.preventDefault();
                    onAnswer(answer);
                }}
            >
                {answer.text === maritalStatusChoicesNew[2].text ? "Zusammen-lebend" : answer.text}
            </button>
        );
    };

    const choicesCssClass = () => {
        if (quiz.quizType === quizTypes.income && quiz.currentIndex === 0) {
            return "income-choices";
        }
        return "choices";
    };

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
                        <QuestionHeader question={story.question} subQuestion={story?.subQuestion} />
                        <div>
                            <div className="subtitle">{story.subtext}</div>
                            <div className={`${choicesCssClass()}`}>
                                {story.choices && story.choices.map((answer, idx) => label(answer, idx))}
                            </div>
                        </div>
                    </div>
                )}
            </CSSTransition>
        </QuestionFrame>
    );
};
