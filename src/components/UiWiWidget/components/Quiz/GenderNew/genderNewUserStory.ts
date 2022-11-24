import { guid } from "~/utils";
import { slideTypes } from "~/types";

export const votesNew = ["Ja", "Nein"];

export const genderChoicesNew = [
    { id: guid(), text: "Männlich" },
    { id: guid(), text: "Weiblich" },
    { id: guid(), text: "Divers" }
];

//Stereotypes
const stereotypesV2Question = "Stereotypen";
const stereotypesV2SubQuestion = "Werden Sie damit konfrontiert?";
const stereotypesV2Subtext = "Jetzt abstimmen und mit Merkur Lesern vergleichen!";
const stereotypesV2StartBaseStory = {
    id: guid(),
    question: stereotypesV2Question,
    subQuestion: stereotypesV2SubQuestion,
    type: slideTypes.preview
}

export const genderNewUserStory: { [key: string]: any } = {
    stereotypesv2: {
        variants: {
            basic: [
                {
                    ...stereotypesV2StartBaseStory,
                    // image: require("../../../styles/themes/images/stereotypes-background-basic.jpg")
                }
            ],
            hedonistic: [
                {
                    ...stereotypesV2StartBaseStory,
                    // image: require("../../../styles/themes/images/stereotypes-background-hedonistic.jpg")
                }
            ],
            interactive: [
                {
                    ...stereotypesV2StartBaseStory,
                    // image: require("../../../styles/themes/images/stereotypes-background-interactive.jpg")
                }
            ]
        },
        slides: [
            {
                id: guid(),
                type: slideTypes.Vote,
                question: stereotypesV2Question,
                subQuestion: stereotypesV2SubQuestion,
                subtext: stereotypesV2Subtext,
                votes: votesNew
            },
            {
                id: guid(),
                type: slideTypes.selectGroup,
                choiceAmount: 1,
                question: stereotypesV2Question,
                subQuestion: stereotypesV2SubQuestion,
                subtext: "Geben Sie jetzt Ihr Geschlecht an, um die Ergebnisse einzusehen.",
                choices: genderChoicesNew
            },
            {
                id: guid(),
                type: slideTypes.Result,
                question: stereotypesV2Question,
                subQuestion: stereotypesV2SubQuestion,
                subtext: "Vielen Dank für Ihre Teilnahme!",
                choices: genderChoicesNew,
                votes: votesNew
            }
        ]
    }
};
