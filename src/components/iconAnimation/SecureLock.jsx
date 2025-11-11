import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

const SecureLock = () => {
    const [animationData, setAnimationData] = useState(null);
    console.log(animationData);

useEffect(() => {
  fetch("https://minas-designs.com/wp-content/uploads/2024/11/07_Minas-Design_Lottie_Secure-1.json")
    .then((res) => res.json())
    .then((data) => {
      // Recursively remove "infinite" keys
      const clean = (obj) => {
        if (Array.isArray(obj)) return obj.map(clean);
        if (typeof obj === "object" && obj !== null) {
          const newObj = {};
          for (const key in obj) {
            if (key !== "infinite") newObj[key] = clean(obj[key]);
          }
          return newObj;
        }
        return obj;
      };
      setAnimationData(clean(data));
    });
}, []);


    if (!animationData) return null;

    return (
        <div className="featured_icon">
            <Lottie animationData={animationData} loop autoplay />
        </div>
    );
};

export default SecureLock;
