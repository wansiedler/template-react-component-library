import {limbicTypes, quizTypes, variants} from "../../../../types";
import {QuizState} from "../../../../store/RTKstore";
import {initialState} from "../../../../store/features/quiz/quizSlice";

export const mockedInterests: QuizState = {
	...initialState,
	limbicType: limbicTypes.traditionalist,
	quizType: quizTypes.interest,
	size: {
		height: 640,
		size: "big",
		width: 400,
	},
	showProgress: true,
	enabledIdleSlide: false,
	answeredQuestions: {
		...initialState.answeredQuestions,
		interests: {
			wirtschaft: [],
			politik: [{id: "a4d217d2-49bc-62aa-238a-f4d6afdce212", text: "Griechenland", correct: true}],
			wohnen: [],
		},
	},
	currentIndex: 0,
};

export const mockedInterestsWithAnswers: QuizState = {
	...mockedInterests,

	answeredQuestions: {
		interests: {
			wirtschaft: [
				{
					id: "5e34ef0e-4f1f-bbd5-e4cb-a03949afc360",
					text: "World Health Organisation",
					correct: true,
				},
			],
		},
	},
};

export const mockDataGrill = [
	{
		url: `https://public-ax-core-api.staging.ippen.space/v1/experiments/mapping/?client_id=268&category=genuss`,
		method: "GET",
		status: 200,
		response: ["storybook"],
	},
	{
		url: `https://idat.staging.ippen.space/dev`,
		method: "POST",
		status: 300,
	},
	{
		url: `https://ax-public.staging.ippen.space/v1/experiments/query/cc?client_id=268&category=genuss&transient_id=storybook`,
		method: "POST",
		status: 200,
		response: {
			result: {
				variant: variants["variant-1"],
				parameters: null,
				sub_experiment: "interest-grill-genuss-neutral",
				meta_experiment_variant: "variant-3",
			},
		},
	},
];

export const mockDataPolitik = [
	{
		url: `https://public-ax-core-api.staging.ippen.space/v1/experiments/mapping/?client_id=268&category=genuss`,
		method: "GET",
		status: 200,
		response: ["storybook"],
	},
	{
		url: `https://idat.staging.ippen.space/dev`,
		method: "POST",
		status: 300,
	},
	{
		url: `http://localhost:6006/iframe.html?id=quizzes-interests-themes-politik--question-5&viewMode=story?site-currentness-measurement-header=true`,
		method: "GET",
		status: 200,
		response: ["storybook"],
	},
	{
		url: `https://ax-public.staging.ippen.space/v1/experiments/query/cc?client_id=268&category=genuss&transient_id=storybook`,
		method: "POST",
		status: 200,
		response: {
			result: {
				variant: "variant-3",
				variant_name: "interest-politik-genuss-neutral",
				parameters: null,
				sub_experiment: "cxo-age-genuss-v1",
				meta_experiment_variant: "variant-2",
			},
		},
	},
];
