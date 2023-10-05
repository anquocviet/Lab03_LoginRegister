import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function GUI_8() {
   return (
      <View style={styles.container}>
         <Image style={styles.eyeImage} source={require('../assets/eye.png')} />
         <View style={styles.inputContainer}>
            <UserOutlined style={styles.inputIconLeft} />
            <TextInput placeholder="Please input username" style={styles.input} />
         </View>
         <View style={styles.inputContainer}>
            <LockOutlined style={styles.inputIconLeft} />
            <TextInput placeholder="Please input password" style={styles.input} />
         </View>
         <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonInput}>LOGIN</Text>
         </TouchableOpacity>
         <View style={styles.action}>
            <Text style={styles.actionLink}>Register</Text>
            <Text style={styles.actionLink}>Forgot Password</Text>
         </View>
         <View style={{ position: 'relative' }}>
            <View style={styles.line}></View>
            <Text style={styles.text}>Other Login Methods</Text>
         </View>
         <View style={styles.socials}>
            <Image style={styles.social} source={require('../assets/User+.png')} />
            <Image style={styles.social} source={require('../assets/Wifi.png')} />
            <View
               style={{
                  backgroundColor: '#3A579C',
                  width: 74,
                  height: 74,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
               }}
            >
               <Image
                  style={[
                     styles.social,
                     {
                        width: 32,
                        height: 45,
                     },
                  ]}
                  source={require('../assets/brandico_facebook.png')}
               />
            </View>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      flex: 1,
      backgroundColor: '#fff',
   },
   eyeImage: {
      width: 112,
      height: 107,
      marginTop: 50,
      marginBottom: 40,
   },
   inputContainer: {
      flexDirection: 'row',
      marginBottom: 20,
   },
   inputIconLeft: {
      color: '#386FFC',
      fontSize: 30,
      position: 'absolute',
   },
   input: {
      width: 300,
      height: 34,
      color: '#C4C4C4',
      borderBottomColor: '#C4C4C4',
      borderBottomWidth: 1,
      paddingLeft: 45,
      outlineWidth: 0,
      fontSize: 18,
   },
   button: {
      backgroundColor: '#386FFC',
      width: 300,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginTop: 30,
   },
   buttonInput: {
      fontSize: 18,
      fontWeight: '400',
      color: '#fff',
   },
   action: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 300,
      marginTop: 20,
      marginBottom: 45,
   },
   actionLink: {
      fontSize: 18,
      fontWeight: '400',
   },
   line: {
      width: 300,
      borderBottomWidth: 1,
      borderColor: '#0E18F5',
   },
   text: {
      position: 'absolute',
      fontSize: 18,
      fontWeight: '400',
      backgroundColor: '#fff',
      padding: 4,
      top: -16,
      left: '20%',
   },
   socials: {
      marginTop: 40,
      flexDirection: 'row',
      width: 300,
      justifyContent: 'space-between',
   },
   social: {
      width: 74,
      height: 74,
   },
});
