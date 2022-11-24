import { guid } from "~/utils";
import { slideTypes } from "~/types";
import { ageChoices, selectGroupSubtext } from "../AgeNew/ageNewUserStory";

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
        text: "4000 - 6000€",
        value: 5
    },
    {
        id: guid(),
        text: "> 6000€",
        value: 6
    }
];

//
// Income
//

const incomeQuestion = "Einkommen";
const incomeSubQuestion = "Liegen Sie im Durchschnitt?";
const incomeSubtext = "Jetzt abstimmen und mit Merkur Lesern vergleichen!";

// const incomePreviewImageBasic = require(`../../../styles/themes/images/income-background-basic.jpeg`);
// const incomePreviewImageHedonistic = require(`../../../styles/themes/images/income-background-hedonistic.jpg`);
// const incomePreviewImageInteractive = require(`../../../styles/themes/images/income-background-interactive.jpg`);

const incomeStartBaseStory = {
    id: guid(),
    question: "Einkommen",
    subtitle: "Liegen Sie im Durchschnitt?",
    type: slideTypes.preview
};

//
// Inflation
//

const inflationQuestion = "Inflation";
const inflationSubQuestion = "Spüren Sie die Auswirkungen?";
const inflationSubtext = "Jetzt abstimmen und mit Merkur Lesern vergleichen!";
export const inflationVotes = ["ja", "nein"];

// const inflationPreviewImageBasic = require(`../../../styles/themes/images/inflation-background-basic.jpg`);
// const inflationPreviewImageHedonistic = require(`../../../styles/themes/images/inflation-background-hedonistic.jpg`);
// const inflationPreviewImageInteractive = require(`../../../styles/themes/images/inflation-background-interactive.jpg`);

const inflationStartBaseStory = {
    id: guid(),
    question: "Inflation",
    subtitle: "Spüren Sie die Auswirkungen?",
    type: slideTypes.preview
};

//
// Work-Life-Balance
//

const workLifeBalanceQuestion = "Work-Life";
const workLifeBalanceSubQuestion = "Wie wichtig ist Ihnen die Balance?";
const workLifeBalanceSubtext = "Jetzt abstimmen und mit Merkur Lesern vergleichen!";
export const workLifeBalanceVotes = ["unwichtig", "wichtig"];

// const workLifeBalancePreviewImageBasic = require(`../../../styles/themes/images/workLifeBalance-background-basic.jpg`);
// const workLifeBalancePreviewImageHedonistic = require(`../../../styles/themes/images/workLifeBalance-background-hedonistic.jpg`);
// const workLifeBalancePreviewImageInteractive = require(`../../../styles/themes/images/workLifeBalance-background-interactive.jpg`);

const workLifeBalanceStartBaseStory = {
    id: guid(),
    question: "Work-Life",
    subtitle: "Wie wichtig ist Ihnen die Balance?",
    type: slideTypes.preview
};

export const incomeNewUserStory = {
    incomev2: {
        variants: {
            basic: [
                {
                    ...incomeStartBaseStory,
                    // image: incomePreviewImageBasic
                }
            ],
            hedonistic: [
                {
                    ...incomeStartBaseStory,
                    // image: incomePreviewImageHedonistic
                }
            ],
            interactive: [
                {
                    ...incomeStartBaseStory,
                    // image: incomePreviewImageInteractive
                }
            ]
        },
        slides: [
            {
                id: guid(),
                type: slideTypes.Vote,
                question: incomeQuestion,
                subQuestion: incomeSubQuestion,
                subtext: incomeSubtext,
                choices: incomeChoices
            },
            {
                id: guid(),
                type: slideTypes.selectGroup,
                choiceAmount: 1,
                question: incomeQuestion,
                subQuestion: incomeSubQuestion,
                subtext: selectGroupSubtext,
                choices: ageChoices
            },
            {
                id: guid(),
                type: slideTypes.Result,
                question: incomeQuestion,
                subQuestion: incomeSubQuestion,
                subtext: "Vielen Dank für Ihre Teilnahme!",
                choices: ageChoices
            }
        ]
    },
    inflationv2: {
        variants: {
            basic: [
                {
                    ...inflationStartBaseStory,
                    // image: inflationPreviewImageBasic
                }
            ],
            hedonistic: [
                {
                    ...inflationStartBaseStory,
                    // image: inflationPreviewImageHedonistic
                }
            ],
            interactive: [
                {
                    ...inflationStartBaseStory,
                    // image: inflationPreviewImageInteractive
                }
            ]
        },
        slides: [
            {
                id: guid(),
                type: slideTypes.Vote,
                question: inflationQuestion,
                subQuestion: inflationSubQuestion,
                subtext: inflationSubtext,
                votes: inflationVotes
            },
            {
                id: guid(),
                type: slideTypes.selectGroup,
                choiceAmount: 1,
                question: inflationQuestion,
                subQuestion: inflationSubQuestion,
                subtext: selectGroupSubtext,
                choices: ageChoices
            },
            {
                id: guid(),
                type: slideTypes.Result,
                question: inflationQuestion,
                subQuestion: inflationSubQuestion,
                subtext: "Vielen Dank für Ihre Teilnahme!",
                choices: ageChoices,
                votes: inflationVotes
            }
        ]
    },
    workLifeBalancev2: {
        variants: {
            basic: [
                {
                    ...workLifeBalanceStartBaseStory,
                    // image: workLifeBalancePreviewImageBasic
                }
            ],
            hedonistic: [
                {
                    ...workLifeBalanceStartBaseStory,
                    // image: workLifeBalancePreviewImageHedonistic
                }
            ],
            interactive: [
                {
                    ...workLifeBalanceStartBaseStory,
                    // image: workLifeBalancePreviewImageInteractive
                }
            ]
        },
        slides: [
            {
                id: guid(),
                type: slideTypes.Vote,
                question: workLifeBalanceQuestion,
                subQuestion: workLifeBalanceSubQuestion,
                subtext: workLifeBalanceSubtext,
                votes: workLifeBalanceVotes
            },
            {
                id: guid(),
                type: slideTypes.selectGroup,
                choiceAmount: 1,
                question: workLifeBalanceQuestion,
                subQuestion: workLifeBalanceSubQuestion,
                subtext: selectGroupSubtext,
                choices: ageChoices
            },
            {
                id: guid(),
                type: slideTypes.Result,
                question: workLifeBalanceQuestion,
                subQuestion: workLifeBalanceSubQuestion,
                subtext: "Vielen Dank für Ihre Teilnahme!",
                choices: ageChoices,
                votes: workLifeBalanceVotes
            }
        ]
    }
};
