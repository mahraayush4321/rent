import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import auth from '@react-native-firebase/auth';

const Homescreen = () => {
  const onLogout = () => {
    auth()
      .signOut()
      .then(response => {
        Alert.alert('user signed out');
      })
      .catch(error => {
        Alert.alert('Not able to logout');
      });
  };
  return (
    <SafeAreaView className="flex-1 justify-center mx-7">
      <TouchableOpacity
        onPress={onLogout}
        className="p-4 rounded-xl bg-yellow-300">
        <Text className="text-black font-semibold text-xs">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({});
