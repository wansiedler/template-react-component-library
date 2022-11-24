import { selectQuiz, useAppDispatch, useAppSelector } from "../../../../store/RTKstore";
// import {Index} from "../../../Index/Index";
import { setShowProgress } from "../../../../store/features/quiz/quizSlice";
import { useEffect } from "react";
import { Story } from "../../../../types";

type SquidGameStartProps = {
	story: Story;
	onAnswer: () => void;
};
export const SquidGameStartGif = ({ story, onAnswer, ...props }: SquidGameStartProps) => {
	const quiz = useAppSelector(selectQuiz);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(setShowProgress(true));
	}, []);
	return (
		<div
			className="quiz start-doll"
			//TODO fix
		>
			{/*<Index props={"tz"}/>*/}
			<div className="start-image-wrapper">
				<img className="start-image" src={story.backgroundPictures.doll}/>
			</div>
			<div className="start-bottom-wrapper">
				<h2 className=" start-headline">{story.question}</h2>
				<button className="button" onClick={onAnswer}>
					<a
						onClick={(event) => {
							event.preventDefault();
						}}
					>
						{story.subtext2} →
					</a>
				</button>
			</div>
		</div>
	);
};
