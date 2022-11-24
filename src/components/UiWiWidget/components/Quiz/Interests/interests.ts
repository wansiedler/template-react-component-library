import { guid } from "./../../../utils";
import { slideTypes as types } from "./../../../types";

const topics = {
    politik: "politik",
    wirtschaft: "wirtschaft",
    wohnen: "wohnen",
    genuss: "genuss"
};

const questionSubtext = "Maximal 1 Antwort.";

export const interests = {
    politik: [
        {
            id: guid(),
            choiceAmount: 1,
            type: types.Question,
            topic: topics.politik,
            question: "Wo liegt der Ursprung der Demokratie?",
            subtext: questionSubtext,
            choices: [
                { id: "a4d217d2-49bc-62aa-238a-f4d6afdce212", text: "Griechenland", correct: true },
                { id: guid(), text: "USA" },
                { id: guid(), text: "Deutschland" },
                { id: guid(), text: "China" }
            ]
        },
        {
            id: guid(),
            choiceAmount: 1,
            type: types.Question,
            topic: topics.politik,
            question: "Ab welchem Alter sind deutsche Staatsbürger wahlberechtigt?",
            subtext: questionSubtext,
            choices: [
                { id: guid(), text: "16" },
                { id: guid(), text: "17" },
                { id: guid(), text: "18", correct: true },
                { id: guid(), text: "19" }
            ]
        }
    ],
    wirtschaft: [
        {
            id: guid(),
            choiceAmount: 1,
            type: types.Question,
            topic: topics.wirtschaft,
            question: "Wofür steht der Begriff WHO?",
            subtext: questionSubtext,
            choices: [
                { id: guid(), text: "World Health Organisation", correct: true },
                { id: guid(), text: "Worlds Home Organisation" },
                { id: guid(), text: "Worlds Wealth Organisation" },
                { id: guid(), text: "World Health Owner" }
            ]
        },
        {
            id: guid(),
            choiceAmount: 1,
            type: types.Question,
            topic: topics.wirtschaft,
            question: "Wann wurde das Euro-Bargeld eingeführt?",
            subtext: questionSubtext,
            choices: [
                { id: guid(), text: "2001" },
                { id: guid(), text: "2002", correct: true },
                { id: guid(), text: "2003" },
                { id: guid(), text: "2004" }
            ]
        }
    ],
    wohnen: [
        {
            id: guid(),
            choiceAmount: 1,
            type: types.Question,
            topic: topics.wohnen,
            question: "Wie hoch ist der aktuelle Durchschnittspreis pro m2 in München?",
            subtext: questionSubtext,
            choices: [
                { id: guid(), text: "3.503" },
                { id: guid(), text: "9.307", correct: true },
                { id: guid(), text: "12.407" },
                { id: guid(), text: "15.607" }
            ]
        },
        {
            id: guid(),
            choiceAmount: 1,
            type: types.Question,
            topic: topics.wohnen,
            question: "In welcher deutschen Stadt sind die Menschen am glücklichsten?",
            subtext: questionSubtext,
            choices: [
                { id: guid(), text: "München" },
                { id: guid(), text: "Potsdam", correct: true },
                { id: guid(), text: "Bonn" },
                { id: guid(), text: "Frankfurt" }
            ]
        }
    ],
    genuss: [
        {
            id: guid(),
            choiceAmount: 1,
            type: types.Question,
            topic: topics.genuss,
            question: "Nennen Sie den bayerischen Begriff für Brötchen…?",
            subtext: questionSubtext,
            choices: [
                { id: guid(), text: "Schrippe" },
                { id: guid(), text: "Wecken" },
                { id: guid(), text: "Semmeln", correct: true },
                { id: guid(), text: "Weggli" }
            ]
        },
        {
            id: guid(),
            choiceAmount: 1,
            type: types.Question,
            topic: topics.genuss,
            question: "Was ist das Lieblingsessen der Deutschen?",
            subtext: questionSubtext,
            choices: [
                { id: guid(), text: "Pizza", correct: true },
                { id: guid(), text: "Schweinebraten" },
                { id: guid(), text: "Currywurst" },
                { id: guid(), text: "Döner" }
            ]
        }
    ]
};
