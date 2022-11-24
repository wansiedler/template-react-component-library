import {
    incomeNewMockStateBase,
    mockDataInflationV2Basic
} from "~/components/Quiz/IncomeNew/Storybook/mockedIncomeNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Income [New]/Inflation/Basic");

export const Preview = createTemplate(incomeNewMockStateBase, mockDataInflationV2Basic, 0);
export const Start = createTemplate(incomeNewMockStateBase, mockDataInflationV2Basic, 1);
export const Question1 = createTemplate(incomeNewMockStateBase, mockDataInflationV2Basic, 2);
export const Result = createTemplate(incomeNewMockStateBase, mockDataInflationV2Basic, 3);
