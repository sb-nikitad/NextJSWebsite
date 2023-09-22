export const getPost = async (postId: string) => {
  console.log(postId);
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return await data.json();
};
