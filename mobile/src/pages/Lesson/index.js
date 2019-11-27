import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { mocky } from '../../services/mocky';
import LessonListItem from './components/LessonListItem';
import { Container } from './styles';

export default function Lesson({ navigation }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    mocky.get(`contents/${navigation.state.params.content_id}/lessons/`).then(({ data }) => {
      console.log(navigation);
      setList(data);
    });
  }, [navigation]);

  return (
    <Container>
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
          <LessonListItem item={item} navigation={navigation} />
        )}
      />
    </Container>
  );
}
