import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import React, { useRef, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Octicons } from "@expo/vector-icons";
import Loading from "@/components/Loading";

export default function SignUp() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const passwordConfirmRef = useRef("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSignUp = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Error", "Please fill all the fields");
      return;
    }
    setIsLoading(true);
    // register an account here
    setIsLoading(false);
  };

  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <View
        style={{ paddingTop: hp(0), paddingHorizontal: wp(5) }}
        className="flex-1 gap-12 justify-center"
      >
        <View className="gap-10">
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold tracking-wider text-center text-neutral-800"
          >
            Sign Up
          </Text>

          {/* Input fields */}

          {/* Email input */}
          <View
            style={{ height: hp(7) }}
            className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
          >
            <Octicons name="mail" size={hp(2.7)} color="gray" />
            <TextInput
              onChangeText={(value) => (emailRef.current = value)}
              style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-700"
              placeholder="Email address"
              placeholderTextColor="gray"
            />
          </View>

          {/* Password input */}
          <View
            style={{ height: hp(7) }}
            className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
          >
            <Octicons name="lock" size={hp(2.7)} color="gray" />
            <TextInput
              onChangeText={(value) => (passwordRef.current = value)}
              style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-700"
              placeholder="Password"
              secureTextEntry
              placeholderTextColor="gray"
            />
          </View>

          {/* Confirm Password input */}
          <View
            style={{ height: hp(7) }}
            className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
          >
            <Octicons name="lock" size={hp(2.7)} color="gray" />
            <TextInput
              onChangeText={(value) => (passwordConfirmRef.current = value)}
              style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-700"
              placeholder="Confirm Password"
              secureTextEntry
              placeholderTextColor="gray"
            />
          </View>
        </View>

        {/* Submit button */}
        <View>
          {isLoading ? (
            <Loading size={hp(8)} />
          ) : (
            <TouchableOpacity
              onPress={handleSignUp}
              style={{ height: hp(6.5) }}
              className="bg-blue-500 rounded-xl justify-center items-center"
            >
              <Text
                style={{ fontSize: hp(2.7) }}
                className="text-white font-bold tracking-wider"
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
