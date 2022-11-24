import { idle, newsletter, setIndex } from "./store/features/quiz/quizSlice";
import {
    data,
    EventProps,
    eventTypes,
    Payload,
    PayloadBody,
    quizTypes,
    slideTypes as types,
    Story,
    themes,
    variants
} from "./types";
import { error, flatten, log } from "~/utils";
import { Dispatch } from "@reduxjs/toolkit";
import { QuizState } from "./store/RTKstore";
import { ageUserStory } from "./components/Quiz/Age/ageUserStory";
import { ageNewUserStory } from "./components/Quiz/AgeNew/ageNewUserStory";
import { interestsUserStory } from "./components/Quiz/Interests/interestsUserStory";
import { genderUserStory } from "./components/Quiz/Gender/genderUserStory";
import { genderNewUserStory } from "./components/Quiz/GenderNew/genderNewUserStory";
import { squidGameUserStory } from "./components/Quiz/SquidGame/squidGameUserStory";
import { incomeUserStory } from "./components/Quiz/Income/incomeUserStory";
import { incomeNewUserStory } from "./components/Quiz/IncomeNew/incomeNewUserStory";
import { interests } from "./components/Quiz/Interests/interests";
import { maritalStatusUserStory } from "~/components/Quiz/MaritalStatus/maritalStatusUserStory";
import { maritalStatusNewUserStory } from "~/components/Quiz/MaritalStatusNew/maritalStatusNewUserStory";
import { getAxCoreQueryAPI, isProduction } from "./devHosts";


/**
 * Question types
 */
export const stories = {
    [quizTypes.age]: ageUserStory,
    [quizTypes.interest]: interestsUserStory,
    [quizTypes.gender]: genderUserStory,
    [quizTypes.genderold]: genderUserStory,
    [quizTypes.squidGame]: squidGameUserStory,
    [quizTypes.income]: incomeUserStory,
    [quizTypes.maritalStatus]: maritalStatusUserStory
};

export const fetchStories = async (
    quiz: QuizState,
    quizType: quizTypes | string,
    theme?: themes | string,
    variant?: variants | string
): Promise<Story[]> => {
    //let result = theme === themes.stereotypesV2 ? genderNewUserStory : stories[quizType];
    let result;

    switch (theme) {
        case themes.hkv2:
        case themes.tiktokv2:
        case themes.wmv2:
        case themes.baerbockv2:
        case themes.kriegv2:
            result = ageNewUserStory;
            break;
        case themes.incomev2:
        case themes.inflationv2:
        case themes.workLifeBalancev2:
            result = incomeNewUserStory;
            break;
        case themes.stereotypesv2:
            result = genderNewUserStory;
            break;
        case themes.beziehungenv2:
            result = maritalStatusNewUserStory;
            break;
        default:
            result = stories[quizType];
    }

    if (!result) throw new Error(`quizType ${variant} doesn't exist`);
    if (!theme) throw new Error(`theme ${theme} doesn't exist`);
    if (!variant) throw new Error(`variant ${variant} doesn't exist`);

    if (!result[theme]) throw new Error(`result doesn't exist for quizType ${quizType} ${theme}`);

    result = result[theme];

    if (!result.variants) throw new Error(`${result} has no variants!`);
    if (!Object.keys(result.variants).includes(variant))
        throw new Error(
            `variant:${variant} doesn't exist for ${quizType} ${theme} ${quiz.experimentId} ${quiz.subExperimentId} ${quiz.variantId}`
        );

    if (
        quizType === quizTypes.age ||
        quizType === quizTypes.gender ||
        quizType === quizTypes.income ||
        quizType === quizTypes.maritalStatus
    ) {
        result = [...result.variants[variant], ...result.slides];
    }
    if (quizType === quizTypes.interest) {
        const topics = flatten(Object.keys(quiz.answeredQuestions.interests).map((topic) => interests[topic]));
        // alert(JSON.stringify(result.slides[result.slides.length - 1]));
        // alert(JSON.stringify(result.variants[variant]));
        result = [
            ...result.variants[variant],
            ...topics.map((topic) => topic),
            result.slides[result.slides.length - 1]
        ];
        log(JSON.stringify(result));
    }
    // if (quizType === quizTypes.squidGame && variant === "variant-1") {
    //       result = result.slice(1);
    // }
    // if (quizType === quizTypes.genderold) {
    //       result = result[theme].slides;
    // }
    if (!result.length)
        throw new Error(`No stories fetched for quizType:${quizType} theme:${theme} variant:${variant}`);
    return result;
};

export const getVariantPicture = (options, variant = "variant-1"): { options: string[]; variant: variants } => {
    switch (variant) {
        case variants["variant-2"]:
            return options[1];
        case variants["variant-3"]:
            return options[2];
        case variants["variant-1"]:
        default:
            return options[0];
    }
};

export const getGadget = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
        return fetch(`${document.location.toString()}?site-currentness-measurement-header=true`)
            .then((response) => {
                response.headers.get("x-ua-device")
                    ? resolve(response.headers?.get("x-ua-device")?.replace("-", "_")?.toUpperCase() ?? "unset")
                    : // : reject(`Gadget?`);
                      resolve(`unset`);
            })
            .catch((error) => reject(`can't get the gadget ${error}`));
    });
};

type axCoreAnswer = {
    result: {
        parameters?: {};
        variant: variants;
        variant_name: string;
        sub_experiment: quizTypes | string;
        meta_experiment_variant: string;
    };
};

export type axCoreAnswerNew = {
    variant_name: string;
    sub_experiment_name: string;
    sub_experiment: string;
    experiment_name: string;
};

/**
 * Fetch the experiment
 * @param category
 * @param client_id
 * @param transient_id
 * @returns {Promise<string>}
 */
export const fetchMetaExperiment = async (category, client_id, transient_id): Promise<axCoreAnswerNew> => {
    return new Promise((resolve, reject) => {
        const url = new URL(
            `https://ax-public.${isProduction ? "production" : "staging"}.ippen.space/v1/experiments/query/cc`
        );

        url.searchParams.append("client_id", client_id);
        url.searchParams.append("category", category);
        url.searchParams.append("transient_id", transient_id);

        const body = {
            context: {
                category: category
            }
        };

        return fetch(`${url}`, {
            // mode: "no-cors"
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
                accept: "application/json"
            },
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(async (response) => {
                !response.ok &&
                    (await response.json().then(({ detail }) => {
                        reject(
                            `fetchMetaExperiment doesnt work client_id:${client_id}  category:${category}  transient_id:${transient_id} from ${
                                url.href
                            } ${response.status} ${response.statusText} => ${detail ? JSON.stringify(detail) : detail}`
                        );
                    }));
                const result = await response.json();

                resolve(result.result);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

/**
 * Fetch the experiment data
 * @param experimentId
 * @param uid
 * @param deviceId
 * @returns {Promise<unknown>}
 */
export const fetchExperimentData = async (
    experimentId: string,
    uid: string,
    deviceId = "CLICK_DESKTOP"
): Promise<axCoreAnswer> => {
    return new Promise((resolve, reject) => {
        const link = getAxCoreQueryAPI(experimentId);

        const userId =
            uid ??
            document.cookie
                .split(";")
                .find((item) => item.trim().startsWith("cua_uuid="))
                ?.split("=")[1];

        if (!userId) {
            reject("Cant find user_id!");
        }

        let url = new URL(link);
        const urlParams = new URLSearchParams(url.search);
        urlParams.set("user_id", userId);
        url.search = urlParams.toString();
        const body = {
            return_parametrization: true
            // "context": {
            // 	device: deviceId,
            // },
        };

        return fetch(url.toString(), {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
                accept: "application/json"
            },
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(async (response) => {
                !response.ok &&
                    (await response.json().then(({ detail }) => {
                        reject(
                            `fetchExperimentData doesnt work user_id:${userId} from ${url.href} ${response.status} ${
                                response.statusText
                            } => ${detail ? JSON.stringify(detail) : detail}`
                        );
                    }));

                const result = await response.json();
                result !== "" ? resolve(result) : reject("fetchExperimentData DOESNT WORK");
            })
            .catch((error) => {
                reject(error);
            });
    });
};

/**
 * Send the event payload
 * @param eventType
 * @param valueName
 * @param value
 * @param quiz
 */
export const sendEvent = ({
    eventType,
    valueName = "unset",
    value = "unset",
    quiz
}: EventProps & { quiz?: QuizState | any }): void => {
    try {
        const url = `https://idat.${isProduction ? "production" : "staging"}.ippen.space/dev`;

        const totalSlides = quiz.stories.length.toString() ?? "unset";
        const slideId = quiz.currentIndex.toString() ?? "unset";
        const device = quiz.device ?? "unset";
        const componentName = quiz.stories[quiz.currentIndex]?.type ?? "unset";
        const quizType = quiz.quizType ?? "unset";
        const location = quiz.location ?? "unset";
        // USERID
        const userId =
            document.cookie
                .split(";")
                .find((item) => item.trim().startsWith("cua_uuid="))
                ?.split("=")[1] ?? "unset";
        const elementAttribute = document.getElementById("cxo-widget-host")?.getAttribute("data-cxo-conf");
        // const elementData: data = elementAttribute
        //       ? JSON.parse(elementAttribute)
        //       : {
        //               clientId: "unset",
        //               categoryName: "unset",
        //               pageViewId: "unset",
        //               uid: "unset"
        //         };
        const elementData: data = elementAttribute ? JSON.parse(elementAttribute) : null;
        // JSON.parse()
        // userid = (userid && userid.split("=")[1]) || "unset";
        // CATEGORY
        //https://merkur.idstg.de/west/westwest-teststory-zum-testen-von-internen-verlinkungen-90105811.html

        const categoryRegexp = /https:\/\/www.merkur.de\/(leben\/)?(.*?)\//g.exec(window.location.href) ?? "unset";
        const category = categoryRegexp ? categoryRegexp[2] : "unset";
        // CLIENT
        const clientRegexp = /www.(.*)/g.exec(new URL(window.location.href).hostname);
        const client = clientRegexp ? clientRegexp[1] : new URL(window.location.href).hostname;
        const time = Date.now().toString();
        // navigator.geolocation.getCurrentPosition((position) => {
        //     // location = position.toString();
        //     location = position.coords.toString();
        // });

        const sendEvent = (
            experimentId: string,
            variantId: string,
            custom: {
                quizType?: quizTypes;
                valueName?: string;
                value?: string;
            } = {}
        ): void => {
            try {
                let payload: Payload = {
                    eventType,
                    experimentId,
                    variantId,
                    userId,
                    transientId: elementData?.uid ?? userId ?? "unset",
                    ...elementData,
                    slideId,
                    quizType: custom.quizType ?? quizType,
                    valueName: custom.valueName ?? valueName,
                    value: custom.value ?? value,
                    componentName,
                    client,
                    category: elementData?.categoryName ?? category,
                    device,
                    location,
                    time,
                    totalSlides
                };

                // for (const [field, value] of Object.entries(payload)) {
                //     value === "unset" ? LogRocket.captureMessage(JSON.stringify(field)) : null;
                // }

                log(
                    `eventType: ${eventType} experimentId:${experimentId} slideId:${payload.slideId} slideType:${
                        quiz.stories[quiz.currentIndex]?.type ?? "unset"
                    } valueName:${valueName} value:${value} variantId:${variantId}`
                );

                const body: PayloadBody = {
                    metadata: {
                        key: "cxo-key",
                        timestamp: Date.now().toString()
                    },
                    origin: {
                        system: "cxo-quiz",
                        useCase: "cxo-quiz-dev"
                    },
                    cmsClientId: elementData?.clientId ?? 268,
                    pageViewId: elementData?.pageViewId ?? "unset",
                    ip: "0.0.0.0",
                    userAgent: navigator.userAgent,
                    payload
                };
                const settings = {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(body)
                };
                fetch(url, settings).then().catch();
            } catch (e) {
                error(e);
                throw e;
            }
        };

        const experimentId = quiz.experimentId ?? "unset";
        const variantId = quiz.variantId ?? "unset";
        const variantName = quiz.variantName ?? "unset";
        const subExperimentId = quiz.subExperimentId ?? "unset";
        const metaExperiment = quiz.metaExperimentVariant ?? "unset";

        //EXPLICIT INTEREST
        //experimentId is experimentId
        //variantId is variantName
        eventType == eventTypes.CHOICE_SELECTED && quiz.interest
            ? sendEvent(subExperimentId, variantName, {
                  quizType: quizTypes.interest,
                  valueName: "interest",
                  value: quiz.interest
              })
            : eventType !== eventTypes.CHOICE_SELECTED
            ? //experimentId is experimentId
              //variantId is subExperimentId
              sendEvent(experimentId, subExperimentId)
            : null;

        //Second
        //experimentId is subExperimentId
        //variantId is variantName
        sendEvent(subExperimentId, variantName);
    } catch (e) {
        error(e);
    }
};
export const restartGender =
    () =>
    (dispatch: Dispatch): void => {
        dispatch(setIndex(0));
        // dispatch(setSize(sizes.small));
        // dispatch(reset());
        // dispatch(setStories(stories.gender));
    };

export const restartAge =
    () =>
    (dispatch: Dispatch): void => {
        dispatch(setIndex(1));
    };
export const newsLetter = () => (dispatch: Dispatch) => {
    dispatch(
        newsletter({
            question: "Wir haben da noch was für Sie!",
            type: types.newsletter
        })
    );
};
export const userIsIdle =
    ({ quiz, reaction = false, idleGender }) =>
    (dispatch: Dispatch) => {
        if (!reaction) {
            sendEvent({
                eventType: eventTypes.USER_IS_IDLE_WITHOUT_REACTION,
                quiz
            });
            dispatch(
                idle({
                    question: "Wir erstellen gerade Ihr individuelles Quiz.",
                    type: types.idle,
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
                    type: types.idle,
                    idleGender
                })
            );
        }
    };
