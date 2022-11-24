import { initialState } from "../../../../store/features/quiz/quizSlice";
import { maritalStatusChoices } from "../maritalStatusUserStory";
import { QuizState } from "../../../../store/RTKstore";
import { axCoreObject, storybookExperiment, devProxyObject } from "../../Age/Storybook/mockedAgeStates";

export const maritalStatusMockStateBase: QuizState = {
      ...initialState,
      answeredQuestions: {
            ...initialState.answeredQuestions,
            age: maritalStatusChoices[0],
            vote: 2
      },
      currentIndex: 0
};

const maritalStatusSubExperiment = "maritalStatus-beziehungen-sub-familyAndRelationship-v1";
export const mockDataMaritalStatusBasic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            ...axCoreObject.response,
            result: {
                sub_experiment: maritalStatusSubExperiment,
                variant_name: "basic",
                experiment_name: "staging-meta-bayern-merkur-ts-v2"
            }
        }
    }
];

export const mockDataMaritalStatusInteractive = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            ...axCoreObject.response,
            result: {
                sub_experiment: maritalStatusSubExperiment,
                variant_name: "interactive",
                experiment_name: "staging-meta-bayern-merkur-ts-v2"
            }
        }
    }
];

export const mockDataMaritalStatusHedonistic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            ...axCoreObject.response,
            result: {
                sub_experiment: maritalStatusSubExperiment,
                variant_name: "hedonistic",
                experiment_name: "staging-meta-bayern-merkur-ts-v2"
            }
        }
    }
];
