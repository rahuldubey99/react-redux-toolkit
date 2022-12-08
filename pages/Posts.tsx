import { useCreatePostMutation, useDeletePostMutation, useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useUpdatePostMutation } from "../services/Post";

const Posts = () => {
  // const responseInfo  = useGetAllPostQuery()
//   const responseInfo = useGetPostByIdQuery(5);
//   const responseInfo = useGetPostByLimitQuery(5);
//   const [deletePost,responseInfo] = useDeletePostMutation();
//   const [createPost,responseInfo] = useCreatePostMutation();
  const [updatePost,responseInfo] = useUpdatePostMutation();

  console.log(responseInfo);
  if (responseInfo.isLoading) {
    return <h1>Loading...</h1>;
  }
  if (responseInfo.isError) {
    return <h1>{responseInfo?.error?.status}</h1>;
  }
//   return (
//     <>
//       <h1>Posts by ID</h1>
//       <h3>
//         {responseInfo?.data?.id} {responseInfo?.data?.title}{" "}
//       </h3>
//       <p>{responseInfo?.data?.body}</p>
//     </>
//   );
// return (
//     <>
//     <h1>Post By Limit</h1>
//     {responseInfo?.data.map((post:any)=>
//         <>
//             <h3>{post?.id} {post?.title}</h3>
//             <p>{post?.body}</p>
//             <hr />
//         </>
//     )}
//     </>
// )
// return (
//     <>
//     <h1>Delete Post</h1>
//     <button onClick={()=>deletePost(1)}>Delete Post</button>
//     </>
// )
// return (
//     <>
//     <h1>Create Post</h1>
//     <button onClick={()=>createPost({
//         title:'New Post',
//         body:'New Post',
//         userId:1
//     })}>Create Post</button>
//     </>
// )
return (
    <>
    <h1>update Post</h1>
    <button onClick={()=>updatePost({
        id:1,
        title:'update Post',
        body:'update Post',
        userId:1
    })}>update Post</button>
    </>
)
};

export default Posts;
