// // This is where we write the logic to fetch the data using the API

import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'a4801ad5e8mshfd261ff0afc73bfp1c15abjsn89d8fee9a4a2',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({
    url, Headers: cryptoApiHeaders
})

export const cryptoApi = createApi({
   reducerPath: 'cryptoApi',
   baseQuery: fetchBaseQuery({baseUrl}) ,
   endpoints: (builder) => ({
    getCryptos: builder.query({
        query: () => createRequest('/exchanges')
    })
   }) 
});
