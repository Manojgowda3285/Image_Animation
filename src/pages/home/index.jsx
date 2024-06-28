import { useState } from 'react';
import styles from "./Home.module.css";
import Slide_1 from "../../assets/images/landing-slide-box1_paymentprocessing.svg";
import Slide_2 from "../../assets/images/landing-slide-box2_onlinepg.svg";
import Slide_3 from "../../assets/images/landing-slide-box2_accmerchant.svg";
import Slide_4 from "../../assets/images/landing-slide-box4_paymentss.svg";

const slidesData = [
  { id: 1, src: Slide_1, heading: "Payment Processing", detail: "We offer a wide range of payment processing solutions, mobile payments, e-wallet integration, and more. Our platform supports multiple currencies, making it easy for businesses to expand globally.", class: "sb1" },
  { id: 2, src: Slide_2, heading: "Online Payment Gateway", detail: "Our secure online payment gateway enables businesses to accept payments on their websites seamlessly. With real-time transaction tracking and comprehensive reporting, our clients stay in control of their payment ecosystem.", class: "sb2" },
  { id: 3, src: Slide_3, heading: "Accounts Merchants", detail: "We facilitate the establishment of merchant accounts, allowing businesses to accept payments and manage funds with ease.", class: "sb3" },
  { id: 4, src: Slide_4, heading: "Payment Security Solutions", detail: "Our cutting-edge security solutions protect businesses from fraudulent activities and ensure data privacy, building trust among their customers.", class: "sb4" }
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideClick = (index) => {
    if (index === slidesData.length - 1) {
      setActiveIndex(0); // Reset to 0
    } else {
      setActiveIndex(index + 1);
    }
  };

  return (
    <div className="container">
      <div className={styles["slides"]}>
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles["slides-box"]} ${styles[slide.class]} ${index < activeIndex ? styles["hidden"] : ""}`}
            onClick={() => handleSlideClick(index)}
          >
            <div className={`${styles["sb-inner"]} ${styles[`sb-inner_${slide.class}`]}`}>
              <div className={styles["sb-inner-img"]}>
                <img style={{ maxWidth: "240px" }} src={slide.src} alt={slide.heading} />
              </div>
              <div className={styles["slide-content-box"]}>
                <div className={styles["slide-heading"]}>{slide.heading}</div>
                <div className={styles["slide-detail-txt"]}>{slide.detail}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
