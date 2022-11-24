import React, { useEffect, useState } from "react";
import { getRandomInt } from "~/utils";

export const ProgressBar: React.FC<{
    completed?: number;
    round: boolean;
    left?: boolean;
    ResultLabel?: string;
    interestResultLabel?: string | number;
    limbicType?: string;
    selectedAnswer?: boolean;
    // color?: string,
    // show: boolean,
    // type: string,
}> = ({
    completed = undefined,
    round = false,
    left = false,
    ResultLabel = "",
    interestResultLabel = null,
    limbicType = "",
    selectedAnswer = false
    // color = "",
    // show = true,
    // type = "",
}) => {
    const [value, setValue] = useState(0);
    const styles = {
        //containerStyles: {
        //      width: limbicType === "harmoniser" && type === "interests" ? "60%" : "80%"
        //},
        fillerStyles: {
            width: `${value}%`
        }
    };

    useEffect(() => {
        //user completes quiz, and it counts until equal to completed
        if (completed) {
            const timer = setInterval(() => {
                if (value <= completed) {
                    setValue((previousCount) => previousCount + 1);
                } else {
                    clearInterval(timer);
                }
            }, 1);
            return () => clearInterval(timer);
        }
    });

    useEffect(() => {
        //This is for the Vote component, so the bars move indefinitely
        if (completed === undefined) {
            setValue(getRandomInt(100));
            const timer = setInterval(() => setValue(getRandomInt(100)), 1000);
            return () => clearInterval(timer);
        }
    }, []);

    const highlightResultLabel = () => {
        if ((ResultLabel && selectedAnswer) || (interestResultLabel && value > 0)) {
            return "selected";
        }
        return "";
    };

    return (
        <div className={round ? "round " : `${left}` ? "left" : ""}>
            <div className="progress-bar">
                {ResultLabel && (
                    <span className={` progress-bar-label`}>{completed ? `${completed}% ${ResultLabel}` : ""}</span>
                )}
                <div className="progress-bar-filler" style={styles.fillerStyles}>
                    {interestResultLabel !== null && (
                        <span className={` progress-bar-label ${highlightResultLabel()}`}>
                            {interestResultLabel} von 2
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};
