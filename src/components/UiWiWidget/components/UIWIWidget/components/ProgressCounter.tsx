import React, { useContext, useEffect, useRef, useState } from "react";
import ProgressCtx from "../context/Progress";
import GlobalContext from "../context/Global";
import { QuizState, selectQuiz, useAppSelector } from "../../../store/RTKstore";
import { GlobalCtx, ProgressContext } from "../../../types";

// import "./counter.scss";

/**
 * Used by GenderPicture component.
 */
export const ProgressCounter = () => {
	const {
		// currentId,
		next,
		videoDuration,
		showProgress,
		pause
	} = useContext<ProgressContext>(ProgressCtx);
	const { stories, currentIndex, defaultInterval }: QuizState = useAppSelector(selectQuiz);
	// const {stories} = useContext<StoriesContextInterface>(StoriesContext);
	const {
		// defaultInterval,
		onStoryEnd, onStoryStart, onAllStoriesEnd
	} = useContext<GlobalCtx>(GlobalContext);
	const getCurrentInterval = () => {
		if (stories[currentIndex] && stories[currentIndex].type === "video") return videoDuration;
		if (stories[currentIndex] && typeof stories[currentIndex].duration === "number")
			return stories[currentIndex].duration;
		return defaultInterval;
	};
	const [decrement, setDecrement] = useState<number>(0);
	const intervalRef = useRef<ReturnType<typeof setInterval>>(null);
	useEffect(() => {
		setDecrement(getCurrentInterval());
	}, [currentIndex, stories]);
	useEffect(() => {
		if (!pause) {
			intervalRef.current = setInterval(decrementCount, 1000);
		}
		return () => {
			clearInterval(intervalRef.current);
		};
	}, [currentIndex, pause]);
	let decrementCopy = decrement;
	const decrementCount = () => {
		if (decrementCopy === getCurrentInterval()) storyStartCallback();
		setDecrement((count: number) => {
			const interval = getCurrentInterval();
			decrementCopy = count - 1000;
			return count - 1000;
		});
		if (decrementCopy < 0) {
			storyEndCallback();
			if (currentIndex === stories.length - 1) {
				allStoriesEndCallback();
			}
			clearInterval(intervalRef.current);
			next();
		}
	};
	const storyStartCallback = () => {
		onStoryStart && onStoryStart(currentIndex, stories[currentIndex]);
	};
	const storyEndCallback = () => {
		onStoryEnd && onStoryEnd(currentIndex, stories[currentIndex]);
	};
	const allStoriesEndCallback = () => {
		onAllStoriesEnd && onAllStoriesEnd(currentIndex, stories);
	};
	const ProgressWrapper = (props) => (
		<div style={{ ...getProgressWrapperStyle(props) }} id="countdown">
			{props.children}
		</div>
	);
	const getProgressWrapperStyle = ({ pause, showProgress }) => ({
		opacity: !showProgress ? 0 : 1
	});
	const Progress = (props) => {
		const { showProgress, pause } = useContext<ProgressContext>(ProgressCtx);
		return (
			<ProgressWrapper pause={pause} showProgress={showProgress}>
				<div>{Math.round(props.decrement)}</div>
			</ProgressWrapper>
		);
	};
	return (
		<div>
			<Progress decrement={decrement / 1000 >= 0 ? decrement / 1000 : 0}/>
		</div>
	);
};
