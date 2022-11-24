import { useEffect, useState } from "react";
import RToggle from "react-toggle";
import "react-toggle/style.css";

type ToggleProps = {
    checked?: boolean;
    disabled?: boolean;
    id?: string;
    leftLabel: string;
    rightLabel: string;
    percentage?: number;
    onChange?: (value) => void;
};

export default function Toggle({
    checked = undefined,
    disabled = false,
    id = undefined,
    leftLabel = undefined,
    rightLabel = undefined,
    percentage = 0,
    onChange = undefined
}: ToggleProps) {
    const [checkedState, setCheckedState] = useState(true);
    const [listenersAttached, setListenersAttached] = useState(false);
    const delay = 250;

    useEffect(() => {
        // Create a new element before thumb
        const $thumb = document.querySelector(`#${id} .react-toggle-thumb`);
        console.log({ $thumb });
        if ($thumb) {
            $thumb.classList.add("react-toggle-thumb--moved");
            const $thumbBefore = document.createElement("div");
            $thumbBefore.className = "react-toggle-thumb-before";
            $thumb.parentElement.insertBefore($thumbBefore, $thumb);
        }
    }, []);

    useEffect(() => {
        if (checked !== undefined) {
            setCheckedState(checked);
        }
    }, [checked]);

    useEffect(() => {
        if (id === undefined) return;
        if (disabled) return;

        // let $thumb = undefined;
        let $thumbBefore = undefined;
        let $track = undefined;

        setInterval(() => {
            if (!listenersAttached && document.querySelector(`#${id}`) !== null) {
                // $thumb = document.querySelector(`#${id} .react-toggle-thumb`);
                $thumbBefore = document.querySelector(`#${id} .react-toggle-thumb-before`);
                $track = document.querySelector(`#${id} .react-toggle-track`);
                $thumbBefore.addEventListener("click", handleThumbBeforeClick);
                // $thumb.addEventListener("click", handleThumbClick);
                // $thumb.addEventListener("touchend", handleThumbTouch);
                $track.addEventListener("click", handleTrackClick);
                setListenersAttached(true);
            }
        }, 1000);

        const handleThumbBeforeClick = () => {
            const $thumb = document.querySelector(`#${id} .react-toggle-thumb`);
            $thumb.classList.remove("react-toggle-thumb--moved");
            setTimeout(() => {
                onChange(1);
            }, delay * 2);
        };

        const handleThumbClick = () => {
            if (checkedState) {
                // console.log("thumb clicked -> value: 1 (checked)");
                setTimeout(() => onChange(1), delay);
            } else {
                // console.log("thumb clicked -> value: 0 (not checked)");
                setTimeout(() => onChange(0), delay);
            }
        };

        // const handleThumbTouch = (e) => {
        //     const $el = document.querySelector(`#${id} .react-toggle`);
        //     // Reverse: if checked, then NEIN
        //     if ($el.classList.contains("react-toggle--checked")) {
        //         setTimeout(() => onChange(0), 0);
        //     } else {
        //         setTimeout(() => onChange(1), 0);
        //     }
        // };

        const handleTrackClick = () => {
            if (checkedState) {
                setCheckedState(false);
                // console.log("track clicked -> value: 0 (not checked)");
                setTimeout(() => onChange(0), delay);
            } else {
                setCheckedState(true);
                // console.log("track clicked -> value: 1 (checked)");
                setTimeout(() => onChange(1), delay);
            }
        };

        return () => {
            if ($thumbBefore) {
                $thumbBefore.removeEventListener("click", handleThumbBeforeClick);
            }
            // if ($thumb) {
            //     $thumb.removeEventListener("click", handleThumbClick);
            //     $thumb.removeEventListener("touchend", handleThumbTouch);
            // }
            if ($track) {
                $track.removeEventListener("click", handleTrackClick);
            }
            setListenersAttached(false);
        };
    }, [id, checkedState, disabled]);

    const renderVoteLabel = (label: string) => {
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textTransform: "uppercase",
                    fontSize: 18,
                    width: 50
                }}
            >
                {label && label}
            </div>
        );
    };

    return (
        <div
            style={{ display: "flex", justifyContent: "space-evenly1" }}
            className={`toggle ${disabled ? "toggle--disabled" : ""}`}
            id={id}
        >
            {leftLabel && percentage ? (
                <div className="label-container">
                    <div className="toggle-percentage">{percentage}%</div>
                    {renderVoteLabel(leftLabel)}
                </div>
            ) : (
                renderVoteLabel(leftLabel)
            )}

            <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center" }}>
                {/* always disable to remove all touch events */}
                <RToggle disabled checked={!checkedState} icons={false} onChange={() => {}} />
            </div>

            {rightLabel && percentage ? (
                <div>
                    <div className="toggle-percentage">{100 - percentage}%</div>
                    {renderVoteLabel(rightLabel)}
                </div>
            ) : (
                renderVoteLabel(rightLabel)
            )}
        </div>
    );
}
