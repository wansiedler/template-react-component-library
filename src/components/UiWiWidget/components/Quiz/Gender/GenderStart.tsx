import { useEffect } from "react";
import { setShowProgress } from "../../../store/features/quiz/quizSlice";
import { selectQuiz, useAppDispatch, useAppSelector } from "../../../store/RTKstore";
import { getVariantPicture } from "../../../quizAction";

export const teasers = [
    // require("./images/Gender-Quiz-Pic-1.jpg"),
    // require("./images/Gender-Quiz-Pic-2.jpg"),
    // require("./images/Gender-Quiz-Pic-3.jpg")
];

export const GenderStart = ({ story, onAnswer, ...props }) => {
    const quiz = useAppSelector(selectQuiz);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setShowProgress(false));
    }, []);

    return (
        <div className="quiz">
            <h2 className=" start-title">{story.question}</h2>

            <div
                className={"gender-start-picture"}
                style={{
                    background: `no-repeat center center url(${getVariantPicture(story.teasers, quiz.variantId)})`
                }}
            />
            <div className="gender-quiz-question-mark">?</div>
            <div
                style={{
                    paddingTop: 10
                }}
            >
                {}
                <button onClick={onAnswer} className="button start_button">
                    <a
                        onClick={(event) => {
                            event.preventDefault();
                        }}
                    >
                        Start
                    </a>
                </button>
            </div>
        </div>
    );
};
