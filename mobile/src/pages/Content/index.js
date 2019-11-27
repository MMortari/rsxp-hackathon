import React, { useState, useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import { mocky } from '../../services/mocky';
import { Container, EmptyText } from './styles';
import ContentListItem from './components/ContentListItem';

Content.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('name'),
});

function Content({ navigation }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    mocky.get(`/contents/${navigation.state.params.id}`).then(({ data }) => {
      setList(data);
    });
  }, [navigation.state.params.id]);

  return (
    <Container>
      <FlatList
        data={list}
        keyExtractor={item => String(item.id)}
        ListEmptyComponent={
          <EmptyText>Essa matéria ainda não possui conteúdo</EmptyText>
        }
        renderItem={({ item }) => (
          <ContentListItem item={item} navigation={navigation} />
        )}
      />
    </Container>
  );
}

export default Content;
