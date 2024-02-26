import React, { ReactNode } from 'react';
import styles from '../home.module.scss';

type HomeContainerProps = {
  children: ReactNode;
};

const HomeContainer: React.FC<HomeContainerProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default HomeContainer;
