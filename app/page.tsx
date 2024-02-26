"use client";
import React from "react";
import Link from "next/link";
import HomeContainer from "./homeContainer/page";
import styles from "./home.module.scss";
type Props = {};

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <h2 className={styles.title}>Home</h2>
      <div className={styles.buttonContainer}>
        <h3>Valideynsinizsə buradan daxil olun</h3>
        <Link href="/parents">
          <button className={styles.button}>Valideyn Formu</button>
        </Link>
        <h3>Dayəsinizsə buradan daxil olun</h3>
        <Link href="/babysits">
          <button className={styles.button}>Dayə Formu</button>
        </Link>
      </div>
    </HomeContainer>
  );
};

export default Home;
