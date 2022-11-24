import { ageNewMockStateBase, mockDataKriegV2Hedonistic } from "~/components/Quiz/AgeNew/Storybook/mockedAgeNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Age [New]/Krieg/Hedonistic");

export const Preview = createTemplate(ageNewMockStateBase, mockDataKriegV2Hedonistic, 0);
export const Start = createTemplate(ageNewMockStateBase, mockDataKriegV2Hedonistic, 1);
export const Question1 = createTemplate(ageNewMockStateBase, mockDataKriegV2Hedonistic, 2);
export const Result = createTemplate(ageNewMockStateBase, mockDataKriegV2Hedonistic, 3);
