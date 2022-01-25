import React from 'react';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconBtnProps = {
  btnName: string;
  iconName: string;
  handleShareBtn: () => void
};

export const IconButton = ({btnName, iconName, handleShareBtn}: IconBtnProps) => (
  <Button
    title={btnName}
    type="outline"
    icon={{
      name: 'home',
      type: 'font-awesome',
      size: 15,
      color: 'orange',
    }}
    buttonStyle={{
      backgroundColor: 'rgba(90, 154, 230, 1)',
      borderColor: 'transparent',
      borderWidth: 0,
      borderRadius: 30,
    }}
    containerStyle={{
      width: 100,
      height: 50,
      marginHorizontal: 50,
      marginVertical: 10,
    }}
    onPress={handleShareBtn}
  />
);
