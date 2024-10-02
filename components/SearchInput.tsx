import { View, Text, TextInput } from 'react-native'
import React from 'react'
import className from 'twrnc'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const SearchInput = () => {
  return (
    <View style={className`bg-gray-800 flex-row justify-start items-center px-3 gap-2 w-95`}>
      <Ionicons name="search" size={24} color="white" />
      <TextInput placeholder='Find in songs' 
            style={className`text-lg flex-1 p-3 text-gray-300 rounded-lg`}/>

    </View>
  )
}

export default SearchInput