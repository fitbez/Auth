import React from "react";
import { TextInput, View, Text } from "react-native";

const Input = ({ lable, value, onChangeText }) => {
  return (
    <View>
      <Text>{lable}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{ height: 40, width: 200 }}
      />
    </View>
  );
};

export { Input };
