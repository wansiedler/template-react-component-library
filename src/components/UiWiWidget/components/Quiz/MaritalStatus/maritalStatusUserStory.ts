import { guid } from "~/utils";
import { slideTypes } from "~/types";

export const maritalStatusChoices = [
    { id: guid(), text: "Single" },
    { id: guid(), text: "In einer Beziehung" },
    { id: guid(), text: "Zusammen-lebend" },
    { id: guid(), text: "Verheiratet" }
];

export const maritalStatusVotesResult = [
    { ...maritalStatusChoices[0] },
    { ...maritalStatusChoices[1], text: "Beziehung" },
    { ...maritalStatusChoices[2], text: "Zusammenl." },
    { ...maritalStatusChoices[3] }
];

export const beziehungenChoices = [
    { id: guid(), text: "Single" },
    { id: guid(), text: "In einer Beziehung" },
    { id: guid(), text: "Zusammen-lebend" },
    { id: guid(), text: "Verheiratet" }
];

export const beziehungenVotesResult = [
    { ...beziehungenChoices[0] },
    { ...beziehungenChoices[1], text: "Beziehung" },
    { ...beziehungenChoices[2], text: "Zusammenl." },
    { ...beziehungenChoices[3] }
];

//Default component text
const voteSubtextMerkur = "Wie sehen dieses Thema unsere Merkur Leser? Vergleichen Sie sich jetzt!";
const selectGroupSubtext = "Geben Sie jetzt Ihren Beziehungsstatus ein und vergleichen Sie sich!";
const resultSubtext = "Hier ist Ihr Ergebnis! Danke für Ihre Teilnahme.";

//Beziehungen theme
const beziehungenQuestion = "Wie wichtig ist es Ihnen in einer romantischen Beziehung zu sein?";
export const beziehungenVotes = ["Sehr wichtig", "Es gibt wichtigeres"];
const beziehungenStartStory = [
    {
        id: guid(),
        type: slideTypes.Vote,
        subtext: voteSubtextMerkur,
        question: beziehungenQuestion,
        votes: beziehungenVotes
    }
];

export const maritalStatusUserStory: { [key: string]: any } = {
    beziehungen: {
        variants: {
            basic: beziehungenStartStory,
            hedonistic: beziehungenStartStory,
            interactive: beziehungenStartStory
        },
        slides: [
            {
                id: guid(),
                type: slideTypes.selectGroup,
                choiceAmount: 1,
                question: beziehungenQuestion,
                subtext: selectGroupSubtext,
                choices: maritalStatusChoices
            },
            {
                id: guid(),
                question: resultSubtext,
                type: slideTypes.Result,
                choices: maritalStatusVotesResult
            }
        ]
    }
};

export const beziehungenUserStory: { [key: string]: any } = {
    beziehungen: {
        variants: {
            basic: beziehungenStartStory,
            hedonistic: beziehungenStartStory,
            interactive: beziehungenStartStory
        },
        slides: [
            {
                id: guid(),
                type: slideTypes.selectGroup,
                choiceAmount: 1,
                question: beziehungenQuestion,
                subtext: selectGroupSubtext,
                choices: beziehungenChoices
            },
            {
                id: guid(),
                question: resultSubtext,
                type: slideTypes.Result,
                choices: beziehungenVotesResult
            }
        ]
    }
};
