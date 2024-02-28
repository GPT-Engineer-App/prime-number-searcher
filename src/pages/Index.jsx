import React, { useState } from "react";
import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";

// Helper function to check if a number is prime
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

// Helper function to check if a number is a Mersenne prime
const isMersennePrime = (p) => {
  if (!isPrime(p)) return false;
  const mersenneNumber = Math.pow(2, p) - 1;
  return isPrime(mersenneNumber);
};

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [mersennePrimes, setMersennePrimes] = useState([]);

  const findMersennePrimes = () => {
    const maxP = parseInt(inputValue, 10);
    if (isNaN(maxP)) {
      alert("Please enter a valid number");
      return;
    }

    const primes = [];
    for (let p = 2; p <= maxP; p++) {
      if (isMersennePrime(p)) {
        primes.push(Math.pow(2, p) - 1);
      }
    }

    setMersennePrimes(primes);
  };

  return (
    <VStack spacing={4}>
      <Box>
        <Text>Enter a number to find Mersenne primes up to 2^p - 1:</Text>
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter a number" size="md" />
        <Button onClick={findMersennePrimes} mt={2}>
          Find Mersenne Primes
        </Button>
      </Box>
      <Box>
        {mersennePrimes.length > 0 && <Text>Mersenne primes found:</Text>}
        {mersennePrimes.map((prime, index) => (
          <Text key={index}>{prime}</Text>
        ))}
      </Box>
    </VStack>
  );
};

export default Index;
