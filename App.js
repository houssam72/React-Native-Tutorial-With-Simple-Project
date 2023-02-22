import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import About from "./screens/About";
import AboutStack from "./routes/aboutStack";
import Testdrawer from "./routes/Drawer";

export default function App() {
  return (
    // <View style={styles.container}>
      <Testdrawer />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
