import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props._checked,
      text: props.text
    };
  }

  onPress(checkValue) {
    this.setState({checked: !this.state.checked});
    checkValue(this.state.checked); // add function to store value externally here
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress.bind(this)}>
          <Text style={styles.check_icon}>{this.state.checked ? '✅' : '❌'}</Text>
        </TouchableOpacity>
        <Text style={{paddingLeft: 9}}>
          {this.state.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'lightgrey',
  },
  check_icon: {
    fontSize: 40
  }
});

export default Checkbox;
