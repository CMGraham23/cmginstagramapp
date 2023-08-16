import  React, {useState} from 'react';
import Suggestions from './Suggestions';
import './Timeline.css';
import Post from './posts/Post';


function Timeline() {
  const [posts ] = useState([
    {      
      user: 'christine_',
      postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlBLORxmuwMNWRDP-AHNGnLl9fO-vaHpr1iA&usqp=CAU",
      likes: 12, 
      timestamp: "2d",
    },
    {      
      user: 'toneke_',
      postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4rN33PyWHKh1AnV91DHPLsB-t-FEAjS2eA&usqp=CAU",
      likes: 115, 
      timestamp: "5d",
    },
    {
      user: 'yoneke_',
      postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEkQgRA3INFoP59sNswem8RgPwvAJTrrBzT-JJNryEYtQTbTeqsjrUxWzB-2EbFAUMbA&usqp=CAU",
      likes: 39, 
      timestamp: "1d",
    },
    {
      user: 'yoneke_',
      postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCIq1WFIqckI69eGZ67ugLdfxchy96eLR7w&usqp=CAU",
      likes: 150, 
      timestamp: "1d",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (  
            <Post 
            user={post.user}  
            postImage={post.postImage} 
            likes={post.likes} 
            timestamp={post.timestamp}
             />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
