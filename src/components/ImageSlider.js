import ImageData from "./ImageData"
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";

const ImageSlider=()=>{
  return(
    <section className="slider">
      <AiOutlineArrowLeft className="leftArrow"/>
      <AiOutlineArrowRight className="rightArrow"/>
      {ImageData.map((data,index)=>{
        return(
          <div className="slide" key={index}>
            <div>
              <img src={data.image} alt={data.title} className="image"/>
              <p>{data.title}</p>
            </div>
          </div>
        )
      })}
    </section>
    
  )
}

export default ImageSlider