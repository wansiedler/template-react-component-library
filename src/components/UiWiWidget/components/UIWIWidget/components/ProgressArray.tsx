import React, { useContext, useEffect, useRef, useState } from "react";
import ProgressCtx from "../context/Progress";
import GlobalContext from "../context/Global";
import { QuizState, selectQuiz, useAppSelector } from "../../../store/RTKstore";
import { Progress } from "./Progress";
import { GlobalCtx, ProgressContext } from "../../../types";

// import "./progressArray.scss";

export const ProgressArray = () => {
	const [count, setCount] = useState<number>(0);
	const {
		// currentId,
		next,
		videoDuration
	} = useContext<ProgressContext>(ProgressCtx);
	const {
		// defaultInterval,
		onStoryEnd,
		onStoryStart,
		onAllStoriesEnd
	} = useContext<GlobalCtx>(GlobalContext);
	// const {stories} = useContext<StoriesContextInterface>(StoriesContext);
	const { stories, currentIndex, defaultInterval }: QuizState = useAppSelector(selectQuiz);
	const { showProgress, pause } = useContext<ProgressContext>(ProgressCtx);
	useEffect(() => {
		setCount(0);
	}, [currentIndex, stories]);
	useEffect(() => {
		if (!pause) {
			animationFrameId.current = requestAnimationFrame(incrementCount);
		}
		return () => {
			cancelAnimationFrame(animationFrameId.current);
		};
	}, [currentIndex, pause]);
	const animationFrameId = useRef<number>();
	let countCopy = count;
	const incrementCount = () => {
		if (countCopy === 0) storyStartCallback();
		setCount((count: number) => {
			const interval = getCurrentInterval();
			countCopy = count + 100 / ((interval / 1000) * 60);
			return count + 100 / ((interval / 1000) * 60);
		});
		if (countCopy < 100) {
			animationFrameId.current = requestAnimationFrame(incrementCount);
		} else {
			storyEndCallback();
			if (currentIndex === stories.length - 1) {
				allStoriesEndCallback();
			}
			cancelAnimationFrame(animationFrameId.current);
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
	const getCurrentInterval = () => {
		if (stories[currentIndex].type === "video") return videoDuration;
		if (typeof stories[currentIndex].duration === "number") return stories[currentIndex].duration;
		return defaultInterval;
	};

	return (
		<div className="progress-array">
			{stories.map((_, i) => (
				<Progress
					key={i}
					count={count}
					width={1 / stories.length}
					active={i === currentIndex ? 1 : i < currentIndex ? 2 : 0}
				/>
			))}
		</div>
	);
};
