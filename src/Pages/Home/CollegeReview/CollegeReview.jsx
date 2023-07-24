import React, { useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./CollegeReview.css"
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const CollegeReview = () => {

    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
            origin: "center",
            perView: 2,
            spacing: 15,
        },
    })

    const [reviews, setReviews] = useState([]);

    useEffect
    (() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    console.log(reviews)


    return (
        <div className="max-w-7xl mx-auto pb-16">
            <h2 className='text-3xl md:text-5xl text-center  mt-20 mb-8 font-serif w-fit mx-auto'>Reviews</h2>

            <div ref={sliderRef} className="keen-slider">
                {
                    reviews.map(review=> <div key={review._id} className="keen-slider__slide pt-5 bg-blue-500 rounded-lg">
                        
                        <img className='rounded-lg border-2 border-orange-100 w-24 mx-auto mt-5' src={review.image} alt="" />
                        <p className="text-2xl text-white mb-5 mt-2 font-semibold text-center">{review.name}</p>
                        <Rating className="mx-auto" style={{ maxWidth: 100 }} value={Math.round(review.rating || 0)} readOnly />
                        <p className="mb-10 text-white mx-5 py-1 md:py-3 px-2 md:px-5 rounded-lg">{review.comment}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CollegeReview;