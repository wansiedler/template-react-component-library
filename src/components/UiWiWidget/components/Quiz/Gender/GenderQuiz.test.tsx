import React from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import quizSlice from "../../../store/features/quiz/quizSlice";
import { AppProps, variants } from "../../../types";
import { genderMockStateBase } from "./Storybook/mockedGenderStates";
import { genderChoices, genderUserStory } from "./genderUserStory";
import { UiWiWidget } from "../../../UiWiWidget";
import * as API from "../../../quizAction";
import { ageUserStory } from "../Age/ageUserStory";
// import userEvent from "@testing-library/user-event";

export const createReduxStore = (initialState = null) => {
    return configureStore({
        reducer: quizSlice,
        preloadedState: { genderMockStateBase, ...initialState }
    });
};

export const renderTestApp = (component, options?) => {
    const store = createReduxStore(options?.initialState);

    return <Provider store={store}>{component}</Provider>;
};

beforeEach(() => {
    // jest.spyOn(API, "fetchMetaExperiment").mockImplementation(() => new Promise((res) => res("storybook")));

    jest.spyOn(API, "sendEvent").mockImplementation(() => new Promise((res) => res("storybook")));
    jest.spyOn(API, "fetchExperimentData").mockImplementation(
        () =>
            new Promise((res) =>
                res({
                    result: {
                        variant: variants["variant-1"],
                        parameters: null,
                        sub_experiment: "contextual-user-type-genuss-v2",
                        variant_name: "gender-coachella-genuss",
                        // sub_experiment: "age-grill-genuss",
                        meta_experiment_variant: "variant-3"
                    }
                })
            )
    );
    jest.spyOn(API, "getGadget").mockImplementation(() => new Promise((res) => res("storybook")));
    // jest.spyOn(API, "fetchStories").mockClear();
});

describe("GenderQuiz", () => {
    describe("rendering", () => {
        const appProps: AppProps = {
            categoryName: "genuss",
            clientId: 268
        };

        const clientObj: object = {
            clientX: 549,
            clientY: 385
        };

        it("should render Vote slide", async () => {
            const { container, getByText } = await render(renderTestApp(<UiWiWidget {...appProps} />));

            const genderUserStoryObj = genderUserStory.coachella.variants["variant-3"][0];
            const variantText: string = genderUserStoryObj.subtext;
            // const voteText: string = genderUserStoryObj.votes[0];
            const regex = new RegExp(variantText, "is");
            expect(await screen.findByText(regex)).toBeInTheDocument();
            // expect(container).toHaveTextContent(voteText);
        });

        it("should render SelectGroup slide", async () => {
            const { container, getByText } = await render(renderTestApp(<UiWiWidget {...appProps} />));

            await waitFor(() => {
                const slider: Element = container.querySelector(".slider-outer-wrapper");
                fireEvent.mouseDown(slider, clientObj);
                fireEvent.mouseMove(slider, clientObj);
                fireEvent.mouseUp(slider);
            });

            const selectGroupText: string = genderUserStory.coachella.slides[0].subtext;
            const regex = new RegExp(selectGroupText, "is");
            expect(await screen.findByText(regex)).toBeInTheDocument();
        });

        it("should render ResultNew slide", async () => {
            const { container, getByText } = await render(renderTestApp(<UiWiWidget {...appProps} />));

            await waitFor(() => {
                const slider: Element = container.querySelector(".slider-outer-wrapper");
                fireEvent.mouseDown(slider, clientObj);
                fireEvent.mouseMove(slider, clientObj);
                fireEvent.mouseUp(slider);
            });

            await waitFor(() => {
                const labelText: string = genderChoices[0].text;
                const regex = new RegExp(labelText, "is");
                const label: HTMLElement = screen.getByText(regex);
                fireEvent.click(label);
            });

            const ResultText: string = ageUserStory.grill.slides[1].question;
            const regex = new RegExp(ResultText, "is");
            expect(await screen.findByText(regex)).toBeInTheDocument();
        });
    });
});
