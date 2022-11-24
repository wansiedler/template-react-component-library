import { guid } from "~/utils";
import { slideTypes } from "~/types";

export const votesNew = ["Ja", "Nein"];

export const maritalStatusChoicesNew = [
    { id: guid(), text: "Single" },
    { id: guid(), text: "Verheiratet" },
    { id: guid(), text: "Zusammenlebend" },
    { id: guid(), text: "In einer Beziehung" }
];

//Beziehungen
const beziehungenV2Question = "Beziehungen";
const beziehungenV2SubQuestion = "Ist Ihnen Romantik wichtig?";
const beziehungenV2Subtext = "Jetzt abstimmen und mit Merkur Lesern vergleichen!";
const beziehungenV2StartBaseStory = {
    id: guid(),
    question: beziehungenV2Question,
    subQuestion: beziehungenV2SubQuestion,
    type: slideTypes.preview
}

export const maritalStatusNewUserStory: { [key: string]: any } = {
    beziehungenv2: {
        variants: {
            basic: [
                {
                    ...beziehungenV2StartBaseStory,
                    // image: require("../../../styles/themes/images/beziehungen-background-basic.jpg")
                }
            ],
            hedonistic: [
                {
                    ...beziehungenV2StartBaseStory,
                    // image: require("../../../styles/themes/images/beziehungen-background-hedonistic.jpg")
                }
            ],
            interactive: [
                {
                    ...beziehungenV2StartBaseStory,
                    // image: require("../../../styles/themes/images/beziehungen-background-interactive.jpg")
                }
            ]
        },
        slides: [
            {
                id: guid(),
                type: slideTypes.Vote,
                question: beziehungenV2Question,
                subQuestion: beziehungenV2SubQuestion,
                subtext: beziehungenV2Subtext,
                votes: votesNew
            },
            {
                id: guid(),
                type: slideTypes.selectGroup,
                choiceAmount: 1,
                question: beziehungenV2Question,
                subQuestion: beziehungenV2SubQuestion,
                subtext: "Geben Sie jetzt Ihren Beziehungsstatus an, um die Ergebnisse einzusehen.",
                choices: maritalStatusChoicesNew
            },
            {
                id: guid(),
                question: beziehungenV2Question,
                subQuestion: beziehungenV2SubQuestion,
                subtext: "Vielen Dank für Ihre Teilnahme!",
                type: slideTypes.Result,
                choices: maritalStatusChoicesNew,
                votes: votesNew
            }
        ]
    }
};