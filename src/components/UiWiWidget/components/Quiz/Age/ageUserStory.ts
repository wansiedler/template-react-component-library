import { guid } from "~/utils";
import { slideTypes } from "~/types";
import { topics } from "../Interests/interestsUserStory";

export const ageChoices = [
    { id: guid(), text: "20 - 29" },
    { id: guid(), text: "30 - 39" },
    { id: guid(), text: "40 - 49" },
    { id: guid(), text: "50 - 59" },
    { id: guid(), text: "60 - 99" }
];

export const ageChoicesNew = [
    { id: guid(), text: "< 20" },
    { id: guid(), text: "20 - 39" },
    { id: guid(), text: "40 - 60" },
    { id: guid(), text: "> 60" }
];

//Default component text
export const selectGroupSubtext =
    "Geben Sie Ihr Alter an & finden Sie heraus, ob die Ergebnisse altersspezifisch sind!";
const selectGroupSubtextNew = "Geben Sie jetzt Ihr Alter an, um die Ergebnisse einzusehen.";
const resultSubtext = "Hier ist Ihr Ergebnis! Danke für Ihre Teilnahme.";
const merkurSubQuestion = "Was sagen die Merkur Leser? Vergleichen Sie sich jetzt!";

//Theme-specific component text
//Politik
const politikQuestion = "Wie schlägt sich die Außenministerin in den aktuellen Zeiten?";
export const politikVotes = ["Genau richtig", "Absolut falsch"];
const politikStartStory = [
    {
        id: guid(),
        type: slideTypes.Vote,
        question: politikQuestion,
        subtext: merkurSubQuestion,
        votes: politikVotes
    }
];

//Grill
export const grillVotes = ["Nein, lieber mit Fleisch", "Ja, viel lieber vegetarisch"];

//Heiß & Kalt
const hkQuestion = "Urlaub - Lieber warm oder kalt? Was ist Ihnen wichtiger?";
const hkSubtext = "Vergleichen Sie jetzt ihre Stimmungslage mit unseren Merkur Lesern!";
export const hkVotes = ["kalt", "warm"];
const hkStartStory = [
    {
        id: guid(),
        type: slideTypes.Vote,
        subtext: hkSubtext,
        question: hkQuestion,
        votes: hkVotes
    }
];

//INCOME
export const incomeVotes = ["Genau richtig", "Absolut falsch"];

//FEIERTAG
const feiertagQuestion = "Feiertags-Pleite in Deutschland.";
const feiertagSubtext = "Sollen Feiertage, die aufs Wochenende fallen, nachgeholt werden?";
export const feiertagVotes = ["Unbedingt", "Das muss nicht sein"];
const feiertagVariant = [
    {
        id: guid(),
        type: slideTypes.Vote,
        topic: topics.politik,
        choiceAmount: 1,
        question: feiertagQuestion,
        subtext: feiertagSubtext,
        votes: feiertagVotes
    }
];
const feiertagSlides = [
    {
        id: guid(),
        type: slideTypes.selectGroup,
        choiceAmount: 1,
        question: feiertagQuestion,
        subtext: selectGroupSubtext,
        choices: ageChoices
    },
    {
        id: guid(),
        question: resultSubtext,
        type: slideTypes.Result,
        choices: ageChoices
    }
];

//WM
const wmQuestion = "Fußball WM 2022 in Qatar steht unter großer Kritik.";
const wmVotes = ["Zu recht", "Übertrieben"];

//Inflation
const inflationQuestion = "Seit 40 Jahren war die Inflation noch nie so hoch. Spüren Sie die Auswirkungen im Alltag?";
const inflationQuestionSelectGroup = "Seit 40 Jahren war die Inflation noch nie so hoch.";
const inflationSubQuestion = merkurSubQuestion;
export const inflationVotes = ["Ich merke die Auswirkungen", "Nein, es fällt mir nicht auf"];

//Work-Life-Balance
const workLifeBalanceQuestion = "Work-Life-Balance - Was ist Ihnen wichtiger?";
const workLifeBalanceVotes = ["Work", "Life"];
const workLifeBalanceStartStory = [
    {
        id: guid(),
        type: slideTypes.Vote,
        subtext: merkurSubQuestion,
        question: workLifeBalanceQuestion,
        votes: workLifeBalanceVotes
    }
];

//Krieg
const kriegQuestion = "Aktuell laufen 25 Kriege weltweit. Wie gehen Sie damit um?";
const kriegSubQuestion = "Vergleichen Sie jetzt ihre Stimmungslage mit unseren Merkur Lesern!";
export const kriegVotes = ["Ich informiere mich ständig", "Ich finde Wege um mich abzulenken"];
const kriegStartStory = [
    {
        id: guid(),
        type: slideTypes.Vote,
        subtext: kriegSubQuestion,
        question: kriegQuestion,
        votes: kriegVotes
    }
];

//TikTok
const tiktokQuestion = "Tik Tok - Ein Trend für jung und Alt?";
export const tiktokVotes = ["Ja, ich bin süchtig danach", "Nein, verstehe ich nicht"];
const tiktokStartStory = [
    {
        id: guid(),
        type: slideTypes.Vote,
        subtext: "Nutzen Sie Tik Tok?",
        question: tiktokQuestion,
        subquestion: "Neueste Studien belegen 10-19 Jährige repräsentieren nur 24% der Nutzer.",
        votes: tiktokVotes
    }
];

//Wiesn
const wiesnQuestion = "Sind Sie bei den Wiesn 2022 dabei?";
const wiesnVotes = ["Keine Frage: bin dabei!", "Nein, wird überbewertet"];
const wiesnselectGroupSubtext = selectGroupSubtext;
const wiesnStartStory = [
    {
        id: guid(),
        type: slideTypes.Vote,
        question: wiesnQuestion,
        subtext: "Sind Sie bereit?",
        votes: wiesnVotes
    }
];

//
// EXPORT
//

export const ageUserStory: { [key: string]: any } = {
    tiktok: {
        variants: {
            basic: tiktokStartStory,
            interactive: tiktokStartStory,
            hedonistic: tiktokStartStory,

            neutral: tiktokStartStory,
            relatedness: tiktokStartStory,
            motivation: tiktokStartStory
        },
        slides: [
            {
                id: guid(),
                type: slideTypes.selectGroup,
                choiceAmount: 1,
                question: tiktokQuestion,
                subtext: selectGroupSubtext,
                choices: ageChoices
            },
            {
                id: guid(),
                question: resultSubtext,
                type: slideTypes.Result,
                choices: ageChoices
            }
        ]
    },
    hk: {
        variants: {
            basic: hkStartStory,
            hedonistic: hkStartStory,
            interactive: hkStartStory
        },
        slides: [
            {
                id: guid(),
                type: slideTypes.selectGroup,
                choiceAmount: 1,
                question: hkQuestion,
                subtext: selectGroupSubtext,
                choices: ageChoices
            },
            {
                id: guid(),
                question: resultSubtext,
                type: slideTypes.Result,
                choices: ageChoices
            }
        ]
    },
    feiertag: {
        variants: {
            neutral: feiertagVariant,
            motivation: feiertagVariant,
            relatedness: feiertagVariant,

            basic: feiertagVariant,
            hedonistic: feiertagVariant,
            interactive: feiertagVariant
        },
        slides: feiertagSlides
    },
    politik: {
        variants: {
            basic: politikStartStory,
            interactive: politikStartStory,
            hedonistic: politikStartStory
        },
        slides: [
            {
                id: guid(),
                type: slideTypes.selectGroup,
                choiceAmount: 1,
                question: politikQuestion,
                subtext: selectGroupSubtext,
                choices: ageChoices
            },
            {
                id: guid(),
                question: resultSubtext,
                type: slideTypes.Result,
                choices: ageChoices
            }
        ]
    },
    wiesn: {
        variants: {
            basic: wiesnStartStory,
            interactive: wiesnStartStory,
            hedonistic: wiesnStartStory,
            oldBasic: wiesnStartStory
        },
        slides: [
            {
                id: guid(),
                type: slideTypes.selectGroup,
                choiceAmount: 1,
                question: wiesnQuestion,
                subtext: wiesnselectGroupSubtext,
                choices: ageChoices
            },
            {
                id: guid(),
                question: resultSubtext,
                type: slideTypes.Result,
                choices: ageChoices
            }
        ]
    },
    wm: {
        variants: {
            basic: [
                {
                    id: guid(),
                    type: slideTypes.Vote,
                    subtext: merkurSubQuestion,
                    question: wmQuestion,
                    votes: wmVotes
                }
            ],
            interactive: [
                {
                    id: guid(),
                    type: slideTypes.Vote,
                    subtext: merkurSubQuestion,
                    question: wmQuestion,
                    votes: wmVotes
                }
            ],
            hedonistic: [
                {
                    id: guid(),
                    type: slideTypes.Vote,
                    subtext: merkurSubQuestion,
                    question: wmQuestion,
                    votes: wmVotes
                }
            ]
        },
        slides: [
            {
                id: guid(),
                type: slideTypes.selectGroup,
                choiceAmount: 1,
                question: "Fußball WM 2022 in Qatar",
                subtext: selectGroupSubtext,
                choices: ageChoices
            },
            {
                id: guid(),
                question: resultSubtext,
                type: slideTypes.Result,
                choices: ageChoices
            }
        ]
    },
    workLifeBalance: {
        variants: {
            basic: workLifeBalanceStartStory,
            interactive: workLifeBalanceStartStory,
            hedonistic: workLifeBalanceStartStory,
            relatedness: workLifeBalanceStartStory
        },
        slides: [
            {
                id: guid(),
                type: slideTypes.selectGroup,
                choiceAmount: 1,
                question: workLifeBalanceQuestion,
                subtext: selectGroupSubtext,
                choices: ageChoices
            },
            {
                id: guid(),
                question: resultSubtext,
                type: slideTypes.Result,
                choices: ageChoices
            }
        ]
    },
    inflation: {
        variants: {
            basic: [
                {
                    id: guid(),
                    type: slideTypes.Vote,
                    subtext: inflationSubQuestion,
                    question: inflationQuestion,
                    votes: inflationVotes
                }
            ],
            interactive: [
                {
                    id: guid(),
                    type: slideTypes.Vote,
                    subtext: inflationSubQuestion,
                    question: inflationQuestion,
                    votes: inflationVotes
                }
            ],
            hedonistic: [
                {
                    id: guid(),
                    type: slideTypes.Vote,
                    subtext: inflationSubQuestion,
                    question: inflationQuestion,
                    votes: inflationVotes
                }
            ]
        },
        slides: [
            {
                id: guid(),
                type: slideTypes.selectGroup,
                choiceAmount: 1,
                question: inflationQuestionSelectGroup,
                subtext: selectGroupSubtext,
                choices: ageChoices
            },
            {
                id: guid(),
                question: resultSubtext,
                type: slideTypes.Result,
                choices: ageChoices
            }
        ]
    },
    krieg: {
        variants: {
            basic: kriegStartStory,
            interactive: kriegStartStory,
            hedonistic: kriegStartStory,
            relatedness: kriegStartStory
        },
        slides: [
            {
                id: guid(),
                type: slideTypes.selectGroup,
                choiceAmount: 1,
                question: kriegQuestion,
                subtext: selectGroupSubtext,
                choices: ageChoices
            },
            {
                id: guid(),
                question: resultSubtext,
                type: slideTypes.Result,
                choices: ageChoices
            }
        ]
    }
};
