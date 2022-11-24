import React, { useEffect } from "react";
import Logo from "./Logo/Logo";

// import "./question.scss";
import styled, { createGlobalStyle } from 'styled-components/macro'


const Frame = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column; 
    height: 100%;
    min-height: 100%;
`;

const FrameStart = styled.div`
    flex: 0 0 50px;
`;

const FrameStartLine = styled.div`
    height: 2px;
    background-color: #168acc;
    width: 130px;
    position: absolute;
    top: 20px;
    right: 55px;
`;

const FrameInner = styled.div`
    flex: 1 !important;
    min-height: 300px;
    ${(props) => (props.noPadding ? "" : "padding: 0px 20px 20px 20px !important;")}
`;

const FrameEnd = styled.div`
    flex: 0 0 50px;
`;

const FrameEndLine = styled.div`
    height: 2px;
    background-color: #168acc;
    width: 256px;
    position: absolute;
    bottom: 20px;
    left: 0px;
`;

/**
 * Renders question of a quiz slide
 */
export const QuestionFrame: React.FC<{ children: React.ReactNode; noPadding?: boolean }> = ({
    children,
    noPadding
}) => {
    useEffect(() => {
        const $el = document.querySelector(".sb-main-centered.sb-show-main #root");
        if ($el != null) {
            // @ts-ignore
            $el.style.padding = "0px";
            // @ts-ignore
            $el.style.overflow = "hidden";
        }
    }, []);

    return (
        <Frame>
            <FrameStart>
                <FrameStartLine />
                <Logo />
            </FrameStart>

            <FrameInner noPadding={noPadding}>{children}</FrameInner>

            <FrameEnd>
                <FrameEndLine />
            </FrameEnd>
        </Frame>
    );
};
