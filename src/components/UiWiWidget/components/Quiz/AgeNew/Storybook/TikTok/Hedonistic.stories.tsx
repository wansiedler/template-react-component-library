import { ageNewMockStateBase, mockDataTikTokV2Hedonistic } from "~/components/Quiz/AgeNew/Storybook/mockedAgeNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Age [New]/TikTok/Hedonistic");

export const Preview = createTemplate(ageNewMockStateBase, mockDataTikTokV2Hedonistic, 0);
export const Start = createTemplate(ageNewMockStateBase, mockDataTikTokV2Hedonistic, 1);
export const Question1 = createTemplate(ageNewMockStateBase, mockDataTikTokV2Hedonistic, 2);
export const Result = createTemplate(ageNewMockStateBase, mockDataTikTokV2Hedonistic, 3);
