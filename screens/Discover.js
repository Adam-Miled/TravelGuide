import { View, Text,Image, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Avatar } from "../assets";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Discover = () => {


    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);

  return (
   
    <SafeAreaView className="mt-8 bg-white flex-1 relative" >

    {/* Title Part */}
    <View className="flex-row items-center justify-between px-8 mt-10 ">
    <View>
<Text className="text-[36px] text-red-500 font-bold">Découvrez</Text>
<Text className="text-[24px] text-gray-600">notre monde aujourd'hui</Text>
    </View>

<View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
    <Image source={Avatar} className="w-full h-full rounded-md object-cover"/>
</View>

</View>

{/* Search Bar */}

<View className="flex-row items-center bg-gray-100 mx-4 rounded-xl py-2 mt-5 px-4 shadow-lg">

<GooglePlacesAutocomplete GooglePlacesDetailsQuery={{fields:"geometry"}}
        placeholder="Search"
        fetchDetails={true}
      onPress={(data, details = null) => {
       

       
        console.log(data, details);
      }}
      query={{
        key: "AIzaSyDWpuVw2apN-XgX3gmrzsHrZgr1AG4sCxQ",
        language: 'en',
      }}
    />
</View>



    </SafeAreaView>
  )
}

export default Discover