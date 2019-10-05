import React, {Component} from 'react';
import {StyleSheet, AsyncStorage, View, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';

//Import the connect from redux
import {connect} from 'react-redux';

//Import the actions
import {setMovies} from '../actions/AppActions';

//Disable Yellow Warnings
console.disableYellowBox = true;

class Screen01 extends Component {
  componentDidMount() {
    this.getWatchList();

    // AsyncStorage.setItem('movies', '[]');
  }

  getWatchList = async () => {
    let watchList = await AsyncStorage.getItem('movies');

    this.props.setMovies(JSON.parse(watchList));
  };

  renderItem = ({item}) => {
    return (
      <ListItem
        title={item.Title}
        subtitle={'Year: ' + item.Year}
        leftAvatar={{
          source: {
            uri: item.Poster == 'N/A' ? null : item.Poster,
          },
          size: 'large',
          rounded: false,
        }}
        bottomDivider={true}
        onPress={() => this.markAsWatched(item)}
        onLongPress={() => this.removeFromList(item)}
        checkmark={item.checked}
      />
    );
  };

  markAsWatched = async item => {
    let {Title} = item;

    let updatedList = this.props.watchList.map(element => {
      if (element.Title == Title) {
        element = {...element, checked: !item.checked};
        return element;
      } else {
        return element;
      }
    });

    await AsyncStorage.setItem('movies', JSON.stringify(updatedList));

    this.props.setMovies(updatedList);
  };

  removeFromList = async item => {
    let {Title} = item;

    let updatedList = this.props.watchList.filter(element => {
      return element.Title !== Title;
    });

    await AsyncStorage.setItem('movies', JSON.stringify(updatedList));

    this.props.setMovies(updatedList);
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    console.log(this.props.watchList);

    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.watchList}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

//We will take our states and pass it by props
mapStateToProps = state => {
  const {appReducer, watchList} = state.AppReducer;

  return {appReducer, watchList};
};

//Export the app using connect
export default connect(
  mapStateToProps,
  {setMovies},
)(Screen01);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
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
