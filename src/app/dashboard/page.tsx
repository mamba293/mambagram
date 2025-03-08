import Post from "@/components/posts/post";
import StoryCarousel from "@/components/stories/StoryCarousel";

function DashboardPage(){
  return( 
  <div className=" flex max-w-[630px] w-full pt-8 pl-32">
    <div className=" display-flex justify-center">
      <StoryCarousel/>
    </div>
  </div>
  )
}

export default DashboardPage;