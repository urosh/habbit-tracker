import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';
import { Svg } from 'expo';

const { Circle, Line, ClipPath, Path } = Svg;

import { WebBrowser } from 'expo';

import { MonoText, CustomText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  hide() {
    console.log('We should hide now');
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.svgContainer}>
            <TouchableOpacity activeOpacity={0.7} onPress={this.hide}>
              <Svg height="200" width="200" style={styles.svg}>
                <Circle cx="100" cy="100" r="50" fill="gray" />
                <Line
                  x1="4"
                  y1="4"
                  x2="16"
                  y2="16"
                  stroke="indianred"
                  strokeWidth="10"
                />
                <Line
                  x1="50"
                  y1="50"
                  x2="100"
                  y2="100"
                  stroke="indianred"
                  strokeWidth="2"
                />
                  <Path stroke="inidianred" strokeWidth="2" fill="black" class="p" d="M100,100 L100,0 A100,100 1 0,1 200,100 z" ></Path>
              </Svg>
            </TouchableOpacity>
          </View>
          <View style={styles.mytextContainer}>
            <CustomText style={styles.testText}>11 Nov 2018</CustomText>      
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>Ok we can change text here:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View>

      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

