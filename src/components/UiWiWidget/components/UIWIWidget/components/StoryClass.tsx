import React, { Component } from "react";
import { sendEvent } from "../../../quizAction";
import { connect } from "react-redux";
import { storyGenerator } from "./storyGenerator";
import { eventTypes, slideTypes as types } from "../../../types";
import { QuizState } from "../../../store/RTKstore";
import { error, log } from "../../../utils";

class Story extends Component<{ quiz: QuizState }, null> {
      // Mounting
      // 1.
      constructor(props) {
            super(props);
      }

      // 2.
      // static getDerivedStateFromProps(props, state) {}

      // 3.
      // render()

      // 4.
      componentDidMount() {
            const { stories, currentIndex } = this.props.quiz;

            if (
                  stories[currentIndex] &&
                  stories[currentIndex].type !== types.idle &&
                  stories[currentIndex].type !== types.idleGender
            ) {
                  sendEvent({
                        eventType: eventTypes.ACTIVE_VIEW,
                        quiz: this.props.quiz
                  });
            }
            log("Story mounted");
      }

      // Updating
      // 5.
      // static getDerivedStateFromProps(props, state) {}
      // 6.
      shouldComponentUpdate(nextProps, nextState) {
            const { stories, currentIndex } = this.props.quiz;
            const nextStories = nextProps.quiz.stories;
            const nextCurrentIndex = nextProps.quiz.currentIndex;
            if (
                  stories[currentIndex] &&
                  nextStories[nextCurrentIndex] &&
                  stories[currentIndex] !== nextStories[nextCurrentIndex]
            ) {
                  if (
                        stories[currentIndex] &&
                        nextStories[nextCurrentIndex].type &&
                        stories[currentIndex].type !== nextStories[nextCurrentIndex].type &&
                        nextStories[nextCurrentIndex].type !== types.idle &&
                        nextStories[nextCurrentIndex].type !== types.idleGender
                  ) {
                        sendEvent({
                              eventType: eventTypes.ACTIVE_VIEW,
                              quiz: nextProps.quiz
                        });
                  }
                  log("Story should update");
                  return true;
            }
            return false;
      }

      // 7.
      render() {
            log("Story rendered");
            return <div className={"story"}>{this.getStoryContent()}</div>;
      }

      // 8.
      // getSnapshotBeforeUpdate()

      // 9. == useEffect(() => { })
      componentDidUpdate() {
            log("Story updated");
      }

      //Unmounting
      // 10.
      componentWillUnmount() {
            log("Story unmounted");
      }

      // rendererMessageHandler = (type: string, data: any) => {
      //       switch (type) {
      //             case "UPDATE_VIDEO_DURATION":
      //                   this.props.setVideoDuration(data.duration);
      //                   return { ack: "OK" as const };
      //       }
      // };

      getStoryContent = () => {
            const { stories, currentIndex } = this.props.quiz;
            if (!stories[currentIndex]) return <div>No Story to render</div>;
            const story = storyGenerator(stories[currentIndex]);

            try {
                  const Content: React.ElementType = story.originalContent;
                  return (
                        // @ts-ignore
                        <Content
                              story={stories[currentIndex]}
                              // action={this.props.action}
                              // isPaused={this.props.playState}
                              // setShowProgress={this.props.setShowProgress}
                              // messageHandler={this.rendererMessageHandler}
                              {...this.props.quiz}
                        />
                  );
            } catch (e) {
                  error(e);
            }
      };
}

const mapStateToProps = (state) => ({ quiz: state.quiz });
export const StoryClass = connect(mapStateToProps)(Story);
