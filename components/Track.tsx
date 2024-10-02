import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import className from "twrnc";
import Ionicons from "@expo/vector-icons/Ionicons";
import MusicScreen from "./MusicScreen";

const Track = ({ image, title, name, onpress }) => {
  return (
    <View style={className`flex-row gap-3 justify-between items-center mb-2`}>
      <Image
        source={{ uri: image }}
        style={className`h-12 w-12 rounded-lg border border-gray-300`}
      />
      <Pressable onPress={onpress} style={className`flex-1 pb-3`}>
        <Text style={className`text-white text-lg`}>{title}</Text>
        <Text style={className`text-white`}>{name}</Text>
      </Pressable>
      <Ionicons name="ellipsis-horizontal" size={24} color="white" />
    </View>
  );
};

export default Track;
