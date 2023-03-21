import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/*

Here I am working to isolate the data fetching to the redux store rather than keeping the results inside the local component 

I can define the endpoints upfront here so I can really see the usefulness of this... 

*/

const BASE_URL = `https://opentdb.com`;

export type Category = {
  id: number;
  name: string;
};

export interface CategoryAPI {
  trivia_categories: Category[];
}

export interface Results {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuizQuestions {
  response_code: number;
  results: Results[];
}

interface QuizParams {
  amount: number;
  category: string;
  difficulty: string;
  type: string;
}

export const OpenTriviaApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }), //no api key needed for this api
  endpoints: (build) => ({
    getCategories: build.query<CategoryAPI, void>({
      query: () => `/api_category.php`,
    }),
    getQuiz: build.query<QuizQuestions, QuizParams>({
      query: (arg) => {
        const { amount, category, difficulty, type } = arg;
        console.log(amount, category, difficulty, type);
        return {
          url: `/api.php`,
          params: { amount, category, difficulty, type },
        };
      },
    }),
  }),
});

// builds a hook based on options passed to endpint builder! super cool
export const { useGetCategoriesQuery, useGetQuizQuery } = OpenTriviaApiSlice;
