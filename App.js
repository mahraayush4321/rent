import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppNavigation from './src/Navigations/Nav';
import Homescreen from './src/screens/Homescreen';
import auth from '@react-native-firebase/auth';
const App = () => {
  const [user, setUser] = useState();

  console.log('user :', user);

  const onAuthStateSave = user => setUser(user);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateSave);
    return subscriber;
  });
  return <>{user ? <Homescreen /> : <AppNavigation />}</>;
};

export default App;

const styles = StyleSheet.create({});
