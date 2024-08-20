import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { images } from "../../constants"
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
const SignIn = () => {
    const [form, setForm] = useState({
        email:"",
        password:""
    })
const [isSubmitting, setIsSubmitting] = useState(false)
    const submit = () => {

    }
  return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView>
            <View className="w-full justify-center min-h-[83vh] px-4 my-6">
            <Image source={images.logo}
            resizeMode='contain' 
            className="w-[115px] h-[35px]"/>
            <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
                Login to Aora
            </Text>
            <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email:e})}
            otherStyles="mt-7"
            keyboardType="email-address"
            />
            <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password:e})}
            otherStyles="mt-7"
            
            />

            <CustomButton title="Sign In"
            handlePress={submit}
            containerStyle="mt-7"
            />
            <View className="justify-center pt-5 flex-row gap-2">
<Text className="text-lg text-gray-100 font-pregular">Don't have account?</Text>
<Link href="/SignUp" className='text-lg font-psemibold text-secondary'>SIgn Up</Link>
            </View>
            </View>
        </ScrollView>
    </SafeAreaView>

  )
}

export default SignIn