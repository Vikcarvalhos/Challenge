import React from 'react';
import '../css/gallery.css';
import image1 from '../assets/img/gallery/1.svg';
import image2 from '../assets/img/gallery/2.svg';
import image3 from '../assets/img/gallery/3.svg';
import image4 from '../assets/img/gallery/4.svg';
import image5 from '../assets/img/gallery/5.svg';

function Gallery() {
  const images = [image1, image2, image3, image4, image5];

  return (
    <main className='gallery'>
        <h1>Photo</h1>
        <h2>Gallery</h2>
        <div className='gallery-images'>
            {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
            ))}
        </div>
    </main>
  );
}

export default Gallery;