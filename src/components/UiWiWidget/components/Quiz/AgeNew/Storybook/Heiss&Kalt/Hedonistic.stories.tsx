import { ageNewMockStateBase, mockDataHKV2Hedonistic } from "~/components/Quiz/AgeNew/Storybook/mockedAgeNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Age [New]/Warm oder Kalt/Hedonistic");

export const Preview = createTemplate(ageNewMockStateBase, mockDataHKV2Hedonistic, 0);
export const Start = createTemplate(ageNewMockStateBase, mockDataHKV2Hedonistic, 1);
export const Question1 = createTemplate(ageNewMockStateBase, mockDataHKV2Hedonistic, 2);
export const Result = createTemplate(ageNewMockStateBase, mockDataHKV2Hedonistic, 3);
