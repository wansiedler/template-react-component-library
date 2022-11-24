import React from "react";

// import "./question.scss";

/**
 * Renders question of a quiz slide
 * @param question - story.question
 * @param subquestion - story.subquestion (optional)
 * @param subtitle - If provided, question will be rendered without overlay element
 */
export const QuestionHeader: React.FC<{
    question: string;
    subquestion?: string;
    subtitle?: string;
}> = ({ question, subquestion, subtitle }) => {
    return (
        <>
            {subtitle ? (
                <div className="title">
                    {question && <h3 className="question">{question}</h3>}
                    <p className="subtitle">{subtitle}</p>
                </div>
            ) : (
                <div className="question-overlay">
                    <div className="question">
                        <h3>{question}</h3>
                        {subquestion && <div className="subquestion">{subquestion}</div>}
                    </div>
                </div>
            )}
        </>
    );
};
