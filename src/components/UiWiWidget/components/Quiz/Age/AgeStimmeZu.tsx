import React from "react";

export const AgeStimmeZu = ({
      todaleft = false,
      left = "stimme gar nicht zu",
      right = "stimme voll zu",
      percentage = 0
}) => {
      return (
            <div className="slider-labels-container" {...(todaleft ? { margin: 0 } : {})}>
                <div className="labels-column">
                    {percentage ? (<div className="slider-percentage">{percentage}%</div>) : null}
                    {left && <div className="left-text">{left}</div>}
                </div>
                <div className="labels-column">
                    {percentage ? (<div className="slider-percentage">{100 - percentage}%</div>) : null}
                    {right && <div className="right-text">{right}</div>}
                </div>
            </div>
      );
      // {
      //     /*{dragged &&*/
      // }
      // {
      //     /*<output style={{marginTop: '30px'}}>{meinung[values[0]]}</output>*/
      // }
};
