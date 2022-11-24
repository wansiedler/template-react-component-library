import {
    genderNewMockStateBase,
    mockDataStereotypesV2Basic
} from "~/components/Quiz/GenderNew/Storybook/mockedGenderNewStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Gender [New]/Stereotypes/Basic");

export const Preview = createTemplate(genderNewMockStateBase, mockDataStereotypesV2Basic, 0);
export const Start = createTemplate(genderNewMockStateBase, mockDataStereotypesV2Basic, 1);
export const Question1 = createTemplate(genderNewMockStateBase, mockDataStereotypesV2Basic, 2);
export const Result = createTemplate(genderNewMockStateBase, mockDataStereotypesV2Basic, 3);
