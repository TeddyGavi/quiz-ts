# Simple Quiz App

- Fancy yourself a trivia master? Try out this [quiz app](https://quiz-ts-seven.vercel.app/), Built with TS, Open Trivia DB and Redux Toolkit.

## GOALS

- simple SPA where you first select options for a quiz, then you are directed through the Quiz of your options one question at a time
- Users can chose defaults if they want (10 random questions)
- using Open [Trivia DB API](https://opentdb.com/)
- I am not focusing on styling here! just very basic and simple styles, this is not a CSS show piece this is more about using REDUX toolkit and learning query build and caching Thanks!

## Documenting the process

- [Read More](./BIP.md)

## Views

![Basic view of app on desktop](./public/img/smartMockUp.jpg)

## Future Goals

- [ ] improve styling and responsive design
- [ ] Refactor RTK query builder
- [ ] Add support for users to save past quiz's and view a leader board

## Bugs

- certain requests to open trivia API return back nothing, not sure if this is a problem with my form inputs or maybe RTK query builder

## Dependencies

- RTK
- styled components
- React hot toast
- html-react-parser
