import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import LockIcon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Signup from './Signup';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log('response:', response);
      })
      .catch(error => {
        if (error.code === 'auth/wrong-passowrd') {
          Alert.alert('Password is incorrect');
        }

        console.log('error:', error);
      });
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '825492734837-bcnibuh825ns8ehaid2qlnfqdmdmaotd.apps.googleusercontent.com',
    });
  }, []);

  const googleSign = async () => {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };
  return (
    <SafeAreaView className=" bg-black flex-1">
      <View className="flex-row bottom-0 my-16 mx-2 italic">
        <Text className="text-white text-5xl font-bold">Hey,</Text>
      </View>
      <View className="flex-row bottom-12 mx-2 italic">
        <Text className="text-white text-5xl font-bold">Welcome</Text>
      </View>
      <View className="flex-row bottom-10 mx-2 italic">
        <Text className="text-white text-5xl font-bold">Back</Text>
      </View>
      <View className="flex-1">
        <View className="flex-row">
          <Icon
            name="mail-outline"
            size={30}
            color="#D50EDE"
            style={{marginRight: 5, top: 15}}
          />
          <TextInput
            className="p-4 bg-stone-900 text-cyan-100 italic rounded-3xl mb-3 border-x-stone-900 flex-1"
            value={email}
            onChangeText={value => setEmail(value)}
            placeholder="Enter Email"
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
            className="p-4  bg-stone-900 text-cyan-100 italic rounded-3xl mb-3 border-x-stone-900 flex-1"
            secureTextEntry={true}
            value={password}
            onChangeText={value => setPassword(value)}
            placeholder="Enter password"
            placeholderTextColor="#fff"
            placeholderTe
          />
        </View>
        <View className="flex items-end">
          <Text className="text-white text-xl  font-bold italic">
            Forgot password?
          </Text>
        </View>
        <View className="flex-1 my-2">
          <TouchableOpacity
            onPress={onLogin}
            className="p-1 rounded-3xl bg-white">
            <Text className="text-black text-xl my-3 font-bold italic text-center">
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-1  top-0">
          <Text className="text-white text-center font-semibold text-1xl">
            or continue with
          </Text>
        </View>
        <View className="flex-1 bottom-9">
          <TouchableOpacity
            onPress={googleSign}
            className=" rounded-3xl bg-stone-900 ">
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
            Don't Have a account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text className="text-white font-semibold text-xs text-center italic">
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
