import React from 'react';
import * as S from "./GrigGallery.styles";
import img1 from '../../images/about/img1.png';
import img2 from '../../images/about/img2.png';
import img3 from '../../images/about/img3.png';
import img4 from '../../images/about/img4.png';
import img5 from '../../images/about/img5.png';
import img6 from '../../images/about/img6.png';
import img7 from '../../images/about/img7.png';
import img8 from '../../images/about/img8.png';
import img9 from '../../images/about/img9.png';
import img10 from '../../images/about/img10.png';
import img11 from '../../images/about/img11.png';
import img12 from '../../images/about/img12.png';
import img13 from '../../images/about/img13.png';
import img14 from '../../images/about/img14.png';
import img15 from '../../images/about/img15.png';
import img16 from '../../images/about/img16.png';
import img17 from '../../images/about/img17.png';
import img18 from '../../images/about/img18.png';
import img19 from '../../images/about/img19.png';
import img20 from '../../images/about/img20.png';
import img21 from '../../images/about/img21.png';
import img22 from '../../images/about/img22.png';
import img23 from '../../images/about/img23.png';
import img24 from '../../images/about/img24.png';
import img25 from '../../images/about/img25.png';

const GridGallery = () => {
  const images = [
    {
      id: 0,
      url: img1,
    },
    {
      id: 1,
      url: img2,
    },
    {
      id: 2,
      url: img3,
    },
    {
      id: 3,
      url: img4,
    },
    {
      id: 4,
      url: img5,
    },
    {
      id: 5,
      url: img6,
    },
    {
      id: 6,
      url: img7,
    },
    {
      id: 7,
      url: img8,
    },
    {
      id: 8,
      url: img9,
    },
    {
      id: 9,
      url: img10,
    },
    {
      id: 10,
      url: img11,
    },
    {
      id: 11,
      url: img12,
    },
    {
      id: 12,
      url: img13,
    },
    {
      id: 13,
      url: img14,
    },
    {
      id: 14,
      url: img15,
    },
    {
      id: 15,
      url: img16,
    },
    {
      id: 16,
      url: img17,
    },
    {
      id: 17,
      url: img18,
    },
    {
      id: 18,
      url: img19,
    },
    {
      id: 19,
      url: img20,
    },
    {
      id: 20,
      url: img21,
    },
    {
      id: 21,
      url: img22,
    },
    {
      id: 22,
      url: img23,
    },
    {
      id: 23,
      url: img24,
    },
    {
      id: 24,
      url: img25,
    },
  ];

  return (
    <S.GalleryContainer>
      {images.map((image) => (
        <S.GalleryItem
          key={image.id}
          src={image.url}
          alt={`Image ${image.id}`}
        />
      ))}
    </S.GalleryContainer>
  );
};

export default GridGallery;
