import React, { useState, useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import { mocky } from '../../services/mocky';
import { Container, EmptyText } from './styles';
import ExerciseListItem from './components/ExerciseListItem';

export default function Exercise({ navigation }) {
  const [list, setList] = useState([
    {
      id: 1,
    },
  ]);

  useEffect(() => {
    // mocky.get(`/contents/${navigation.state.params.id}`).then(({ data }) => {
    //   setList(data);
    // });
  }, []);

  return (
    <Container>
      <FlatList
        data={list}
        keyExtractor={item => String(item.id)}
        ListEmptyComponent={
          <EmptyText>Essa matéria ainda não possui conteúdo</EmptyText>
        }
        renderItem={({ item }) => (
          <ExerciseListItem item={item} navigation={navigation} />
        )}
      />
      {/* <Text
        style={{ fontSize: 16, color: '#fff', fontWeight: 'bold' }}
      >{`const places = [${'\n'}${'\xa0'}${'\xa0'}{${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}id: 1,${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}place: 'Berlin',${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}country: 'Alemanha'${'\n'} ${'\xa0'}${'\xa0'}},${'\n'} ${'\xa0'}${'\xa0'}{${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}id: 2,${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}place: 'Pearl Harbor',${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}country: 'Estados Unidos'${'\n'} ${'\xa0'}${'\xa0'}},${'\n'} ${'\xa0'}${'\xa0'}{${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}id: 3,${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}place: 'Londres',${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}country: 'Inglaterra'${'\n'} ${'\xa0'}${'\xa0'}}]${'\n'} ${'\n'} const attackers = [{${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}id: 1,${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}country: "Japão"${'\n'} ${'\xa0'}${'\xa0'}}, {${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}id: 2,${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}country: "Alemanha",${'\n'} ${'\xa0'}${'\xa0'}}, {${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}id: 3,${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}country: "Itália"${'\n'} ${'\xa0'}${'\xa0'}}]${'\n'} ${'\n'} const attacker = attackers.find(a => a.id == @input1);${'\n'} const {place, country} = places.find(p => p.id == @input2)${'\n'} ${'\n'} console.log(attacker.country + 'ataca' + place + 'no seguinte país: ' + country)`}</Text> */}
    </Container>
  );
}
