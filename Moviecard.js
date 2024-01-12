import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Moviecard = ({img, h1, p}) => {
  return (
    <View style={styles.movieCard}>
        <Image 
        style={styles.image}
        source={  img  }
        />  
        <Text style={styles.h1}>{h1}</Text>
        <Text style={styles.p}>{p}</Text>
    </View>
  )
}

export default Moviecard

const styles = StyleSheet.create({
    movieCard: {
        backgroundColor: 'beige',
        height: 700,
        width: 350,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 20,
        margin: 30,
        // marginTop: 100,

    },

    image: {
        height: 450,
        width:300,
        borderRadius: 20,
    },

    h1: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    p: {
        paddingHorizontal: 30,
    }
})