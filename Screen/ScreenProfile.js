import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
} from 'react-native';

export default function Profile(props) {
  const nav = props.navigation;
  return (
    <View style={styles.container}>

      <View style={styles.viewProfileCss}>
        <Text style={styles.text2Css}>
          Thông tin cá nhân
        </Text>
        <View style={{ flexDirection: 'row', marginLeft: 15 }}>
          <Image
            style={styles.imageCss}
            source={{uri: 'https://tse4.mm.bing.net/th?id=OIP.mV3UMlwUK-g7vaz6EnlPJwAAAA&pid=Api&P=0' }}
          />
          <View style={{marginLeft: 20}}> 
            <Text style={styles.text1Css}>Name: Dao Van Binh</Text>
            <Text style={styles.text1Css}>Id: Ph26010</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.btnCss}
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
    paddingTop: 100,
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

  textCss: {
    color: '#FFFFFF',
  },

  text2Css: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
  },

  text1Css: {
    color: 'black',
    fontSize: 20,
  },

  imageCss: {
    width: 100,
    height: 100,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 100,
    marginBottom: 30,
  },

  viewProfileCss: {
    backgroundColor: '#fff',
    paddingTop: 5,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    width: 350,
    height: 170,
  },


});
