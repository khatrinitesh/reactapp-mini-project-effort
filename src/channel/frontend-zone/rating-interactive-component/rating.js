import React,{useState} from 'react';
import Card from './card';
import './custom.css';

export default function Rating({rating,setRating,setShowThankYoupage}) {

    const [activeRatings,setActiveRatings] = useState({
        oneStars:false,
        twoStars:false,
        threeStars:false,
        fourStars:false,
        fiveStars:false,
    })

    const handleSubmit = () => {
        if(!rating) return;
        setShowThankYoupage(true);
    }
  return (
    <>
      <Card>
       <div className='star_img_container'>
        <img src=''/>
        <h2 className='title'>how did we do?</h2>
        <p className='text'>Esse incididunt dolore commodo pariatur proident exercitation consectetur dolor nisi labore dolor fugiat eu velit. Minim id est ex Lorem sit. Enim non in duis consectetur nulla. Ex qui velit sit aliquip tempor culpa nisi anim cillum. Ex reprehenderit ullamco sint est eu magna est et qui. Enim laboris ex anim do laborum dolore reprehenderit. Incididunt fugiat eu reprehenderit ipsum consequat cillum anim.</p>
        <div className='rating'>
         <div className={activeRatings.oneStars ? "rating_container active" : "rating_container"} onClick={() => {setActiveRatings({
            oneStars:true,
        twoStars:false,
        threeStars:false,
        fourStars:false,
        fiveStars:false,
         });
         setRating(1)
        }}>1</div>
         <div className={activeRatings.twoStars ? "rating_container active" : "rating_container"} onClick={() => {setActiveRatings({
            oneStars:false,
            twoStars:true,
            threeStars:false,
            fourStars:false,
            fiveStars:false,
         });
         setRating(2)}}>2</div>
         <div className={activeRatings.threeStars ? "rating_container active" : "rating_container"} onClick={() => {setActiveRatings({
            oneStars:false,
            twoStars:false,
            threeStars:true,
            fourStars:false,
            fiveStars:false,
         });
         setRating(3)
        }}>3</div>
         <div className={activeRatings.fourStars ? "rating_container active" : "rating_container"} onClick={() => {setActiveRatings({
            oneStars:false,
            twoStars:false,
            threeStars:false,
            fourStars:true,
            fiveStars:false,
         });
         setRating(4)
        }}>4</div>
         <div className={activeRatings.fiveStars ? "rating_container active" : "rating_container"} onClick={() => {setActiveRatings({
            oneStars:false,
            twoStars:false,
            threeStars:false,
            fourStars:false,
            fiveStars:true,
         });
         setRating(5)
        }}>5</div>
        </div>
        <button className='btn_submit' onClick={handleSubmit}>Submit</button>
       </div>
      </Card>
    </>
  )
}
