import { ageNewMockStateBase, mockDataHKV2Basic } from "~/components/Quiz/AgeNew/Storybook/mockedAgeNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Age [New]/Warm oder Kalt/Basic");

export const Preview = createTemplate(ageNewMockStateBase, mockDataHKV2Basic, 0);
export const Start = createTemplate(ageNewMockStateBase, mockDataHKV2Basic, 1);
export const Question1 = createTemplate(ageNewMockStateBase, mockDataHKV2Basic, 2);
export const Result = createTemplate(ageNewMockStateBase, mockDataHKV2Basic, 3);
