import "./App.css";
import { Button, Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
          fullName: "amin",
          bio: "blaaaaaaaaaa",
          profession: "JR developer",
          imgSrc:
            "https://lordandkobrin.com/wp-content/uploads/bfi_thumb/lawyer-ot4t5g0nbrb195uweghh0p7y99et7qg2lts3cpmc7s.jpg",
        },
      ],
      isShow: false,
      counter: 0,
    };
  }

  showProfile = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 1000);
  }

  displayTime = (timeSec) => {
    let h = Math.floor(timeSec / 3600);
    let m= Math.floor((timeSec-(h*3600))/60)
    let s=timeSec-h*3600-m*60
    return <span>{h.toString().padStart(2,'0')} : {m.toString().padStart(2,'0')} : {s.toString().padStart(2,'0')}</span>
  };

  render() {
    return (
      <div>
        <p>{this.displayTime(this.state.counter)}</p>
        <Button variant="primary" onClick={this.showProfile}>
          {this.state.isShow ? "hide profile" : "show profile"}
        </Button>
        {this.state.isShow ? (
          this.state.person.map((el, index) => (
            <Card key={index} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={el.imgSrc} />
              <Card.Body>
                <Card.Title>{el.fullName}</Card.Title>
                <Card.Text>{el.bio}</Card.Text>
                <Card.Text>{el.profession}</Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <h1>click on the button to show the profile </h1>
        )}
      </div>
    );
  }
}

export default App;
