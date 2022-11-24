import React from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import quizSlice from "../../../store/features/quiz/quizSlice";
import { variants } from "../../../types";
import { ageMockStateBase } from "./Storybook/mockedAgeStates";
import { ageChoices, ageUserStory } from "./ageUserStory";
import { UiWiWidget } from "../../../UiWiWidget";
import * as API from "../../../quizAction";
// import userEvent from "@testing-library/user-event";

export const createReduxStore = (initialState = null) => {
    return configureStore({
        reducer: quizSlice,
        preloadedState: { ageMockStateBase, ...initialState }
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
                        variant: variants["variant-3"],
                        parameters: null,
                        sub_experiment: "contextual-user-type-genuss-v2",
                        variant_name: "age-grill-genuss",
                        // sub_experiment: "age-grill-genuss",
                        meta_experiment_variant: "variant-3"
                    }
                })
            )
    );
    jest.spyOn(API, "getGadget").mockImplementation(() => new Promise((res) => res("storybook")));
    // jest.spyOn(API, "fetchStories").mockClear();
});

describe("AgeQuiz", function () {
    describe("rendering", function () {
        it("should render first slide", async () => {
            const { container, getByText } = await render(
                renderTestApp(
                    <UiWiWidget
                        {...{
                            categoryName: "genuss",
                            clientId: 268
                        }}
                    />
                )
            );

            const ageUserStoryObj = ageUserStory.grill.variants["variant-3"][0];
            const variantText: string = ageUserStoryObj.subtext;
            const voteText: string = ageUserStoryObj.votes[0];
            const regex = new RegExp(variantText, "is");

            expect(await screen.findByText(regex)).toBeInTheDocument();
            expect(container).toHaveTextContent(voteText);
        });

        it("should render second slide", async () => {
            const { container, getByText } = await render(
                renderTestApp(
                    <UiWiWidget
                        {...{
                            categoryName: "genuss",
                            clientId: 268
                        }}
                    />
                )
            );

            await waitFor(() => {
                const slider: Element = container.querySelector(".slider-outer-wrapper");
                const clientObj: object = {
                    clientX: 549,
                    clientY: 385
                };
                fireEvent.mouseDown(slider, clientObj);
                fireEvent.mouseMove(slider, clientObj);
                fireEvent.mouseUp(slider);
            });

            const selectGroupText: string = ageUserStory.grill.slides[0].subtext;
            const regex = new RegExp(selectGroupText, "is");
            expect(await screen.findByText(regex)).toBeInTheDocument();
        });

        it("should render the result slide", async () => {
            const { container, getByText } = await render(
                renderTestApp(
                    <UiWiWidget
                        {...{
                            categoryName: "genuss",
                            clientId: 268
                        }}
                    />
                )
            );

            await waitFor(() => {
                const slider: Element = container.querySelector(".slider-outer-wrapper");
                const clientObj: object = {
                    clientX: 549,
                    clientY: 385
                };
                fireEvent.mouseDown(slider, clientObj);
                fireEvent.mouseMove(slider, clientObj);
                fireEvent.mouseUp(slider);
            });

            await waitFor(() => {
                const labelText: string = ageChoices[0].text;
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
