import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getActionGame: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getRpgGame: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    getFigthGame: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    getSimulationGame: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getSportGame: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  useGetActionGameQuery,
  useGetRpgGameQuery,
  useGetFigthGameQuery,
  useGetSimulationGameQuery,
  useGetSportGameQuery,
  useGetGameQuery
} = api

export default api
