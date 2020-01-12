import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

export default class PhoneInfoList extends Component {
  static defaultProps = {
    data: []
  };

  render() {
    const { data } = this.props;

    const list = data.map(info => (
      <PhoneInfo info={info} key={info.id}></PhoneInfo>
    ));
    return <div>{list}</div>;
  }
}
