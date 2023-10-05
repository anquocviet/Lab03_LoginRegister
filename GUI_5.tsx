import { EyeFilled } from '@ant-design/icons';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function GUI_1() {
   return (
      <View style={styles.container}>
         <Text style={styles.header}>LOGIN</Text>
         <TextInput placeholder="Email" style={[styles.input, { marginBottom: 28 }]}></TextInput>
         <View style={{ flexDirection: 'row', position: 'relative', marginBottom: 33 }}>
            <TextInput placeholder="Password" style={styles.input}></TextInput>
            <EyeFilled style={styles.eye} />
         </View>
         <TouchableOpacity style={styles.button}>
            <Text style={styles.button_text}>LOGIN</Text>
         </TouchableOpacity>
         <Text style={styles.text}>When you agree to terms and conditions</Text>
         <Text style={[styles.text, { color: '#5D25FA' }]}>For got your password?</Text>
         <Text style={styles.text}>Or login with</Text>
         <View style={styles.socials}>
            <View style={[styles.social, { backgroundColor: '#25479B' }]}>
               <Image style={styles.icon} source={require('../assets/icofacebook-1924510.png')} />
            </View>
            <View style={[styles.social, { backgroundColor: '#0F8EE0' }]}>
               <Image style={styles.icon} width={30} height={30} source={require('../assets/icozalo.png')} />
            </View>
            <View style={[styles.social, { backgroundColor: '#fff' }]}>
               <Image style={styles.icon} width={30} height={30} source={require('../assets/google.png')} />
            </View>
         </View>
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
   socials: {
      marginTop: 40,
      flexDirection: 'row',
      width: 328,
      height: 45,
   },
   social: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   icon: {
      width: 30,
      height: 30,
   },
});
