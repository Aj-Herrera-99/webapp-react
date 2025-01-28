import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

function Rating({ stars }) {
    const rating = [];
    for (let i = 1; i <= 5; i++) {
        const star =
            stars >= i ? (
                <FaStar key={i} />
            ) : stars >= i - 1 + 0.5 ? (
                <FaStarHalfAlt key={i} />
            ) : (
                <FaRegStar key={i} />
            );
        rating.push(star);
    }
    return <>{rating}</>;
}

export default Rating;
