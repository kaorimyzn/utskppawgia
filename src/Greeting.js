import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().getHours()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: new Date().getHours() });
    }, 1000); // Update time every second
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getGreetingMessage() {
    const { time } = this.state;

    if (time >= 6 && time < 12) {
      return 'Selamat Pagi';
    } else if (time >= 12 && time < 18) {
      return 'Selamat Siang';
    } else if (time >= 18 && time < 24) {
      return 'Selamat Malam';
    } else {
      return 'Selamat Tidur';
    }
  }

  render() {
    return (
      <div>
        <h1>{this.getGreetingMessage()}</h1>
      </div>
    );
  }
}

export default Greeting;
