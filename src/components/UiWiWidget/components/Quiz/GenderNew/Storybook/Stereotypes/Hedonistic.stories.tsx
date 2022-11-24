import {
    genderNewMockStateBase,
    mockDataStereotypesV2Hedonistic
} from "~/components/Quiz/GenderNew/Storybook/mockedGenderNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Gender [New]/Stereotypes/Hedonistic");

export const Preview = createTemplate(genderNewMockStateBase, mockDataStereotypesV2Hedonistic, 0);
export const Start = createTemplate(genderNewMockStateBase, mockDataStereotypesV2Hedonistic, 1);
export const Question1 = createTemplate(genderNewMockStateBase, mockDataStereotypesV2Hedonistic, 2);
export const Result = createTemplate(genderNewMockStateBase, mockDataStereotypesV2Hedonistic, 3);
