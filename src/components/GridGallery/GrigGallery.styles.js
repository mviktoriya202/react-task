import styled from "styled-components";

export const GalleryContainer = styled.div`
  max-width: 1390px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
  
  @media (max-width: 1200px) {
    max-width: unset;
  }
`;

export const GalleryItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-column: span 6;

  &:nth-child(1) {
    grid-row: span 1;
  }

  &:nth-child(2) {
    grid-row: span 2;
  }

  &:nth-child(3) {
    grid-row: span 3;
  }

  &:nth-child(4) {
    grid-column: span 2;
    grid-row: span 4;
  }

  &:nth-child(5) {
    grid-column: span 2;
    grid-row: span 4;
  }

  &:nth-child(6) {
    grid-column: span 2;
    grid-row: span 4;
  }

  &:nth-child(7) {
    grid-row: span 5;
  }

  &:nth-child(8) {
    grid-row: span 6;
  }

  &:nth-child(9) {
    grid-column: span 3;
    grid-row: span 7;
  }

  &:nth-child(10) {
    grid-column: span 3;
    grid-row: span 7;
  }

  &:nth-child(11) {
    grid-row: span 8;
  }

  &:nth-child(12) {
    grid-row: span 9;
  }

  &:nth-child(13) {
    grid-row: span 10;
  }

  &:nth-child(14) {
    grid-row: span 11;
  }

  &:nth-child(15) {
    grid-row: span 12;
  }

  &:nth-child(16) {
    grid-row: span 13;
  }

  &:nth-child(17) {
    grid-row: span 14;
  }

  &:nth-child(18) {
    grid-row: span 15;
  }

  &:nth-child(19) {
    grid-row: span 16;
  }

  &:nth-child(20) {
    grid-row: span 17;
  }

  &:nth-child(21) {
    grid-row: span 18;
  }

  &:nth-child(22) {
    grid-column: span 3;
    grid-row: span 19;
  }

  &:nth-child(23) {
    grid-column: span 3;
    grid-row: span 19;
  }

  &:nth-child(24) {
    grid-row: span 20;
  }

  &:nth-child(25) {
    grid-row: span 21;
  }
`;
