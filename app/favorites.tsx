import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import className from 'twrnc'
import SearchInput from '@/components/SearchInput'
import PlayAndShuffle from '@/components/PlayAndShuffle'
import Track from '@/components/Track'
import data from '@/assets/data/library.json'

const favorites = () => {
  return (
    <View style={className`flex-1 gap-2`}>
      <SearchInput/>
      <PlayAndShuffle/>

      <ScrollView>
        <View>
          <Track image={data[0].artwork} title={data[0].title}
          name={data[0].artist}/>

          <Track image={data[3].artwork} title={data[3].title}
          name={data[3].artist}/>

          <Track image={data[5].artwork} title={data[5].title}
          name={data[5].artist}/>

          <Track image={data[7].artwork} title={data[7].title}
          name={data[7].artist}/>
        </View>
      </ScrollView>
    </View>
  )
}

export default favorites