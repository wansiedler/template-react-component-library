import { selectQuiz, useAppDispatch, useAppSelector } from "../../../../store/RTKstore";
import { getRandomInt } from "../../../../utils";
// import {Index} from "../../../Index/Index";
import { useEffect, useState } from "react";
import { setShowProgress } from "../../../../store/features/quiz/quizSlice";
import { Story } from "../../../../types";

type SquidGameStartProps = {
      story: Story;
      onAnswer: () => void;
};
export const SquidGameStartCounter = ({ story, onAnswer, ...props }: SquidGameStartProps) => {
      const quiz = useAppSelector(selectQuiz);
      const dispatch = useAppDispatch();
      useEffect(() => {
            dispatch(setShowProgress(true));
      }, []);
      const [users, setUsers] = useState(getRandomInt(100000));

      useEffect(() => {
            const timer = setInterval(() => {
                  setUsers(users + 1);
            }, 1000);
            return () => {
                  clearInterval(timer);
            };
      });
      return (
            <div className="quiz start-cookies">
                  {/*<Index props={"tz"}/>*/}
                  <div className="start-image-wrapper">
                        <img className="start-image" src={story.backgroundPictures.cookies} />
                  </div>
                  <div className="start-headline-wrapper">
                        <h2 className=" start-headline">{story.question}</h2>
                  </div>
                  <div className="start-counter">👁 {users.toLocaleString()}</div>
                  <div className="button-wrapper">
                        <button className="button" onClick={onAnswer}>
                              <a>{story.subtext} →</a>
                        </button>
                  </div>
            </div>
      );
};
