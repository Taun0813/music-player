import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import className from 'twrnc'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SearchInput from '@/components/SearchInput';

const _layout = () => {{}
  return (
    <View style={className`flex-1 p-2 bg-black`}>
        {/* Tabs */}
        <Tabs sceneContainerStyle={{backgroundColor:'black'}}
        screenOptions={{
            headerStyle:{
                backgroundColor: 'rgba(55,55,255,0)',
                borderWidth:0
                
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontSize:40,
                color:'white',
            },
            tabBarStyle: {
                backgroundColor: 'rgba(55,55,255,0.5)',
                height:70,
                padding:10,
                margin:10,
                borderWidth:0,
                borderRadius:20
            },
            tabBarLabelStyle: {
                color:'white',
            },
            tabBarInactiveTintColor:'white'
        }}
        >
        <Tabs.Screen 
          name="favorites" 
          options={{
            tabBarIcon: () => (
              <Ionicons name="heart" color="white" size={25} />
            ),
            headerTitle:'Favorites',
            tabBarLabel:'Favorites'
          }}
        />

        <Tabs.Screen 
          name='playlist' 
          options={{
            tabBarIcon: () => (
                <MaterialCommunityIcons name="playlist-music" size={25} color="white" />  
            ),
            headerTitle:'Playlists',
            tabBarLabel:'Playlists'
          }}
        />

        <Tabs.Screen 
          name='index' 
          options={{
            tabBarIcon: () => (
            //   <Ionicons name="playlist" color="white" size={25}/>
            <Ionicons name="musical-notes" size={25} color="white" />  
            ),
            headerTitle:'Songs',
            tabBarLabel:'Songs'
          }}
        />
        <Tabs.Screen 
          name='artist' 
          options={{
            tabBarIcon: () => (
                <MaterialIcons name="group" size={25} color="white" />  
            ),
            headerTitle:'Artist',
            tabBarLabel:'Artist'
          }}
        />

        </Tabs>
        {/* Tabs */}
    </View>
  )
}

export default _layout