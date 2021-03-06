# Hangman Requirements

This application is intended as a simple example of the software development process.
This document contains the requirements for a releasable product, as would be outlined by product management.

- [x] A person playing the game can enter a word to be guessed
  - [x] Word cannot be seen as it's typed
- [x] Word to guess is displayed on screen
  - [x] Letters are displayed as blanks (underscores) until guessed
  - [x] Other characters (e.g. spaces, apostrophes, etc.) are displayed
- [x] Letters to guess are displayed on screen
  - [x] All letters of the alphabet are displayed as buttons on screen
  - [x] Clicking a correct letter disables the button and displays the letter in the word
  - [x] Clicking an incorrect letter disables the button and displays incorrect indicator
- [x] Hangman's gallows is displayed on screen
  - [x] Empty gallows displayed initially
  - [x] With each incorrect guess another part of the body is filled in
    1. head
    2. body
    3. left arm
    4. right arm
    5. left leg
    6. right leg
- [x] Game can be reset at any point during the game
