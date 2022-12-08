
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export  const postApi = createApi({
reducerPath: 'postApi',
baseQuery:fetchBaseQuery({
    baseUrl:'https://jsonplaceholder.typicode.com/'
}),
endpoints:(builder)=>({
    getAllPost:builder.query({
        query:()=>({
            url:'posts',
            method: 'GET',
        })
    }),
    getPostById:builder.query({
        query:(id)=>({
            url:`posts/${id}`,
            method: 'GET'
        })
    }),
    getPostByLimit:builder.query({
        query:(num)=>({
            url:`posts?_limit=${num}`,
            method: 'GET'
        })
    }),
    deletePost:builder.mutation({
        query:(id)=>{
            console.log('delete post',id)
            return {
                url:`posts/${id}`,
                method: 'DELETE'
            }
        }
    }),
    createPost:builder.mutation({
        query:(newPost)=>{
            console.log('create post',newPost)
            return {
                url:`posts`,
                method: 'Post',
                body: newPost,
                headers:{
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }
        }
    })
    ,
    updatePost:builder.mutation({
        query:(updatePost)=>{
            console.log('update post',updatePost)
            const {id,...data} = updatePost
            return {
                url:`posts/${id}`,
                method: 'Put',
                body: data,
                headers:{
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }
        }
    })

})
})

export const { useGetAllPostQuery, useGetPostByIdQuery , useGetPostByLimitQuery, useDeletePostMutation , useCreatePostMutation, useUpdatePostMutation} = postApi