export const GenderChoice = ({ story, onAnswer }) => {
    const label = (answer, _idx) => {
        const input = (
            <input
                className="input"
                id={answer.id}
                type="radio"
                key={answer.id}
                value={answer}
                hidden={true}
                onClick={(event) => {
                    event.preventDefault();
                    onAnswer(answer);
                }}
            />
        );
        return (
            <label key={answer.id} htmlFor={answer.id} className={`label `}>
                {input}
                {answer.text}
            </label>
        );
    };
    return (
        <>
            {story.choices &&
                story.choices.map((answer, idx) => {
                    return label(answer, idx);
                })}
        </>
    );
};
