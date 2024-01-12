import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NewComp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Намайг Амаржаргал гэдэг 32 настай "Codely academy"-н сурагч. Миний анхны апп-н санаа бол: Солонгос хэл сурах апп.</Text>
      <Text style={styles.text2}>Тайлбар: Залуучуудын боловсролд нэмэр болох</Text>
    </View>
  )
}

export default NewComp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
      },
    
      text1: {
        color: 'orange',
        marginBottom: 30,
      },
    
      text2: {
        color: 'green',
      },
})