import { ageNewMockStateBase, mockDataWMV2Hedonistic } from "~/components/Quiz/AgeNew/Storybook/mockedAgeNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Age [New]/WM/Hedonistic");

export const Preview = createTemplate(ageNewMockStateBase, mockDataWMV2Hedonistic, 0);
export const Start = createTemplate(ageNewMockStateBase, mockDataWMV2Hedonistic, 1);
export const Question1 = createTemplate(ageNewMockStateBase, mockDataWMV2Hedonistic, 2);
export const Result = createTemplate(ageNewMockStateBase, mockDataWMV2Hedonistic, 3);
