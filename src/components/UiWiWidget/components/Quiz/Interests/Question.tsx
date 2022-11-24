import React from "react";
import { QuestionHeader } from "../QuestionHeader";
import { Choice } from "./Choice";
import { selectQuiz, useAppSelector } from "~/store/RTKstore";

export const Question = React.memo<{ [key: string]: any }>(({ story, onAnswer, onWeiter, choice, reveal }) => {
    const quiz = useAppSelector(selectQuiz);

    return (
        <>
            <QuestionHeader question={story.question} /*subtext={story.subtext}*/ />
            {/*<Subtext story={story} />*/}
            <Choice story={story} onAnswer={onAnswer} inline={false} topic={story.topic} {...{ reveal }} />
            <button
                className={[
                    "submit-button",
                    quiz.answeredQuestions?.interests &&
                    quiz.answeredQuestions?.interests[story.topic] &&
                    quiz.answeredQuestions?.interests[story.topic]?.length &&
                    quiz.answeredQuestions?.interests[story.topic]?.some((topic) => {
                        return story.choices?.map(({ id }) => id).includes(topic.id);
                    })
                        ? "selected"
                        : null
                ].join(" ")}
                onClick={onWeiter}
            >
                Weiter
            </button>
        </>
    );
});
