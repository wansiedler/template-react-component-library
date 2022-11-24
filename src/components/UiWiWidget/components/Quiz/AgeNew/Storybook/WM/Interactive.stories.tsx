import { ageNewMockStateBase, mockDataWMV2Interactive } from "~/components/Quiz/AgeNew/Storybook/mockedAgeNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Age [New]/WM/Interactive");

export const Preview = createTemplate(ageNewMockStateBase, mockDataWMV2Interactive, 0);
export const Start = createTemplate(ageNewMockStateBase, mockDataWMV2Interactive, 1);
export const Question1 = createTemplate(ageNewMockStateBase, mockDataWMV2Interactive, 2);
export const Result = createTemplate(ageNewMockStateBase, mockDataWMV2Interactive, 3);
