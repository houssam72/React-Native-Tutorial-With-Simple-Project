import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/About";

const Stack = createNativeStackNavigator();

export default function AboutStack() {
  return (
    // <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: 'red',
        },
      }}>
        <Stack.Screen
          name="About"
          component={About}
          options={{
            title: "About Page",
            headerStyle: { backgroundColor: "#eee" },
          }}
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}
