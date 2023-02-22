import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { globalStyles, images } from "../styles/styles";
import Card from "../shared/Card";

const ReviewDetails = ({ navigation, route }) => {
  const pressHandler = () => {
    navigation.goBack();
  };

  

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{route.params.title}</Text>
        <Text>{route.params.rating}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[route.params.rating]} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});

export default ReviewDetails;
