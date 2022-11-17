import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    // optional if you name it 'api' because it's the default
    reducerPath: 'api', 
    // baseQuery is a lot like axios where we'll define a base query
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
    // The results get cached. We need to assign a tag to the cache and let it know which mutations 
    // invalidate the cache, so it will automatically refetch that data.
    tagTypes: ['Post'],
    // We need to have this because it's required. But we are going to creat extended slices so we can separate logic from posts and users.
    endpoints: builder => ({})
})