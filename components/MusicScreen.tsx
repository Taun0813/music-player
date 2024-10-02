import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import className from "twrnc";
import data from "../assets/data/library.json";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const MusicScreen = ({onpress}) => {
  const [selected , setSelected] = useState(null)

  const togglePopup = (item) =>{
    setSelected(item)
  }
  const [playStop , setPlayStop] = useState(false)
  const togglePlayStop = () => {
    setPlayStop(!playStop)
  }
  return (
    <View style={className`absolute bg-[rgba(55,155,55,0.98)] top-0 left-0 right-0 bottom-0 rounded-xl p-5 flex-col justify-center items-center gap-5`}>
      <View style={className`p-1 w-15 rounded-full bg-gray-500`}></View>
      <Pressable onPress={onpress}>
      <Image src={data[3].artwork} style={className`h-85 w-85 rounded-xl`}/>
      </Pressable>
      <View style={className`flex-row justify-between items-center w-80`}>
        <View>
            <Text style={className`text-lg text-white font-bold`}>As you Fade Away</Text>
            <Text style={className`text-lg text-white`}>Spaqoo</Text>
        </View>
        <FontAwesome5 name="heart" size={24} color="red" />
      </View>

      <View style={className`p-5 flex-row justify-center items-center gap-5`}>
      <Fontisto name="backward" size={24} color="white" />
        <Pressable onPress={togglePlayStop}>
        {playStop ? <FontAwesome5 name="play" size={24} color="white" /> : 
        <FontAwesome5 name="stop" size={24} color="white" />}
        </Pressable>
        <Fontisto name="forward" size={24} color="white" />
      </View>
    </View>
  )
}

export default MusicScreen