import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import LockIcon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import Homescreen from './Homescreen';
import Login from './Login';
const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegister = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('User account created');
      })
      .catch(error => {
        if (error.code === 'email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        //console.error(error);
      });
  };
  return (
    <SafeAreaView className=" bg-black flex-1">
      <View className="flex-row bottom-0 my-16 mx-2 italic">
        <Text className="text-white text-5xl font-bold">Lets,</Text>
      </View>
      <View className="flex-row bottom-12 mx-2 italic">
        <Text className="text-white text-5xl font-bold">Get</Text>
      </View>
      <View className="flex-row bottom-10 mx-2 italic">
        <Text className="text-white text-5xl font-bold">Started</Text>
      </View>
      <View className="flex-1">
        <View className="flex-row">
          <Icon
            name="mail-outline"
            size={30}
            color="#F8C089"
            style={{marginRight: 5, top: 15}}
          />
          <TextInput
            className="p-4  bg-stone-900 text-cyan-100 italic rounded-3xl mb-3 border-x-stone-900 flex-1"
            value={email}
            onChangeText={value => {
              setEmail(value);
            }}
            placeholder="Enter Email "
            placeholderTextColor="#fff"
          />
        </View>
        <View className="flex-row">
          <LockIcon
            name="lock-closed-outline"
            size={30}
            color="#D50EDE"
            style={{marginRight: 5, top: 15}}
          />
          <TextInput
            className="p-4 bg-stone-900 text-cyan-100 italic rounded-3xl mb-3 border-x-stone-900 flex-1"
            secureTextEntry={true}
            value={password}
            onChangeText={value => {
              setPassword(value);
            }}
            placeholder="Enter Email"
            placeholderTextColor="#fff"
          />
        </View>
        <View className="flex items-end">
          <Text className="text-white text-xl  font-bold italic">
            Forgot password?
          </Text>
        </View>
        <View className="flex-1 my-2">
          <TouchableOpacity
            onPress={onRegister}
            className="p-1 rounded-3xl bg-white">
            <Text className="text-black text-xl my-3 font-bold italic text-center">
              Signup
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-1  top-0">
          <Text className="text-white text-center font-semibold text-1xl">
            or continue with
          </Text>
        </View>
        <View className="flex-1 bottom-9">
          <TouchableOpacity className=" rounded-3xl bg-stone-900 ">
            <Image
              style={{
                height: 50,
                width: 50,
                left: 90,
              }}
              source={require('../../assets/google.png')}
            />
            <Text className="text-white text-center font-semibold text-1xl">
              Continue with Google
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Text className="text-white font-semibold text-xs text-center italic">
            Already have a account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text className="text-white font-semibold text-xs text-center italic">
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({});
