import { ageNewMockStateBase, mockDataHKV2Interactive } from "~/components/Quiz/AgeNew/Storybook/mockedAgeNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Age [New]/Warm oder Kalt/Interactive");

export const Preview = createTemplate(ageNewMockStateBase, mockDataHKV2Interactive, 0);
export const Start = createTemplate(ageNewMockStateBase, mockDataHKV2Interactive, 1);
export const Question1 = createTemplate(ageNewMockStateBase, mockDataHKV2Interactive, 2);
export const Result = createTemplate(ageNewMockStateBase, mockDataHKV2Interactive, 3);
