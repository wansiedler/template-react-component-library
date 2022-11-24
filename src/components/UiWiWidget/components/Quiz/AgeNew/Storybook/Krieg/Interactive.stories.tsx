import { ageNewMockStateBase, mockDataKriegV2Interactive } from "~/components/Quiz/AgeNew/Storybook/mockedAgeNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Age [New]/Krieg/Interactive");

export const Preview = createTemplate(ageNewMockStateBase, mockDataKriegV2Interactive, 0);
export const Start = createTemplate(ageNewMockStateBase, mockDataKriegV2Interactive, 1);
export const Question1 = createTemplate(ageNewMockStateBase, mockDataKriegV2Interactive, 2);
export const Result = createTemplate(ageNewMockStateBase, mockDataKriegV2Interactive, 3);
