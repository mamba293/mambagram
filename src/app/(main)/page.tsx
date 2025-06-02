'use client'

import Post from "@/components/post/Post";
import StoryCarousel from "@/components/story-carousel/StorySlider";
import InfiniteScroll from "react-infinite-scroll-component";
import {useState, useEffect} from 'react';


function MainPage() {
  const [posts, setPosts] = useState<number[]>([])
  const [hasMore, setHasMore] = useState(true)

  useEffect(()=>{
    loadMorePosts()
  }, [])

  function loadMorePosts(){
    setTimeout(()=>{
      const newPosts = Array.from({length: 5}, (_,i) =>posts.length+i+1 )
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);

      if(posts.length + newPosts.length >= 50){
        setHasMore(false)
      }
    }, 500)
  }
  

  return (
    <div className="flex flex-col ml-32 ">
      
      <div className="flex align-middle pb-10">
        <StoryCarousel />
      </div>
      <div className="mx-10 ">
        <InfiniteScroll
          dataLength={posts.length}
          next={loadMorePosts}
          hasMore={hasMore}
          loader={<h4 className="text-center mr-96 py-4">Загрузка...</h4>}
          endMessage={ 
            <p className=" py-4">Вы просмотрели все посты</p>
          }
        >
          {posts.map((postId) => (
            <Post key={postId} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default MainPage;