import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MovieDetailComponent from './src/components/movieDetail.component';
import HomeComponent from './src/components/home.component';
import AgeInputComponent from './src/components/ageInput.component';
import LoginComponent from './src/components/login.component';
import FeelChooseComponent from './src/components/feelChoose.component';
import HomepageComponent from './src/components/homepage.component';
import DiscoverComponent from './src/components/discover.component';
import IntroSliderComponent from './src/components/introSlider.component';

const AppNavigator = createStackNavigator(
  {
    Home: HomeComponent,
    MovieDetail: MovieDetailComponent,
    AgeInput: AgeInputComponent,
    Login: LoginComponent,
    FeelChoose: FeelChooseComponent,
    Homepage: HomepageComponent,
    Discover: DiscoverComponent,
    Intro: IntroSliderComponent
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(AppNavigator);

type Props = {};
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
