import { initialState } from "../../../../store/features/quiz/quizSlice";
import { maritalStatusChoicesNew } from "../maritalStatusNewUserStory";
import { QuizState } from "../../../../store/RTKstore";
import { axCoreObject, storybookExperiment, devProxyObject } from "../../Age/Storybook/mockedAgeStates";
import { variantNames } from "~/types";

export const maritalStatusMockStateBase: QuizState = {
      ...initialState,
      answeredQuestions: {
            ...initialState.answeredQuestions,
            maritalStatus: maritalStatusChoicesNew[0],
            vote: 2
      },
      currentIndex: 0
};

//
// Beziehungen
//

const maritalStatusSubExperiment = "maritalStatus-beziehungenv2-sub-familyAndRelationship-v1";

export const mockDataMaritalStatusBasic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            ...axCoreObject.response,
            result: {
                sub_experiment: maritalStatusSubExperiment,
                variant_name: variantNames.basic
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
                variant_name: variantNames.interactive
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
                variant_name: variantNames.hedonistic
            }
        }
    }
];
