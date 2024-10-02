import { View, Text } from "react-native";
import React from "react";
import className from "twrnc";
import SearchInput from "@/components/SearchInput";
import PlayAndShuffle from "@/components/PlayAndShuffle";
import Tracks from "@/components/Tracks";
import MusicScreen from "@/components/MusicScreen";

const index = () => {
  return (
    <View style={className` flex-1 gap-2`}>
      <SearchInput />
      <PlayAndShuffle />
      <Tracks />
    </View>
  );
};

export default index;
