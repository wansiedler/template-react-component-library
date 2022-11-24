import { variantNames } from "~/types";
import { axCoreObject, devProxyObject, storybookExperiment } from "~/components/Quiz/AgeNew/Storybook/mockedAgeNewStates";
import { QuizState } from "~/store/RTKstore";
import { initialState } from "~/store/features/quiz/quizSlice";
import { genderChoices } from "~/components/Quiz/Gender/genderUserStory";
import { votesNew } from "~/components/Quiz/GenderNew/genderNewUserStory";

//
// Stereotypes
//

export const genderNewMockStateBase: QuizState = {
    ...initialState,
    answeredQuestions: {
        ...initialState.answeredQuestions,
        gender: genderChoices[0],
        vote: 2
    },
    currentIndex: 0
};

const stereotypesV2Subexperiment = "gender-stereotypesv2-sub-travel-v1";

export const mockDataStereotypesV2Basic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.basic,
                sub_experiment: stereotypesV2Subexperiment
            }
        }
    }
];

export const mockDataStereotypesV2Hedonistic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.hedonistic,
                sub_experiment: stereotypesV2Subexperiment
            }
        }
    }
];

export const mockDataStereotypesV2Interactive = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.interactive,
                sub_experiment: stereotypesV2Subexperiment
            }
        }
    }
];