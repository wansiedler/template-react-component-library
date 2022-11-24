import React, {useEffect, useMemo} from "react";
import {QuizState, selectQuiz, useAppSelector} from "~/store/RTKstore";
import {sendEvent} from "~/quizAction";
import {eventTypes} from "~/types";
import {storyGenerator} from "./storyGenerator";
import {error} from "~/utils";

export const Story = () => {
	const quiz = useAppSelector(selectQuiz);
	const {stories, currentIndex, size}: QuizState = quiz;

	const height = size?.height;

	useEffect(() => {
		// experimentId !== "fallback" &&
		sendEvent({
			eventType: eventTypes.ACTIVE_VIEW,
			quiz,
		});
	}, []);

	useEffect(() => {
		if (currentIndex > 0) {
			sendEvent({
				eventType: eventTypes.ACTIVE_VIEW,
				quiz,
			});
		}
	}, [currentIndex]);

	const story = useMemo(() => storyGenerator(stories[currentIndex]), [stories, currentIndex]);

	const getStoryContent = () => {
		if (!stories[currentIndex]) return <div>No Story to render</div>;
		try {
			const OriginalContent: React.ElementType = story.originalContent;
			// @ts-ignore
			return <OriginalContent story={stories[currentIndex]}/>;
		} catch (e) {
			error(e);
		}
	};

	return (
		<div
			className={"story"}
	
		>
			{getStoryContent()}
		</div>
	);
};
