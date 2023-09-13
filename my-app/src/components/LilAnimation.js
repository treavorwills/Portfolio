import React, { useState, useEffect } from "react";
// import { MdSkateboarding } from "react-icons/md";
import { TbBike } from "react-icons/tb";

export default function LilAnimation() {
    const [leftPosition, setLeftPosition] = useState(window.innerWidth/2);
    const [bottomPosition, setBottomPosition] = useState(0);

    console.log(`Math is fun.`);


    useEffect(() => {
        const handleMouseMove = (e) => {
          setLeftPosition(e.clientX);

          const amplitude = 10; 
          const frequency = 0.01; 
          setBottomPosition(amplitude * Math.sin(frequency * e.clientX));
        };

    
        document.addEventListener('mousemove', handleMouseMove);
      }, []);

    return (
        <>
        <section className="animation-track">
            <div className="animation-icon" style={{ left: `${leftPosition}px`, bottom: `${bottomPosition}px`}}>
                <TbBike className="bike"></TbBike>
            </div>
        </section>
        </>
    )
};
