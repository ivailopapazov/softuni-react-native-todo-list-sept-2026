import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import TopBar from './components/top-bar/TopBar';
import BottomBar from './components/bottom-bar/BottomBar';
import CreateTodo from './components/create-todo/CreateTodo';
import { TodoProvider } from './contexts/TodoContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <TodoProvider>
        <View style={{ flex: 1 }}>
          <TopBar />

          <CreateTodo />

          <BottomBar />
        </View>
      </TodoProvider>
    </SafeAreaProvider>
  );
}

