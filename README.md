# Simple Quiz App

## GOALS

- simple SPA where you first select options for a quiz, then you are directed through the Quiz of your options one question at a time
- Users and chose defaults if they want (10 random questions)
- using Open [Trivia DB API](https://opentdb.com/)

## Documenting the process

### Monday March 20th, 2023,

- decided to use vite, due to its increasing popularity and speed
- the CLI is great
- using styled components to gain more experience with the library
- starting by fetching the categories form the api and setting up a form to take in the users selection of settings
- thinking of setting up Redux for managing all quiz settings via a simple reducer
- I can probably not use Redux but it could be a good way to experiment?

### Tuesday March 21st, 2023,

- strep throat again!
- decided to add redux, mainly to learn about it in a simple use case
- learning with Mark Erikson linked on the Redux docs
- this is actually amazing! getting the url builder set up and fetching data and how it prebuilds a react hook to use inside components is great
- not sure how this works with useEffect? I guess the side effects are contained within the internal wrapper itself
- currently I am making two calls via API slice, one to get categories to be displayed the other is constantly fetching and caching the data of quiz questions on change, this should just be done once on a button click...i may rework this but the createApi is so magically its hard not to want to use it!
