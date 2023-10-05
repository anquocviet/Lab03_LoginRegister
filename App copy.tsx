import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GUI_1 from './components/GUI_1';
import GUI_2 from './components/GUI_2';
import GUI_3 from './components/GUI_3';
import GUI_4 from './components/GUI_4';
import GUI_5 from './components/GUI_5';

export default function App() {
   return GUI_5();
}

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      flex: 1,
      backgroundColor: '#00CCF9',
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
});
