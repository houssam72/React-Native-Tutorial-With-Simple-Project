import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    // <NavigationContainer >
      <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: 'red',
        },
      }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: "My home",
            headerStyle: { backgroundColor: "#eee" },
          }}
        />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}
