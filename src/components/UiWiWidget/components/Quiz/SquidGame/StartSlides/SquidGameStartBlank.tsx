import { selectQuiz, useAppDispatch, useAppSelector } from "../../../../store/RTKstore";
// import {Index} from "../../../Index/Index";
import { setShowProgress } from "../../../../store/features/quiz/quizSlice";
import { useEffect } from "react";
import { Story } from "../../../../types";

type SquidGameStartProps = {
	story: Story;
	onAnswer: () => void;
};
export const SquidGameStartBlank = ({ story, onAnswer, ...props }: SquidGameStartProps) => {
	const quiz = useAppSelector(selectQuiz);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(setShowProgress(true));
	}, []);
	return (
		<div className="quiz start-soldier">
			{/*<Index props={"tz"}/>*/}
			<div className="start-soldier-container">
				<div className="start-headline-wrapper">
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
				<div/>
			</div>
		</div>
	);
};
