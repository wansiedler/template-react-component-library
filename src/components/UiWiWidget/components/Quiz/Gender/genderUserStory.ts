import { guid } from "~/utils";
import { slideTypes } from "~/types";

export const genderUserStoryConfig = {
    showIdle: true
};

export const genderChoices = [
    { id: guid(), text: "Männlich" },
    { id: guid(), text: "Weiblich" },
    { id: guid(), text: "Divers" },
    { id: guid(), text: "Keine Angabe" }
];

const genderResultSubtext = "Hier ist Ihr Ergebnis! Danke für Ihre Teilnahme.";

//Stereotypes
const stereotypesQuestion = "Werden Sie im Alltag mit Geschlechterstereotypen konfrontiert?";
const stereotypesSubtext = "Wie sehen dieses Thema unsere Merkur Leser? Vergleichen Sie sich jetzt!";
export const stereotypesVotes = ["Viel zu oft", "Nie"];
const stereotypesStartStory = [
    {
        id: guid(),
        type: slideTypes.Vote,
        subtext: stereotypesSubtext,
        question: stereotypesQuestion,
        votes: stereotypesVotes
    }
];

export const genderUserStory: { [key: string]: any } = {
    stereotypes: {
        variants: {
            basic: stereotypesStartStory,
            interactive: stereotypesStartStory,
            hedonistic: stereotypesStartStory,
            relatedness: stereotypesStartStory
        },
        slides: [
            {
                id: guid(),
                type: slideTypes.selectGroup,
                choiceAmount: 1,
                question: stereotypesQuestion,
                subtext: "Welches Geschlecht ist besonders betroffen? Vergleichen Sie sich jetzt!",
                choices: genderChoices
            },
            {
                id: guid(),
                type: slideTypes.Result,
                question: genderResultSubtext,
                choices: genderChoices
            }
        ]
    }
};
