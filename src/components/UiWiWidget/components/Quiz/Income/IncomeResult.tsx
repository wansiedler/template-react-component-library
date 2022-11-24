import { useEffect } from "react";
import { selectQuiz, useAppDispatch, useAppSelector } from "~/store/RTKstore";
import { setFinished, setShowProgress } from "~/store/features/quiz/quizSlice";
import { IncomeTitle } from "./IncomeTitle";

interface Answer {
    text?: string | undefined | null;
    value?: number | undefined | null;
}

export const IncomeResult = ({ story, ...props }) => {
    const quiz = useAppSelector(selectQuiz);
    const answer: Answer = {
        text: "",
        value: 0
    };

    if (quiz.answeredQuestions.incomeAnswers.length > 0) {
        answer.text = quiz.answeredQuestions.incomeAnswers[0]?.text;
        answer.value = quiz.answeredQuestions.incomeAnswers[0]?.value;
    }

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setShowProgress(false));
        dispatch(setFinished());
        // props.action("pause", false);
    }, []);

    const getEvaluation = () => {
        switch (true) {
            case answer.value < 3:
                return "unter dem";
            case answer.value === 3:
                return "im";
            case answer.value > 3:
                return "über dem";
            default:
                return "";
        }
    };

    // for each answer, get the middle value and use that for percentage value
    const lineStyle = () => {
        if (answer.value > 3) {
            switch (answer.value) {
                case 4:
                    return { right: "54%" };
                case 5:
                    return { right: "20%" };
                case 6:
                    return { right: 0 };
                default:
                    return {};
            }
        } else {
            switch (answer.value) {
                case 1:
                    return { left: 0 };
                case 2:
                    return { left: "16.67%" };
                case 3:
                    return { left: "33.33%" };
                default:
                    return {};
            }
        }
    };

    return (
        <>
            <IncomeTitle title={story.title} subquestion={story.subtext} />
            <div className="evaluation-wrapper">
                <h3 className=" title">Sie liegen {getEvaluation()} Durchschnitt!</h3>
                <div className="interval">{answer.text}</div>
            </div>
            <div className="salary-bar-wrapper">
                <div className="salary-bar">
                    <p>{story.lowestSalary}</p>
                    <div className="line" style={lineStyle()} />
                    <p>{story.highestSalary}</p>
                </div>
            </div>
            <p className="info">Das durchschnittliche Gehalt liegt in Deutschland bei 2.300€</p>
        </>
    );
};
