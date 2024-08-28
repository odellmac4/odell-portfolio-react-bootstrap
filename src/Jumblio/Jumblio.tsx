import React, {useState} from 'react';
import Keyboard from './Keyboard.tsx'
import Results from './Results.tsx'
import "./Jumblio.css";
import { Container } from 'react-bootstrap';

function Jumblio() {
  const INITIAL_WORD = 'reasonable';
  const [word, setWord] = useState<string>(INITIAL_WORD);
  const [jumbledWord, setJumbledWord] = useState<string>('');
  const [selectedLetter, setSelectedLetter] = useState<string>('');
  const [guesses, setGuesses] = useState<string[]>([]);
  const [hasWon, setHasWon] = useState<boolean>(false);

  
  const jumbleString = (word: string) => {
    const chars = word.split(''); // Convert string to array of characters
    for (let i = chars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chars[i], chars[j]] = [chars[j], chars[i]]; // Swap elements
    }
    
    setJumbledWord(chars.join(''));
    setHasWon(false);
  };

  const handleRecordGuess = (guess: string): void => {
    if (guess === word[0]) {
      // Update the word by removing the first letter
      const updatedWord = word.slice(1);
      setWord(updatedWord);
      setGuesses(prevGuesses => [...prevGuesses, guess]);

      // Check if the word is empty, which means the user has won
      if (updatedWord === '') {
        setWord(INITIAL_WORD);
        setGuesses([]);
        setJumbledWord('');
        setHasWon(!hasWon);
        console.log('You win!');
      }
    } else {
      setWord(INITIAL_WORD); // Reset to initial word
      setGuesses([]);
      setJumbledWord(''); // Optionally reset jumbledWord if needed
      setHasWon(false);
    }
  };

  const handleKeyboardClick = (letter: string) => {
    if (jumbledWord) {
      handleRecordGuess(letter);
    } else {
      handleRecordGuess('');
      setJumbledWord('')
    }
    
  };

  return(
    <section id='jumblio'>
      <Container>
        <h1 className="fw-bold text-primary">Jumblio</h1>
        <Results
          word={word}
          jumbledWord={jumbledWord}
          jumbleString={jumbleString}
          guesses={guesses}
          hasWon={hasWon}
        />
        <Keyboard onLetterClick={handleKeyboardClick}/>
      </Container>
    </section>
    
  );
};

export default Jumblio