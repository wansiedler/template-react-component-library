import { guid } from "~/utils";
import { slideTypes } from "~/types";

export const ageChoices = [
    { id: guid(), text: "< 20" },
    { id: guid(), text: "20 - 39" },
    { id: guid(), text: "40 - 60" },
    { id: guid(), text: "> 60" }
];

//Default component text
export const selectGroupSubtext = "Geben Sie jetzt Ihr Alter an, um die Ergebnisse einzusehen.";
const resultSubtext = "Hier ist Ihr Ergebnis! Danke für Ihre Teilnahme.";

//
// Heiß & Kalt
//

const hkQuestion = "Warm oder Kalt?";
const hkSubQuestion = "Was bevorzugen Sie?";
const hkSubtext = "Jetzt abstimmen und mit Merkur Lesern vergleichen!";
export const hkVotes = ["kalt", "warm"];

// const hkPreviewImageBasic = require(`../../../styles/themes/images/urlaub-background-basic.jpeg`);
// const hkPreviewImageHedonistic = require(`../../../styles/themes/images/urlaub-background-hedonistic.jpeg`);
// const hkPreviewImageInteractive = require(`../../../styles/themes/images/urlaub-background-interactive.jpeg`);

const hkStartBaseStory = {
    id: guid(),
    question: hkQuestion,
    subtitle: hkSubQuestion,
    type: slideTypes.preview
};

//
// TikTok
//

const tikTokQuestion = "Tik Tok";
const tikTokSubQuestion = "Nutzen auch Sie die UiWiWidget?";
const tikTokSubtext = "Jetzt abstimmen und mit Merkur Lesern vergleichen!";
export const tikTokVotes = ["ja", "nein"];

// const tikTokPreviewImageBasic = require(`../../../styles/themes/images/tiktok-background-basic.jpeg`);
// const tikTokPreviewImageHedonistic = require(`../../../styles/themes/images/tiktok-background-hedonistic.jpg`);
// const tikTokPreviewImageInteractive = require(`../../../styles/themes/images/tiktok-background-interactive.jpg`);

const tikTokStartBaseStory = {
    id: guid(),
    question: tikTokQuestion,
    subtitle: tikTokSubQuestion,
    type: slideTypes.preview
};

//
// WM
//

const wmQuestion = "WM 2022";
const wmSubQuestion = "Ansehen trotz großer Kritik?";
const wmSubtext = "Jetzt abstimmen und mit Merkur Lesern vergleichen!";
export const wmVotes = ["ja", "nein"];

// const wmPreviewImageBasic = require(`../../../styles/themes/images/wm-background-basic.jpg`);
// const wmPreviewImageHedonistic = require(`../../../styles/themes/images/wm-background-hedonistic.jpg`);
// const wmPreviewImageInteractive = require(`../../../styles/themes/images/wm-background-interactive.png`);

const wmStartBaseStory = {
    id: guid(),
    question: wmQuestion,
    subtitle: wmSubQuestion,
    type: slideTypes.preview
};

//
// Baerbock
//

const baerbockQuestion = "Baerbock";
const baerbockSubQuestion = "Wie schlägt sie sich aktuell?";
const baerbockSubtext = "Jetzt abstimmen und mit Merkur Lesern vergleichen!";
export const baerbockVotes = ["falsch", "richtig"];

// const baerbockPreviewImageBasic = require(`../../../styles/themes/images/baerbock-background-basic.png`);
// const baerbockPreviewImageHedonistic = require(`../../../styles/themes/images/baerbock-background-hedonistic.png`);
// const baerbockPreviewImageInteractive = require(`../../../styles/themes/images/baerbock-background-interactive.png`);

const baerbockStartBaseStory = {
    id: guid(),
    question: baerbockQuestion,
    subtitle: baerbockSubQuestion,
    type: slideTypes.preview
};

//
// Krieg
//

const kriegQuestion = "Krieg";
const kriegSubQuestion = "Belastet Sie die aktuelle Situation?";
const kriegSubtext = "Jetzt abstimmen und mit Merkur Lesern vergleichen!";
export const kriegVotes = ["Ja", "Nein"];

// const kriegPreviewImageBasic = require(`../../../styles/themes/images/krieg-background-basic.jpg`);
// const kriegPreviewImageHedonistic = require(`../../../styles/themes/images/krieg-background-hedonistic.jpg`);
// const kriegPreviewImageInteractive = require(`../../../styles/themes/images/krieg-background-interactive.jpg`);

const kriegStartBaseStory = {
    id: guid(),
    question: kriegQuestion,
    subtitle: kriegSubQuestion,
    type: slideTypes.preview
};

//
// EXPORT
//

export const ageNewUserStory: { [key: string]: any } = {
    hkv2: {
        variants: {
            basic: [
                {
                    ...hkStartBaseStory,
                    // image: hkPreviewImageBasic
                }
            ],
            hedonistic: [
                {
                    ...hkStartBaseStory,
                    // image: hkPreviewImageHedonistic
                }
            ],
            interactive: [
                {
                    ...hkStartBaseStory,
                    // image: hkPreviewImageInteractive
                }
            ]
        },
        slides: [
            {
                id: guid(),
                type: slideTypes.Vote,
                question: hkQuestion,
                subQuestion: hkSubQuestion,
                subtext: hkSubtext,
                votes: hkVotes
            },
            {
                id: guid(),
                type: slideTypes.selectGroup,
                choiceAmount: 1,
                question: hkQuestion,
                subQuestion: hkSubQuestion,
                subtext: selectGroupSubtext,
                choices: ageChoices
            },
            {
                id: guid(),
                type: slideTypes.Result,
                question: hkQuestion,
                subQuestion: hkSubQuestion,
                subtext: "Vielen Dank für Ihre Teilnahme!",
                choices: ageChoices,
                votes: hkVotes
            }
        ]
    },
    tiktokv2: {
        variants: {
            basic: [
                {
                    ...tikTokStartBaseStory,
                    // image: tikTokPreviewImageBasic
                }
            ],
            hedonistic: [
                {
                    ...tikTokStartBaseStory,
                    // image: tikTokPreviewImageHedonistic
                }
            ],
            interactive: [
                {
                    ...tikTokStartBaseStory,
                    // image: tikTokPreviewImageInteractive
                }
            ]
        },
        slides: [
            {
                id: guid(),
                type: slideTypes.Vote,
                question: tikTokQuestion,
                subQuestion: tikTokSubQuestion,
                subtext: tikTokSubtext,
                votes: tikTokVotes
            },
            {
                id: guid(),
                type: slideTypes.selectGroup,
                choiceAmount: 1,
                question: tikTokQuestion,
                subQuestion: tikTokSubQuestion,
                subtext: selectGroupSubtext,
                choices: ageChoices
            },
            {
                id: guid(),
                type: slideTypes.Result,
                question: tikTokQuestion,
                subQuestion: tikTokSubQuestion,
                subtext: "Vielen Dank für Ihre Teilnahme!",
                choices: ageChoices,
                votes: tikTokVotes
            }
        ]
    },
    wmv2: {
        variants: {
            basic: [
                {
                    ...wmStartBaseStory,
                    // image: wmPreviewImageBasic
                }
            ],
            hedonistic: [
                {
                    ...wmStartBaseStory,
                    // image: wmPreviewImageHedonistic
                }
            ],
            interactive: [
                {
                    ...wmStartBaseStory,
                    // image: wmPreviewImageInteractive
                }
            ]
        },
        slides: [
            {
                id: guid(),
                type: slideTypes.Vote,
                question: wmQuestion,
                subQuestion: wmSubQuestion,
                subtext: wmSubtext,
                votes: wmVotes
            },
            {
                id: guid(),
                type: slideTypes.selectGroup,
                choiceAmount: 1,
                question: wmQuestion,
                subQuestion: wmSubQuestion,
                subtext: selectGroupSubtext,
                choices: ageChoices
            },
            {
                id: guid(),
                type: slideTypes.Result,
                question: wmQuestion,
                subQuestion: wmSubQuestion,
                subtext: "Vielen Dank für Ihre Teilnahme!",
                choices: ageChoices,
                votes: wmVotes
            }
        ]
    },
    baerbockv2: {
        variants: {
            basic: [
                {
                    ...baerbockStartBaseStory,
                    //  image: baerbockPreviewImageBasic
                }
            ],
            hedonistic: [
                {
                    ...baerbockStartBaseStory,
                    //   image: baerbockPreviewImageHedonistic
                }
            ],
            interactive: [
                {
                    ...baerbockStartBaseStory,
                    // image: baerbockPreviewImageInteractive
                }
            ]
        },
        slides: [
            {
                id: guid(),
                type: slideTypes.Vote,
                question: baerbockQuestion,
                subQuestion: baerbockSubQuestion,
                subtext: baerbockSubtext,
                votes: baerbockVotes
            },
            {
                id: guid(),
                type: slideTypes.selectGroup,
                choiceAmount: 1,
                question: baerbockQuestion,
                subQuestion: baerbockSubQuestion,
                subtext: selectGroupSubtext,
                choices: ageChoices
            },
            {
                id: guid(),
                type: slideTypes.Result,
                question: baerbockQuestion,
                subQuestion: baerbockSubQuestion,
                subtext: "Vielen Dank für Ihre Teilnahme!",
                choices: ageChoices,
                votes: baerbockVotes
            }
        ]
    },
    kriegv2: {
        variants: {
            basic: [
                {
                    ...kriegStartBaseStory,
                    //  image: kriegPreviewImageBasic
                }
            ],
            hedonistic: [
                {
                    ...kriegStartBaseStory,
                    //  image: kriegPreviewImageHedonistic
                }
            ],
            interactive: [
                {
                    ...kriegStartBaseStory,
                    //  image: kriegPreviewImageInteractive
                }
            ]
        },
        slides: [
            {
                id: guid(),
                type: slideTypes.Vote,
                question: kriegQuestion,
                subQuestion: kriegSubQuestion,
                subtext: kriegSubtext,
                votes: kriegVotes
            },
            {
                id: guid(),
                type: slideTypes.selectGroup,
                choiceAmount: 1,
                question: kriegQuestion,
                subQuestion: kriegSubQuestion,
                subtext: selectGroupSubtext,
                choices: ageChoices
            },
            {
                id: guid(),
                type: slideTypes.Result,
                question: kriegQuestion,
                subQuestion: kriegSubQuestion,
                subtext: "Vielen Dank für Ihre Teilnahme!",
                choices: ageChoices,
                votes: kriegVotes
            }
        ]
    }
};
