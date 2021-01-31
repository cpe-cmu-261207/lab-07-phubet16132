import { useEffect, useState } from "react";
import axios from "axios";
import CoursePost from "../../component/CoursePost"
import { isLocalURL } from "next/dist/next-server/lib/router/router";
import Link from "next/link";

const baseURL = "https://dummyapi.io/data/api";
const appID = "600b933802fab9402963a47e";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}/post`, { headers: { "app-id": appID } })
      .then((res) => {
        setPosts(res.data.data);
      });
  }, []);

  function renderPosts() {
    return posts.map((post) => {
      return (
          <CoursePost {...post} key={Math.random()}/>
      );
    });
  }
  if(posts.length){
      return (
        <>
          <div>
            <div className="MainPageTemplate">
            <Link href={`./portfolio`}>
                <h1 className="MainPageLink">PORTFOLIO</h1>
            </Link>
            <Link href={`./GPAcalculator`}> 
                <h1 className="MainPageLink">GPA CALCULATOR</h1>
            </Link>
            <Link href={`./post`}>
                <h1 className="MainPageLink">DUMMY API</h1>
            </Link>
            </div>
          </div>


          <div className="header">
            <h1 className="header-txt">PICTURE POSTS</h1>
          </div>
          <div className="news-feed-template">{renderPosts()}</div>
        </>
      );
  }
  else{
    return (
      <>
        <div className="loader-container">
          <div className="loader"></div>
        </div>  
      </>
    );
    }
};

export default Posts;
