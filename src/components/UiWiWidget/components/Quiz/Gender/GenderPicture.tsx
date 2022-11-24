export const GenderPicture = ({ story }) => {
    return (
        <>
            <div className={"question_block"}>
                <h2>{story.question}</h2>
            </div>
            <div className="gender-picture" />
        </>
    );
};
