import React from 'react';
import {
  Button,
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableHighlight,
  StatusBar
} from 'react-native';
export default class LoginComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <View style={styles.item_container}>
          <View style={{ flex: 0.25 }}>
            <Text
              style={{
                fontSize: 80,
                fontWeight: 'bold',
                top: '25%',
                color: '#202020'
              }}
            >
              M
            </Text>
          </View>
          <View style={{ flex: 0.25 }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                marginBottom: 20,
                color: '#202020'
              }}
            >
              Login to your account
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#b1b1b1'
              }}
            >
              Přinese vám přesnější výsledky a mnoho dalších funkcí
            </Text>
          </View>
          <View
            style={{
              flex: 0.45
              //justifyContent: 'flex-end'
            }}
          >
            <TouchableHighlight
              style={[styles.button, { backgroundColor: '#3b5998' }]}
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
                FACEBOOK
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.button, { backgroundColor: '#dd4b39' }]}
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
                GOOGLE
              </Text>
            </TouchableHighlight>
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
                EMAIL
              </Text>
            </TouchableHighlight>
          </View>
          <View style={{ flex: 0.05, alignItems: 'center' }}>
            <Text
              style={{ color: '#b1b1b1', fontSize: 15 }}
              onPress={() => alert('hey')}
            >
              I don't want to log in.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item_container: {
    margin: 35,
    flex: 1
  },
  age_input: {
    backgroundColor: '#202020',
    color: 'white',
    borderRadius: 18,
    height: '100%',
    fontSize: 20
  },
  button: {
    backgroundColor: '#202020',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 15
  }
});
