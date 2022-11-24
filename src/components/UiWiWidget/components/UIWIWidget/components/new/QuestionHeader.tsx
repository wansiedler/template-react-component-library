import React from "react";
// import "./question.scss";

/**
 * Renders question of a quiz slide
 * @param question - story.question
 * @param subQuestion - story.subquestion (optional)
 */
export const QuestionHeader: React.FC<{
    question: string;
    subQuestion?: string;
}> = ({ question, subQuestion: subQuestion }) => {
    return (
        <div className="question-overlay">
            <div className="question">
                <h3>{question}</h3>
                {subQuestion && <div className="subQuestion">{subQuestion}</div>}
            </div>
        </div>
    );
};
