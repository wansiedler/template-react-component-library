import {
    incomeNewMockStateBase,
    mockDataIncomeV2Basic
} from "~/components/Quiz/IncomeNew/Storybook/mockedIncomeNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Income [New]/Income/Basic");

export const Preview = createTemplate(incomeNewMockStateBase, mockDataIncomeV2Basic, 0);
export const Start = createTemplate(incomeNewMockStateBase, mockDataIncomeV2Basic, 1);
export const Question1 = createTemplate(incomeNewMockStateBase, mockDataIncomeV2Basic, 2);
export const Result = createTemplate(incomeNewMockStateBase, mockDataIncomeV2Basic, 3);
