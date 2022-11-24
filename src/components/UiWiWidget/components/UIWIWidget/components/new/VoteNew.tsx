import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { generateCSSId } from "~/utils";
import { AgeStimmeZu } from "~/components/Quiz/Age/AgeStimmeZu";
import { useAppDispatch } from "~/store/RTKstore";
import { setShowProgress } from "~/store/features/quiz/quizSlice";
import { QuestionHeader } from "./QuestionHeader";
import { QuestionFrame } from "./QuestionFrame";
import Slider from "./Slider";
import Toggle from "./Toggle";

export const VoteNew = ({ type = "slider", story, onAnswer, ...props }) => {
    const dispatch = useAppDispatch();
    const transitionRef = useRef();
    const [inProp, setInProp] = useState(false);
    const animationDelay = 500;
    const animationDuration = 500;
    const [toggleId, setToggleId] = useState(undefined);

    // ------------------------------------------------------------------------

    useEffect(() => {
        const randomId = generateCSSId(5);
        setToggleId(randomId);
    }, []);

    useEffect(() => {
        dispatch(setShowProgress(true));
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setInProp(true);
        }, animationDelay);
    }, []);

    // ------------------------------------------------------------------------

    const Select = (answer) => {
        return (
            <button
                key={answer.id}
                className="select-button"
                onClick={(event) => {
                    event.preventDefault();
                    onAnswer(answer);
                }}
            >
                {answer.text}
            </button>
        );
    };

    // ------------------------------------------------------------------------

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
                        <QuestionHeader question={story.question} {...story} />
                        <div>
                            {story?.subtext && <div className="subtitle">{story.subtext}</div>}

                            {type == "slider" && (
                                <>
                                    <Slider
                                        key="vote-slider"
                                        className="hslider"
                                        onAnswer={(value, _index) => {
                                            return onAnswer([value]);
                                        }}
                                    />
                                    <AgeStimmeZu left={story.votes[0]} right={story.votes[1]} />
                                </>
                            )}

                            {type === "toggle" && (
                                <>
                                    <Toggle
                                        id={toggleId}
                                        leftLabel={story.votes[0]}
                                        rightLabel={story.votes[1]}
                                        onChange={(value) => {
                                            onAnswer([value]);
                                        }}
                                    />
                                </>
                            )}

                            {type === "select" && (
                                <div>
                                    <div className="choices">
                                        {story.choices && story.choices.map((answer) => Select(answer))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </CSSTransition>
        </QuestionFrame>
    );
};
