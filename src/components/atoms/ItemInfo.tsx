import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import Share from 'react-native-share';
import {files} from '../../assets/base64';
import {IconButton} from './IconButton';

type ItemInfoTypes = {
  itemName: string;
  itemImage: any;
  itemPrice: string;
  itemSize: string;
};

const ItemInfo = ({
  itemName,
  itemPrice,
  itemSize,
  itemImage,
}: ItemInfoTypes) => {
  const onShare = async (
    itemName: string,
    itemPrice: string,
    itemSize: string,
  ) => {
    const message = `Name: ${itemName} Price: ${itemPrice} Size: ${itemSize}`;
    const shareOptions = {
      message: message, // Note that according to the documentation at least one of "message" or "url" fields is required
      url: files.image3,
    };
    try {
      const result = await Share.open(shareOptions);
      console.log(JSON.stringify(result));
    } catch (error) {}
  };
  // {{uri: files.image3}}
  return (
    <View style={styles.itemWrapper}>
      <Image source={{uri: files.image3}} style={styles.itemImageWrapper} />
      <View style={styles.itemInfoWrapper}>
        <View style={styles.itemInfoContainer}>
          <Text style={styles.itemName}>{itemName}</Text>
          <Text style={styles.itemSize}>{itemSize}</Text>
          <Text style={styles.itemPrice}>Rs.{itemPrice}</Text>
        </View>
        <IconButton
          iconName="share"
          btnName="Share"
          handleShareBtn={() => onShare(itemName, itemPrice, itemSize)}
        />
      </View>
    </View>
  );
};

export default ItemInfo;

const styles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
    height: 250,
    margin: 15,
    borderStyle: 'solid',
    backgroundColor: 'white',
    borderRadius: 15,
  },

  itemImageWrapper: {
    width: "90%",
    height: '60%',
    backgroundColor: 'green',
    margin: 15,
  },
  itemInfoWrapper: {
    flexDirection: 'row',
    // flex: 1
  },
  itemInfoContainer: {
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  itemSize: {
    color: '#d6d6d6',
  },
  itemPrice: {
    fontWeight: '600',
    color: 'green',
  },
});
