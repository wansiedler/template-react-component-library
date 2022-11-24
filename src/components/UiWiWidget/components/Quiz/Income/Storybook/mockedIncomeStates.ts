import { initialState } from "~/store/features/quiz/quizSlice";
import { incomeChoices } from "../incomeUserStory";
import { QuizState } from "~/store/RTKstore";
import { devProxyObject, storybookExperiment, axCoreObject } from "../../Age/Storybook/mockedAgeStates";
import {variantNames} from "~/types";
import {ageChoices} from "~/components/Quiz/Age/ageUserStory";

export const mockedIncome: QuizState = {
      ...initialState,
      answeredQuestions: {
            ...initialState.answeredQuestions,
            age: incomeChoices[2]
      },
      currentIndex: 0
};

// Work-Life-Balance uses ageChoices instead of incomeChoices for answeredQuestions
export const mockedIncomeWorkLifeBalance: QuizState = {
    ...mockedIncome,
    answeredQuestions: {
        ...mockedIncome.answeredQuestions,
        age: ageChoices[2]
    }
}

//
// Income
//

const incomeSubExperiment = "income-income-sub-careers-v1";

export const mockDataIncomeBasic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            ...axCoreObject.response,
            result: {
                variant_name: variantNames.basic,
                sub_experiment: incomeSubExperiment
            }
        }
    }
];

export const mockDataIncomeInteractive = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            ...axCoreObject.response,
            result: {
                variant_name: variantNames.interactive,
                sub_experiment: incomeSubExperiment
            }
        }
    }
];

export const mockDataIncomeHedonistic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            ...axCoreObject.response,
            result: {
                variant_name: variantNames.hedonistic,
                sub_experiment: incomeSubExperiment
            }
        }
    }
];

//
// Inflation
//

const inflationSubExperiment = "income-inflation-sub-businessAndFinance-v1";

export const mockDataInflationBasic = [
      storybookExperiment,
      devProxyObject,
      {
            ...axCoreObject,
            response: {
                  ...axCoreObject.response,
                  result: {
                        variant_name: variantNames.basic,
                        sub_experiment: inflationSubExperiment
                  }
            }
      }
];

export const mockDataInflationInteractive = [
      storybookExperiment,
      devProxyObject,
      {
            ...axCoreObject,
            response: {
                  ...axCoreObject.response,
                  result: {
                        variant_name: variantNames.interactive,
                        sub_experiment: inflationSubExperiment
                  }
            }
      }
];

export const mockDataInflationHedonistic = [
      storybookExperiment,
      devProxyObject,
      {
            ...axCoreObject,
            response: {
                  ...axCoreObject.response,
                  result: {
                        variant_name: variantNames.hedonistic,
                        sub_experiment: inflationSubExperiment
                  }
            }
      }
];

// Work-Life-Balance

const workLifeBalanceSubExperiment = "income-workLifeBalance-sub-healthyLiving-v1";

export const mockWorkLifeBalanceBasic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            ...axCoreObject.response,
            result: {
                sub_experiment: workLifeBalanceSubExperiment,
                variant_name: variantNames.basic
            }
        }
    }
];

export const mockWorkLifeBalanceInteractive = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            ...axCoreObject.response,
            result: {
                sub_experiment: workLifeBalanceSubExperiment,
                variant_name: variantNames.interactive
            }
        }
    }
];

export const mockWorkLifeBalanceHedonistic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            ...axCoreObject.response,
            result: {
                sub_experiment: workLifeBalanceSubExperiment,
                variant_name: variantNames.hedonistic,
            }
        }
    }
];

export const mockWorkLifeBalanceRelatedness = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            ...axCoreObject.response,
            result: {
                sub_experiment: workLifeBalanceSubExperiment,
                variant_name: variantNames.relatedness,
            }
        }
    }
];