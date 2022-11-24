import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { limbicTypes, quizTypes, Story, themes, variants } from "../../../types";
import { interests } from "../../../components/Quiz/Interests/interests";

export interface QuizState {
    error?: string;

    experimentId: string | "fallback";

    metaExperimentVariant: string;

    subExperimentId: string;

    experimentRoundNr: string;

    device: string;

    variantId: variants;

    variantName: string;

    quizType?: quizTypes | "unset" | string;

    theme?: themes;

    interest?: string;

    category?: string;

    limbicType?: limbicTypes;

    stories: Story[] | { [key: string]: any };

    enabledIdleSlide: boolean;

    currentIndex: number;

    questions: Array<{ id: number }>;

    backgroundPicture?: string;

    size?: {
        width: number;
        height: number;
        size: string;
    };

    answeredQuestions: {
        interests: {
            [key: string]: {
                id?: string;
                text?: string;
                correct?: boolean;
            }[];
        };
        age?: { id: string; text: string };
        beziehungen?: { id: string; text: string };
        vote?: number | { id?: string; text?: string };
        gender?: { id: string; text: string };
        genderAnswers?: { correct?: boolean }[];
        squidGameAnswers?: number[];
        incomeAnswers?: { text: string; value: number }[];
        maritalStatus?: { id: string; text: string };
    };

    results: Array<object>;

    personality?: string;

    isPaused: boolean;

    loaded: boolean;

    showProgress: boolean;

    keyboardNavigation: boolean;

    finished: boolean;

    loop: boolean;

    interactive: boolean;

    defaultInterval: number;

    isIdle: boolean;

    oldState?: QuizState | null;

    location?: {
        address?: string;
        city?: string;
        state?: string;
        country?: string;
    };
}

const quizAdapter = createEntityAdapter();
export const initialState: QuizState = quizAdapter.getInitialState({
    experimentId: "unset",
    subExperimentId: "unset",
    metaExperimentVariant: "unset",
    experimentRoundNr: "unset",
    device: "unset",
    variantId: variants.unset,
    variantName: "unset",
    quizType: "unset",
    theme: themes.unset,
    limbicType: limbicTypes.traditionalist,
    currentIndex: 0,
    defaultInterval: 0,
    enabledIdleSlide: false,
    loaded: false,
    keyboardNavigation: false,
    questions: [],
    answeredQuestions: {
        interests: {},
        genderAnswers: [],
        squidGameAnswers: [],
        incomeAnswers: []
    },
    results: [],
    personality: "",
    isPaused: true,
    showProgress: false,
    stories: [],
    finished: false,
    loop: true,
    isIdle: false,
    interactive: false,
    location: {
        address: "undefined",
        city: "undefined",
        state: "undefined",
        country: "undefined"
    }
});

// const sendEvent = createAsyncThunk(
//     "quiz/sendEvent",
//     async ({
//                eventType,
//                valueName = null,
//                value = null,
//            }: {
//         eventType: string,
//         valueName: string,
//         value: string,
//     }, {getState}) => {
//         try {
//             const URL = "https://idt.production.ippen.space";
//             const quiz = useAppSelector(selectQuiz);
//
//             const totalSlides = quiz.stories.length.toString();
//             const slideId = quiz.currentIndex.toString();
//             const slideNumber = quiz.currentIndex.toString();
//             const experimentId = quiz.experimentId;
//             const variantId = quiz.variantId;
//             const device = quiz.device;
//             const quizType = quiz.quizType;
//
//             //UID
//             // let uid = document.cookie
//             //     .split(";")
//             //     .find((item) => item.trim().startsWith("cua_uuid="));
//             // uid = (uid && uid.split("=")[1]) || "nouid";
//
//             //CATEGORY
//             const categoryRegexp = /https:\/\/www.merkur.de\/(leben\/)?(.*?)\//g.exec(window.location.href);
//             const category = categoryRegexp ? categoryRegexp[2] : "none";
//
//             //CLIENT
//             const clientRegexp = /www.(.*)/g.exec(new URL(window.location.href).hostname);
//             const client = clientRegexp ? clientRegexp[1] : new URL(window.location.href).hostname;
//
//             const time = Date.now().toString();
//
//             let location = "undefined";
//             navigator.geolocation.getCurrentPosition((position) => {
//                 // location = position.toString();
//                 location = position.coords.toString();
//             });
//
//             // Add ActiveView tracking metric for each slide inside each variant of an experiment
//             // Add ClickEvent tracking metric for each click in each of the slides inside each variant
//             const payload: Payload = {
//                 widgetName: `quizname - ${quizType}`,
//                 client,
//                 category,
//                 experimentId,
//                 variantId,
//                 slideId: slideId + 1,
//                 device,
//                 location,
//                 time,
//                 eventType,
//                 valueName,
//                 value,
//                 totalSlides,
//                 slideNumber,
//                 quizType,
//             };
//             if (valueName) {
//                 payload.valueName = valueName;
//                 payload.value = value;
//             }
//             const body: Body = {
//                 "name": "CXO-Widget-dev-pvnd",
//                 "description": "Description of the Quizz",
//                 // version: uid,
//                 "version": "0.1",
//                 "properties": "something something",
//                 payload: payload,
//             };
//
//             const headers = new Headers();
//             headers.append("Accept", "application/json");
//
//             const settings = {
//                 headers: headers,
//                 method: "POST",
//                 body: JSON.stringify(body)
//             };
//
//             // settings.method = "POST";
//             // settings.;
//             return fetch(URL, settings);
//
//             // const response = await fetch(`https://reqres.in/api/users/`);
//             // return await response.json();
//
//             // return async function (dispatch, getState) {
//             //     const response = await sendEvent(props);
//             //     // dispatch(todosLoaded(response.todos));
//             // };
//
//             // sendEvent({
//             //     eventType,
//             //     valueName,
//             //     value,
//             //     quiz
//             // });
//         } catch (error) {

//         }
//     }
// );

export const initSlice = {
    name: "quiz",
    initialState,
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        // builder.addCase(sendEvent.fulfilled, (state, action) => {
        //     // Add user to the state array
        //     // state.entities.push(action.payload)
        // });
    },
    reducers: {
        setState: (state, { payload }) => {
            state = payload;
        },
        setExperimentId: (state, { payload }) => {
            state.experimentId = payload;
        },
        setError: (state, { payload }) => {
            state.error = payload;
        },
        setSubExperimentId: (state, { payload }) => {
            state.subExperimentId = payload;
        },
        setMetaExperimentVariant: (state, { payload }) => {
            state.metaExperimentVariant = payload;
        },
        setLocation: (state, { payload }) => {
            if (!state.location) state.location = {};
            if (state.location.country) {
                state.location.address = payload.address;
                state.location.city = payload.address;
                state.location.state = payload.state;
                state.location.country = payload.country;
            } else {
                state.location = payload;
            }
        },
        setExperimentRoundNr: (state, { payload }) => {
            state.experimentRoundNr = payload;
        },
        setDevice: (state, { payload }) => {
            state.device = payload;
        },
        incomeAnswer: (state, { payload }) => {
            state.answeredQuestions.incomeAnswers.push(payload);
        },
        setVariantId: (state, { payload }) => {
            state.variantId = payload;
        },
        setCategory: (state, { payload }) => {
            state.category = payload;
        },
        setInterest: (state, { payload }) => {
            state.interest = payload;
        },
        setVariantName: (state, { payload }) => {
            state.variantName = payload;
        },
        setQuizType: (state, { payload }) => {
            state.quizType = payload;
        },
        enableIdleSlide: (state, { payload }) => {
            state.enabledIdleSlide = payload;
        },
        setTheme: (state, { payload }) => {
            state.theme = payload;
        },
        setStories: (state, { payload }) => {
            state.stories = payload;
        },
        idle: (state, action) => {
            if (!state.isIdle) {
                state.oldState = { ...state };
                state.stories = [action.payload];
                state.currentIndex = 0;
                state.finished = true;
                state.loop = false;
                state.isIdle = true;
            }
        },
        reset: (state) => {
            return { ...initialState };
        },
        setIndex: (state, action) => {
            const totalIndex = state.stories.length ? state.stories.length - 1 : 0;
            state.currentIndex =
                action.payload > totalIndex ? totalIndex : action.payload < 0 ? totalIndex : action.payload;
        },
        nextStory: (state) => {
            const totalIndex = state.stories.length - 1;
            let newIndex = state.currentIndex + 1;
            // console.log({ newIndex });
            newIndex = newIndex > totalIndex ? totalIndex : newIndex < 0 ? totalIndex : newIndex;
            // log(newIndex)
            state.currentIndex = newIndex;
        },
        togglePause: (state, { payload = undefined }) => {
            // state.isPaused = payload !== undefined ? payload : !state.isPaused
            state.isPaused = payload;
        },
        prevStory: (state) => {
            const totalIndex = state.stories.length - 1;
            let prevIndex = state.currentIndex - 1;
            prevIndex = prevIndex > totalIndex ? totalIndex : prevIndex < 0 ? totalIndex : prevIndex;
            state.currentIndex = prevIndex;
        },
        setBackgroundPicture: (state, { payload }) => {
            state.backgroundPicture = payload;
        },
        setSize: (state, { payload }) => {
            state.size = payload;
        },
        setShowProgress: (state, { payload }) => {
            state.showProgress = payload;
        },
        addStories: (state, { payload }) => {
            state.stories = [
                ...state.stories.slice(0, state.currentIndex + 1),
                ...payload,
                ...state.stories.slice(state.currentIndex + 2)
            ];
        },
        setLoaded: (state, { payload }) => {
            state.loaded = payload;
        },
        setLoadedInterval: (state, { payload }) => {
            state.defaultInterval = payload;
        },
        removeStories: (state, { payload }) => {
            state.stories = [
                ...state.stories.filter((story) => {
                    return !payload.some((f) => {
                        return f.id === story.id;
                    });
                })
            ];
        },
        nextUnanswered: (state, action) => {},
        continueQuiz: (state, action) => {
            // state.stories = state.oldState.stories
            // state.currentIndex = state.oldState.currentIndex
            // state.oldState = null
            return { ...state.oldState, oldState: null };
        },
        newsletter: (state, action) => {
            state.stories = [action.payload];
            state.finished = true;
            state.isIdle = false;
            state.currentIndex = 0;
        },
        setFinished: (state) => {
            state.finished = true;
        },
        insertStory: (state, { payload }) => {
            state.stories = [
                ...state.stories.slice(0, state.currentIndex + 1),
                payload,
                ...state.stories.slice(state.currentIndex + 2)
            ];
        },
        genderQuestionAnswer: (state, { payload }) => {
            state.answeredQuestions.genderAnswers.push(payload);
        },
        squidGameQuestionAnswer: (state, { payload }) => {
            state.answeredQuestions.squidGameAnswers.push(payload);
        },
        selectInterest: (state, { payload }: PayloadAction<any>) => {
            const topic = payload.topic;
            const allTopicStories = interests[topic];
            const choiceAmount = payload.interestsAmount;

            if (topic in state.answeredQuestions.interests) {
                // delete state.answeredQuestions.interests[topic];
                state.answeredQuestions.interests = Object.fromEntries(
                    Object.entries(state.answeredQuestions.interests).filter(([key]) => key !== topic)
                );

                const topics = allTopicStories.map((q) => q.question);
                state.stories = state.stories.filter((story) => !topics.includes(story.question));
                return;
            }

            if (Object.keys(state.answeredQuestions.interests).length >= choiceAmount) return;

            state.answeredQuestions.interests = {
                ...state.answeredQuestions.interests,
                [topic]: { values: [] }
            };

            state.stories = [
                ...state.stories.slice(0, -1),
                ...allTopicStories,
                state.stories[state.stories.length - 1]
            ];
        },
        selectInterestAnswer: (state, { payload }: PayloadAction<any>) => {
            const answer = payload.answer;
            const topic = payload.topic;
            const allAnswers = payload.all.map(({ id }) => id);

            if (!(topic in state.answeredQuestions.interests)) {
                state.answeredQuestions.interests[topic] = [];
            }
            state.answeredQuestions.interests[topic] = state.answeredQuestions.interests[topic].filter(
                (answer) => !allAnswers.includes(answer.id)
            );
            state.answeredQuestions.interests[topic].push(answer);
        },
        answerAge: (state, { payload }) => {
            state.answeredQuestions.age = payload;
        },
        answerGender: (state, { payload }) => {
            state.answeredQuestions.gender = payload;
        },
        answerVote: (state, { payload }) => {
            state.answeredQuestions.vote = payload;
        },
        answerMaritalStatus: (state, { payload }) => {
            state.answeredQuestions.maritalStatus = payload;
        },
        makeAnAnswer: (state, action: PayloadAction<any>) => {
            const name = action.payload.type;
            const values = action.payload.values;
            // const questionType = action.payload.questionType
            if (!state.answeredQuestions[name]) state.answeredQuestions[name] = [];
            state.answeredQuestions[name] = values;
        },
        setInteractive: (state) => {
            state.interactive = true;
        }
    }
};
const quizSlice = createSlice(initSlice);
export const {
    setState,
    setStories,
    enableIdleSlide,
    setExperimentId,
    setError,
    setSubExperimentId,
    setMetaExperimentVariant,
    setLocation,
    setExperimentRoundNr,
    setDevice,
    setLoaded,
    setLoadedInterval,
    setQuizType,
    setTheme,
    setVariantId,
    setVariantName,
    setCategory,
    setInterest,
    setBackgroundPicture,
    setSize,
    setShowProgress,
    selectInterest,
    selectInterestAnswer,
    setIndex,
    makeAnAnswer,
    genderQuestionAnswer,
    squidGameQuestionAnswer,
    answerGender,
    answerAge,
    answerVote,
    answerMaritalStatus,
    reset,
    prevStory,
    nextStory,
    togglePause,
    idle,
    continueQuiz,
    newsletter,
    setFinished,
    insertStory,
    setInteractive,
    addStories,
    removeStories,
    incomeAnswer
} = quizSlice.actions;
export default quizSlice.reducer;
