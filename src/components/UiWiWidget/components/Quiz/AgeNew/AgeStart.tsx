import {selectQuiz, useAppDispatch, useAppSelector} from "../../../store/RTKstore";
// import {Index} from "../../Index/Index";
import {setBackgroundPicture, setShowProgress} from "../../../store/features/quiz/quizSlice";
import {getVariantPicture} from "../../../quizAction";
import {useEffect} from "react";
import {Story} from "../../../types";

type AgeStartProps = {
	story: Story;
	onAnswer: () => void;
};
export const AgeStart = ({story, onAnswer, ...props}: AgeStartProps) => {
	const quiz = useAppSelector(selectQuiz);
	const dispatch = useAppDispatch();
	useEffect(() => {
		// props.action('pause', false)
		dispatch(setShowProgress(true));
		dispatch(setBackgroundPicture(getVariantPicture(story.teasers, quiz.variantId)));
		// dispatch(setSize(sizes.small));
	}, []);
	return (
		<>
			<div
				className="age-quiz-background"
				style={{
					background: `no-repeat top center url(${quiz.backgroundPicture})`,
				}}
			>
				<div className="age-start-slider-overlay"/>
				<div className="age-quiz-start-headline-container">
					<h2>{story.question}</h2>
					<h3>{story.subtext}</h3>
					<button onClick={onAnswer} className="button start_button_age">
						<a
							onClick={(event) => {
								event.preventDefault();
							}}
						>
							Start
						</a>
					</button>
				</div>
				{/*<Index/>*/}
			</div>
		</>
	);
};
