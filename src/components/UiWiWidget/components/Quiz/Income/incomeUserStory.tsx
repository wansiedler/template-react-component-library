import { guid } from "~/utils";
import { slideTypes } from "~/types";
import { ageChoices, selectGroupSubtext } from "../Age/ageUserStory";

//Default component text
const resultSubtext = "Hier ist Ihr Ergebnis! Danke für Ihre Teilnahme.";
const voteSubtext = "Was sagen die Merkur Leser? Vergleichen Sie sich jetzt!";

export const incomeChoices = [
    {
        id: guid(),
        text: "< 500€",
        value: 1
    },
    {
        id: guid(),
        text: "500 - 1500€",
        value: 2
    },
    {
        id: guid(),
        text: "1500 - 2500€",
        value: 3
    },
    {
        id: guid(),
        text: "2500 - 4000€",
        value: 4
    },
    {
        id: guid(),
        text: "> 4000€",
        value: 5
    },
    {
        id: guid(),
        text: "> 6.000€",
        value: 6
    }
];

// Income

const incomeQuestion = "Geben Sie jetzt ihr Monatseinkommen an und wir ordnen Sie ein!";
const incomeStartStory = [
    {
        id: guid(),
        type: slideTypes.selectGroup,
        choiceAmount: 1,
        question: incomeQuestion,
        subtext: voteSubtext,
        choices: incomeChoices
    }
];

// Inflation

const inflationQuestion = "Seit 40 Jahren war die Inflation noch nie so hoch. Spüren Sie die Auswirkungen im Alltag?";
const inflationQuestionSelectGroup = "Seit 40 Jahren war die Inflation noch nie so hoch.";
export const inflationVotes = ["Ich merke die Auswirkungen", "Nein, es fällt mir nicht auf"];
const inflationStartStory = [
    {
        id: guid(),
        type: slideTypes.Vote,
        subtext: " ",
        question: inflationQuestion,
        votes: inflationVotes
    }
];

//Work-Life-Balance

const workLifeBalanceQuestion = "Work-Life-Balance - Was ist Ihnen wichtiger?";
const workLifeBalanceVotes = ["Work", "Life"];
const workLifeBalanceStartStory = [
    {
        id: guid(),
        type: slideTypes.Vote,
        subtext: voteSubtext,
        question: workLifeBalanceQuestion,
        votes: workLifeBalanceVotes
    }
];

export const incomeUserStory = {
    income: {
        variants: {
            basic: incomeStartStory,
            interactive: incomeStartStory,
            hedonistic: incomeStartStory,
            relatedness: incomeStartStory
        },
        slides: [
            {
                id: guid(),
                type: slideTypes.selectGroup,
                question: incomeQuestion,
                subtext: selectGroupSubtext,
                choices: ageChoices
            },
            {
                id: guid(),
                type: slideTypes.Result,
                question: resultSubtext,
                choices: incomeChoices
            }
        ]
    },
    inflation: {
        variants: {
            basic: inflationStartStory,
            interactive: inflationStartStory,
            hedonistic: inflationStartStory
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
    }
};
