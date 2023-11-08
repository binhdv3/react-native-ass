import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  TextInput,
} from 'react-native';

import { useEffect, useState } from 'react';

export default function AddNew(props) {

  const { navigation: nav, route } = props;
  const editData = route.params?.editData;
  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [status, setStatus] = useState(0);
  const [trangthai, setTrangthai] = useState('');
  const [id, setId] = useState(0);
  const [editId, setEditId] = useState(0);
  const [logo, setLogo] = useState('');

  const API_PRODUCT = 'http://192.168.23.223:3000/Product';
 

  useEffect(() => {
    if (editData) {
      setName(editData.name);
      setAdress(editData.adress);
      setPhoneNumber(editData.phoneNumber);
      setId(editData.id);
      setLogo(editData.logo);
      setStatus(editData.status);
    }
  }, [editData?.id]);

  const onSave = () => {
    const newObj = {
      name,
      adress,
      phoneNumber,
      logo,
      status,
    }

    fetch(
      !editData ? API_PRODUCT : `${API_PRODUCT}/${editData.id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        method: !editData ? 'POST' : 'PUT',
        body: JSON.stringify(newObj)
      }
    ).then((response) => nav.navigate('Manager'));
  }

  return (
    <View style={styles.container}>
      {
        editData ? <Text style={{ fontSize: 30 }}> Sửa </Text>
          : <Text style={{ fontSize: 30 }}> Thêm mới </Text>
      }


      {/* text input----- */}
      <TextInput style={styles.textIpCss}
        placeholder='name'
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput style={styles.textIpCss}
        placeholder='adress'
        value={adress}
        onChangeText={(text) => setAdress(text)}
      />

      <TextInput style={styles.textIpCss}
        placeholder='phone number'
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />

      <TextInput style={styles.textIpCss}
        placeholder='link logo'
        value={logo}
        onChangeText={(text) => setLogo(text)}
      />

      <TextInput style={styles.textIpCss}
        placeholder='status (0 or 1)'
        value={status}
        onChangeText={(text) => setStatus(text)}
      />


      {/* btn----- */}
      <View style={styles.viewBtn}>
        <Pressable
          style={styles.btnCss}
          onPress={() => nav.navigate(
            'Manager',
            onSave()
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