import React from 'react';
import { Connect } from 'aws-amplify-react';
import { API, graphqlOperation } from 'aws-amplify'
import { createBlog } from './graphql/mutations'
import Amplify from '@aws-amplify/core'
import config from './aws-exports'
import { Grid, Header, Input, List, Segment } from 'semantic-ui-react';
Amplify.configure(config)


// export const GET_POSTS = gql`
//   query GetPosts {
//     posts {
//       id
//       author
//       body
//     }
//   }
// `;
//
// export default () => (
// const data = API.graphql(graphqlOperation(createBlog, { input: {name : "blog2"}}));
//     {({ loading, data }) => !loading && (
//       <Table>
//         <thead>
//           <tr>
//             <th>Author</th>
//             <th>Body</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.posts.map(post => (
//             <tr key={post.id}>
//               <td>{post.name}</td>
//               <td>{post.createdAt}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     )}
//
// );
