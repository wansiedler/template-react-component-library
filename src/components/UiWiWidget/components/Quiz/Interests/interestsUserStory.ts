import { guid } from "~/utils";
import { slideTypes } from "~/types";

export enum topics {
    wirtschaft = "wirtschaft",
    politik = "politik",
    genuss = "genuss",
    wohnen = "wohnen"
}

export const interestChoices = [
    { id: guid(), text: "Wirtschaft" },
    { id: guid(), text: "Politik" },
    { id: guid(), text: "Genuss" },
    { id: guid(), text: "Wohnen" }
];

const interestSubtext = "Wählen Sie maximal 3 Bereiche aus und klicken auf Weiter.";

export const interestsUserStory: { [key: string]: any } = {
    grill: {
        variants: {
            neutral: [
                {
                    id: guid(),
                    type: slideTypes.interestsSelect,
                    choiceAmount: 3,
                    question: "Verbessern Sie jetzt Ihr Wissen",
                    subtext: interestSubtext,
                    choices: interestChoices
                }
            ],
            relatedness: [
                {
                    id: guid(),
                    type: slideTypes.interestsSelect,
                    choiceAmount: 3,
                    question: "Stellen Sie jetzt Ihr Wissen unter Beweis",

                    subtext: interestSubtext,
                    choices: interestChoices
                }
            ],
            motivation: [
                {
                    id: guid(),
                    type: slideTypes.interestsSelect,
                    choiceAmount: 3,
                    question: "Vergleichen Sie jetzt Ihr Wissen!",
                    subtext: interestSubtext,
                    choices: interestChoices
                }
            ]
        },
        slides: [
            {
                question: "Hier ist Ihr Ergebnis! Danke für die Teilnahme.",
                type: slideTypes.interestsResult
            }
        ]
    },
    politik: {
        variants: {
            neutral: [
                {
                    id: guid(),
                    type: slideTypes.interestsSelect,
                    choiceAmount: 3,
                    question: "Verbessern Sie jetzt Ihr Wissen",
                    subtext: interestSubtext,
                    choices: interestChoices
                }
            ],
            relatedness: [
                {
                    id: guid(),
                    type: slideTypes.interestsSelect,
                    choiceAmount: 3,
                    question: "Stellen Sie jetzt Ihr Wissen unter Beweis",

                    subtext: interestSubtext,
                    choices: interestChoices
                }
            ],
            motivation: [
                {
                    id: guid(),
                    type: slideTypes.interestsSelect,
                    choiceAmount: 3,
                    question: "Vergleichen Sie jetzt Ihr Wissen!",
                    subtext: interestSubtext,
                    choices: interestChoices
                }
            ]
        },
        slides: [
            {
                question: "Hier ist Ihr Ergebnis! Danke für die Teilnahme.",
                type: slideTypes.interestsResult
            }
        ]
    }
};
