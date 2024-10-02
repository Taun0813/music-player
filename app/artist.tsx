import { View, Text, ScrollView, FlatList, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import data from '@/assets/data/library.json'
import SearchInput from '@/components/SearchInput'

const artist = () => {
  return (
    <View style={className`flex-1 gap-3 items-center`}>
      <SearchInput/>
      <ScrollView>
          <FlatList data={data}
          renderItem={({item})=>(
            <View style={className`flex-row gap-3 py-2 mb-2 justify-start items-center w-90`}>
              <Image src={item.artwork} style={className`h-15 w-15 rounded-full py-2 mb-2`}/>
              <Text style={className`text-lg text-white`}>{item.artist}</Text>
            </View>
          )}/>
        
      </ScrollView>
    </View>
  )
}

export default artist