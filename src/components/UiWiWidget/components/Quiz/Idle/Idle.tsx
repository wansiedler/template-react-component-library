import { selectQuiz, useAppSelector } from "../../../store/RTKstore";

export const Idle = ({ story, onAnswer, ...props }) => {
    const quiz = useAppSelector(selectQuiz);
    return (
        <>
            {props.idleGender ? (
                ""
            ) : (
                <div
                    //TODO: Convert to CSS
                    className="circleQuestion"
                    style={{
                        background: `top center/200% url("${quiz.backgroundPicture}")`,
                        opacity: 0.6
                    }}
                />
            )}
            <div className="circleQuestion">
                <div>
                    <h2>{story.question}</h2>
                    <button className="label" onClick={onAnswer}>
                        Ok, weiter quizzen!
                    </button>
                </div>
            </div>
        </>
    );
};
