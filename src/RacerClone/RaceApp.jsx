import React from "react";
import { Component } from "react";
import Preview from "./Preview";
import Speed from "./Speed";
import getText from "../TypeRacer/Racer/getText";
import getImg from "./getImg";
import {
  Button,
  CarWay,
  CarWayContainer,
  Container,
  Finish,
  Img,
  InputDiv,
  Textarea,
  TextContainer,
  TimerDiv,
  Wpm,
  Wrapper,
  YourScore,
} from "../TypeRacer/Racer/style";
import { HiRefresh } from "react-icons/hi";
import { data } from "./data";

const initialState = {
  text: getText(),
  userInput: "",
  symbols: 0,
  sec: 0,
  started: false,
  finished: false,
  remove: "",
  blok: "none",
};

class RaceApp extends Component {
  state = initialState;

  onRestart = () => {
    this.setState(initialState);
    console.log(getImg());
    console.log(data[Math.floor(Math.random() * data.length)]);
  };

  onUserInputChange = (e) => {
    const val = e.target.value;
    this.setTimer(val);
    this.onFinish(val);
    this.setState({
      userInput: val,
      symbols: this.countCorrectSymbols(val),
    });
  };

  onFinish = (userInput) => {
    if (userInput === this.state.text) {
      clearInterval(this.interval);
      this.setState({
        finished: true,
      });
    }
  };

  countCorrectSymbols = (userInput) => {
    const text = this.state.text.replace(" ", "");
    return userInput
      .replace(" ", "")
      .split("")
      .filter((s, i) => s === text[i]).length;
  };

  setTimer() {
    if (!this.state.started) {
      this.setState({ started: true });
      this.interval = setInterval(() => {
        this.setState((prevProps) => {
          return { sec: prevProps.sec + 1 };
        });
      }, 1000);
    }
  }

  render() {
    // const matn = data[Math.floor(Math.random() * data.length)];
    // console.log(typeof data);
    const data = getText().length;
    const userText = this.state.userInput.length;
    console.log(data, userText);
    if (data === userText) {
      {
        this.state.remove = "none";
        this.state.blok = "block";
      }
      console.log("Hello");
    }
    return (
      <Wrapper>
        <Container>
          <h1>Practice Racetrack</h1>
          <p>
            You are in a <b>single-player</b> race. <span>Click here</span> if
            you'd like some competition.
          </p>
          <TimerDiv>
            <h3>The race is on! Type the text below:</h3>
            <p>Symbols : {this.state.symbols}</p>
            <p>Time : {this.state.sec}</p>
          </TimerDiv>
          <CarWayContainer>
            <CarWay>
              <Img
                src={getImg()}
                alt=""
                move={Math.ceil((100 * this.state.symbols) / getText().length)}
              />
            </CarWay>
            <Wpm>
              <Speed sec={this.state.sec} symbols={this.state.symbols} />
            </Wpm>
          </CarWayContainer>

          <TextContainer non={this.state.remove}>
            <Preview text={this.state.text} userInput={this.state.userInput} />
            <InputDiv>
              <Textarea
                value={this.state.userInput}
                onChange={this.onUserInputChange}
                placeholder="Type the above text here when the race begins"
                readOnly={this.state.finished}
              ></Textarea>
            </InputDiv>
          </TextContainer>
          <Finish blok={this.state.blok}>
            <h1>
              Awesome !!! <br />
              You have finished
            </h1>
            <YourScore>
              <table border={2}>
                <thead>
                  <tr>
                    <td>WPM</td>
                    <td>Symbols</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {
                        <Speed
                          sec={this.state.sec}
                          symbols={this.state.symbols}
                        />
                      }
                    </td>
                    <td>{this.state.symbols}</td>
                  </tr>
                </tbody>
              </table>
            </YourScore>
          </Finish>
          <Button onClick={this.onRestart}>
            <i>
              <HiRefresh />
            </i>
            Restart
          </Button>
        </Container>
      </Wrapper>
    );
  }
}

export default RaceApp;
