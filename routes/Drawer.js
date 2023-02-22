import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import { Text, View } from "react-native";
import Header from "../shared/header";

const Drawer = createDrawerNavigator();

export default function Testdrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          options={{
            headerTitle: ({navigation}) => (
              <Header title='GameZone' navigation={navigation}/>
            ),
            headerStyle: { backgroundColor: "#eee" },
          }}
          name="HomeStack"
          component={HomeStack}
        />
        <Drawer.Screen name="AboutStack" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
