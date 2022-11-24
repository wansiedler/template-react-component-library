import {
    incomeNewMockStateBase,
    mockDataWorkLifeBalanceV2Hedonistic
} from "~/components/Quiz/IncomeNew/Storybook/mockedIncomeNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Income [New]/Work-Life-Balance/Hedonistic");

export const Preview = createTemplate(incomeNewMockStateBase, mockDataWorkLifeBalanceV2Hedonistic, 0);
export const Start = createTemplate(incomeNewMockStateBase, mockDataWorkLifeBalanceV2Hedonistic, 1);
export const Question1 = createTemplate(incomeNewMockStateBase, mockDataWorkLifeBalanceV2Hedonistic, 2);
export const Result = createTemplate(incomeNewMockStateBase, mockDataWorkLifeBalanceV2Hedonistic, 3);
