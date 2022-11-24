import { ageNewMockStateBase, mockDataBaerbockV2Basic } from "~/components/Quiz/AgeNew/Storybook/mockedAgeNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Age [New]/Baerbock/Basic");

export const Preview = createTemplate(ageNewMockStateBase, mockDataBaerbockV2Basic, 0);
export const Start = createTemplate(ageNewMockStateBase, mockDataBaerbockV2Basic, 1);
export const Question1 = createTemplate(ageNewMockStateBase, mockDataBaerbockV2Basic, 2);
export const Result = createTemplate(ageNewMockStateBase, mockDataBaerbockV2Basic, 3);
