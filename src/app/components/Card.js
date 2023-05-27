"use client";
import Image from "next/image";
import { useState } from "react";

const Card = ({ handleIntrest, item }) => {
    const { id, heading, lessDesc, moreDesc, imgUrl } = item;
    const [collapse, setcollapese] = useState(false);

    const handleCollapse = () => {
        if (collapse === false) {
            setcollapese(true);
        }
        else {
            setcollapese(false);
        }
    }
    return (
        <div className='card'>
            <div className="imgBody">
                <Image src={imgUrl} alt="tour" width={200} height={200} />
            </div>
            <div className="content">
                <h3 className="title">
                    {heading}
                </h3>
                <p>{lessDesc}{collapse && <span>{moreDesc}</span>}
                    <button className="more" onClick={handleCollapse}>read more</button>
                </p>
                <button className="btn" onClick={() => handleIntrest(id)}>not intrested</button>
            </div>

        </div>
    )
}

export default Card
