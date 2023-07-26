import { useRouter } from 'next/navigation'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import Button from '@/components/Button'
import SliderIngeniacracy from '@/components/Ingeniacracy/Slider'
import {
  DownArrow,
  EmailIcon,
  Knowledge,
  PhoneIcon,
  Scalability,
  Sustainability,
  Thinking,
  TimeMarket,
} from '@/assets/icons'
import Image from 'next/image'
import { useState } from 'react'
import Slider from '@/components/SliderHome/Slide'
import Router from 'next/router'
import SocialMedia from '@/components/Utils/SocialMedia'
import CForm from '@/components/CForm'
import styles from '@/components/SliderHome/styles.module.css'
import KnowledgeSlider from '@/components/Ingeniacracy/KnowledgeSlider'
import homeGif from '../../public/bubble_video.gif'

export default function Home() {
  const { t } = useTranslation('home')
  const [indexs, setIndexs] = useState({ currentIndex: 1, nextIndex: 2, prevIndex: 0 })

  const router = useRouter()

  const items = [
    {
      title: 'ourWork:sustainability',
      text: 'sustainabilityText',
      icon: Sustainability,
    },
    {
      title: 'ourWork:timeMarket',
      icon: TimeMarket,
    },
    {
      title: 'ourWork:scalability',
      icon: Scalability,
    },
    {
      title: 'ourWork:productThinking',
      icon: Thinking,
    },
    {
      title: 'ourWork:knowledgeCultivators',
      text: 'knowledgeCultivatorsText',
      icon: Knowledge,
    },
  ]
  const resources = [
    {
      logo: '/caseStudies/allianz.png',
      img: '/home/ALLIANZ_header.png',
      text: 'Journey to Cloud Native',
    },
    {
      logo: '/caseStudies/santander.png',
      img: '/caseStudies/santanderHeader.png',
      text: 'Accelerating a Digital Transformation',
    },
    {
      logo: '/caseStudies/edenor.png',
      img: '/home/EDENOR_header.png',
      text: 'Architecture, Roadmap and Smart meters',
    },
    {
      logo: '/caseStudies/cablevision.png',
      img: '/caseStudies/cablevisionHeader.png',
      text: 'Improving Customer Experience through an FMS',
    },
    {
      logo: '/caseStudies/ank.png',
      img: '/caseStudies/ankHeader.png',
      text: 'Financial services integration, an IT Architecture solution',
    },
  ]

  return (
    <>
      <header className="gradient-background  flex flex-col bg-black">
        <div className="nested-background  !z-10 h-full before:z-50 after:!z-10">
          <Image
            src={homeGif.src}
            width={600}
            height={600}
            className="absolute top-20 -z-20  hidden lg:-right-[25%] lg:block xl:-right-[15%] 2xl:-right-[5%]"
            alt=""
          />

          <div className="custom-container flex h-full items-center  text-white">
            <div className="z-10 font-mono lg:basis-[75%]">
              <div className="flex h-full flex-col justify-center">
                <p className="text-[32px] lg:text-[57px]">
                  {t('title1')} <br /> {t('title2')}
                </p>

                <p className="mt-10 text-xl lg:hidden">
                  Solving the end-to-end of every strategic business needs with the right
                  technology-based solutions.
                </p>

                <Button
                  title={t('discoverMore')}
                  variant="outline"
                  rightIcon
                  className="mt-5 w-fit font-nunito md:!px-12"
                  size="lg"
                  onClick={() => router.push('/about-us')}
                />

                <p className="ml-auto mt-20 hidden max-w-[500px] text-xl lg:block">{t('weHelp')}</p>

                <DownArrow className="mt-10 h-10 w-10 cursor-pointer fill-white/60 hover:fill-white lg:block" />
              </div>
            </div>
          </div>
        </div>
        <SliderIngeniacracy title="Leading the change" />
      </header>

      <section className="custom-container mt-20 lg:mt-32">
        <h2 className="text-center font-mono text-[28px] text-white lg:text-[38px]">Drivers</h2>

        <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-4 md:justify-between">
          {items.map(e => (
            <div
              key={e.title}
              className="flex cursor-pointer flex-col items-center"
              onClick={() => router.push('/our-work')}
            >
              <e.icon className="h-24 md:h-32" />

              <p className="mt-4 text-center text-[15px] text-white md:text-[20px]">{t(e.title)}</p>
            </div>
          ))}
        </div>

        <Button title={t('learnMore')} className="mx-auto mt-14" variant="outline" rightIcon />
      </section>

      <section>
        <p className="mt-16 text-center font-mono text-[24px] text-white lg:text-[38px]">
          Let our experience do the talking
        </p>

        <div className="mt-10 hidden lg:block">
          <Slider setIndexs={setIndexs}>
            {resources.map((resource, i) => {
              return (
                <div
                  key={i}
                  className={`${
                    i === indexs.prevIndex
                      ? styles.customCl
                      : i === indexs.nextIndex
                      ? styles.customCr
                      : styles.customC
                  } relative flex h-[360px] items-center justify-center md:flex-[0_0_32%] lg:mx-4 2xl:mx-10`}
                >
                  <Image src={resource.img} fill alt="" priority className="h-[50%] w-full" />
                  <div className="z-40 pl-20">
                    <Image src={resource.logo} width={200} height={200} alt="" priority />
                    <p className="text-wite  z-10 text-3xl font-bold text-white">{resource.text}</p>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>

        <div className="card-blend custom-container mt-10 flex flex-wrap justify-center gap-10 lg:hidden">
          {resources.map((resource, i) => {
            return (
              i < 3 && (
                <div
                  key={i}
                  className={`relative flex h-[250px] w-full items-center justify-start sm:max-w-[328px] `}
                >
                  <Image src={resource.img} fill alt="" className="h-[50%] w-full" />
                  <div className="z-40 pl-10">
                    <Image src={resource.logo} width={160} height={100} alt="" />
                    <p className="text-wite  z-10 text-lg font-bold text-white">{resource.text}</p>
                  </div>
                </div>
              )
            )
          })}
        </div>

        <Button
          title={t('moreCases')}
          variant="outline"
          rightIcon
          className="mx-auto mt-10"
          onClick={() => Router.push('/case-studies')}
        />
      </section>

      <section className="custom-container mt-20 lg:!px-44">
        <h2 className="text-center font-mono text-[38px] text-white">Meet our solutions</h2>
        <div className="flex flex-col items-center lg:items-stretch">
          <div className="sticky top-20 mt-10 flex h-[400px] w-full max-w-[350px] flex-col-reverse  lg:max-w-full lg:flex-row">
            <div className="flex h-full basis-1/2 flex-col items-start justify-between rounded-b-[15px] bg-[#141414] p-4 lg:justify-between lg:!rounded-l-[15px] lg:rounded-b-none lg:p-10">
              <Image
                src={'/logos/startia.png'}
                height={200}
                width={400}
                alt="startia"
                className="w-[200px] lg:w-[400px]"
              />
              <div>
                <p className="text-lg font-semibold text-white">{t('startiaTitle')}</p>

                <p className="mt-2 hidden text-[14px] text-white lg:block">{t('startiaText')}</p>
              </div>

              <Button title={t('learnMore')} rightIcon variant="outline" />
            </div>

            <div className="relative h-[200px] grow lg:h-full">
              <Image
                src={'/home/solutions1.png'}
                alt="startia"
                fill
                className="rounded-t-[15px] object-cover lg:rounded-r-[15px] lg:rounded-tl-none"
              />
            </div>
          </div>
          <div className="sticky top-20 mt-10 flex h-[400px] w-full max-w-[350px] flex-col lg:mt-0  lg:max-w-full lg:flex-row">
            <div className="relative h-[200px] grow lg:h-full lg:basis-1/2">
              <Image
                src={'/home/solutions2.png'}
                fill
                alt="startia"
                className="rounded-t-[15px] object-cover lg:!rounded-l-[15px] lg:rounded-t-none"
              />
            </div>

            <div className="flex h-full basis-1/2 flex-col items-start justify-between rounded-b-[15px] bg-[#6B3686] p-4 lg:justify-between lg:!rounded-b-none lg:!rounded-r-[15px] lg:p-10">
              <Image
                src={'/logos/devify.png'}
                height={100}
                width={280}
                alt="devify"
                className="h-[50px] w-[150px] lg:h-[120px]  lg:w-[300px]"
              />
              <p className="text-lg font-semibold text-white">Ready to code.</p>

              <p className="hidden text-white lg:block">{t('devify')}</p>

              <Button title={t('learnMore')} rightIcon variant="outline" />
            </div>
          </div>
          <div className="sticky top-20 mt-10 flex h-[400px] w-full max-w-[350px] flex-col-reverse lg:mt-0  lg:max-w-full lg:flex-row">
            <div className="flex h-full basis-1/2 flex-col items-start justify-between rounded-b-[15px] bg-black p-4 lg:justify-between lg:!rounded-l-[15px] lg:rounded-b-none lg:p-10">
              <Image
                src={'/logos/goElevate.png'}
                height={150}
                width={280}
                alt="devify"
                className="w-[200px] lg:w-[340px]"
              />

              <p className="text-lg font-semibold text-white">{t('goElevateTitle')}</p>
              <p className="hidden text-white lg:block">{t('goElevateText')}</p>

              <Button title={t('learnMore')} rightIcon variant="outline" />
            </div>

            <div className="relative flex h-full  grow basis-1/2 items-center rounded-r-[15px] bg-[#6B3686] pl-10">
              <Image src={'/home/solutions3.png'} alt="startia" fill className="rounded-r-[15px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="custom-container mt-20">
        <h2 className="text-center font-mono text-[38px] text-white">Stay updated</h2>

        <div className="mt-10 flex justify-between gap-10 overflow-auto">
          {[1, 2, 3, 4].map(el => (
            <div
              key={el}
              className="flex h-[400px] w-[330px] shrink-0 flex-col rounded-2xl p-6"
              style={{
                background:
                  'linear-gradient(231deg, rgba(32,80,115,0.8519782913165266) 50%, rgba(47,42,31,1) 100%)',
              }}
            >
              <div className="relative basis-[70%]">
                <Image src="/home/stayUpdated1.jpg" fill className="rounded-xl" alt="" />
              </div>
              <div className="flex grow flex-col justify-between">
                <p className="texti-[15px] mt-2 text-white">
                  Blockchain,
                  <br /> más allá de criptoactivos
                </p>

                <div className="flex items-center gap-2">
                  <div className="relative h-[40px] w-[40px]">
                    <Image
                      src="/ourTeam/gusRey.jpeg"
                      fill
                      className="rounded-full object-cover"
                      alt=""
                      style={{ objectPosition: '0 0' }}
                    />
                  </div>
                  <div>
                    <p className="text-[12px] text-[#6F9097]">Author</p>
                    <p className="text-sm text-white">Gustavo Brey</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" title="Discover more" rightIcon className="mx-auto mt-14" />
      </section>

      <div className="custom-container mt-20 h-[447px] w-full">
        <div className="h-full w-full rounded-[16px] bg-[#302F37]"></div>
      </div>

      <h2 className="mt-20 text-center font-mono text-3xl text-white">Trust technology advisor</h2>

      <div className="my-16">
        <KnowledgeSlider
          images={[
            '/caseStudies/allianz.png',
            '/caseStudies/ank.png',
            '/caseStudies/cablevision.png',
            '/caseStudies/edenor.png',
            '/caseStudies/galicia.png',
            '/caseStudies/icbc.png',
            '/caseStudies/mol.png',
            '/caseStudies/santander.png',
          ]}
        />
      </div>

      <section className="gradient-background  mt-10 !h-fit overflow-hidden bg-black">
        <div className="nested-background">
          <div className="custom-container z-20 flex flex-col py-20 lg:flex-row lg:py-56">
            <div className="z-20 flex basis-1/2 flex-col justify-between">
              <div>
                <p className="font-mono text-[30px] text-white lg:text-[38px]">
                  This is where <br /> your journey begins
                </p>

                <p className="mt-8 font-mono text-[28px] text-white">Let&aposs talk!</p>
              </div>

              <div className="hidden flex-col gap-10 lg:flex">
                <div className="flex items-center gap-10">
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
                  <SocialMedia className="gap-4" />
                </div>
              </div>
            </div>
            <div className="z-10 mt-10 lg:mx-auto lg:mt-0">
              <CForm />
            </div>
            <div className="mt-10 flex flex-col gap-4 lg:hidden">
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
      ...(await serverSideTranslations(locale ?? 'en', ['home', 'ourWork'])),
    },
  }
}
