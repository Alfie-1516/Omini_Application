import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const App = () => {
  const [views, setViews] = useState([]);

  const addView = () => {
    setViews([...views, {}]); // Add a new view object to the array
  };

  return (
    <View style={styles.container}>
      <Button title="Add View" onPress={addView} />
      <View style={styles.innerContainer}>
        {views.map((view, index) => (
          <View key={index} style={styles.dynamicView} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  dynamicView: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    margin: 10,
  },
});

export default App;
