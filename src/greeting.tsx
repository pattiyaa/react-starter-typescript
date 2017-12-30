
// Remember to rename your file to Hello.tsx and
// place it within your src/ directory
import * as React from "react";

interface greetingProps {
  name: string;
}

class Greeting extends React.Component<greetingProps, {}> {
  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}

export default Greeting;