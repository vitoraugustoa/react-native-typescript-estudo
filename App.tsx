import React from 'react';
import { SafeAreaView, StyleSheet  } from 'react-native';
import { Home } from './src/Pages/Home';
import { TasksContextProvider } from './src/context/TasksContext';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <TasksContextProvider>
        <Home />
      </TasksContextProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121214'
  }
}
);

export default App;
