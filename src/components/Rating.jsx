import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";

function Rating({ stars }) {
    const rating = [];
    for (let i = 1; i <= 5; i++) {
        const star =
            stars >= i ? (
                <FaStar/>
                // <i key={i} className="text-yellow-500 fa-solid fa-star"></i>
            ) : stars >= i - 1 + 0.5 ? (
                <FaStarHalf/>
                // <i
                //     key={i}
                //     className="text-yellow-500 fa-regular fa-star-half-stroke"
                // ></i>
            ) : (
                <FaRegStar/>
                // <i key={i} className="text-yellow-500 fa-regular fa-star"></i>
            );
        rating.push(star);
    }
    return <>{rating}</>;
}

export default Rating;
