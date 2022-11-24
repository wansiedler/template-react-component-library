import {
    incomeNewMockStateBase,
    mockDataIncomeV2Hedonistic
} from "~/components/Quiz/IncomeNew/Storybook/mockedIncomeNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Income [New]/Income/Hedonistic");

export const Preview = createTemplate(incomeNewMockStateBase, mockDataIncomeV2Hedonistic, 0);
export const Start = createTemplate(incomeNewMockStateBase, mockDataIncomeV2Hedonistic, 1);
export const Question1 = createTemplate(incomeNewMockStateBase, mockDataIncomeV2Hedonistic, 2);
export const Result = createTemplate(incomeNewMockStateBase, mockDataIncomeV2Hedonistic, 3);
