import React from 'react';
import styles from './feedPhotosItem.module.css';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
    console.log(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      {' '}
      <img src={photo.src} alt={photo.title} />
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
