
import { AiFillTwitterCircle } from "react-icons/ai"
import { FaTelegram } from "react-icons/fa"
// import { IoShareSocialSharp } from "react-icons/io5"
import { AiOutlineGithub } from "react-icons/ai"
import "./BlogCard.css"

const BlogCard = ({ image, time, category, heading, content }) => {
  return (
    <div className="blogCard__container bg-gray-100/30 shadow-md">
      <div className="blogCard__top">
        <img src={image} alt="" className="blogCard__image" />
        <p className="blogCard__time">{time}</p>
      </div>
      <h3 className="text-xl font-medium">{category}</h3>
      <h5 className="font-semibold text-2xl my-2">{heading}</h5>
      <p className="text-base">{content}</p>
      {/* icons */}
      <div className="my-3 flex items-center justify-between">
        <div className="flex items-center">
          {/* <DiReact className="blogCard__icon" /> */}
          <FaTelegram className="blogCard__icon" />
          <AiFillTwitterCircle className="blogCard__icon" />
          <AiOutlineGithub className="blogCard__icon" />
        </div>
        {/* <div  >
          <IoShareSocialSharp className="blogCard__icon blogCard__icon__share" />
        </div> */}
      </div>
    </div>
  )
}

export default BlogCard
