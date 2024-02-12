import { useState } from "react";

//image imports
import blackArrow from "../../../assets/icon/Right arrow.svg";
import greenArrow from "../../../assets/icon/green-500RightArrow.svg";
import whiteArrow from "../../../assets/icon/whiteRight arrow.svg";
import clock from "../icon/Frame 154.svg";
import blog1 from "../img/blog1.svg";
import blog2 from "../img/blog2.svg";
import blog3 from "../img/blog3.svg";

function ShelterStrideBlog() {
  const [blogs, setBlogs] = useState([
    {
      image: blog1,
      alt: "discarded properties",
      title: "Stories of Hope: Transformative Journeys in Affordable Housing",
      date: "January 4, 2024",
      id: 1,
    },
    {
      image: blog2,
      alt: "A beggar receiving alms in",
      title: "Navigating the Path to Home ownership: A Comprehensive Guide",
      date: "January 15, 2024",
      id: 2,
    },
    {
      image: blog3,
      alt: "A man pushing a cart",
      title:
        "Community Building Beyond Walls: The Social Impact of Affordable Housing",
      date: "January 16, 2024",
      id: 3,
    },
  ]);
  return (
    <div className="shelterStrideBlog-wrapper">
      <div className="headerWrapper">
        <div className="blogHeaderText">
          <h3>Shelterstride Blog</h3>
        </div>
        <div className="blogHeaderBtn">
          <button>
            View all <img src={blackArrow} alt="button icon" />
          </button>
        </div>
      </div>
      <div className="blogPreviewWrapper">
        {blogs.map((blog) => (
          <div className="blogPreview" key={blog.id}>
            <div className="blogImg">
              <img src={blog.image} alt={blog.alt} />
              <h4>{blog.title}</h4>
            </div>
            <div className="blogBtn">
              <button>
                Read more
                <img src={greenArrow} alt="button" />
              </button>
            </div>
            <div className="blogDate">
              <img src={clock} alt="clock icon" />
              <p>{blog.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="blogSectBtnWrapper">
        <button>
          View more <img src={whiteArrow} alt="button icon" />
        </button>
      </div>
    </div>
  );
}

export default ShelterStrideBlog;
