import React from 'react';
import { View } from 'react-native';
import { Button, TextBox, Title, Grade } from './styles';

export default function ContentListItem({ item }) {
  return (
    <Button>
      <TextBox>
        <Title>{item.name}</Title>
        <Grade>{item.grade} EM</Grade>
      </TextBox>
    </Button>
  );
}
