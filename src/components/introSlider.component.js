import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight
} from 'react-native';

import Swiper from 'react-native-swiper';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';

export default class IntroSliderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 1
    };
  }

  render() {
    return (
      <View style={{ height: '100%' }}>
        <View style={{ height: '100%' }}>
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            loop={false}
            showsPagination={true}
            index={0}
            ref={swiper => {
              this._swiper = swiper;
            }}
            height={hp('85%')}
          >
            <View style={styles.slide1}>
              <Text>Hello</Text>
              <Button
                title="goto slide 2"
                onPress={() => this._swiper.scrollBy(1)}
              />
            </View>
            <View style={styles.slide2}>
              <Text>Hello</Text>
            </View>
            <View style={styles.slide3}>
              <Text>Hello</Text>
              <Button title="hallo wie geht es dir?" />
            </View>
          </Swiper>
          <View style={{ height: hp('15%'), marginLeft: 20, marginRight: 20 }}>
            <TouchableHighlight
              style={styles.button}
              onPress={() => this._swiper.scrollBy(1, true)}
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
            <Text
              style={{
                color: '#b1b1b1',
                fontSize: 15,
                height: '50%',
                textAlign: 'center',
                textAlignVertical: 'center'
              }}
              onPress={() => alert('hey')}
            >
              Skip
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202020'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303030'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#404040'
  },
  button: {
    backgroundColor: '#202020',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#fff',
    height: '50%'
  }
});
