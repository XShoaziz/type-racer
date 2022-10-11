import React, { memo } from "react";
import Speed from "../TypeRacer/Racer/Speed";
import {
  CarWay,
  CarWayContainer,
  Img,
  TimerDiv,
  Wpm,
} from "../TypeRacer/Racer/style";

const Timer = () => {
  return (
    <div>
      <TimerDiv>
        <h3>The race is on! Type the text below:</h3>
        <p>Symbols : {this.state.symbols}</p>
        <p>Time : {this.state.sec}</p>
      </TimerDiv>
      <CarWayContainer>
        <CarWay>
          <Img src={getImg()} alt="" />
        </CarWay>
        <Wpm>
          <Speed sec={this.state.sec} symbols={this.state.symbols} />
        </Wpm>
      </CarWayContainer>
    </div>
  );
};

export default memo(Timer);
