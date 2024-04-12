import { COLORS, icons, images } from '@/constants'
import { Stack } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import { GoogleSignin } from '@react-native-google-signin/google-signin';


const SignUp = () => {

    const hanldleGoogleSignin = () => {
        // GoogleSignin.hasPlayServices()
        //     .then((hasPlayService) => {
        //         if (hasPlayService) {
        //             GoogleSignin.signIn()
        //                 .then(async (userInfo) => {
        //                     // setIsLoading(true);

        //                     console.log(userInfo);

        //                     // setIsLoading(false);
        //                     await GoogleSignin.signOut();
        //                 })
        //                 .catch(async (e) => {
        //                     // setIsLoading(false);
        //                     console.log('ERROR IS SIGNIN: ' + JSON.stringify(e.message));
        //                     await GoogleSignin.signOut();
        //                 });
        //         }
        //     })
        //     .catch((e) => {
        //         // setIsLoading(false);
        //         console.log('ERROR IS HAS playservice: ' + JSON.stringify(e.message));
        //     });
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen

                options={{
                    headerShown: false,
                }}
            />

            <View style={styles.container}>
                <ImageBackground source={images.screenBackGround} resizeMode="cover" style={styles.image}>
                    {/* <Text style={styles.text}>Inside</Text> */}
                    <TouchableOpacity
                        onPress={hanldleGoogleSignin}
                        style={[
                            styles.socialButton,
                        ]}
                    >
                        <Image
                            source={icons.google}
                            resizeMode='cover'
                            style={styles.btnIcon}
                        />
                        <Text
                            style={[
                                styles.loginText,
                            ]}
                        >
                            Continue with Google
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        // opacity:0.1
    },
    image: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
    socialButton: {
        backgroundColor: COLORS.lightWhite,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 6,
        // borderWidth: 1
        marginTop: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnIcon: {
        width: 40,
        height: 40,
        // height: "60%",
        // borderRadius: SIZES.small / 1.25,
    },
    loginText: { fontSize: 16, alignSelf: 'center', marginLeft: 13 },

});
export default SignUp