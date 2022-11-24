import {
    maritalStatusMockStateBase,
    mockDataMaritalStatusBasic
} from "~/components/Quiz/MaritalStatusNew/Storybook/mockedMaritalStatusStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Marital Status [New]/Beziehungen/Basic");

export const Preview = createTemplate(maritalStatusMockStateBase, mockDataMaritalStatusBasic, 0);
export const Start = createTemplate(maritalStatusMockStateBase, mockDataMaritalStatusBasic, 1);
export const Question1 = createTemplate(maritalStatusMockStateBase, mockDataMaritalStatusBasic, 2);
export const Result = createTemplate(maritalStatusMockStateBase, mockDataMaritalStatusBasic, 3);
