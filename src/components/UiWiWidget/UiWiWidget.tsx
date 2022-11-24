import React, {useEffect} from "react";
import {Provider} from "react-redux";

import {getStore, QuizState, selectQuiz, useAppDispatch, useAppSelector} from "./store/RTKstore";
import {
    enableIdleSlide,
    idle,
    setCategory,
    setDevice,
    setError,
    setExperimentId,
    setExperimentRoundNr,
    setInterest,
    setLoaded,
    setLoadedInterval,
    setQuizType,
    setShowProgress,
    setSize,
    setStories,
    setSubExperimentId,
    setTheme,
    setVariantName
} from "./store/features/quiz/quizSlice";

import {AppProps, eventTypes, quizTypes, sizes, slideTypes, themes} from "./types";

// import "./styles/App.scss";
import {ErrorBoundary} from "./components/ErrorBoundary/ErrorBoundary";
import {IdleTimer} from "./components/ReactIdleTimer/IdleTimer";
import {error, log} from "./utils";
import {hideLogs, isProduction} from "./devHosts";
import {fetchMetaExperiment, fetchStories, getGadget, sendEvent} from "./quizAction";
import ReactDOM from "react-dom";
import {Stories} from "./components/UIWIWidget/components/Stories";

// LogRocket.init("b7s7gx/UiWiWidget");
// Sentry.init({
//       dsn: "https://8292c0f3622946d1b92700c3f74844b4@o1344832.ingest.sentry.io/6620905",
//       integrations: [new BrowserTracing()],
//
//       // Set tracesSampleRate to 1.0 to capture 100%
//       // of transactions for performance monitoring.
//       // We recommend adjusting this value in production
//       tracesSampleRate: 1.0
// });

export function UiWiWidget({
                               categoryName,
                               uid,
                               pageViewId,
                               clientId,
                               configuration,
                               ...props
                           }: AppProps): JSX.Element {
    const Inner = () => {
        const quiz: QuizState = useAppSelector(selectQuiz);
        const dispatch = useAppDispatch();
        const defaultStoryInterval = isProduction ? 20 : 20;
        // Idle Timer in seconds (disabled for dev mode)
        const idleTimeout = isProduction ? 33 : 33;

        const configure = ({variant_name, sub_experiment_name, sub_experiment = "", experiment_name}) => {
            log(`response.result: ${JSON.stringify({variant_name, sub_experiment_name, experiment_name})}`);

            let quizType, theme, interest, category, version, variantSeparately;

            // const variantId = response.result.variant;
            // dispatch(setVariantId(variantId));

            const subExperiment = sub_experiment_name ?? sub_experiment;
            dispatch(setSubExperimentId(subExperiment));

            const variantName = variant_name;

            //Case 1 (Meta, design as sub experiment):
            // {
            //       "variant_name": "[starting_slide]", (example: "neutral", "motivation", "relatedness", ...)
            //       "sub_experiment": "[quiz_type]-[theme](-[implicit_interest])-[category]-[version]", (example: "age-inflation-businessAndFinance-bayern-v1", ...)
            // }
            //first word in the subExperiment is the quizType
            if (Object.keys(quizTypes).includes(subExperiment.split("-")[0])) {
                //if there are 5 words the subexperiment, than there is an explicit interest
                subExperiment.split("-").length === 5
                    ? // with implicit_interest
                    ([quizType, theme, category, interest, version] = subExperiment.split("-"))
                    : // no implicit_interest
                    ([quizType, theme, category, version] = subExperiment.split("-"));

                variantName.split("-").length === 4
                    ? ([, , , variantSeparately] = variantName.split("-"))
                    : (variantSeparately = variantName);
                // alert(variantSeparately);
                interest && dispatch(setInterest(interest));
            } else {
                //if first word in the subExperiment is not the quizType = let's get it from variantName
                // Case 2 (Meta, design as variant):
                // {
                // 	"variant_name": "[quiz_type]-[theme](-[implicit_interest])-[category]-[starting_slide]",  (example: "age-inflation-businessAndFinance-bayern-neutral", ...)
                // 	"sub_experiment": "some-sub-experiment-id", (example: "cxo-age-karriere-v1")
                // }
                variantName.split("-").length === 5
                    ? // with implicit_interest
                    ([quizType, theme, category, interest, variantSeparately] = variantName.split("-"))
                    : // no implicit_interest
                    variantName.split("-").length === 4
                        ? // OLD
                        ([quizType, theme, category, variantSeparately] = variantName.split("-"))
                        : ([quizType, theme, category] = variantName.split("-"));
                interest && dispatch(setInterest(interest));
            }
            log(quizType, theme, interest, category, variantName);
            dispatch(setVariantName(variantName));
            dispatch(setCategory(category));

            // const metaExperimentVariant = response.result.meta_experiment_variant;
            // dispatch(setMetaExperimentVariant(metaExperimentVariant));

            dispatch(setTheme(theme));
            dispatch(setQuizType(quizType));
            dispatch(setExperimentRoundNr(0));
            dispatch(setLoadedInterval(defaultStoryInterval * 1000));

            // alert(variantName);

            return fetchStories(quiz, quizType, theme, variantSeparately)
                .then((stories) => {
                    dispatch(setStories(stories));

                    if (
                        [
                            themes.hkv2,
                            themes.tiktokv2,
                            themes.wmv2,
                            themes.baerbockv2,
                            themes.incomev2,
                            themes.inflationv2,
                            themes.workLifeBalancev2
                        ].includes(theme)
                    ) {
                        dispatch(setSize(sizes["new"]));
                    } else {
                        dispatch(setSize(sizes[quizTypes[quizType]]));
                    }

                    dispatch(setShowProgress(true));
                    if (quizType === quizTypes.squidGame) dispatch(enableIdleSlide(false));
                })
                .then(() => {
                    return getGadget().then((gadget) => {
                        log(`gadget: ` + gadget);
                        dispatch(setDevice(gadget));
                        dispatch(setLoaded(true));
                    });
                })
                .catch((error) => {
                    dispatch(setError(`Can't set the stories: !${error}!`));
                    dispatch(setExperimentId("fallback"));
                    dispatch(setLoaded(true));

                    const fallback = {
                        variant_name: "age-feiertag-fallback-relatedness",
                        sub_experiment_name: "fallback",
                        experiment_name: "fallback"
                    };

                    // const fallback = {
                    //       result: {
                    //             variant: "fallback",
                    //             variant_name: "age-feiertag-fallback-relatedness",
                    //             parameters: null,
                    //             sub_experiment: "fallback",
                    //             meta_experiment_variant: "fallback"
                    //       }
                    // };

                    configure(fallback);
                });
        };

        useEffect(() => {
            quiz.experimentId === "fallback" &&
            quiz.error &&
            sendEvent({
                eventType: eventTypes.FALLBACK,
                quiz,
                valueName: "Error",
                value: quiz.error
            });
        }, [quiz.experimentId, quiz.error]);

        useEffect(() => {
            if (configuration) {
                console.log(JSON.stringify(configuration));
            }
            if (!categoryName || !clientId) {
                error(`categoryName is unset? ${categoryName}`);
                error(`clientId is unset? ${clientId}`);

                dispatch(setError("clientId or categoryName is unset"));
                dispatch(setExperimentId("fallback"));

                return;
            }

            fetchMetaExperiment(
                categoryName,
                clientId,
                uid ??
                document.cookie
                    .split(";")
                    .find((item) => item.trim().startsWith("cua_uuid="))
                    ?.split("=")[1]
            )
                .then(({variant_name, sub_experiment_name, sub_experiment, experiment_name}) => {
                    log(`experiment_name: ${experiment_name}`);
                    dispatch(setExperimentId(experiment_name));
                    // return fetchExperimentData(experimentId, uid);
                    configure({variant_name, sub_experiment_name, sub_experiment, experiment_name});
                })
                // .then(configure)
                .catch((error) => {
                    dispatch(setError(`Fetching: !${error}!`));
                    dispatch(setExperimentId("fallback"));
                    dispatch(setLoaded(true));
                    // LogRocket.captureException(error);
                    // log(error);

                    // const fallback = {
                    //       result: {
                    //             variant: "fallback",
                    //             variant_name: "age-feiertag-fallback-relatedness",
                    //             parameters: null,
                    //             sub_experiment: "fallback",
                    //             meta_experiment_variant: "fallback"
                    //       }
                    // };
                    const fallback = {
                        variant_name: "age-feiertag-fallback-relatedness",
                        sub_experiment_name: "fallback",
                        experiment_name: "fallback"
                    };

                    configure(fallback);
                });
        }, []);

        const handleOnIdle = () => {
            log("handleOnIdle");
            if (
                quiz.enabledIdleSlide &&
                !quiz.isIdle &&
                !quiz.finished &&
                quiz.stories &&
                quiz.stories.length &&
                quiz.currentIndex
            ) {
                const reaction = quiz.currentIndex > 0;
                const idleGender = quiz.quizType === quizTypes.gender;
                if (!reaction) {
                    sendEvent({
                        eventType: eventTypes.USER_IS_IDLE_WITHOUT_REACTION,
                        quiz
                    });
                    dispatch(
                        idle({
                            question: "Wir erstellen gerade Ihr individuelles Quiz.",
                            type: slideTypes.idle,
                            idleGender
                        })
                    );
                } else {
                    sendEvent({
                        eventType: eventTypes.USER_IS_IDLE_AFTER_REACTION,
                        quiz
                    });
                    dispatch(
                        idle({
                            question: "Sie sind fast fertig mit ihrem Quiz.",
                            type: slideTypes.idle,
                            idleGender
                        })
                    );
                }
            }
        };

        return (
            <>
                {(quiz.stories?.length && quiz.loaded && (
                        <div
                            id={`UiWiWidget${
                                quiz.theme && [
                                    themes.hkv2,
                                    themes.tiktokv2,
                                    themes.wmv2,
                                    themes.baerbockv2,
                                    themes.incomev2,
                                    themes.inflationv2,
                                    themes.workLifeBalancev2,
                                    themes.stereotypesv2,
                                    themes.beziehungenv2,
                                    themes.kriegv2
                                ].includes(quiz.theme)
                                    ? "New"
                                    : ""
                            }`}
                        >
                            <IdleTimer timeout={1000 * idleTimeout} onIdle={handleOnIdle} debounce={250}/>
                            <div
                                className={[
                                    // quiz.limbicType,
                                    quiz.quizType,
                                    quiz.variantId,
                                    quiz.variantName.split("-").length > 0
                                        ? quiz.variantName.split("-").slice(-1)[0]
                                        : quiz.variantName,
                                    quiz.size?.size,
                                    quiz.stories[quiz.currentIndex]?.type
                                ].join(" ")}
                                style={quiz.theme&&{
                                    ...{
                                        maxWidth: [
                                            themes.hkv2,
                                            themes.tiktokv2,
                                            themes.wmv2,
                                            themes.baerbockv2,
                                            themes.incomev2,
                                            themes.inflationv2,
                                            themes.workLifeBalancev2,
                                            themes.stereotypesv2,
                                            themes.beziehungenv2
                                        ].includes(quiz.theme)
                                            ? "auto"
                                            : quiz.size?.width
                                        // height: quiz.size?.height,
                                    }
                                    // padding: "0 20px",

                                    // overflow: "hidden",
                                }}
                            >
                                <div
                                    className={[
                                        quiz.theme,
                                        quiz.variantName.split("-").length > 0
                                            ? quiz.variantName.split("-").slice(-1)[0]
                                            : quiz.variantName,
                                        quiz.variantId
                                    ].join(" ")}
                                >
                                    <ErrorBoundary quiz={quiz}>
                                        <Stories/>
                                    </ErrorBoundary>
                                </div>
                            </div>
                        </div>
                    )) ||
                    (!hideLogs && `No quiz stories to render`)}
            </>
        );
    };
    return (
        <div>
            =)
            <Provider store={getStore()}>
                <Inner/>
            </Provider>
        </div>
    );
}

export default UiWiWidget;

export const renderUiWiWidget = () => {
    const UiWiWidgetAnchor = document.getElementById("cxo-widget-host");
    if (UiWiWidgetAnchor) {
        const elementAttribute = UiWiWidgetAnchor.getAttribute("data-cxo-conf") ?? "";

        let UiWiWidgetProps = JSON.parse(elementAttribute);

        ReactDOM.render(
            <React.StrictMode>
                <UiWiWidget {...UiWiWidgetProps} />
            </React.StrictMode>,
            UiWiWidgetAnchor
        );
    }
};
