import { FC } from "react";
import { selectQuiz, useAppSelector } from "~/store/RTKstore";
import { Story } from "~/types";

interface ChoiceProps {
    topic?: "string";
    story: Story;
    inline: boolean;
    reveal: boolean;
    onAnswer(answer: string, all: any): void;
}

export const Choice: FC<ChoiceProps> = ({ story, onAnswer, inline = false, topic = null, reveal, ...props }) => {
    const quiz = useAppSelector(selectQuiz);
    const label = (answer, idx) => {
        const input = (
            <input
                className="input"
                id={answer.id}
                type="radio"
                key={answer.id}
                value={topic ? { [topic]: answer.text } : answer.text}
                hidden={true}
                onClick={(event) => {
                    event.preventDefault();
                    onAnswer(answer, story.choices);
                }}
            />
        );
        return (
            <label
                key={answer.id}
                htmlFor={answer.id}
                // ${answered.length && correct.length ? answer.correct ? "correct" : "not_correct" : ''}
                className={[
                    quiz.answeredQuestions.interests[topic] &&
                    quiz.answeredQuestions.interests[topic].some((a) => a.id === answer.id)
                        ? "selected"
                        : "",
                    inline ? "label_inline" : "label",
                    reveal ? (answer.correct ? answer.correct.toString() : "false") : null
                    //idx % 2 ? "right" : ""
                ].join(" ")}
            >
                {input}
                {answer.text}
            </label>
        );
    };
    return (
        <div className={"choices"}>
            {story.choices &&
                story.choices.map((answer, idx) => {
                    return label(answer, idx);
                })}
        </div>
    );
};
