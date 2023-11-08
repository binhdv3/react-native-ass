import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  TextInput,
} from 'react-native';

export default function Edit(props) {

  const nav = props.navigation;

  return (
    <View style={styles.container}>

      <Text style={{ fontSize: 30 }}> Edit </Text>
      {/* text input----- */}
      <TextInput style={styles.textIpCss}>

      </TextInput>
      <TextInput style={styles.textIpCss}>

      </TextInput>
      <TextInput style={styles.textIpCss}>

      </TextInput>
      <TextInput style={styles.textIpCss}>

      </TextInput>
      <TextInput style={styles.textIpCss}>

      </TextInput>
      {/* btn----- */}
      <View style={styles.viewBtn}>
        <Pressable
          style={styles.btnCss}
          onPress={() => nav.navigate(
            'Manager'
          )}
        >
          <Text style={styles.textCss}> Save</Text>
        </Pressable>
        <Pressable
          style={styles.btnCss}
          onPress={() => nav.navigate(
            'Home'
          )}
        >
          <Text style={styles.textCss}> Cancel</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnCss: {
    width: 100,
    height: 50,
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
  },

  textCss: {
    color: 'red',
  },

  textIpCss: {
    paddingLeft: 20,
    width: 300,
    height: 50,
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 30,
    marginTop: 5,
  },

  viewBtn: {
    flexDirection: 'row'
  }
});