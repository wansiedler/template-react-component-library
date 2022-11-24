import { ageNewMockStateBase, mockDataKriegV2Basic } from "~/components/Quiz/AgeNew/Storybook/mockedAgeNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Age [New]/Krieg/Basic");

export const Preview = createTemplate(ageNewMockStateBase, mockDataKriegV2Basic, 0);
export const Start = createTemplate(ageNewMockStateBase, mockDataKriegV2Basic, 1);
export const Question1 = createTemplate(ageNewMockStateBase, mockDataKriegV2Basic, 2);
export const Result = createTemplate(ageNewMockStateBase, mockDataKriegV2Basic, 3);
