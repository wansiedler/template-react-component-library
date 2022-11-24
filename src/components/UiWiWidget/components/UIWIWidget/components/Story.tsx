import React, { useEffect, useMemo } from "react";
import { QuizState, selectQuiz, useAppSelector } from "~/store/RTKstore";
import { sendEvent } from "~/quizAction";
import { eventTypes } from "~/types";
import { error } from "~/utils";
import { storyGenerator } from "./storyGenerator";

export const Story = () => {
    const quiz = useAppSelector(selectQuiz);

    const {
        experimentId,
        stories,
        currentIndex,
        finished,
        interactive,
        size,
        isPaused,
        showProgress,
        keyboardNavigation
    }: QuizState = quiz;

    const width = size?.width;
    const height = size?.height;

    useEffect(() => {
        // experimentId !== "fallback" &&
        // sendEvent({
        //     eventType: eventTypes.ACTIVE_VIEW,
        //     quiz
        // });
    }, []);

    useEffect(() => {
        if (
            //experimentId !== "fallback" &&
            currentIndex > 0
        ) {
            sendEvent({
                eventType: eventTypes.ACTIVE_VIEW,
                quiz
            });
        }
    }, [currentIndex]);

    const story = useMemo(() => storyGenerator(stories[currentIndex]), [stories, currentIndex]);

    const getStoryContent = () => {
        if (!stories[currentIndex]) return <div>No Story to render</div>;
        try {
            // @ts-ignore
            const OriginalContent: React.ElementType = story.originalContent;
            // @ts-ignore
            return <OriginalContent story={stories[currentIndex]} />;
        } catch (e) {
            error(e);
        }
    };

    return (
        <div
            className={"story"}
            style={{
                ...{
                    width: "100%",
                    // width: "max-content",
                    minHeight: height
                }
            }}
        >
            {getStoryContent()}
        </div>
    );
};
