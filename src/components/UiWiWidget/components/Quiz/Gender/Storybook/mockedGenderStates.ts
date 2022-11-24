import { QuizState } from "../../../../store/RTKstore";
import { initialState } from "../../../../store/features/quiz/quizSlice";
import { genderChoices } from "../genderUserStory";
import { axCoreObject, devProxyObject, storybookExperiment } from "../../Age/Storybook/mockedAgeStates";

export const genderStereotypesMockDataBasic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            ...axCoreObject.response,
            result: {
                variant_name: "gender-stereotypes-genuss-basic",
                sub_experiment: "cxo-age-genuss-v1"
            }
        }
    }
];

export const genderStereotypesMockDataInteractive = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            ...axCoreObject.response,
            result: {
                variant_name: "gender-stereotypes-genuss-interactive",
                sub_experiment: "cxo-age-genuss-v1"
            }
        }
    }
];

export const genderStereotypesMockDataHedonistic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            ...axCoreObject.response,
            result: {
                variant_name: "gender-stereotypes-genuss-hedonistic",
                sub_experiment: "cxo-age-genuss-v1"
            }
        }
    }
];

export const genderMockStateBase: QuizState = {
    ...initialState,
    answeredQuestions: {
        ...initialState.answeredQuestions,
        age: genderChoices[0]
    },
    currentIndex: 0
};
