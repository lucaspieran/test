/* eslint-disable react/no-unescaped-entities */
import { DownArrow, EmailIcon, PhoneIcon } from '@/assets/icons'
import CForm from '@/components/CForm'
import { Carousel } from '@/components/Carousel/Index'
import Driver from '@/components/Driver'
import SliderIngeniacracy from '@/components/Ingeniacracy/Slider'
import SocialMedia from '@/components/Utils/SocialMedia'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import { useEffect, useState } from 'react'

function OurWork() {
  const [width, setWidth] = useState<number>()
  const { t } = useTranslation('ourWork')

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)

      window.onload = () => {
        handleResize()
      }
      handleResize()
    }

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const images = [
    '/certifications/aws.png',
    '/certifications/solutionArchitect.png',
    '/certifications/apigee.png',
    '/certifications/open.png',
    '/certifications/gcp1.png',
    '/certifications/gcp2.png',
  ]

  return (
    <>
      <section className="gradient-background h-screen  overflow-hidden  bg-black">
        <div className="nested-background flex flex-col overflow-hidden">
          <div className="custom-container z-20 flex h-full grow items-center">
            <p className="z-10 px-2 pt-20 font-mono text-[32px] text-[#08FFFF] lg:w-[70%] lg:px-0 lg:pt-0 lg:text-[57px]">
              {t('challenge')}
            </p>
          </div>
          <div className="px-4 pb-[70px] pt-[40px] lg:hidden">
            <DownArrow className="h-8" />
          </div>

          <div className="z-10">
            <SliderIngeniacracy title="Leading the change" />
          </div>
        </div>
      </section>

      <section className="custom-container mt-5 lg:my-20">
        <div className="flex-col gap-10 lg:flex">
          {width && width < 640 && <Carousel />}
          <Driver />
        </div>
      </section>

      <section className="mx-4 mt-[10px] border-t-[1px] border-[rgb(255,255,255,0.15)] pb-24 lg:mt-6">
        <div className="custom-container flex flex-col">
          <div className="pt-16 text-center font-mono text-2xl leading-9 text-white opacity-40 lg:text-4xl">
            Certifications
          </div>

          <div className="mt-10 grid grid-cols-3 items-center justify-items-center gap-4 md:justify-between lg:flex lg:gap-0">
            {images.map((img, i) => (
              <Image
                key={img + i}
                src={img}
                width={123}
                height={50}
                alt="team1"
                className={` w-[120px] ${
                  i < 4 ? 'h-[60px] md:h-[90px] md:w-[190px]' : ' w-auto md:h-[120px]'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="gradient-background !h-auto overflow-hidden  bg-black py-[80px] lg:bg-none  ">
        <div className="nested-background-ourWork h-auto">
          <div className=" custom-container relative z-10 lg:flex">
            <div className="flex basis-1/2 flex-col justify-between">
              <div>
                <p className="pb-8 font-mono text-[30px] text-white lg:pb-0 lg:text-[38px]">
                  This is where <br /> your journey begins
                </p>

                <p className="pb-16 font-mono text-[24px] text-white lg:pb-0 lg:text-[28px]">
                  Let's talk!
                </p>
              </div>

              <div className="hidden flex-col gap-10 lg:flex">
                <div className="flex items-center gap-4 lg:gap-10">
                  <div className="flex items-center gap-1 text-white">
                    <PhoneIcon className="h-4" />
                    <p>+549 11 3645 8835</p>
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    <EmailIcon className="h-4" />
                    <p>info@ingenia.la</p>
                  </div>
                </div>

                <div className="w-1/3">
                  <SocialMedia />
                </div>
              </div>
            </div>
            <div className="">
              <CForm />
            </div>
            <div className="flex flex-col gap-10  pt-16 lg:hidden">
              <div className="flex items-center gap-1 text-white">
                <PhoneIcon className="h-4" />
                <p>+549 11 3645 8835</p>
              </div>

              <div className="flex items-center gap-3 text-white">
                <EmailIcon className="h-4" />
                <p>info@ingenia.la</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['ourWork'])),
    },
  }
}

export default OurWork
