import { EyeFilled } from '@ant-design/icons';
import { useMemo } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RadioButton } from 'react-native-radio-buttons-group';

export default function GUI_6() {
   return (
      <View style={styles.container}>
         <Text style={styles.header}>REGISTRY</Text>
         <TextInput placeholder="Name" style={[styles.input, { marginBottom: 28 }]}></TextInput>
         <TextInput placeholder="Phone" style={[styles.input, { marginBottom: 28 }]}></TextInput>
         <TextInput placeholder="Email" style={[styles.input, { marginBottom: 28 }]}></TextInput>
         <View style={{ flexDirection: 'row', position: 'relative', marginBottom: 33 }}>
            <TextInput placeholder="Password" style={styles.input}></TextInput>
            <EyeFilled style={styles.eye} />
         </View>
         <TextInput placeholder="Birthday" style={[styles.input, { marginBottom: 28 }]}></TextInput>
         <View style={styles.gender}>
            <RadioButton containerStyle={{ paddingLeft: 20 }} id="male" />
            <Text>Male</Text>
            <RadioButton containerStyle={{ paddingLeft: 20 }} id="female" />
            <Text>Female</Text>
         </View>
         <TouchableOpacity style={styles.button}>
            <Text style={styles.button_text}>REGISTRY</Text>
         </TouchableOpacity>
         <Text style={styles.text}>When you agree to terms and conditions</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      flex: 1,
      backgroundColor: 'rgba(49, 170, 82, 0.19)',
   },
   background: {
      width: '100%',
      flex: 1,
      alignItems: 'center',
   },
   header: {
      marginTop: 40,
      fontSize: 25,
      fontWeight: '700',
      marginBottom: 62,
   },
   title: {
      fontSize: 20,
      fontWeight: '700',
      marginTop: 62,
   },
   input: {
      width: 300,
      height: 54,
      backgroundColor: 'rgba(196, 196, 196, 0.3)',
      padding: 20,
   },
   eye: {
      position: 'absolute',
      right: 21,
      top: '30%',
      fontSize: 24,
   },
   button: {
      marginTop: 20,
      width: 305,
      height: 45,
      backgroundColor: '#C34E3B',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 2,
   },
   button_text: {
      fontWeight: '700',
      color: '#fff',
   },
   text: {
      marginTop: 16,
   },
   icon: {
      width: 30,
      height: 30,
   },
   gender: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 328,
   },
});
