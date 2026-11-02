import { List } from "react-native-paper";
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export default function TodoList() {
    const { todos } = useContext(TodoContext);
    
    return (
        <List.Section>
            {todos.map((todo) => (
                <List.Item key={todo.id} title={todo.text} />
            ))}
        </List.Section>
    );
}
