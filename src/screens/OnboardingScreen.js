import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {setItem} from '../../utils/Asyncstore';
const {width, height} = Dimensions.get('window');
const OnboardingScreen = () => {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate('Login');
    setItem('onboarded', '1');
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        containerStyles={{paddingHorizontal: 15}}
        pages={[
          {
            backgroundColor: '#101002',
            image: (
              <View style={{height: 300, width: 300}}>
                <LottieView
                  style={{width: width * 0.6, height: width}}
                  source={require('../../assets/animations/check.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Welcome',
            subtitle: 'Lost Your SmartPhone ?',
          },
          {
            backgroundColor: '#F53681',
            image: (
              <View style={{height: 300, width: 300}}>
                <LottieView
                  style={{
                    width: width * 0.6,
                    height: width,
                  }}
                  source={require('../../assets/animations/animation_lktl4bah.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Corrupted Motherboard',
            subtitle: 'No Problem Just Have a Look ',
          },
          {
            backgroundColor: '#9826E6',
            image: (
              <View style={{height: 300, width: 300}}>
                <LottieView
                  style={{width: width * 0.6, height: width}}
                  source={require('../../assets/animations/animation_lktl4zuq.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Rent Smartphones',
            subtitle: 'We Rent smartphones for your usage ',
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
