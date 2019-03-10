import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableHighlight,
  FlatList,
  Dimensions
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default class DiscoverComponent extends React.Component {
  groupData(items, groupLen) {
    const groups = [];
    let i = 0;

    while (i < items.length) {
      groups.push(items.slice(i, (i += groupLen)));
    }
    return groups;
  }

  render() {
    const filters = [
      {
        title: 'Rating'
      },
      {
        title: 'Žánry'
      },
      {
        title: 'Year'
      },
      {
        title: 'Filter 1'
      },
      {
        title: 'Filter 2'
      },
      {
        title: 'Filter 3'
      }
    ];

    const movies = [
      {
        title: 'Batman'
      },
      {
        title: 'Spiderman'
      },
      {
        title: 'Harry Potter'
      },
      {
        title: 'Deadpool'
      },
      {
        title: 'Guardians of the Galaxy'
      },
      {
        title: 'Stranger Things'
      }
    ];

    const grouppedItems = this.groupData(movies, 2);

    return (
      <View style={{ height: '100%', color: '#fff' }}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <View style={styles.top_menu}>
          <View style={styles.menu_item}>
            <Text style={{ textAlign: 'center' }}>PROFILE</Text>
          </View>
          <View style={styles.menu_item}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 30,
                fontWeight: 'bold'
              }}
            >
              M
            </Text>
          </View>
          <View style={styles.menu_item}>
            <Text style={{ textAlign: 'center' }}>DISCOVER</Text>
          </View>
        </View>
        <View
          style={{
            marginLeft: 25,
            marginRight: 25,
            height: '90%'
            //backgroundColor: 'red'
          }}
        >
          <View style={styles.discover_container}>
            <Text style={styles.discover_text}>Discover</Text>
          </View>
          <View style={styles.search_container}>
            <TextInput
              style={styles.search_box}
              autoCorrect={false}
              textAlign="left"
              fontWeight="bold"
            />
          </View>
          <View style={styles.filter_container}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <TouchableHighlight
                style={{
                  backgroundColor: '#404040',
                  borderRadius: 28,
                  borderWidth: 1,
                  borderColor: '#fff',
                  marginRight: 20,
                  justifyContent: 'center'
                }}
                onPress={() => alert('hey')}
                underlayColor="#505050"
              >
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    paddingRight: 25,
                    paddingLeft: 25
                  }}
                >
                  Filters
                </Text>
              </TouchableHighlight>
              {filters.map(filter => (
                <TouchableHighlight
                  style={styles.button}
                  onPress={() => alert('hey')}
                  underlayColor="#505050"
                >
                  <Text
                    style={{
                      color: '#b1b1b1',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      paddingRight: 25,
                      paddingLeft: 25
                    }}
                  >
                    {filter.title}
                  </Text>
                </TouchableHighlight>
              ))}
            </ScrollView>
          </View>
          <View style={styles.column}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={grouppedItems}
              renderItem={({ item }) => (
                <View style={styles.row}>
                  {item.map((singleItem, index) => (
                    <TouchableHighlight
                      style={{
                        backgroundColor: '#e2e2e2',
                        borderRadius: 35,
                        margin: 10,
                        width: '100%',
                        flex: 1,
                        aspectRatio: 1,
                        //justifyContent: 'center',
                        elevation: 6
                      }}
                      onPress={() => alert('hey')}
                      underlayColor="#505050"
                    >
                      <Text
                        style={{
                          color: '#b1b1b1',
                          //textAlign: 'center',
                          padding: 15,
                          fontWeight: 'bold',
                          fontSize: 25,
                          top: 5,
                          left: 5
                        }}
                      >
                        {singleItem.title}
                      </Text>
                    </TouchableHighlight>
                  ))}
                </View>
              )}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 15
  },
  row: {
    flexDirection: 'row'
  },

  button: {
    backgroundColor: '#e2e2e2',
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#fff',
    marginRight: 20,
    justifyContent: 'center'
  },
  top_menu: {
    height: hp('7%'),
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menu_item: {
    height: '100%',
    flex: 1 / 3,
    textAlign: 'center',
    justifyContent: 'center'
  },
  discover_container: {
    height: hp('7%'),
    justifyContent: 'flex-end'
  },
  discover_text: {
    color: '#404040',
    fontSize: 35,
    fontWeight: 'bold'
  },
  search_container: {
    height: hp('7%'),
    marginTop: 15,
    marginBottom: 20
  },
  search_box: {
    backgroundColor: '#e2e2e2',
    color: '#404040',
    borderRadius: 18,
    height: '100%'
  },
  filter_container: {
    height: hp('7%')
  },
  movie_choice: {
    height: hp('72%')
  },
  movie_scroll: {
    width: '100%'
  }
});
