import React, { Component } from "react";
import firebase from "firebase";
import { Button, Card, CardSection, Input } from "./common";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  onButtonPress() {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase
          .auth()
          .createUserWuthEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: "Authentication Failed." });
          });
      });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="Enter email address"
            style={{ height: 40, width: 200 }}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
