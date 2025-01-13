import React, { useEffect } from "react";
import { Slot, useRouter } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";

const MainLayout = () => {
  const router = useRouter();

  useEffect(() => {
    // if not authenticated, redirect to sign up page
    router.replace("/signUp");
    // else ...
  }, []);

  return <Slot />;
};

export default function Rootlayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MainLayout />
    </GestureHandlerRootView>
  );
}
