import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import TodoList from "../components/TodoList";
import { todosData } from "../../data/todos";

export default function Home() {
  const [localData, setLocalData] = React.useState(
    todosData.sort((a, b) => {
      return a.isCompleted - b.isCompleted;
    })
  );

  const [isHidden, setIsHidden] = React.useState(false);

  const handleHidePress = () => {
    if (isHidden) {
      setIsHidden(false);
    }
    setIsHidden(!isHidden);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/1361/1361728.png",
        }}
        style={styles.pic}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.title}>Today</Text>
        <TouchableOpacity onPress={handleHidePress}>
          <Text style={{ color: "#3478f6" }}>Hide isCompleted</Text>
        </TouchableOpacity>
      </View>
      <TodoList todosData={localData.filter((todo) => todo.isToday)} />

      <Text style={styles.title}>Tomorrow</Text>
      <TodoList todosData={localData.filter((todo) => !todo.isToday)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 15,
  },
  pic: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 35,
    marginTop: 10,
  },
});
