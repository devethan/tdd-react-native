import React, {useState} from 'react'
import { View, TextInput, Button } from 'react-native'

const AddToDo = (props) => {
    const [toDoItem, setToDoItem] = useState('');
    return (
        <View>
            <TextInput onChangeText={text => setToDoItem(text)}/>
            <Button title="Input" onPress={() => props.onAdded(toDoItem)}/>
        </View>
    )
}

export default AddToDo
