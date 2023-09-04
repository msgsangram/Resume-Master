import React from "react";
import icon from "../../assets/icon.svg";
import styles from "./Header.module.css";

function Header(){
    return (
        <div className={styles.container}>
            <div className={styles.left_side}>
        <p className={styles.heading}>
            Make your own Resume. <span>It's free</span>
        </p>
        <p className={styles.heading}>
            Easy Online <span>Resume</span> Builder
        </p>
</div>
<div className={styles.right_side}>
 <img src={icon} alt="resume"/>
</div>
    </div>);
}
export default Header;