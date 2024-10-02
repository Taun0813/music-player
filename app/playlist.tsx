import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import data from '@/assets/data/library.json'

const playlist = () => {
  return (
    <View style={className`flex-1 gap-3 `}>
      <View style={className`flex-row justify-between items-center items-center gap-3`}>
      <Image src={data[0].artwork} style={className`h-20 w-20 rounded-x1`}/>
      <Text style={className`flex-1 text-lg font-bold text-white`}>
        {data[0].playlist}</Text>
      </View>
    </View>
  )
}

export default playlist