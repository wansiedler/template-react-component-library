import { variantNames } from "~/types";
import {
    axCoreObject,
    devProxyObject,
    storybookExperiment
} from "~/components/Quiz/AgeNew/Storybook/mockedAgeNewStates";
import { QuizState } from "~/store/RTKstore";
import { initialState } from "~/store/features/quiz/quizSlice";
import { genderChoices } from "~/components/Quiz/Gender/genderUserStory";

//
// Income
//

const incomev2SubExperiment = "income-incomev2-sub-career-v1";

export const mockDataIncomeV2Basic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.basic,
                sub_experiment: incomev2SubExperiment
            }
        }
    }
];

export const mockDataIncomeV2Interactive = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.interactive,
                sub_experiment: incomev2SubExperiment
            }
        }
    }
];

export const mockDataIncomeV2Hedonistic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.hedonistic,
                sub_experiment: incomev2SubExperiment
            }
        }
    }
];

//
// Inflation
//

const inflationv2SubExperiment = "income-inflationv2-sub-politics-v1";

export const mockDataInflationV2Basic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.basic,
                sub_experiment: inflationv2SubExperiment
            }
        }
    }
];

export const mockDataInflationV2Interactive = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.interactive,
                sub_experiment: inflationv2SubExperiment
            }
        }
    }
];

export const mockDataInflationV2Hedonistic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.hedonistic,
                sub_experiment: inflationv2SubExperiment
            }
        }
    }
];

//
// Work-Life-Balance
//

export const incomeNewMockStateBase: QuizState = {
    ...initialState,
    answeredQuestions: {
        ...initialState.answeredQuestions,
        gender: genderChoices[0],
        vote: 2
    },
    currentIndex: 0
};

const workLifeBalanceSubExperiment = "income-workLifeBalancev2-sub-healthyLiving-v1";

export const mockDataWorkLifeBalanceV2Basic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.basic,
                sub_experiment: workLifeBalanceSubExperiment
            }
        }
    }
];

export const mockDataWorkLifeBalanceV2Hedonistic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.hedonistic,
                sub_experiment: workLifeBalanceSubExperiment
            }
        }
    }
];

export const mockDataWorkLifeBalanceV2Interactive = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.interactive,
                sub_experiment: workLifeBalanceSubExperiment
            }
        }
    }
];
