  
  
  
 import React from 'react';

 function App() {
   return (
     <div style={{ textAlign: "center", padding: "50px" }}>
       <h1>Welcome to My First React App!</h1>
       <p>This is my first React project. 🎉</p>
       
     </div>
   );
 }
 
 export default App;

 function Video({ video }) {
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}