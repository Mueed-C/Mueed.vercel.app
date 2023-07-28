export type Main = {
    _id: string;
    bio: {
      _type: 'block';
      children: {
        _type: 'span';
        text: string;
        // Include other properties if needed
      }[];
      // Include other properties if needed
    }[][]; // Nested array due to additional level of nesting
  };
  
  export default Main;

// export type Blog = {
//     _id: string;
//     _createdAt: Date;
//     title: string;
//     // author: {
//     //     name: string;
//     //     image: string;
//     // }
//     slug: string;
//     mainImage: string;
//     url: string;
//     categories: {
//         title:string;
//     }[];
//     body: PortableTextBlock[];
// }