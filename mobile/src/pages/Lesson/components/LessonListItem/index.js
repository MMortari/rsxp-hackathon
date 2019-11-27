import React from 'react';
import { View } from 'react-native';
import { Button, TextBox, Title, Grade } from './styles';

export default function LessonListItem({ item, navigation }) {
  console.log(item);
  return (
    <Button
      done={item.done}
      onPress={() => navigation.navigate('Exercise', { lesson_id: item.id })}
    >
      <TextBox>
        <Title>{item.name}</Title>
      </TextBox>
    </Button>
  );
}
