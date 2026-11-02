import { Modal, Text, TextInput, Button, Surface } from 'react-native-paper';
import { View } from 'react-native';

import { useState } from 'react';

const CreateTodo = ({
    onDismiss,
}) => {
    const [text, setText] = useState('');
    const containerStyle = { backgroundColor: 'white', padding: 20 };

    return (
        <Modal visible={true} onDismiss={onDismiss} contentContainerStyle={containerStyle}>
            <Text>Create a new todo</Text>

            <View style={{flexDirection: 'row', gap: 10, justifyContent: 'space-between'}}>
                <TextInput
                    label="Name"
                    value={text}
                    style={{flex: 1}}
                    type="outlined"
                    onChangeText={text => setText(text)}
                />

                <Button style={{justifyContent: 'center'}} icon="plus" mode="contained" onPress={() => console.log('Pressed')}>
                    Add
                </Button>
            </View>
        </Modal>
    );
};

export default CreateTodo;
