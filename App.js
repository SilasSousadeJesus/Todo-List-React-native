import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TodoList from "./src/components/TodoList";

export default function App() {
  return (
    <SafeAreaView>
      <TodoList />
    </SafeAreaView>
  );
}