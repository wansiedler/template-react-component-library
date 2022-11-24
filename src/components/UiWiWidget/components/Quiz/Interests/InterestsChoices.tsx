import { FC } from "react";

interface ChoiceProps {
    story: {
        choices: Array<{ correct: boolean } | string>;
    };

    answered?: {
        [key: string]: {
            id?: string;
            correct?: boolean;
        }[];
    };

    onAnswer(string): void;
}

export const InterestsChoices: FC<ChoiceProps> = ({ story, onAnswer, answered = [] }) => {
    const label = (answer, idx) => {
        const input = (
            <input className="input" id={answer.id} key={answer.id} hidden={true} type="radio" value={answer.text} />
        );

        return (
            <label
                key={answer.id}
                htmlFor={answer.id}
                onClick={(event) => {
                    event.preventDefault();
                    onAnswer(answer.text);
                }}
                className={[
                    "label",
                    answer.text.toLowerCase() in answered ? "selected" : null,
                    idx % 2 ? "right" : null
                ]
                    .join(" ")
                    .trim()}
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
