import {
    maritalStatusMockStateBase,
    mockDataMaritalStatusInteractive
} from "~/components/Quiz/MaritalStatusNew/Storybook/mockedMaritalStatusStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Marital Status [New]/Beziehungen/Interactive");

export const Preview = createTemplate(maritalStatusMockStateBase, mockDataMaritalStatusInteractive, 0);
export const Start = createTemplate(maritalStatusMockStateBase, mockDataMaritalStatusInteractive, 1);
export const Question1 = createTemplate(maritalStatusMockStateBase, mockDataMaritalStatusInteractive, 2);
export const Result = createTemplate(maritalStatusMockStateBase, mockDataMaritalStatusInteractive, 3);