import { MailOutlined } from '@ant-design/icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function GUI_3() {
   return (
      <View style={styles.container}>
         <LinearGradient
            colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']}
            locations={[0.03, 0.321, 0.852]}
            style={styles.background}
         >
            <Image source={require('../assets/lock-152879 1.png')} style={styles.lock} />
            <Text style={styles.forgot_pass}>FORGOT {'\n'} PASSWORD</Text>
            <Text style={styles.desc}>
               Provide your account’s email for which you want to reset your password (1_b)
            </Text>
            <View style={styles.input_container}>
               <MailOutlined style={{ fontSize: 24, marginLeft: 8, marginRight: 8 }} />
               <TextInput placeholder="Email" style={styles.input} />
            </View>
            <TouchableOpacity style={styles.button}>
               <Text style={styles.button_text}>NEXT</Text>
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
   lock: {
      width: 105,
      height: 117,
      marginTop: 76,
   },
   forgot_pass: {
      fontWeight: '700',
      fontSize: 25,
      textAlign: 'center',
      marginTop: 38,
      marginBottom: 32,
   },
   desc: {
      fontSize: 15,
      fontWeight: '700',
      width: 302,
      textAlign: 'center',
   },
   input_container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 16,
      marginBottom: 43,
      backgroundColor: '#C4C4C4',
   },
   input: {
      width: 257,
      height: 45,
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
