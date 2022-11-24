import {
    incomeNewMockStateBase,
    mockDataInflationV2Interactive
} from "~/components/Quiz/IncomeNew/Storybook/mockedIncomeNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Income [New]/Inflation/Interactive");

export const Preview = createTemplate(incomeNewMockStateBase, mockDataInflationV2Interactive, 0);
export const Start = createTemplate(incomeNewMockStateBase, mockDataInflationV2Interactive, 1);
export const Question1 = createTemplate(incomeNewMockStateBase, mockDataInflationV2Interactive, 2);
export const Result = createTemplate(incomeNewMockStateBase, mockDataInflationV2Interactive, 3);
