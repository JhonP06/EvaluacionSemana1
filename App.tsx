import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Clsifications } from './src/screens/Clsifications';
import { BoxsScreens } from './src/screens/BoxsScreens';



function App() {
  return (
    <SafeAreaView style={{height:'100%', width:'100%'}} >
      {/*<Clsifications/>*/}
      <BoxsScreens/>
    </SafeAreaView>
  );
}

export default App;