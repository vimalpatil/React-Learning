import { useState } from "react"

export default function LikeButton() {
    let [isLiked, setisLiked] = useState(false);
    let [clicks, setclicks] = useState(0)
    let togleLike = () => {
        setisLiked(!isLiked);
        setclicks(clicks + 1);
    }

    let likeStyle = {
        color: "red",
        fontSize: "30px"
    };

    let likestyleregular = {
        fontSize: "30px"
    }
    return (
        <div>
            <p>Clicks={clicks}</p>
            <p onClick={togleLike}>
                {isLiked ? (<i className="fa-solid fa-heart" style={likeStyle}></i>) : (<i className="fa-regular fa-heart" style={likestyleregular}></i>)}
            </p>
        </div>
    );
}