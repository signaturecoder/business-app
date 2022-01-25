import * as React from 'react';
import { StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {useState} from 'react';
// import {Text} from '../components/atoms/Text';
import ItemInfo from '../components/atoms/ItemInfo';
// import {ADD_ITEM} from '../constants/RouteName';

const ItemList = [
  {
    id: 1,
    userId: 'u1',
    name: 'Asami Gamcha',
    photo: require('../assets/images/gamcha_1.jpeg'),
    size: '78 inch * 78 inch',
    price: '50',
  },
  {
    id: 2,
    userId: 'u1',
    name: 'Prakash Gamcha',
    photo: require('../assets/images/gamcha_2.jpeg'),
    size: '78 inch * 78 inch',
    price: '100',
  },
  {
    id: 3,
    userId: 'u2',
    name: 'Foota A',
    photo: require('../assets/images/gamcha_3.jpeg'),
    size: '78 inch * 78 inch',
    price: '120',
  },
  {
    id: 4,
    userId: 'u1',
    name: 'Prakash Gamcha',
    photo: require('../assets/images/gamcha_2.jpeg'),
    size: '78 inch * 78 inch',
    price: '100',
  },
  {
    id: 5,
    userId: 'u2',
    name: 'Foota A',
    photo: require('../assets/images/gamcha_3.jpeg'),
    size: '78 inch * 78 inch',
    price: '120',
  },
  {
    id: 6,
    userId: 'u1',
    name: 'Prakash Gamcha',
    photo: require('../assets/images/gamcha_2.jpeg'),
    size: '78 inch * 78 inch',
    price: '100',
  },
  {
    id: 7,
    userId: 'u2',
    name: 'Foota A',
    photo: require('../assets/images/gamcha_3.jpeg'),
    size: '78 inch * 78 inch',
    price: '120',
  },
];

const renderItems = ({item}: any) => (
  <ItemInfo
    key={item.id}
    itemName={item.name}
    itemImage={item.photo}
    itemPrice={item.price}
    itemSize={item.size}
  />
);

export default function ViewItemsScreen({navigation}: any) {
  // const [items, setItems] = useState(ItemList);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ItemList}
        renderItem={renderItems}
        keyExtractor={(item: any) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'orange'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
