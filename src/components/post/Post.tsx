import PostCarousel from "./PostCarousel";
import { images as slides } from "./tData";
import { Avatar } from "antd";
import { AiOutlineEllipsis } from "react-icons/ai";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Input } from "antd";

const avatar = "https://avatarko.ru/img/kartinka/1/Crazy_Frog.jpg";

const Post = () => {
  return (
    <div className="w-[650px] pb-10 border border-gray-300  rounded-lg p-4 mb-10">
      <div className="flex flex-row gap-2 items-center ml-2 mb-2">
        <Avatar src={avatar} size="large" />
        <h2>nickName</h2>
        <button
          className="ml-auto mr-2 p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="More options"
        >
          <AiOutlineEllipsis className="w-6 h-6 text-muted-foreground" />
        </button>
      </div>
      <PostCarousel slides={slides} />
      <div className="pt-2 flex flex-col ml-2">
        <div className="flex flex-row gap-3  pb-1">
          <button>
            <Heart className="w-7 h-7" />
          </button>
          <button>
            <MessageCircle className="w-7 h-7" />
          </button>
          <button>
            <Share2 className="w-7 h-7" />
          </button>
        </div>
        <div className="">
          <p className="pb-1">12 likes</p>
          {/*  логикаа подсчета лайков */}
          <p className="pb-1">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            ducimus, rem et minima ex expedita error iste ea consequuntur
            accusamus nisi doloremque voluptatum molestias cum corrupti voluptas
            ratione facilis velit.
          </p>
          <div className="flex items-center gap-2">
            <Input
              placeholder="Add comment"
              variant="underlined"
              className="flex-1"
            />
            <button className="bg-gradient-to-r 
                  from-blue-700 to-purple-600 text-white px-2 py-1 rounded-md hover:opacity-75 transition-colors">
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
