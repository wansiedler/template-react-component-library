export const IncomeTitle = ({ title, subquestion }) => {
    return (
        <>
            <div className="income-background" />
            <div className="title-wrapper">
                <h2 className=" title-text">
                    {title ? title : null}:{" "}
                    <span className=" title-subquestion">{subquestion ? subquestion : null}</span>
                </h2>
            </div>
        </>
    );
};
