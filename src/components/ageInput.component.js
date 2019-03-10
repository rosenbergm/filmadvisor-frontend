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

export default class AgeInputComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <View style={styles.item_container}>
          <View style={{ flex: 0.4 }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                top: '50%',
                color: '#202020'
              }}
            >
              What is your age?
            </Text>
          </View>
          <View style={{ flex: 0.15 }}>
            <TextInput
              autoCorrect={false}
              keyboardType="number-pad"
              maxLength={2}
              style={styles.age_input}
              textAlign="center"
              fontWeight="bold"
            />
          </View>
          <View
            style={{
              flex: 0.45,
              justifyContent: 'flex-end'
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
                CONTINUE
              </Text>
            </TouchableHighlight>
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
    borderColor: '#fff'
  }
});
