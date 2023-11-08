import { StatusBar } from 'expo-status-bar';
import { Button,
   StyleSheet, 
   Text, 
   View,
   Pressable,
   Image,
   } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function Home(props) {
  const nav = props.navigation;

  return (
    <View style={styles.container}>

      <Image
        style={styles.imageCss}
        source={{ uri:'https://tse4.mm.bing.net/th?id=OIP.mV3UMlwUK-g7vaz6EnlPJwAAAA&pid=Api&P=0'}}
      />
      {/* btn sang profile------------ */}
      <Pressable 
            style = {styles.btnCss}
            onPress={() => nav.navigate(
            'Profile'
          )}
       >
          <Text style={styles.textCss}> Profile</Text>
      </Pressable>
        {/* btn sang manger------------ */}
      <Pressable 
            style = {styles.btnCss}
            onPress={() => nav.navigate(
            'Manager'
          )}
       >
          <Text style={styles.textCss}> Manager</Text>
      </Pressable>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#888888',
  },

  btnCss: {
    width: 200,
    height: 50,
    borderColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: 10,
    backgroundColor: 'black',
  },

  imageCss: {
    width: 200,
    height: 200,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 20,
    borderRadius: 100,
  },

  textCss: {
    color: '#FFFFFF',
  }
});