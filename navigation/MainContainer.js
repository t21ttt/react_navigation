import *as React from 'react';
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
//screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
//screens names
const homeName='Home';
const detailsname='Details';
const settingsname='Settings';


const tab=createBottomTabNavigator();


export default function MainContainer()
{
    return(
        <NavigationContainer>
            <tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route})=>({
                tabBarIcon:({focused,color,size})=>{
                    let iconName;
                    let rn=route.name;
                    if(rn==homeName)
                    {
                        iconName=focused?'home':'home-outline';
                    }
                    else if(rn==detailsname){
                        iconName=focused?'list':'list-outline';
                    }
                    else if(rn==settingsname){
                        iconName=focused?'settings':'settings-outline';
                    }
                     
                     return <Ionicons name={iconName} size={size} color={color}/>
                      
                },
            })}
            tabBarOptions={{
                activeTintColor:'tomato',
                inactiveTintColor:'gray',
                labelStyle:{paddingBottom:10,fontSize:10},
                style:{padding:10,height:70}
            }}
            >
     <tab.Screen name={homeName} component={HomeScreen}/>
     <tab.Screen name={detailsname} component={DetailsScreen}/>
     <tab.Screen name={settingsname} component={SettingsScreen}/>
       
            </tab.Navigator>
        </NavigationContainer>
    )
}