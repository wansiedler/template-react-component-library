export type AppProps = {
    quizType?: quizTypes;
    variant?: string;
    slideID?: number | null;
    size?: size;
    configuration?: any;
} & data;

export type Story = {
    [key: string]: any;
    id?: string;
    name?: string;
    url?: string;
    question?: string;
    subQuestion?: string;
    subtext?: string;
    subtext2?: string;
    groups?: [];
    seeMore?: Function;
    onAnswer?: Function;
    seeMoreCollapsed?: React.ComponentType<{
        toggleMore: (show: boolean) => void;
        action: Action;
    }>;
    backgroundPicture?: string;
    backgroundPictures?: {
        cookies?: string;
        doll?: string;
        redMan?: string;
    };
    header?: Header;
    type: string;
    duration?: number;
    title?: string;
    styles?: object;
    content?: React.ElementType;
    // content?: Renderer;
    // originalContent?: Renderer
    // originalContent?: React.ElementType;
    choices?: { [key: string]: any }[];
    votes?: string[];
    choiceAmount?: number;
};

export enum limbicTypes {
    traditionalist = "traditionalist",
    harmoniser = "harmoniser",
    offener = "offener",
    hedonist = "hedonist",
    abenteurer = "abenteurer",
    performer = "performer",
    disziplinierter = "disziplinierter",
    none = "none"
}

export enum themes {
    grill = "grill",
    tiktok = "tiktok",
    tiktokv2 = "tiktokv2",
    wiesn = "wiesn",
    wm = "wm",
    wmv2 = "wmv2",
    baerbockv2 = "baerbockv2",
    politik = "politik",
    coachella = "coachella",
    tatort = "tatort",
    urlaub = "urlaub",
    hk = "hk",
    hkv2 = "hkv2",
    income = "income",
    incomev2 = "incomev2",
    workLifeBalance = "workLifeBalance",
    workLifeBalancev2 = "workLifeBalancev2",
    inflation = "inflation",
    inflationv2 = "inflationv2",
    unset = "unset",
    feiertag = "feiertag",
    krieg = "krieg",
    kriegv2 = "kriegv2",
    stereotypes = "stereotypes",
    beziehungen = "beziehungen",
    stereotypesv2 = "stereotypesv2",
    beziehungenv2 = "beziehungenv2"
}

export enum quizTypes {
    age = "age",
    interest = "interest",
    gender = "gender",
    genderold = "genderold",
    squidGame = "squid-game",
    newsletter = "newsletterType",
    income = "income",
    incomeold = "incomeold",
    maritalStatus = "maritalStatus",
    beziehungen = "beziehungen"
}

export const quizTypesWithResultBarTrackers: themes[] = [
    themes.grill,
    themes.coachella,
    themes.politik,
    themes.tiktok,
    themes.tatort,
    themes.krieg,
    themes.inflation,
    themes.stereotypes,
    themes.beziehungen
];

export enum variants {
    "variant-0" = "variant-0",
    "variant-1" = "variant-1",
    "variant-2" = "variant-2",
    "variant-3" = "variant-3",
    "variant-4" = "variant-4",
    "unset" = "unset"
}

// Variant Names returned by sub-experiments of AX-EMS

export enum variantNames {
    "basic" = "basic",
    "hedonistic" = "hedonistic",
    "interactive" = "interactive",
    // old variants:
    "neutral" = "neutral",
    "relatedness" = "relatedness",
    "motivation" = "motivation"
}

export type size = {
    width: number;
    height: number;
    size: string;
};

export const sizes: { [key: string]: size } = {
    new: {
        size: "big",
        width: 320,
        height: 380
    },
    age: {
        size: "big",
        width: 400,
        height: 640
    },
    gender: {
        size: "big",
        width: 400,
        height: 640
    },
    interest: {
        size: "big",
        width: 400,
        height: 640
    },
    income: {
        size: "big",
        width: 400,
        height: 640
    },
    maritalStatus: {
        size: "big",
        width: 400,
        height: 640
    },
    rectangular: {
        size: "rectangular",
        width: 540,
        height: 370
    },
    small: {
        size: "small",
        width: 400,
        height: 343
    },
    big: {
        size: "big",
        width: 400,
        height: 640
    },
    medium: {
        size: "medium",
        width: 400,
        height: 425
    },
    newsletterSize: {
        size: "newsletterSize",
        width: 692,
        height: 216
    },
    beziehungen: {
        size: "big",
        width: 400,
        height: 640
    }
};

export const slideTypes = {
    ageStart: "ageStart",
    Vote: "Vote",
    selectGroup: "selectGroup",
    Result: "Result",
    interestsSelect: "interestsSelect",
    Question: "Question",
    interestsResult: "interestsResult",
    genderStart: "genderStart",
    genderPicture: "genderPicture",
    genderQuestion: "genderQuestion",
    genderConfirm: "genderConfirm",
    genderResults: "genderResults",
    newsletter: "newsletter",
    newsletterSeparate: "newsletterSeparate",
    idle: "idle",
    idleGender: "idleGender",
    squidGameStart: "squidGameStart",
    squidGameQuestion: "squidGameQuestion",
    squidGameResult: "squidGameResult",
    incomeStart: "incomeStart",
    incomeResult: "incomeResult",
    preview: "Preview"
};

export type PayloadBody = {
    metadata: {
        key: string;
        timestamp: string;
    };
    origin: {
        system: string;
        useCase: string;
    };
    cmsClientId: number;
    pageViewId: string;
    ip: string;
    userAgent: string;
    payload: Payload;
};

export enum eventTypes {
    CLICK = "CLICK",
    ACTIVE_VIEW = "ACTIVE_VIEW",
    FALLBACK = "FALLBACK",
    USER_IS_IDLE_WITHOUT_REACTION = "userIsIdleWithoutReaction",
    USER_IS_IDLE_AFTER_REACTION = "userIsIdleAfterReaction",
    CHOICE_SELECTED = "choiceSelected"
    // USER_IS_IDLE_WITHOUT_REACTION = "USER_IS_IDLE_WITHOUT_REACTION",
    // USER_IS_IDLE_AFTER_REACTION = "USER_IS_IDLE_AFTER_REACTION",
    // CHOICE_SELECTED = "CHOICE_SELECTED",
}

export type data = {
    clientId?: number;
    categoryName?: string;
    pageViewId?: string;
    uid?: string;
    experimentIdProp?: string;
};
export type EventProps = {
    eventType: eventTypes;
    valueName?: string | null;
    value?: string | null;
    custom?: {};
};
export type Payload = EventProps & {
    experimentId: string;
    variantId: string;
    device: string;
    transientId: string;
    userId: string;
    slideId: string;
    componentName: string;
    location: string | { [k: string]: any };
    time: string;
    category: string;
    client: string;
    totalSlides: string;
    quizType: quizTypes | "unset";
} & data;

export type StoriesContext = {
    stories: Story[];
};

export type ContainerState = {
    // currentId: number;
    pause: boolean;
    count: number;
    storiesDone: number;
};

export type Action = (action: string, showProgress?: boolean) => void;

export type StoryState = {
    loaded: boolean;
    showMore: boolean;
};

export type Header = {
    heading: string;
    subheading: string;
    profileImage: string;
};

export type ProgressProps = {
    width: number;
    active: number;
    count: number;
};

export type ProgressWrapperProps = {
    children: any;
    width: number;
    pause: boolean;
    showProgress: boolean;
};

export type ProgressContext = {
    // currentId: number;
    videoDuration: number;
    showProgress: boolean;
    pause: boolean;
    next: Function;
};

export type GlobalCtx = {
    // width?: NumberOrString;
    // height?: NumberOrString;
    // loader?: JSX.Element;
    // header?: Function;
    // storyContainerStyles?: Record<string, any>;
    // storyStyles?: Object;
    // loop?: boolean;
    // progressVisualiser?: string;
    // isPaused?: boolean;
    // showProgress?: boolean;
    // currentIndex?: number;
    // defaultInterval: number;
    onAllStoriesEnd?: Function;
    onStoryStart?: Function;
    onStoryEnd?: Function;
    keyboardNavigation?: boolean;
};
