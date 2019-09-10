import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

//Import the connect from redux
import {connect} from 'react-redux';

//Import the actions
import {} from '../actions/AppActions';

class Screen01 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Screen 01</Text>
      </View>
    );
  }
}

//We will take our states and pass it by props
mapStateToProps = state => {
  const {appReducer} = state.AppReducer;

  return {appReducer};
};

//Export the app using connect
export default connect(
  mapStateToProps,
  {},
)(Screen01);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputText: {
    borderWidth: 1,
    width: '60%',
    height: 30,
    padding: 5,
  },
});
