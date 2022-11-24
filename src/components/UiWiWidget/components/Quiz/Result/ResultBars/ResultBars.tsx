import { selectQuiz, useAppSelector } from "~/store/RTKstore";
import { getRandomInt, shuffle } from "~/utils";
import { ProgressBar } from "../../../ProgressBar/ProgressBar";
import { Slider } from "../../Age/Slider/Slider";
import { quizTypes, quizTypesWithResultBarTrackers, Story, themes, variants } from "../../../../types";
import {
    feiertagVotes,
    grillVotes,
    inflationVotes,
    kriegVotes,
    politikVotes,
    tiktokVotes
} from "../../Age/ageUserStory";
import { stereotypesVotes } from "../../Gender/genderUserStory";
import { beziehungenVotes } from "../../MaritalStatus/maritalStatusUserStory";

export type ResultBarsProps = {
    story: Story;
    minRandomValue: number;
    maxRandomValue: number;
};

const WithTrackers = ({ children }): JSX.Element => {
    const quiz = useAppSelector(selectQuiz);
    let topLabels: string[];
    switch (quiz.theme) {
        case themes.coachella:
            topLabels = ["Braucht man nicht", "Mein Traum"];
            break;
        case themes.tiktok:
            topLabels = tiktokVotes;
            break;
        case themes.inflation:
            topLabels = inflationVotes;
            break;
        case themes.feiertag:
            topLabels = feiertagVotes;
            break;
        case themes.krieg:
            topLabels = kriegVotes;
            break;
        case themes.stereotypes:
            topLabels = stereotypesVotes;
            break;
        case themes.beziehungen:
            topLabels = beziehungenVotes;
            break;
        case themes.politik:
            topLabels = politikVotes;
            break;
        default:
            topLabels = grillVotes;
    }

    return (
        <table
            style={{
                width: "95%",
                margin: "0 auto"
            }}
        >
            <tbody>
                {topLabels.length > 0 && (
                    <tr>
                        <td></td>
                        <td>
                            <div className={"top-labels-container"}>
                                <span className="">{topLabels[0]}</span>
                                <span className="">{topLabels[1]}</span>
                            </div>
                        </td>
                    </tr>
                )}
                {children}
            </tbody>
        </table>
    );
};

const ResultBars = ({ story, minRandomValue = 20, maxRandomValue = 100 }: ResultBarsProps): JSX.Element => {
    const quiz = useAppSelector(selectQuiz);
    const { quizType, theme, variantId } = quiz;
    const { choices } = story;
    const { politik, urlaub, hk, workLifeBalance, income, feiertag, wiesn, wm } = themes;

    let renderWithTrackers =
        quizTypesWithResultBarTrackers.includes(theme) || (theme === feiertag && variantId === variants["variant-2"]);

    let labels = [];

    if (quizType === quizTypes.age && theme === politik) {
        labels = [
            "stimmen voll zu",
            "stimmen eher zu",
            "stimmen neutral",
            "stimmen eher nicht zu",
            "stimmen gar nicht zu"
        ];
        labels = shuffle(labels);
    } else if (theme === urlaub && quizType === quizTypes.gender) {
        labels = ["haben richtig abgestimmt"];
    } else if (theme === hk && quizType === quizTypes.age) {
        labels = ["stimmten für warm"];
    } else if (theme === workLifeBalance) {
        labels = ["stimmten für Work"];
    } else if (theme === income || theme === feiertag || theme === wiesn || theme === wm) {
        labels = ["haben dafür abgestimmt"];
    }

    const checkIfAnswerWasSelectedByUser = (item) => {
        return item && (quiz.answeredQuestions.age.text === item.text || quiz.answeredQuestions.age.id === item.id);
    };

    const renderSlidersWithTrackers = (item) => {
        const isSelectedAnswer = checkIfAnswerWasSelectedByUser(item);
        const randomInt = getRandomInt(maxRandomValue, minRandomValue);
        const { id, text } = item;

        return (
            <tr key={id}>
                <td
                    style={{
                        textAlign: "left",
                        width: `${theme === themes.beziehungen ? "35%" : "25%"}`,
                        fontWeight: "1.2em/1em Arial"
                    }}
                >
                    <span
                        className={`result-label ${isSelectedAnswer ? "selected" : ""}`}
                        style={{
                            fontWeight: "1.2em/1em Arial"
                        }}
                    >
                        {text}
                    </span>
                </td>
                <td>
                    <div key={id} className="result-progress-bar">
                        <Slider
                            MIN={0}
                            MAX={maxRandomValue}
                            disabled={true}
                            rtl={false}
                            onFinalChange={() => {}}
                            isSelected={isSelectedAnswer}
                            valuesProps={[randomInt]}
                            showLabel={true}
                        />
                    </div>
                </td>
            </tr>
        );
    };

    const renderSlidersWithInlineLabels = (item) => {
        const getResultLabels = () => {
            if (quiz.theme === themes.politik) {
                return labels.pop();
            }
            if (
                quiz.theme === themes.urlaub ||
                quiz.theme === themes.hk ||
                quiz.theme === themes.income ||
                quiz.theme === themes.feiertag ||
                quiz.theme === themes.wiesn ||
                quiz.theme === themes.wm ||
                quiz.theme === themes.workLifeBalance
            ) {
                return labels[0];
            }
        };

        const randomInt = getRandomInt(maxRandomValue, minRandomValue);
        return (
            <div key={item.id} className="result-progress-bar">
                <span
                    className={["choice-tab", quiz.answeredQuestions.age?.text === item?.text ? "selected" : null].join(
                        " "
                    )}
                >
                    {item.text}
                </span>
                {quiz.answeredQuestions.age && (
                    <div
                        {...{
                            className: quiz.answeredQuestions.age.text === item.text ? "progress-selected" : "progresss"
                        }}
                    >
                        <ProgressBar
                            completed={randomInt}
                            round={true}
                            left={true}
                            ResultLabel={getResultLabels()}
                            selectedAnswer={quiz.answeredQuestions.age.text === item.text}
                        />
                    </div>
                )}
            </div>
        );
    };

    return (
        <>
            {renderWithTrackers ? (
                <WithTrackers>{choices.map((item) => renderSlidersWithTrackers(item))}</WithTrackers>
            ) : theme === themes.income ? (
                <>
                    <div
                        style={{
                            fontSize: 24,
                            width: "50%",
                            margin: "70px auto"
                        }}
                    >
                        Sie liegen <span style={{ fontWeight: 800 }}>über</span> dem Durchschnitt!
                    </div>
                    <table
                        style={{
                            width: "70%",
                            margin: "0 auto"
                        }}
                    >
                        <tbody>
                            <tr>
                                <td
                                    style={{
                                        textAlign: "left",
                                        fontWeight: "1.2em/1em Arial"
                                    }}
                                >
                                    <span
                                        className={`result-label`}
                                        style={{
                                            fontWeight: "1.2em/1em Arial"
                                        }}
                                    ></span>
                                </td>
                                <td>
                                    <div className="result-progress-bar">
                                        <Slider
                                            MIN={0}
                                            MAX={maxRandomValue}
                                            disabled={true}
                                            rtl={false}
                                            onFinalChange={() => {}}
                                            isSelected={true}
                                            valuesProps={[getRandomInt(maxRandomValue, minRandomValue)]}
                                            showLabel={false}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <div className={"top-labels-container"}>
                                        <span className="">&#60;500€</span>
                                        <span className="">&#62;4000€</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{ width: "40%", margin: "0 auto" }}>
                        Durchschnittliches Gehalt: <div style={{ fontWeight: "800", marginTop: 10 }}>2.300,00€</div>
                    </div>
                </>
            ) : (
                choices.map((item) => renderSlidersWithInlineLabels(item))
            )}
        </>
    );
};

export default ResultBars;
