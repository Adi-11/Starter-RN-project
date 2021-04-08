import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import {
  LocalNotification,
  ScheduledLocalNotification,
} from "../helpers/LocalPushController";
import { TouchableComponent } from "../helpers/Touchable";

interface IProps {}

interface IState {}

export default class NotificationScreen extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  handleLocalNotification = () => {
    LocalNotification();
  };

  handleScheduleNotification = () => {
    ScheduledLocalNotification();
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Press a button to trigger the notification</Text>
        <View style={styles.local}>
          <TouchableComponent onPress={this.handleLocalNotification}>
            <View style={styles.txt}>
              <Text style={{ fontSize: 20 }}>Local Notification</Text>
            </View>
          </TouchableComponent>
        </View>
        <View style={styles.remote}>
          <TouchableComponent onPress={this.handleScheduleNotification}>
            <View style={styles.txt}>
              <Text style={{ fontSize: 20 }}>Schedule Notification</Text>
            </View>
          </TouchableComponent>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  local: {
    width: 270,
    height: 50,
    backgroundColor: "#fc5c65",
    marginBottom: 10,
    borderRadius: 10,
  },

  remote: {
    width: 270,
    height: 50,
    backgroundColor: "#4ecdc4",
    marginBottom: 10,
    borderRadius: 10,
  },
  txt: {
    alignItems: "center",
    marginTop: 10,
    fontSize: 20,
  },
});
