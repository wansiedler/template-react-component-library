import { useEffect, useRef, useState } from "react";
import ProgressContext from "../context/Progress";
import { QuizState, selectQuiz, useAppDispatch, useAppSelector } from "../../../store/RTKstore";
import { nextStory, prevStory } from "../../../store/features/quiz/quizSlice";
import { ProgressArray } from "./ProgressArray";
import { ProgressCounter } from "./ProgressCounter";
import { Story as StoryOld } from "./Story";
import { Story as StoryNew } from "./new/Story";
import { error } from "../../../utils";
import { themes } from "~/types";

export const Stories = () => {
    //"progress" or "counter"
    const [progressVisualiser, setProgressVisualiser] = useState<string>("progress");
    const [sshowProgress, setShowProgress] = useState<boolean>(true);
    const [pause, setPause] = useState<boolean>(true);
    const [videoDuration, ssetVideoDuration] = useState<number>(0);
    const mousedownId = useRef<any>();
    const isMounted = useRef<boolean>(true);
    const quiz = useAppSelector(selectQuiz);

    const {
        // quizType,
        // interactive,
        theme,
        currentIndex,
        finished,
        stories,
        isPaused,
        showProgress,
        keyboardNavigation
    }: QuizState = quiz;

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (typeof currentIndex === "number") {
            if (currentIndex >= 0 && currentIndex < stories.length) {
                setCurrentIdWrapper(() => currentIndex);
            } else {
                error(` ${currentIndex} is out of bounds. The stories length of ${stories.length}`);
            }
        }
    }, [currentIndex]);

    useEffect(() => {
        if (typeof isPaused === "boolean") {
            setPause(isPaused);
        }
    }, [isPaused]);

    useEffect(() => {
        if (typeof isPaused === "boolean") {
            setShowProgress(showProgress);
        }
    }, [showProgress]);

    useEffect(() => {
        setShowProgress(showProgress);
    }, [showProgress]);

    useEffect(() => {
        if (finished) return;
        const isClient = typeof window !== "undefined" && window.document;
        if (isClient && typeof keyboardNavigation === "boolean" && keyboardNavigation) {
            document.addEventListener("keydown", handleKeyDown);
            return () => {
                document.removeEventListener("keydown", handleKeyDown);
            };
        }
    }, [keyboardNavigation]);

    // Cleanup mounted state - for issue #130 (https://github.com/mohitk05/react-insta-stories/issues/130)
    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    const handleKeyDown = (e: KeyboardEvent) => {
        if (finished) return;
        if (e.key === "ArrowLeft") {
            previous();
        } else if (e.key === "ArrowRight") {
            next();
        } else if (e.code === "Space" || e.code === " ") {
            debouncePause(e);
            toggleState("pause", true);
        }
    };

    const toggleState = (action: string, showProgress?: boolean) => {
        if (isMounted.current) {
            setPause(action === "pause");
            setShowProgress(showProgress);
        }
    };

    const setCurrentIdWrapper = (callback) => {
        // dispatch(setIndex(callback));
        // setCurrentId(callback);
        toggleState("pause", false);
        // toggleState("pause", true);
        // toggleState('play', true);
    };

    const updateNextStoryIdForLoop = () => {
        setCurrentIdWrapper((prev) => (prev + 1) % stories.length);
    };

    const updateNextStoryId = () => {
        setCurrentIdWrapper((prev) => {
            if (prev < stories.length - 1) return prev + 1;
            return prev;
        });
    };

    const next = () => {
        if (isMounted.current) {
            // if (loop) {
            //     updateNextStoryIdForLoop()
            // } else {
            //     updateNextStoryId()
            // }
            // if (interactive) dispatch(newsLetter());
            // else dispatch(nextStory());

            dispatch(nextStory());
        }
    };

    const previous = () => {
        // setCurrentIdWrapper(prev => prev > 0 ? prev - 1 : prev)
        dispatch(prevStory());
    };

    // const debouncePause = (e: React.MouseEvent | React.TouchEvent | KeyboardEvent) => {
    const debouncePause = (e) => {
        e.preventDefault();

        mousedownId.current = setTimeout(() => {
            toggleState("pause");
        }, 200);
    };

    const getProgressVisualiser = () => {
        //TODO: showProgress is false if first slide is squidGameQuestion
        //if (stories[currentIndex].type === "squidGameResult") {
        //      return <ProgressArray />;
        //}
        // return null;

        if (
            (stories[currentIndex] && stories[currentIndex].type === "squidGameQuestion") ||
            (stories.length > 1 && showProgress)
        ) {
            if (progressVisualiser === "counter") {
                return <ProgressCounter />;
            }
            return <ProgressArray />;
        }
        return null;
    };

    try {
        const Story = [
            themes.hkv2,
            themes.tiktokv2,
            themes.baerbockv2,
            themes.incomev2,
            themes.inflationv2,
            themes.workLifeBalancev2,
            themes.wmv2,
            themes.stereotypesv2,
            themes.beziehungenv2,
            themes.kriegv2
        ].includes(theme)
            ? StoryNew
            : StoryOld;

        return (
            stories.length && (
                <div id="container">
                    <ProgressContext.Provider
                        value={{
                            showProgress,
                            videoDuration,
                            // currentId,
                            pause,
                            next
                        }}
                    >
                        {getProgressVisualiser()}
                    </ProgressContext.Provider>
                    {/*<StoryClass*/}
                    <Story />
                </div>
            )
        );
    } catch (e) {
        error(e);
    }
};
