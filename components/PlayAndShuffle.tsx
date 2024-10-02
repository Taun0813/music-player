import { View, Text, Pressable } from 'react-native'
import React from 'react'
import className from 'twrnc'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const PlayAndShuffle = () => {
  return (
    <View style={className`flex-row justify-between items-center`}>
      <Pressable style={className`flex-row justify-center items-center gap-3 bg-gray-800 rounded-lg p-3 w-45`}> 
      <Ionicons name="play-sharp" size={24} color="white" />
      <Text style={className`text-lg font-bold text-white`}>Play</Text>
      </Pressable>

      <Pressable style={className`flex-row justify-center items-center gap-3 bg-gray-800 rounded-lg p-3 w-45`}> 
      <Ionicons name="shuffle-sharp" size={24} color="white" />
      <Text style={className`text-lg font-bold text-white`}>Shuffle</Text>
      </Pressable>
    </View>
  )
}

export default PlayAndShuffle