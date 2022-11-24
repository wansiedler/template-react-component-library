import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UiWiWidget } from "~/UiWiWidget";
import * as API from "~/quizAction";
import quizSlice from "~/store/features/quiz/quizSlice";
import { variants } from "~/types";
import { ageMockStateBase } from "../Age/Storybook/mockedAgeStates";
import { interestChoices, interestsUserStory } from "./interestsUserStory";
import { interests } from "./interests";

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
                        variant: variants["variant-1"],
                        parameters: null,
                        sub_experiment: "contextual-user-type-genuss-v2",
                        variant_name: "interest-grill-genuss",
                        // sub_experiment: "age-grill-genuss",
                        meta_experiment_variant: "variant-3"
                    }
                })
            )
    );
    jest.spyOn(API, "getGadget").mockImplementation(() => new Promise((res) => res("storybook")));
    // jest.spyOn(API, "fetchStories").mockClear();
});

describe("InterestQuiz", function () {
    describe("slide rendering", function () {
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

            const interestUserStory = interestsUserStory[0].variants["variant-3"][0];
            const choices: {}[] = interestChoices;
            const variantText: string = interestUserStory.question;
            const choiceText: string = interestChoices[0].text;

            const regex = new RegExp(variantText, "is");

            expect(await screen.findByText(regex)).toBeInTheDocument();
            expect(container).toHaveTextContent(choiceText);
            // screen.debug();
        });

        it("should render a selected question", async () => {
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
                const interestUserStory = interestsUserStory[0].variants["variant-3"][0];
                const choiceText: string = interestChoices[0].text;
                const regex = new RegExp(choiceText, "is");
                const choiceElement: HTMLElement = screen.getByText(regex);

                fireEvent.click(choiceElement);
            });

            await waitFor(() => {
                const submitButton: HTMLElement = container.querySelector(".submit-button");
                fireEvent.click(submitButton);
            });
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
            const topic: string = interestChoices[0].text;

            await waitFor(() => {
                const interestUserStory = interestsUserStory[0].variants["variant-3"][0];
                const regex = new RegExp(topic, "is");
                const choiceElement: HTMLElement = screen.getByText(regex);

                fireEvent.click(choiceElement);
            });

            await waitFor(() => {
                const submitButton: HTMLElement = container.querySelector(".submit-button");
                fireEvent.click(submitButton);
            });

            await waitFor(() => {
                const submitButton: HTMLElement = container.querySelector(".submit-button");
                const answer = interests.wirtschaft[0].choices;
                //const regex = new RegExp(interests.wirtschaft[0])
                //const choiceElement: HTMLElement = screen.getByText(regex);

                fireEvent.click(submitButton);
            });
        });
    });
});
