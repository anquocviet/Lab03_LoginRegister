import { EyeFilled, LinkOutlined } from '@ant-design/icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import GUI_6 from './GUI_6';

export default function GUI_7() {
   return (
      <View style={styles.container}>
         <LinearGradient colors={['#FBCB00', '#BF9A00']} locations={[0, 100]} style={styles.background}>
            <Text style={styles.header}>LOGIN</Text>
            <View style={styles.inputContainer}>
               <Image style={styles.leftIconInput} source={require('../assets/avatar_user.png')} />
               <TextInput placeholder="Name" style={styles.input}></TextInput>
            </View>
            <View style={styles.inputContainer}>
               <Image style={styles.leftIconInput} source={require('../assets/lock-152879 1.png')} />
               <TextInput placeholder="Password" style={styles.input}></TextInput>
               <EyeFilled style={styles.eye} />
            </View>
            <TouchableOpacity style={styles.button}>
               <Text style={styles.button_text}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={styles.text}>CRETE ACCOUNT</Text>
         </LinearGradient>
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
      marginTop: 82,
      marginLeft: 30,
      marginBottom: 75,
      fontSize: 30,
      fontWeight: '700',
      alignSelf: 'flex-start',
   },
   title: {
      fontSize: 20,
      fontWeight: '700',
      marginTop: 62,
   },
   inputContainer: {
      flexDirection: 'row',
      position: 'relative',
      marginBottom: 33,
      borderWidth: 1,
      borderColor: '#F2F2F2',
   },
   input: {
      width: 330,
      height: 54,
      backgroundColor: 'rgba(196, 196, 196, 0.3)',
      paddingLeft: 62,
      fontSize: 18,
   },
   leftIconInput: {
      width: 32,
      height: 32,
      position: 'absolute',
      top: '50%',
      transform: [{ translateY: '-50%' }],
      marginLeft: 9,
   },
   eye: {
      position: 'absolute',
      right: 21,
      fontSize: 24,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
   },
   button: {
      marginTop: 20,
      width: 330,
      height: 45,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 2,
   },
   button_text: {
      fontSize: 20,
      fontWeight: '700',
      color: '#fff',
   },
   text: {
      fontSize: 20,
      fontWeight: '700',
      marginTop: 45,
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
