import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import Rover from '../Rover';

export default function App() {
  const [plateauSize, setPlateauSize] = useState(''); 
  const [initialPosition, setInitialPosition] = useState(''); 
  const [commands, setCommands] = useState(''); 
  const [output, setOutput] = useState(''); 

  const handleSubmit = () => {
   
    const [plateauWidth, plateauHeight] = plateauSize.split(' ').map(Number);
    if (isNaN(plateauWidth) || isNaN(plateauHeight)) {
      setOutput('Invalid plateau size');
      return;
    }
    const plateau = { width: plateauWidth, height: plateauHeight };

    
    const [initialX, initialY, initialDirection] = initialPosition.split(' ');
    const x = parseInt(initialX, 10);
    const y = parseInt(initialY, 10);
    if (isNaN(x) || isNaN(y) || !['N', 'E', 'S', 'W'].includes(initialDirection)) {
      setOutput('Invalid initial position');
      return;
    }

   
    const rover = new Rover(x, y, initialDirection, plateau);
    rover.executeCommands(commands);
    setOutput(rover.getPosition());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mars Rover Simulation</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter plateau size (e.g., 5 5)"
        value={plateauSize}
        onChangeText={setPlateauSize}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Enter initial position (e.g., 1 2 N)"
        value={initialPosition}
        onChangeText={setInitialPosition}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Enter commands (e.g., LMLMLMLMM)"
        value={commands}
        onChangeText={setCommands}
      />
      
      <Button title="Submit" onPress={handleSubmit} />
      
      <Text style={styles.output}>
        Final Position: {output}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#ffffff',
    color: '#333333',
  },
  output: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
