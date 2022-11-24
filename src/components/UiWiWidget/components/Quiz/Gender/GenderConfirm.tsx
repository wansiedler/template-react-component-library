import { useEffect } from "react";

export const GenderConfirm = ({ story, onAnswer, ...props }) => {
    useEffect(() => {
        props.action("pause", false);
    }, []);

    return (
        <>
            <div className="gender-confirm-text-container">
                <div className="gender-confirm-intro-text">{story.question}</div>

                <div className="gender-confirm-question">
                    {story.subtext && <p>{story.subtext}</p>}
                    {story.subtext2 && <p>{story.subtext2}</p>}
                </div>
                <button
                    className="button gender-confirm-btn m"
                    onClick={(event) => {
                        event.preventDefault();
                        onAnswer("m");
                    }}
                >
                    m
                </button>
                <button
                    className="button gender-confirm-btn w"
                    onClick={(event) => {
                        event.preventDefault();
                        onAnswer("w");
                    }}
                >
                    w
                </button>
            </div>
            {/*<Index/>*/}
        </>
    );
};
