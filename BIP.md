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
- handling error states is messy currently
- NOTICED a bug where if you request one question the app proceeds to end the quiz immediately, I am sure this is linked to how i am handling the index navigation,
- thats all for now!

### Wednesday March 29th, 2023

- Fixed some small errors as the score slice wasn't updated on the startOver action
- cleaned up some unused code
- adding the green highlight when the submit button is pressed
- added some extra props to the action button and started writing some JSDOC
- the MVP is basically done, I am going to move onto to a deeper project
- in the future, user support would be good to add
- clean up the redux slice and redux store
- add js doc to everything to allow more understanding of the code

#### Feel free to add any comments or suggestions that will help me understand Redux better or in a more efficient way. One thing I struggled with was how to organize the file structure, and another was how to work with cached data and the api slice builder.