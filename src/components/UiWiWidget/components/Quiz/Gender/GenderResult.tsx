import { useEffect } from "react";
import { selectQuiz, useAppDispatch, useAppSelector } from "~/store/RTKstore";
import { setFinished } from "~/store/features/quiz/quizSlice";
import { restartGender } from "~/quizAction";

export const GenderResult = ({ story, ...props }) => {
    const quiz = useAppSelector(selectQuiz);
    const { limbicType } = props;
    const dispatch = useAppDispatch();

    useEffect(() => {
        // dispatch(setSize(sizes.big));
        dispatch(setFinished());
        props.action("pause", false);
    }, []);
    //
    // const woman = require("./images/woman.jpg");
    // const man = require("./images/man.jpg");
    // const superhuman = require("./images/superheros.jpg");
    // const people = require("./images/people.jpg");
    // const genderAnswers = quiz.answeredQuestions.genderAnswers;
    //
    // let link;
    // let result;
    // let header = null;
    //
    // if (genderAnswers.filter((answer) => answer.correct).length === 2) {
    //     result = (
    //         <span className="">
    //             Wow das ist selten. Sie haben beide Fragen richtig gelöst. Das heißt Ihre Wahrnehmung kann nicht
    //             eindeutig einem Geschlecht zugeordnet werden.
    //         </span>
    //     );
    //     link = superhuman;
    // } else if (genderAnswers.filter((answer) => answer.correct).length === 0) {
    //     header = "Bei Ihnen gibt es noch kein Ergebnis...";
    //     result = (
    //         <div>
    //             <div>Leider konnten wir Ihre Wahrnehmung nicht zuordnen. Probieren Sie es noch einmal!</div>
    //             <button
    //                 className={`${limbicType ? limbicType : ""} label label-no-result`}
    //                 onClick={() => dispatch(restartGender())}
    //             >
    //                 Klar, auf geht`s!
    //             </button>
    //         </div>
    //     );
    //     link = people;
    // } else if (genderAnswers[0].correct) {
    //     result = (
    //         <div>
    //             Laut der Forschung sollten Sie <strong>dem weiblichen Geschlecht</strong> angehören.
    //         </div>
    //     );
    //     link = woman;
    // } else if (genderAnswers[1].correct) {
    //     result = (
    //         <div>
    //             <span className="">
    //                 {" "}
    //                 Laut der Forschung sollten Sie <strong>dem männlichen Geschlecht</strong> angehören.
    //             </span>
    //         </div>
    //     );
    //     link = man;
    // }

    return (
        <>
            {/*<div className="gender-result-title-container">*/}
            {/*    <div className="gender-result-title">*/}
            {/*        <h3>{header || story.question}</h3>*/}
            {/*    </div>*/}

            {/*    <p className="gender-result-paragraph">{result}</p>*/}
            {/*</div>*/}
            {/*<div*/}
            {/*    className="gender-result-image"*/}
            {/*    style={{*/}
            {/*        background: `center center/cover url(${link})`*/}
            {/*    }}*/}
            {/*/>*/}
        </>
    );
};
