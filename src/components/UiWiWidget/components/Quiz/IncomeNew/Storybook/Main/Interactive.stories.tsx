import {
    incomeNewMockStateBase,
    mockDataIncomeV2Interactive
} from "~/components/Quiz/IncomeNew/Storybook/mockedIncomeNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Income [New]/Income/Interactive");

export const Preview = createTemplate(incomeNewMockStateBase, mockDataIncomeV2Interactive, 0);
export const Start = createTemplate(incomeNewMockStateBase, mockDataIncomeV2Interactive, 1);
export const Question1 = createTemplate(incomeNewMockStateBase, mockDataIncomeV2Interactive, 2);
export const Result = createTemplate(incomeNewMockStateBase, mockDataIncomeV2Interactive, 3);
