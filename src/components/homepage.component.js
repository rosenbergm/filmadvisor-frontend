import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

export default class HomepageComponent extends React.Component {
  render() {
    return (
      <View style={{ height: '100%', color: '#fff' }}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <View style={styles.movie_next} />
        <View style={styles.movie_base}>
          <Text style={styles.movie_title}>Harry Potter 7</Text>
          <Text style={styles.movie_description}>Fantasy, Adventurous</Text>
        </View>
        <View style={styles.movie_image} />

        <View style={styles.top_menu}>
          <View style={styles.menu_item}>
            <Text style={{ textAlign: 'center' }}>PROFILE</Text>
          </View>
          <View style={styles.menu_item}>
            <Text
              style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}
            >
              M
            </Text>
          </View>
          <View style={styles.menu_item}>
            <Text style={{ textAlign: 'center' }}>DISCOVER</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  top_menu: {
    height: '8%',
    width: '100%',
    position: 'absolute',
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
  movie_base: {
    backgroundColor: '#e2e2e2',
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    height: '50%',
    width: '100%',
    position: 'absolute',
    bottom: 0
  },
  movie_next: {
    backgroundColor: '#f0f0f0',
    position: 'absolute',
    height: '53%',
    width: '90%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    bottom: 0,
    marginLeft: '5%'
  },
  movie_image: {
    width: '55%',
    height: '38%',
    backgroundColor: '#404040',
    borderRadius: 45,
    top: '25%',
    left: '10%',
    elevation: 5
  },
  movie_title: {
    position: 'absolute',
    color: '#b1b1b1',
    left: '10%',
    right: '10%',
    top: '30%',
    width: '80%',
    fontSize: 60,
    fontWeight: 'bold'
  },
  movie_description: {
    position: 'absolute',
    color: '#b1b1b1',
    fontSize: 25,
    fontWeight: 'bold',
    left: '10%',
    right: '10%',
    width: '80%',
    bottom: '16%'
  }
});
