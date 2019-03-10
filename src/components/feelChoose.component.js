import React from 'react';
import {
  Button,
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableHighlight,
  StatusBar,
  CheckBox,
  Image
} from 'react-native';

import RadioGroup, { Radio } from 'react-native-radio-input';

export default class FeelChooseComponent extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { isFeelingChecked: false, feelingChoice: '' };
    this.state = {
      data: [
        {
          label: 'sad',
          value: 0
        },
        {
          label: 'happy',
          value: 1
        },
        {
          label: 'veryHappy',
          value: 2
        },
        {
          label: 'verySad',
          value: 3
        },
        {
          label: 'amazed',
          value: 4
        },
        {
          label: 'veryAmazed',
          value: 5
        }
      ],
      value: 0
    };
  }

  onFeelingChangeCheck(feeling) {
    this.setState({
      feelingChoice: feeling,
      isFeelingChecked: !this.state.isFeelingChecked
    });
  }

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
          <View style={{ flex: 0.2 }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                marginBottom: 0,
                color: '#202020'
              }}
            >
              How are you feeling today?
            </Text>
          </View>
          <View
            style={{
              flex: 0.4
            }}
          >
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                flexWrap: 'wrap'
              }}
            >
              <TouchableHighlight
                style={{
                  backgroundColor: '#fff',
                  flex: 1 / 3,
                  margin: '1%',
                  aspectRatio: 1,
                  margin: 5,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 4
                }}
                onPress={() => alert(1)}
              >
                <Image
                  style={{
                    color: '#000',
                    textAlign: 'center',
                    padding: 1,
                    fontWeight: 'bold',
                    flex: 1,
                    resizeMode: 'contain',
                    aspectRatio: 0.6
                  }}
                  source={require('../../assets/smile_happy_1.png')}
                />
              </TouchableHighlight>

              <TouchableHighlight
                style={{
                  backgroundColor: '#fff',
                  flex: 1 / 3,
                  margin: '1%',
                  aspectRatio: 1,
                  margin: 5,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 4
                }}
                onPress={() => alert(1)}
              >
                <Image
                  style={{
                    color: '#000',
                    textAlign: 'center',
                    padding: 1,
                    fontWeight: 'bold',
                    flex: 1,
                    resizeMode: 'contain',
                    aspectRatio: 0.6
                  }}
                  source={require('../../assets/smile_happy_2.png')}
                />
              </TouchableHighlight>
              <TouchableHighlight
                style={{
                  backgroundColor: '#fff',
                  flex: 1 / 3,
                  margin: '1%',
                  aspectRatio: 1,
                  margin: 5,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 4
                }}
                onPress={() => alert(1)}
              >
                <Image
                  style={{
                    color: '#000',
                    textAlign: 'center',
                    padding: 1,
                    fontWeight: 'bold',
                    flex: 1,
                    resizeMode: 'contain',
                    aspectRatio: 0.6
                  }}
                  source={require('../../assets/smile_empers.png')}
                />
              </TouchableHighlight>
            </View>

            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                flexWrap: 'wrap'
              }}
            >
              <TouchableHighlight
                style={{
                  backgroundColor: '#fff',
                  flex: 1 / 3,
                  margin: '1%',
                  aspectRatio: 1,
                  margin: 5,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 4
                }}
                onPress={() => alert(1)}
              >
                <Image
                  style={{
                    color: '#000',
                    textAlign: 'center',
                    padding: 1,
                    fontWeight: 'bold',
                    flex: 1,
                    resizeMode: 'contain',
                    aspectRatio: 0.6
                  }}
                  source={require('../../assets/smile_sad_1.png')}
                />
              </TouchableHighlight>
              <TouchableHighlight
                style={{
                  backgroundColor: '#fff',
                  flex: 1 / 3,
                  margin: '1%',
                  aspectRatio: 1,
                  margin: 5,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 4
                }}
                onPress={() => alert(1)}
              >
                <Image
                  style={{
                    color: '#000',
                    textAlign: 'center',
                    padding: 1,
                    fontWeight: 'bold',
                    flex: 1,
                    resizeMode: 'contain',
                    aspectRatio: 0.6
                  }}
                  source={require('../../assets/smile_sad_2.png')}
                />
              </TouchableHighlight>
              <TouchableHighlight
                style={{
                  backgroundColor: '#fff',
                  flex: 1 / 3,
                  margin: '1%',
                  aspectRatio: 1,
                  margin: 5,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 4
                }}
                onPress={() => alert(1)}
              >
                <Image
                  style={{
                    color: '#000',
                    textAlign: 'center',
                    padding: 1,
                    fontWeight: 'bold',
                    flex: 1,
                    resizeMode: 'contain',
                    aspectRatio: 0.6
                  }}
                  source={require('../../assets/smile_sad_3.png')}
                />
              </TouchableHighlight>
            </View>
          </View>
          <View
            style={{
              flex: 0.15,
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
