import React from 'react';
import styles from './BackGroundArt.module.css';
import { bg1, bg10, bg11, bg12, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9 } from '../../images';

const BackGroundArt = () => {
  return (
    <div className={styles.wrapper}>
      <span><img src={bg1} width={72} alt="" /></span>
      <span><img src={bg2} width={72} alt="" /></span>
      <span><img src={bg3} width={72} alt="" /></span>
      <span><img src={bg4} width={72} alt="" /></span>
      <span><img src={bg5} width={72} alt="" /></span>
      <span><img src={bg6} width={72} alt="" /></span>
      <span><img src={bg7} width={72} alt="" /></span>
      <span><img src={bg8} width={72} alt="" /></span>
      <span><img src={bg9} width={72} alt="" /></span>
      <span><img src={bg10} width={72} alt="" /></span>
      <span><img src={bg11} width={72} alt="" /></span>
      <span><img src={bg12} width={52} alt="" /></span>
    </div>
  );
};

export default BackGroundArt;