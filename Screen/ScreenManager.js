import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  FlatList,
  Modal,
  TextInput,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';


export default function Manager(props) {

  // const [isShowForm, setShowForm] = useState(false);
  const [list, setList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const nav = props.navigation;

  const isFocused = useIsFocused();

  const API_PRODUCT = 'http://192.168.0.107:3000/Product';

  const getProduct = () => {
    fetch(API_PRODUCT)
      .then(res => res.json())
      .then(data => {
        setList(data);
        setLoading(false);
      });
  }

  useEffect(() => {
    getProduct();
  }), [isFocused];

  const onEdit = (itemId) => {
    fetch(`${API_PRODUCT}/${itemId}`)
      .then(res => res.json())
      .then(data => nav.navigate('AddorEdit', { editData: data }));
  }

  const onDelete = (deleteId) => {
    Alert.alert(
      'DELETE ?',
      'Xoa cua hang nay di',
      [
        {
          text: 'yes',
          onPress: async () => {
            fetch(`${API_PRODUCT}/${deleteId}`, {
              method: 'DELETE',
            }).then(res => getProduct());
          },style: 'default'
        },
        {
          text: 'no',
          onPress: async () => {;}
        }
      ],
      {
        cancelable: true,
        onDismiss: () =>{
        }
      }
    );
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.btnCss}
        onPress={() => nav.navigate('AddorEdit')}
      >
        <Text style={styles.textCss}> AddNew</Text>
      </Pressable>

      <View >
        {
          isLoading
            ? <Text style={{ fontSize: 30 }}>Loading...</Text>
            : <FlatList
              data={list}
              renderItem={({ item }) =>
                <View style={styles.viewBranch}>
                  <ScrollView>
                    <View style={{ flexDirection: 'row' }}>
                      <Image source={{ uri: item.logo }} style={styles.imgeLogoCss} />
                      <View>
                        <Text style={{ fontSize: 10 }}>Id: {item.id}</Text>
                        <Text style={{ fontSize: 15 }}>Name: {item.name}</Text>
                        <Text>Adress: {item.adress}</Text>
                        <Text style={{ fontSize: 15 }}>Phome Number: {item.phoneNumber}</Text>
                        {
                            item.status
                            ?<Text>Status: khich hoat </Text>
                            :<Text>Status: khong kich hoat</Text>
                        }
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                      <Pressable
                        style={styles.btn1Css}
                        onPress={() => onDelete(item.id)}
                      >
                        <Text style={styles.textCss}> Delete</Text>
                      </Pressable>

                      <Pressable
                        style={styles.btn1Css}
                        onPress={() => onEdit(item.id)}
                      >
                        <Text style={styles.textCss}>Edit</Text>
                      </Pressable>
                    </View>
                  </ScrollView>
                </View>
              }
              keyExtractor={(item) => item.id}
            />
        }
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
    paddingTop: 20,
    paddingBottom: 100,
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

  btn1Css: {
    width: 70,
    height: 30,
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
  },

  textCss: {
    color: 'red',
  },

  viewBranch: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 2,
    marginTop: 10,
    borderRadius: 20,
    padding: 10,
    width: 350,
  },

  textIpCss: {
    paddingLeft: 20,
    width: 300,
    height: 50,
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 30,
    marginTop: 15,
  },

  viewBtn: {
    flexDirection: 'row',
    marginTop: 50,
  },

  modalCss: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },

  imgeLogoCss: {
    width: 70,
    height: 70,
    marginTop: 20,
    marginRight: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
  },
});