import {
    ageNewMockStateBase,
    mockDataBaerbockV2Hedonistic
} from "~/components/Quiz/AgeNew/Storybook/mockedAgeNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Age [New]/Baerbock/Hedonistic");

export const Preview = createTemplate(ageNewMockStateBase, mockDataBaerbockV2Hedonistic, 0);
export const Start = createTemplate(ageNewMockStateBase, mockDataBaerbockV2Hedonistic, 1);
export const Question1 = createTemplate(ageNewMockStateBase, mockDataBaerbockV2Hedonistic, 2);
export const Result = createTemplate(ageNewMockStateBase, mockDataBaerbockV2Hedonistic, 3);
