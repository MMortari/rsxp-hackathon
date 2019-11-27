import React from 'react';
import { View } from 'react-native';
import { Button, TextBox, Title, Grade } from './styles';

export default function LessonListItem({ item }) {
  return (
    <Button>
      <TextBox>
        <Title>{item.name}</Title>
      </TextBox>
    </Button>
  );
}
