import React, { useState, useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import { mocky } from '../../services/mocky';
import { Container } from './styles';
import ContentListItem from './components/ContentListItem';

export default function Content({ navigation }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    mocky.get('/5ddd901b2f0000fe637eaace').then(({ data }) => {
      setList(data);
    });
  }, []);

  return (
    <Container>
      <FlatList
        data={list}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <ContentListItem item={item} navigation={navigation} />
        )}
      />
    </Container>
  );
}
