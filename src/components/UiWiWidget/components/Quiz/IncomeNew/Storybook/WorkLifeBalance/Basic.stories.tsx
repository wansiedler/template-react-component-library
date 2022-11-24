import {
    incomeNewMockStateBase,
    mockDataWorkLifeBalanceV2Basic
} from "~/components/Quiz/IncomeNew/Storybook/mockedIncomeNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Income [New]/Work-Life-Balance/Basic");

export const Preview = createTemplate(incomeNewMockStateBase, mockDataWorkLifeBalanceV2Basic, 0);
export const Start = createTemplate(incomeNewMockStateBase, mockDataWorkLifeBalanceV2Basic, 1);
export const Question1 = createTemplate(incomeNewMockStateBase, mockDataWorkLifeBalanceV2Basic, 2);
export const Result = createTemplate(incomeNewMockStateBase, mockDataWorkLifeBalanceV2Basic, 3);
