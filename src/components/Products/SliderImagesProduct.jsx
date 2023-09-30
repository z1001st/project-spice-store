import React from 'react';
import { useSelector } from 'react-redux';
import SliderImagesCombinedThumbs from './SliderImagesCombinedThumbs';

export default function SliderImagesProduct() {
  const selectedProduct = useSelector((state) => state.cartreducer.selectedProduct);

  const images = [
    selectedProduct.imgdata,
    selectedProduct.imgdata2,
    selectedProduct.imgdata3,
    selectedProduct.imgdata4,
  ].filter((image) => !!image);

  return (
    <>
      <SliderImagesCombinedThumbs images={images} />
    </>
  );
}
