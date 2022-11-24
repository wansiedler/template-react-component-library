import { initialState } from "~/store/features/quiz/quizSlice";
import { variantNames } from "~/types";
import { ageChoices } from "~/components/Quiz/AgeNew/ageNewUserStory";
import { QuizState } from "~/store/RTKstore";
import { randomIntFromInterval } from "~/utils";

export const ageNewMockStateBase: QuizState = {
    ...initialState,
    answeredQuestions: {
        ...initialState.answeredQuestions,
        age: ageChoices[0],
        vote: randomIntFromInterval(0, 100)
    },
    currentIndex: 0
};

export const storybookExperiment = {
    url: `https://public-ax-core-api.staging.ippen.space/v1/experiments/mapping/?client_id=268&category=genuss`,
    method: "GET",
    status: 200,
    response: ["storybook"]
};

export const devProxyObject = {
    url: `https://idat.staging.ippen.space/dev`,
    method: "POST",
    status: 300
};

export const axCoreObject = {
    url: `https://ax-public.staging.ippen.space/v1/experiments/query/cc?client_id=268&category=genuss&transient_id=storybook`,
    method: "POST",
    status: 200,
    response: {
        result: {
            variant: "variant-5",
            variant_name: "",
            parameters: null,
            sub_experiment: "",
            meta_experiment_variant: "variant-2"
        }
    }
};

//
// Heiß & Kalt
//

const hkv2Subexperiment = "age-hkv2-sub-travel-v1";

export const mockDataHKV2Basic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.basic,
                sub_experiment: hkv2Subexperiment
            }
        }
    }
];

export const mockDataHKV2Interactive = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.interactive,
                sub_experiment: hkv2Subexperiment
            }
        }
    }
];

export const mockDataHKV2Hedonistic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.hedonistic,
                sub_experiment: hkv2Subexperiment
            }
        }
    }
];

//
// TikTok
//

const tiktokv2SubExperiment = "age-tiktokv2-sub-entertainment-v1";

export const mockDataTikTokV2Basic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.basic,
                sub_experiment: tiktokv2SubExperiment
            }
        }
    }
];

export const mockDataTikTokV2Interactive = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.interactive,
                sub_experiment: tiktokv2SubExperiment
            }
        }
    }
];

export const mockDataTikTokV2Hedonistic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.hedonistic,
                sub_experiment: tiktokv2SubExperiment
            }
        }
    }
];

//
// WM
//

const wmv2SubExperiment = "age-wmv2-sub-sports-v1";

export const mockDataWMV2Basic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.basic,
                sub_experiment: wmv2SubExperiment
            }
        }
    }
];

export const mockDataWMV2Interactive = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.interactive,
                sub_experiment: wmv2SubExperiment
            }
        }
    }
];

export const mockDataWMV2Hedonistic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.hedonistic,
                sub_experiment: wmv2SubExperiment
            }
        }
    }
];

//
// BAERBOCK
//

const baerbockv2SubExperiment = "age-baerbockv2-sub-politics-v1";

export const mockDataBaerbockV2Basic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.basic,
                sub_experiment: baerbockv2SubExperiment
            }
        }
    }
];

export const mockDataBaerbockV2Interactive = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.interactive,
                sub_experiment: baerbockv2SubExperiment
            }
        }
    }
];

export const mockDataBaerbockV2Hedonistic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.hedonistic,
                sub_experiment: baerbockv2SubExperiment
            }
        }
    }
];

//
// Krieg
//

const kriegv2SubExperiment = "age-kriegv2-sub-politics-v1";

export const mockDataKriegV2Basic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.basic,
                sub_experiment: kriegv2SubExperiment
            }
        }
    }
];

export const mockDataKriegV2Interactive = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.interactive,
                sub_experiment: kriegv2SubExperiment
            }
        }
    }
];

export const mockDataKriegV2Hedonistic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: variantNames.hedonistic,
                sub_experiment: kriegv2SubExperiment
            }
        }
    }
];

