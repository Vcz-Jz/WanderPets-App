import Feather from '@expo/vector-icons/Feather';
import Foundation from '@expo/vector-icons/Foundation';
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: "coral"}}>
      <Tabs.Screen name="index" options={{title: "Home", tabBarIcon: ({ color }) => <Foundation name="home" size={24} color={ color } />}} />
      <Tabs.Screen name="map" options={{title: "Maps", tabBarIcon: ({ color }) => <Feather name="map" size={24} color={ color } />}} />
      <Tabs.Screen name="login" options={{title: "Login"}} />
    </Tabs>
  );
}
