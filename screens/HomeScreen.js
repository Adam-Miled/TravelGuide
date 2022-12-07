import { View, Text,Image, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {HeroImage} from "../assets/index";
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="mt-8 bg-white flex-1 relative" >


      {/* LOGO */}

<View className="flex-row mt-8 items-center space-x-1 px-6">
<View className="w-16 h-16 bg-red-500 rounded-2xl items-center justify-center"> 
  <Text className="  text-xl font-semibold">Maz</Text>
  </View>
<Text className=" text-xl font-semibold text-red-500">ART</Text>

</View>

 {/* Text Part */}

<View className="px-6 mt-8 space-y-3">
<Text className="text-[40px]">Découvrez le monde</Text>
<Text className="text-[36px] text-red-500 font-bold">Vivez l'instant</Text>

<Text className="text-base">Réservez dans 85 000 destinations dans le monde. Réservation rapide et facile.
Sans frais de réservation. Nous parlons votre langue. Annulation gratuite. Obtenez -10 % avec MazART.</Text>
</View>



{/* Image Part */}

<View className="w-[400px] h-[400px] bg-red-500 rounded-full absolute bottom-36 -right-36"></View>
<View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute -bottom-28 -left-36"></View>

<View className="flex-1 relative items-center justify-center">
  <Animatable.Image 
  animation="fadeIn"
  easing="ease-in-out"

  className="w-full h-full mt-10 object-cover" source={HeroImage}/>



{/* Button */}

  <TouchableOpacity onPress={() => navigation.navigate("Discover")} 
  className="absolute bottom-20 w-24 h-24  border-l-2 border-r-2 border-t-4 rounded-full items-center justify-center
   border-[#00BCC9]">
  <Animatable.View 
  
  animation="pulse"
  easing="ease-in-out"
  iterationCount={"infinite"}
  
  className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
    <Text className="text-gray-50  font-semibold">LANCER</Text>
  </Animatable.View>
 
</TouchableOpacity>

</View>






    </SafeAreaView>
  );
};

export default HomeScreen;
