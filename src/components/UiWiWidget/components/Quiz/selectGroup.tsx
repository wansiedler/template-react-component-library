import { QuestionHeader } from "./QuestionHeader";
import { selectQuiz, useAppSelector } from "~/store/RTKstore";
import { quizTypes, Story, themes } from "~/types";
import { Subtext } from "../Quiz/Subtext";

export const SelectGroup = ({ story, onAnswer }: { story: Story; onAnswer: (text) => void }) => {
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
                {answer.text}
            </button>
        );
    };

    const mapChoices = () => {
        return story.choices.map((answer, idx) => label(answer, idx));
    };

    const choicesCssClass = () => {
        if (quiz.quizType === quizTypes.income && quiz.currentIndex === 0) {
            return "income-choices";
        }
        return "choices";
    };

    return (
        <>
            <QuestionHeader question={story.question} />
            <div>
                <div className="subtitle">{story.subtext}</div>
                <div className={`${choicesCssClass()}`}>{story.choices && mapChoices()}</div>
            </div>
        </>
    );
};
