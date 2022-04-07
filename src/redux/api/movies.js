import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const headers = {
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
    'X-RapidAPI-Key': 'ac41ca6dafmsh8f97cc63a62b494p10630bjsnfa792c0ef491'
};

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://online-movie-database.p.rapidapi.com' }),
    endpoints: (builder) => ({
      getFilmByTitle: builder.query({
        query: (title) => ({
            url: `/title/find?q=${title}`,
            method: 'GET',
            headers
        })
      }),
      getDetailById: builder.query({
        query: (id) => ({
            url: `/title/get-details?tconst=${id}`,
            method: 'GET',
            headers
        })
      }),
      getRatingsById: builder.query({
        query: (id) => ({
            url: `/title/get-ratings?tconst=${id}`,
            method: 'GET',
            headers
        })
      }),
      getTopCastById: builder.query({
        query: (id) => ({
            url: `/title/get-top-cast?tconst=${id}`,
            method: 'GET',
            headers
        })
      }),
      getOverviewDetailsById: builder.query({
        query: (id) => ({
            url: `/title/get-overview-details?tconst=${id}`,
            method: 'GET',
            headers
        })
      }),
      getFullCreditsById: builder.query({
        query: (id) => ({
            url: `/title/get-full-credits?tconst=${id}`,
            method: 'GET',
            headers
        })
      })
    })
});

export const { 
  useGetFilmByTitleQuery, 
  useGetDetailByIdQuery,
  useGetRatingsByIdQuery,
  useGetTopCastByIdQuery,
  useGetOverviewDetailsByIdQuery,
  useGetFullCreditsByIdQuery,
} = moviesApi;