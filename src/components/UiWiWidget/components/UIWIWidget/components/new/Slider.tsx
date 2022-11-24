import styled from "styled-components";
import ReactSlider from "react-slider";

const StyledThumbRing = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #dbdbdb 0% 0% no-repeat padding-box;
    opacity: 0.7;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -9px;
    left: -9px;
    z-index: 2;
`;

const StyledThumb = styled.div`
    height: 42px;
    line-height: 42px;
    width: 42px;
    text-align: center;
    background-color: #000;
    color: #fff;
    border-radius: 50%;
    cursor: ${(props) => (props.disabled ? "default" : "grab")};
    position: relative;

    background: #f4f4f4 0% 0% no-repeat padding-box;
    box-shadow: inset 0px 3px 6px #00000043, 0px 3px 6px #000000bf;
    border: 1px solid #e3e3e3;
    opacity: 1;
`;

const StyledThumbCircle = styled.div`
    background: #f4f4f4 0% 0% no-repeat padding-box;
    height: 42px;
    line-height: 42px;
    width: 42px;
    border-radius: 50%;
    position: absolute;
    z-index: 3;
    border: 1px solid #999;
    box-shadow: inset 0px 3px 6px #00000043, 0px 3px 6px #000000bf;
`;

const Thumb = (props, disabled = false, onAnswer = undefined) => {
    return (
        <StyledThumb
            disabled={disabled}
            onTouchEnd={() => {
                if (onAnswer === undefined) return;
                onAnswer(props["aria-valuenow"]);
            }}
            onMouseUp={() => {
                if (onAnswer === undefined) return;
                onAnswer(props["aria-valuenow"]);
            }}
            {...props}
        >
            <StyledThumbRing />
            <StyledThumbCircle />
        </StyledThumb>
    );
};

const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${(props) =>
        props.index === 1
            ? "#f4f4f4"
            : "transparent linear-gradient(89deg, #8BB8D1 0%, #168ACC 54%, #0E2531 100%) 0% 0% no-repeat padding-box"};
    border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

export default function Slider(props) {
    return (
        <ReactSlider
            defaultValue={50}
            renderTrack={Track}
            // trackClassName="hslider__track"
            renderThumb={(p) => Thumb(p, props.disabled, props.onAnswer)}
            {...props}
        />
    );
}
