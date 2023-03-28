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

### Sunday March 26th, 2023,

- been a while...working on take home assignment
- got a game plan for navigating question component
- set up a slice to keep track of question index and use that to render the proper question component or the settings pages or a final page from the App file.
- still not happy with running the api query to get the quiz q's on every change of the selects...works for now but maybe I could use react hook form or some other way to fetch and cache data with RTK...?

### Monday March 27th, 2023,

- battling managing the cached state of the api calls and local state and issues where the cached data is being updated even when it doesn't need to be...
- I think there is a way to use local state to simply some things and move global state for certain attributes
- api calls it makes sense if i can understand it....
- currently selected answer doesn't only makes sense to keep that locally

### Tuesday March 28th, 2023

- refactored A LOT of code
- still have dome redundancy
- useMemo to stop the answer list from being re-rendered...only when the index of the question you are on changes
