import { selectQuiz, useAppDispatch, useAppSelector } from "../../../../store/RTKstore";
import { setFinished } from "../../../../store/features/quiz/quizSlice";
// import {Index} from "../Index/Index";
import { Newsletter } from "./Newsletter";
import { QuestionHeader } from "../../QuestionHeader";
import { useEffect } from "react";

export const NewsletterQuiz = ({ story, ...props }) => {
      const quiz = useAppSelector(selectQuiz);
      const dispatch = useAppDispatch();
      useEffect(() => {
            props.action("pause", false);
            dispatch(setFinished());
      }, []);
      return (
            <div className="quiz newsletter">
                  <QuestionHeader question={story.question} />
                  <Newsletter
                        text={"Ihre Nachrichten-Übersicht"}
                        subtext={"Der Politik-Überblick für Bayern, Deutschland und die Welt."}
                  />
                  {/*<Index/>*/}
            </div>
      );
};
