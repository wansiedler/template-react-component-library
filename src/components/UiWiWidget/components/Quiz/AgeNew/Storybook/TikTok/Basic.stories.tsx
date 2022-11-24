import { ageNewMockStateBase, mockDataTikTokV2Basic } from "~/components/Quiz/AgeNew/Storybook/mockedAgeNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Age [New]/TikTok/Basic");

export const Preview = createTemplate(ageNewMockStateBase, mockDataTikTokV2Basic, 0);
export const Start = createTemplate(ageNewMockStateBase, mockDataTikTokV2Basic, 1);
export const Question1 = createTemplate(ageNewMockStateBase, mockDataTikTokV2Basic, 2);
export const Result = createTemplate(ageNewMockStateBase, mockDataTikTokV2Basic, 3);
