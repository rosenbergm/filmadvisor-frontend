import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableHighlight,
  Button,
  TouchableOpacity
} from 'react-native';

export default class MovieDetailComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#202020" barStyle="light-content" />

        <View style={styles.movie_name_container}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}
              style={[styles.back_button, { flex: 0.3 }]}
            >
              <Text
                style={{
                  color: '#b1b1b1',
                  fontSize: 50
                }}
              >
                «
              </Text>
            </TouchableOpacity>
            <Text style={[styles.movie_name_text, { flex: 0.7 }]}>
              Harry Potter 7
            </Text>
          </View>
        </View>
        <View style={styles.movie_meta}>
          <Text style={{ fontSize: 25, paddingTop: 20 }}>
            Fantasy, Adventure
          </Text>
          <Text style={{ fontSize: 23 }}>2011, 120 minutes</Text>
          <View
            style={{
              borderBottomColor: '#b1b1b1',
              borderBottomWidth: 1,
              marginBottom: 20,
              marginTop: 20
            }}
          />
          <Text style={{ fontSize: 18, marginBottom: 10 }}>
            Harry Potter a Relikvie smrti – část 2 je fantasy film, pokračování
            prvního dílu dvoudílné filmové adaptace stejnojmenného románu
            britské spisovatelky
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              position: 'absolute',
              bottom: 35
            }}
          >
            <View
              style={{
                width: '65%',
                alignSelf: 'baseline'
              }}
            >
              <TouchableHighlight
                style={styles.button}
                onPress={() => alert('hey')}
                underlayColor="#505050"
              >
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    padding: 15,
                    fontWeight: 'bold'
                  }}
                >
                  WATCH THIS
                </Text>
              </TouchableHighlight>
            </View>
            <View
              style={{
                width: '35%',
                alignSelf: 'baseline'
              }}
            >
              <TouchableHighlight
                style={styles.button}
                onPress={() => alert('hey')}
                underlayColor="#505050"
              >
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    padding: 15,
                    fontWeight: 'bold'
                  }}
                >
                  BACK
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column'
  },
  movie_name_container: {
    flex: 0.35,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    backgroundColor: '#202020'
  },
  movie_name_text: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#b1b1b1',
    position: 'absolute',
    width: '100%',
    bottom: 25,
    left: 35
  },
  movie_meta: {
    flex: 0.65,
    marginLeft: 35,
    marginRight: 35
  },
  button: {
    backgroundColor: '#202020',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#fff'
  },
  back_button: {
    paddingLeft: 35,
    padding: 'auto'
  }
});
