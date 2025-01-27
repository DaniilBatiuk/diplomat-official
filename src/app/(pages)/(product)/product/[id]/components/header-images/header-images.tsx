'use client'

import Image from 'next/image'
import React, { useRef, useState } from 'react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import './header-images.scss'

interface HeaderImagesProps {
  images: string[]
}

export const HeaderImages: React.FC<HeaderImagesProps> = ({ images }: HeaderImagesProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const imageCount = useRef(0)

  return (
    <div className='product__header_images'>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2'
      >
        {images.map(image => (
          <SwiperSlide key={image}>
            <Image
              loading={imageCount.current++ < 15 ? 'eager' : 'lazy'}
              decoding='sync'
              src={image}
              width={500}
              height={500}
              alt='photo'
              quality={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        // @ts-ignore
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'
      >
        {images.map(image => (
          <SwiperSlide key={image}>
            <Image
              loading={imageCount.current++ < 15 ? 'eager' : 'lazy'}
              decoding='sync'
              src={image}
              width={100}
              height={100}
              alt='photo'
              quality={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
