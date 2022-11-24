import { initialState } from "../../../../store/features/quiz/quizSlice";
import { variantNames, variants } from "../../../../types";
import { ageChoices } from "../ageUserStory";
import { QuizState } from "../../../../store/RTKstore";

export const ageMockStateBase: QuizState = {
    ...initialState,
    answeredQuestions: {
        ...initialState.answeredQuestions,
        age: ageChoices[0],
        vote: 2
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

export let queryResult = {
    variant: variants["variant-1"],
    meta_experiment_variant: "variant-3",
    sub_experiment: "contextual-user-type-genuss-v2",
    variant_name: "age-grill-genuss"
};

//
// TikTok
//

const tiktokSubExperiment = "age-tiktok-sub-entertainment-v1";
export const mockDataTiktokBasic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: "basic",
                sub_experiment_name: tiktokSubExperiment,
                experiment_name: "staging-meta-bayern-merkur-ts-v2"
            }
        }
    }
];

export const mockDataTiktokInteractive = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: "interactive",
                sub_experiment_name: tiktokSubExperiment,
                experiment_name: "staging-meta-bayern-merkur-ts-v2"
            }
        }
    }
];

export const mockDataTiktokHedonistic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: "hedonistic",
                sub_experiment_name: tiktokSubExperiment,
                experiment_name: "staging-meta-bayern-merkur-ts-v2"
            }
        }
    }
];

//
// WM
//

export const mockDataWMBasic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: "basic",
                sub_experiment: "age-wm-basic-bayern-v1"
            }
        }
    }
];

export const mockDataWMInteractive = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: "interactive",
                sub_experiment: "age-wm-interactive-bayern-v1"
            }
        }
    }
];

export const mockDataWMHedonistic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: "hedonistic",
                sub_experiment: "age-wm-hedonistic-bayern-v1"
            }
        }
    }
];

//
// Heiß & Kalt
//

export const mockDataHKBasic = [
    storybookExperiment,
    devProxyObject,
    {
        url: `https://ax-public.staging.ippen.space/v1/experiments/query/cc?client_id=268&category=genuss&transient_id=storybook`,
        method: "POST",
        status: 200,
        response: {
            result: {
                variant: "variant-3",
                variant_name: "age-hk-genuss-basic",
                parameters: null,
                sub_experiment: "cxo-age-genuss-v1",
                meta_experiment_variant: "variant-2"
            }
        }
    }
];

export const mockDataHKInteractive = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: "interactive",
                sub_experiment: "age-hk-interactive-bayern-v1"
            }
        }
    }
];

export const mockDataHKHedonistic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: "hedonistic",
                sub_experiment: "age-hk-hedonistic-bayern-v1"
            }
        }
    }
];

//
// Heiß & Kalt - New
//

export const mockDataHKNewBasic = [
    storybookExperiment,
    devProxyObject,
    {
        url: `https://ax-public.staging.ippen.space/v1/experiments/query/cc?client_id=268&category=genuss&transient_id=storybook`,
        method: "POST",
        status: 200,
        response: {
            result: {
                variant: "variant-3",
                variant_name: "age-hkNew-genuss-basic",
                parameters: null,
                sub_experiment: "cxo-age-genuss-v1",
                meta_experiment_variant: "variant-2"
            }
        }
    }
];

export const mockDataHKNewInteractive = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: "interactive",
                sub_experiment: "age-hk-interactive-bayern-v1"
            }
        }
    }
];

export const mockDataHKNewHedonistic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: "hedonistic",
                sub_experiment: "age-hk-hedonistic-bayern-v1"
            }
        }
    }
];

//
// Wiesn
//

export const mockDataWiesnOldBasic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: "oldBasic",
                sub_experiment: "age-wiesn-oldBasic-bayern-v1"
            }
        }
    }
];

export const mockDataWiesnBasic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: "basic",
                sub_experiment: "age-wiesn-basic-bayern-v1"
            }
        }
    }
];

export const mockDataWiesnInteractive = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: "interactive",
                sub_experiment: "age-wiesn-interactive-bayern-v1"
            }
        }
    }
];
export const mockDataWiesnHedonistic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: "hedonistic",
                sub_experiment: "age-wiesn-hedonistic-bayern-v1"
            }
        }
    }
];

//
// Politik
//

export const mockDataPolitikBasic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: "basic",
                sub_experiment: "age-politik-basic-bayern-v1"
            }
        }
    }
];

export const mockDataPolitikHedonistic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: "hedonistic",
                sub_experiment: "age-politik-hedonistic-bayern-v1"
            }
        }
    }
];

export const mockDataPolitikInteractive = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            result: {
                ...axCoreObject.response,
                variant_name: "interactive",
                sub_experiment: "age-politik-interactive-bayern-v1"
            }
        }
    }
];

//
// Feiertag
//

export const mockDataFeiertagNeutral = [
    storybookExperiment,
    devProxyObject,
    {
        url: `https://ax-public.staging.ippen.space/v1/experiments/query/cc?client_id=268&category=genuss&transient_id=storybook`,
        method: "POST",
        status: 200,
        response: {
            result: {
                variant: "variant-3",
                variant_name: "neutral",
                parameters: null,
                sub_experiment: "age-feiertag-bayern-v2",
                meta_experiment_variant: "variant-6"
            }
        }
    }
];

export const mockDataFeiertagRelatedness = [
    storybookExperiment,
    devProxyObject,
    {
        url: `https://ax-public.staging.ippen.space/v1/experiments/query/cc?client_id=268&category=genuss&transient_id=storybook`,
        method: "POST",
        status: 200,
        response: {
            result: {
                variant: "variant-2",
                variant_name: "age-feiertag-genuss-relatedness",
                parameters: null,
                sub_experiment: "cxo-age-genuss-v1",
                meta_experiment_variant: "variant-2"
            }
        }
    }
];

export const mockDataFeiertagMotivation = [
    storybookExperiment,
    devProxyObject,
    {
        url: `https://ax-public.staging.ippen.space/v1/experiments/query/cc?client_id=268&category=genuss&transient_id=storybook`,
        method: "POST",
        status: 200,
        response: {
            result: {
                variant: "variant-3",
                variant_name: "age-feiertag-genuss-motivation",
                parameters: null,
                sub_experiment: "cxo-age-genuss-v1",
                meta_experiment_variant: "variant-2"
            }
        }
    }
];

//
// Inflation
//

export const mockDataInflationBasic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            ...axCoreObject.response,
            result: {
                variant_name: "age-inflation-genuss-basic",
                sub_experiment: "cxo-age-genuss-v1"
            }
        }
    }
];

export const mockDataInflationInteractive = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            ...axCoreObject.response,
            result: {
                variant_name: "age-inflation-genuss-interactive",
                sub_experiment: "cxo-age-genuss-v1"
            }
        }
    }
];

export const mockDataInflationHedonistic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            ...axCoreObject.response,
            result: {
                variant_name: "age-inflation-genuss-hedonistic",
                sub_experiment: "cxo-age-genuss-v1"
            }
        }
    }
];

export const mockDataInflationRelatedness = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            ...axCoreObject.response,
            result: {
                variant_name: "age-inflation-genuss-relatedness",
                sub_experiment: "cxo-age-genuss-v1"
            }
        }
    }
];

//
// Krieg
//

export const mockDataKriegBasic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            ...axCoreObject.response,
            result: {
                variant_name: "age-krieg-genuss-basic",
                sub_experiment: "cxo-age-genuss-v1"
            }
        }
    }
];

export const mockDataKriegInteractive = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            ...axCoreObject.response,
            result: {
                variant_name: "age-krieg-genuss-interactive",
                sub_experiment: "cxo-age-genuss-v1"
            }
        }
    }
];

export const mockDataKriegHedonistic = [
    storybookExperiment,
    devProxyObject,
    {
        ...axCoreObject,
        response: {
            ...axCoreObject.response,
            result: {
                variant_name: "age-krieg-genuss-hedonistic",
                sub_experiment: "cxo-age-genuss-v1"
            }
        }
    }
];