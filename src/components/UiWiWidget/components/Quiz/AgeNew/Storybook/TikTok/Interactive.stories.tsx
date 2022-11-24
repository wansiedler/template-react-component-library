import {
    ageNewMockStateBase,
    mockDataTikTokV2Interactive
} from "~/components/Quiz/AgeNew/Storybook/mockedAgeNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Age [New]/TikTok/Interactive");

export const Preview = createTemplate(ageNewMockStateBase, mockDataTikTokV2Interactive, 0);
export const Start = createTemplate(ageNewMockStateBase, mockDataTikTokV2Interactive, 1);
export const Question1 = createTemplate(ageNewMockStateBase, mockDataTikTokV2Interactive, 2);
export const Result = createTemplate(ageNewMockStateBase, mockDataTikTokV2Interactive, 3);
