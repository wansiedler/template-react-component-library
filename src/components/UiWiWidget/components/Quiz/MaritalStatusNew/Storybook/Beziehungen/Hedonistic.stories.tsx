import {
    maritalStatusMockStateBase,
    mockDataMaritalStatusHedonistic
} from "~/components/Quiz/MaritalStatusNew/Storybook/mockedMaritalStatusStates";
import { createMockedUiWiWidget, createTemplate } from "~/components/Quiz/Storybook/helpers";

export default createMockedUiWiWidget("Quizzes/Marital Status [New]/Beziehungen/Hedonistic");

export const Preview = createTemplate(maritalStatusMockStateBase, mockDataMaritalStatusHedonistic, 0);
export const Start = createTemplate(maritalStatusMockStateBase, mockDataMaritalStatusHedonistic, 1);
export const Question1 = createTemplate(maritalStatusMockStateBase, mockDataMaritalStatusHedonistic, 2);
export const Result = createTemplate(maritalStatusMockStateBase, mockDataMaritalStatusHedonistic, 3);
