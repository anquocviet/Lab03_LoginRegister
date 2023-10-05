import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function GUI_4() {
   return (
      <View style={styles.container}>
         <LinearGradient
            colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']}
            locations={[0.03, 0.321, 0.852]}
            style={styles.background}
         >
            <Text style={styles.header}>CODE</Text>
            <Text style={styles.title}>VERIFICATION</Text>
            <Text style={styles.desc}>Enter ontime password sent on {'\n'} ++849092605798</Text>
            <View style={styles.input_container}>
               <TextInput style={styles.input}></TextInput>
               <TextInput style={styles.input}></TextInput>
               <TextInput style={styles.input}></TextInput>
               <TextInput style={styles.input}></TextInput>
               <TextInput style={styles.input}></TextInput>
               <TextInput style={styles.input}></TextInput>
            </View>
            <TouchableOpacity style={styles.button}>
               <Text style={styles.button_text}>VERIFY CODE</Text>
            </TouchableOpacity>
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
   header: {
      marginTop: 113,
      fontSize: 60,
      fontWeight: '700',
   },
   title: {
      fontSize: 20,
      fontWeight: '700',
      marginTop: 62,
   },
   desc: {
      marginTop: 40,
      marginBottom: 30,
      textAlign: 'center',
   },
   input_container: {
      flexDirection: 'row',
      marginBottom: 34,
   },
   input: {
      width: 50,
      height: 50,
      borderColor: '#000',
      borderWidth: 1,
   },
   button: {
      width: 305,
      height: 45,
      backgroundColor: '#E3C000',
      justifyContent: 'center',
      alignItems: 'center',
   },
   button_text: {
      fontWeight: '700',
   },
});
