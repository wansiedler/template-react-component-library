export const Selects = ({ choiceAmount = 0, answered }) => {
    return (
        <p
            style={{
                lineHeight: 0,
                fontSize: 10,
                padding: 0,
                margin: 0,
                marginTop: 5,
                position: "absolute",
                top: 170,
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}
        >
            <span className="">{choiceAmount > 1 && " *max 3 Bereiche"}</span>
        </p>
    );
};
