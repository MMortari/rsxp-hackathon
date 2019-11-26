import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { mocky } from '../../services/mocky';
import SubjectListItem from './components/SubjectListItem';
import { Container, Title } from './styles';

export default function Main({ navigation }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    mocky.get('/5ddd86132f00002e697eaaa6').then(({ data }) => {
      console.log(navigation);
      setList(data);
    });
  }, [navigation]);

  return (
    <Container>
      {/* <Title>Matérias</Title> */}
      {list.length === 0 && (
        <ActivityIndicator
          style={{ marginTop: 10 }}
          color="#fff"
          size="small"
        />
      )}
      <FlatList
        data={list}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <SubjectListItem item={item} navigation={navigation} />
        )}
      />
    </Container>
  );
}
