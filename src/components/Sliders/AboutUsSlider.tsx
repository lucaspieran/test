import useEmblaCarousel from 'embla-carousel-react'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'

export default function AboutUsSlider({}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: false })
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const { t } = useTranslation(['aboutUs'])

  useEffect(() => {
    if (emblaApi) {
      const updateIndex = () => {
        const current = emblaApi.selectedScrollSnap()
        setCurrentIndex(current)
      }

      emblaApi.on('scroll', updateIndex)
      return () => {
        emblaApi.off('scroll', updateIndex)
      }
    }
  }, [emblaApi])

  const slides = [
    {
      title: t('slide1'),
      img: '/about-us/slider1.png',
      year: 1999,
    },
    {
      title: t('slide2'),
      img: '/about-us/slider2.jpeg',
      year: 2004,
    },
    {
      title: t('slide3'),
      img: '/about-us/slider3.jpeg',
      year: 2014,
    },
    {
      title: t('slide4'),
      img: '/about-us/slider4.png',
      year: 2015,
    },
    {
      title: t('slide5'),
      img: '/about-us/slider5.jpeg',
      year: 2020,
    },
    {
      title: t('slide6'),
      img: '/about-us/slider6.jpeg',
      year: 2020,
    },
    {
      title: t('slide7'),
      img: '/about-us/slider7.jpeg',
      year: 2021,
    },
    {
      title: t('slide8'),
      img: '/about-us/slider8.jpeg',
      year: 2022,
    },
    {
      title: t('slide9'),
      img: '/about-us/slider9.jpeg',
      year: 2023,
    },
    {
      title: t('slide10'),
      img: '/about-us/slider10.jpeg',
      year: 2023,
    },
    {
      title: t('slide11'),
      img: '/about-us/slider11.jpeg',
      year: 2023,
    },
    {
      title: '',
      img: '',
      year: '',
    },
  ]

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  return (
    <div className={`w-full lg:max-w-[90rem] xl:mt-28`}>
      <div className="embla_viewport" ref={emblaRef}>
        <div
          className={`flex h-[380px] items-end lg:h-[700px]`}
          style={{ backfaceVisibility: 'hidden', touchAction: 'pan-y' }}
        >
          {slides.map((slide, i) => {
            return slide.title ? (
              <div className={`relative min-w-0 shrink-0`} key={i} onClick={scrollNext}>
                <div
                  style={{
                    background:
                      currentIndex === i
                        ? 'linear-gradient(180deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%)'
                        : 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #171717 90.33%)',
                  }}
                  className={`relative mx-2 rounded-[14.3px] duration-500 lg:mx-10 ${
                    currentIndex === i ? 'basis-[10%]' : 'lg:w-[300px] lg:!basis-[10%]'
                  }  ${
                    currentIndex === i
                      ? 'h-[360px] w-[280px] lg:h-[670px] lg:w-[470px]'
                      : 'h-[180px] w-[154px] lg:h-[380px] lg:w-[350px]'
                  } ${i === 10 && 'mr-560'}`}
                >
                  {true && (
                    <div
                      className={`flex h-full flex-col justify-between p-10 opacity-0  ease-in ${
                        currentIndex === i ? 'opacity-100 duration-500' : 'duration-100'
                      }`}
                    >
                      <p className="text-base font-bold text-white lg:text-[30px] lg:leading-[45px]">
                        {slide.title}
                      </p>

                      <div className="mx-auto w-fit rounded-[18px] border border-white bg-black/70 px-14 py-3 font-mono text-base font-bold text-white md:text-[18px]">
                        {slide.year}
                      </div>
                    </div>
                  )}
                  <Image src={slide.img} fill alt="" className="-z-10 rounded-[15px]" />
                </div>
              </div>
            ) : (
              <div className="flex-[0_0_500px] lg:flex-[0_0_850px]"></div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
