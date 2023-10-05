import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function GUI_2() {
   return (
      <View style={styles.container}>
         <LinearGradient
            colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']}
            locations={[0.03, 0.321, 0.852]}
            style={styles.background}
         >
            <View style={styles.ellipse}>llL</View>
            <Text style={styles.text1}>GROW {'\n'} YOUR BUSINESS</Text>
            <Text style={styles.text2}>We will help you to grow your business using {'\n'} online server</Text>
            <View style={styles.action}>
               <TouchableOpacity style={[styles.button, { marginEnd: 56 }]}>
                  <Text style={styles.button_input}>LOGIN</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.button}>
                  <Text style={styles.button_input}>REGISTRY</Text>
               </TouchableOpacity>
            </View>
            <Text style={styles.question}>HOW WE WORK?</Text>
         </LinearGradient>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      flex: 1,
   },
   background: {
      width: '100%',
      flex: 1,
      alignItems: 'center',
   },
   ellipse: {
      width: 140,
      height: 140,
      borderBlockColor: '#000',
      borderWidth: 15,
      borderRadius: 999,
      marginTop: 105,
      marginBottom: 52,
   },
   text1: {
      fontSize: 24,
      fontWeight: '700',
      marginBottom: 62,
      textAlign: 'center',
   },
   text2: {
      fontSize: 15,
      fontWeight: '700',
      textAlign: 'center',
   },
   action: {
      marginTop: 45,
      flexDirection: 'row',
   },
   button: {
      width: 120,
      height: 48,
      backgroundColor: '#E3C000',
      borderRadius: 10,
      justifyContent: 'center',
   },
   button_input: {
      fontWeight: '700',
      fontSize: 20,
      textAlign: 'center',
   },
   question: {
      fontSize: 18,
      fontWeight: '700',
      marginTop: 20,
   },
});
