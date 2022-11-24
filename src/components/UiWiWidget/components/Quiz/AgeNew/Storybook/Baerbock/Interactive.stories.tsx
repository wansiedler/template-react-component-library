import {
    ageNewMockStateBase,
    mockDataBaerbockV2Interactive
} from "~/components/Quiz/AgeNew/Storybook/mockedAgeNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Age [New]/Baerbock/Interactive");

export const Preview = createTemplate(ageNewMockStateBase, mockDataBaerbockV2Interactive, 0);
export const Start = createTemplate(ageNewMockStateBase, mockDataBaerbockV2Interactive, 1);
export const Question1 = createTemplate(ageNewMockStateBase, mockDataBaerbockV2Interactive, 2);
export const Result = createTemplate(ageNewMockStateBase, mockDataBaerbockV2Interactive, 3);
