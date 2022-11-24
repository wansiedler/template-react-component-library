import {
    genderNewMockStateBase,
    mockDataStereotypesV2Interactive
} from "~/components/Quiz/GenderNew/Storybook/mockedGenderNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Gender [New]/Stereotypes/Interactive");

export const Preview = createTemplate(genderNewMockStateBase, mockDataStereotypesV2Interactive, 0);
export const Start = createTemplate(genderNewMockStateBase, mockDataStereotypesV2Interactive, 1);
export const Question1 = createTemplate(genderNewMockStateBase, mockDataStereotypesV2Interactive, 2);
export const Result = createTemplate(genderNewMockStateBase, mockDataStereotypesV2Interactive, 3);
