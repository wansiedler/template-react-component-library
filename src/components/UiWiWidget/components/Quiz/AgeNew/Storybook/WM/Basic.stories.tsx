import { ageNewMockStateBase, mockDataWMV2Basic } from "~/components/Quiz/AgeNew/Storybook/mockedAgeNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Age [New]/WM/Basic");

export const Preview = createTemplate(ageNewMockStateBase, mockDataWMV2Basic, 0);
export const Start = createTemplate(ageNewMockStateBase, mockDataWMV2Basic, 1);
export const Question1 = createTemplate(ageNewMockStateBase, mockDataWMV2Basic, 2);
export const Result = createTemplate(ageNewMockStateBase, mockDataWMV2Basic, 3);
