
# Joke Generator

A simple React component that fetches and displays programming jokes using the JokeAPI.

## Features

- Fetches a random programming joke on button click.
- Uses React's `useState` for state management.
- Styled with a linked CSS file.

### Usage

- Click the button labeled "Click to generate a joke" to fetch a random programming joke.
- The joke will be displayed below the button.

## File Structure

```
/src
  ├── components
  │   └── Joke.js
  ├── styles
  │   └── Joke.css
  ├── App.js
  ├── index.js
```

## Code Explanation

### Component: `Joke`

- **State:** The `joke` state variable stores the fetched joke.
- **Function:** `fetchJoke` is triggered when the button is clicked. It makes an API call to JokeAPI and updates the `joke` state with the fetched joke.

### API Endpoint

This app uses the following API endpoint to fetch programming jokes:

`https://sv443.net/jokeapi/v2/joke/Programming?type=single`

## Styling

The component is styled using `Joke.css`. Customize it to fit your design needs.
