import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

// 클래스형
class App extends Component {
  id = 0;

  state = {
    information: []
  };

  handleCreate = data => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++
      })
    });
  };

  handleRemove = id => {
    const { information } = this.state;
    this.setState({
      information: this.state.information.filter(info => info.id !== id)
    });
  };

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList
          data={this.state.information}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;
