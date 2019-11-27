import React from 'react';
import { Button, SubjectName } from './styles';

export default function SubjectListItem({ item, navigation }) {
  return (
    <Button
      onPress={() =>
        navigation.navigate('Content', { id: item.id, name: item.name })
      }
      color={item.color}
    >
      <SubjectName>{item.name}</SubjectName>
    </Button>
  );
}
