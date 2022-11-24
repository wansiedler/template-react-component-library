import {
    incomeNewMockStateBase,
    mockDataInflationV2Hedonistic
} from "~/components/Quiz/IncomeNew/Storybook/mockedIncomeNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Income [New]/Inflation/Hedonistic");

export const Preview = createTemplate(incomeNewMockStateBase, mockDataInflationV2Hedonistic, 0);
export const Start = createTemplate(incomeNewMockStateBase, mockDataInflationV2Hedonistic, 1);
export const Question1 = createTemplate(incomeNewMockStateBase, mockDataInflationV2Hedonistic, 2);
export const Result = createTemplate(incomeNewMockStateBase, mockDataInflationV2Hedonistic, 3);
