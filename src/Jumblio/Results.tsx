import React, {useState} from "react"
import { Card, Button } from "react-bootstrap"

interface ResultsProps {
  word: string;
  jumbledWord: string;
  jumbleString: (word: string) => void; // Updated to accept a string argument
  selectedLetter: string;
  guesses: string[];
  hasWon: boolean;
}

function Results({
  word, 
  jumbledWord, 
  jumbleString, 
  selectedLetter, 
  guesses,
  hasWon
}: ResultsProps) {
  

  return (
    <>
    <Card className='mb-3'>
          <Card.Body>
            <Card.Title>
              Let's Get Ready to Jumble! Get your brain working with Jumblio.
            </Card.Title>
            
                <Button variant="primary" 
                onClick={() => jumbleString(word)}
                disabled={!!jumbledWord}
                >
                  Jumble
                </Button>
           
            <Card.Text className="mt-3">
              <strong>Jumbled Word:</strong> {jumbledWord}
          </Card.Text>
            <Card.Text className="mt-3">
              <strong>Results:</strong> {guesses.join(', ')}
          </Card.Text>
          {hasWon && (
            <Card.Text className="mt-3 text-success">
              <strong>Congratulations! You have won!</strong>
            </Card.Text>
          )}
          </Card.Body>
        </Card>
    </>
  )
}

export default Results