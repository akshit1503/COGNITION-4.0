import {
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import { useState } from "react";

export default function App() {
  // Think of them for now as custom variables whose value gets changed then whole page gets rerendered.
  const [randomNumber, setRandomNumber] = useState(0);
  const [inputValue, setInputValue] = useState("1");
  const [guessCount, setGuessCount] = useState(0);

  // Generates Random Number Function

  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 10));
  };

  // Explanation Math.Random generates a floating number between 0 to 1 then we multiply it by 10 to get number between 0 - 10
  // Since the number is floating we have to make sure its integer
  // Thus we floor take the floor of the floating number.

  // This is check Guess Number Function where we take the custom variable that we defined above as input
  // This input is string by default so we first convert it to number by using Number
  // And then we check accordingly the Guess.
  // Alert is used for pop up Alert. Will be teached in later lectures.

  const checkGuessNumber = () => {
    const intInputNumber = Number(inputValue);
    if (intInputNumber === randomNumber) {
      Alert.alert("Yay You Guessed It Right !");
    } else if (intInputNumber > randomNumber) {
      Alert.alert("Your Guess Was too High !");
      setGuessCount(guessCount + 1);
    } else if (intInputNumber < randomNumber) {
      Alert.alert("Your Guess was too Low !");
      setGuessCount(guessCount + 1);
    } else {
      return;
    }
  };

  // This is our Frontend UI Code.
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={generateRandomNumber}>
        <Text>Generate Random Number</Text>
      </Pressable>
      <Text>Enter the Guess Number !</Text>
      <TextInput
        value={inputValue}
        onChangeText={setInputValue}
        keyboardType="numeric"
      />
      <Pressable onPress={checkGuessNumber}>
        <Text>Check The Guess</Text>
      </Pressable>
      <Text>Your Guess Count was: {guessCount}</Text>
      {/* <Text>Random Number: {randomNumber}</Text> */}
    </SafeAreaView>
  );
}

// This thing is for styling

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
