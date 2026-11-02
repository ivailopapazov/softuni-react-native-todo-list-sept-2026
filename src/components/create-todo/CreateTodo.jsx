import { Modal, Text, TextInput, Button } from 'react-native-paper';
import { View } from 'react-native';

import { useState, useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';

const CreateTodo = ({
}) => {
    const { addTodo, handleDismiss, showCreateTodo } = useContext(TodoContext);
    const [text, setText] = useState('');
    const containerStyle = { backgroundColor: 'white', padding: 20 };

    const addTodoHandler = () => {
        addTodo(text);
        setText('');
        handleDismiss();
    };

    return (
        <Modal visible={showCreateTodo} onDismiss={handleDismiss} contentContainerStyle={containerStyle}>
            <Text>Create a new todo</Text>

            <View style={{flexDirection: 'row', gap: 10, justifyContent: 'space-between'}}>
                <TextInput
                    label="Name"
                    value={text}
                    style={{flex: 1}}
                    type="outlined"
                    onChangeText={text => setText(text)}
                />

                <Button style={{justifyContent: 'center'}} icon="plus" mode="contained" onPress={addTodoHandler}>
                    Add
                </Button>
            </View>
        </Modal>
    );
};

export default CreateTodo;
