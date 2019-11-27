import React from 'react';
import { View } from 'react-native';
import { Button, TextBox, Title, Grade } from './styles';

export default function ContentListItem({ item, navigation }) {
  return (
    <Button
      grade={item.grade}
      onPress={() => navigation.navigate('Lesson', { id: item.id })}
    >
      <TextBox>
        <Title>{item.name}</Title>
        <Grade>{item.grade} EM</Grade>
      </TextBox>
    </Button>
  );
}
