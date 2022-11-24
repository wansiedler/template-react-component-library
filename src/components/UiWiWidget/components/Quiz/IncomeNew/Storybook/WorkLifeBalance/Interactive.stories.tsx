import {
    incomeNewMockStateBase,
    mockDataWorkLifeBalanceV2Interactive
} from "~/components/Quiz/IncomeNew/Storybook/mockedIncomeNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Income [New]/Work-Life-Balance/Interactive");

export const Preview = createTemplate(incomeNewMockStateBase, mockDataWorkLifeBalanceV2Interactive, 0);
export const Start = createTemplate(incomeNewMockStateBase, mockDataWorkLifeBalanceV2Interactive, 1);
export const Question1 = createTemplate(incomeNewMockStateBase, mockDataWorkLifeBalanceV2Interactive, 2);
export const Result = createTemplate(incomeNewMockStateBase, mockDataWorkLifeBalanceV2Interactive, 3);
