import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, FlatList, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TextInput, Button, Card, Title } from 'react-native-paper';

import { addTodo, deleteTodo } from '../../store/ducks/todos/actions';
import { loadRequest } from '../../store/ducks/repositories/actions';

import { ApplicationState } from '../../store/';

import styles from './styles';

export const Home: React.FC = () => {
  const dispatch = useDispatch();

  const todos = useSelector(({ todos }: ApplicationState) => todos);
  const repositories = useSelector(({ repositories }: ApplicationState) => repositories);

  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.length === 0) {
      Alert.alert('Erro', 'Entre com um Nome');
      return;
    }

    const id = Math.random().toString(36).substr(2);

    dispatch(addTodo(id, text));
    setText('');
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  useEffect(() => {
    dispatch(loadRequest());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <TextInput
          label="Nome"
          value={text}
          onChangeText={text => setText(text)}
          style={styles.input}
          onSubmitEditing={() => handleAddTodo()}
          returnKeyType="done"
        />
        <Button
          style={styles.button}
          icon="plus"
          mode="contained"
          onPress={handleAddTodo}
        >
          Add
        </Button>
      </View>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card>
            <Card.Content>
              <Title>{item.name}</Title>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => handleDeleteTodo(item.id)}>Remove</Button>
            </Card.Actions>
          </Card>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};