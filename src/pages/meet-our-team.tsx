import { DownArrow, EmailIcon, LinkedinIcon, RightArrow } from '@/assets/icons'
import Button from '@/components/Button'
import SliderIngeniacracy from '@/components/Ingeniacracy/Slider'
import SlideShow from '@/components/SlideShow'
import SocialMedia from '@/components/Utils/SocialMedia'
import WantoToChallenge from '@/components/Utils/WantoToChallenge'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import data from '@/data/team.json'
import Modal from '@/components/Modal'

export interface Team {
  name: string
  image: string
  role: string
  circles: string[]
  linkedin: string
  bioEsp: string
  bioEng: string
}

export default function Index() {
  const [isOpen, setIsOpen] = useState(false)
  const [visibleItems, setVisibleItems] = useState<any>()

  const [dataToShow, setdataToShow] = useState<Team>()
  const [cards, setCards] = useState(data.team)
  const [roles, setRoles] = useState<string[]>([])
  const [roleSelected, setRoleSelected] = useState('all')
  const { t } = useTranslation(['meetOurTeam', 'ingeniacracy'])

  const slideOneImages = ['/home/team1.jpeg', '/home/team3.jpeg', '/home/team2.jpeg']
  const slideTwoImages = [
    '/ourTeam/slide2-1.png',
    '/ourTeam/slide2-2.png',
    '/ourTeam/slide2-3.png',
    '/ourTeam/slide2-4.png',
  ]
  const items = [
    {
      icon: '/home/peopleFIrst.png',
      title: 'aboutUs:thePerson',
      alt: 'people first',
    },
    {
      icon: '/home/selfManagment.png',
      title: 'aboutUs:selfManagment',
      alt: 'self managment',
    },
    {
      icon: '/home/openProccess.png',
      title: 'aboutUs:openProcesses',
      alt: 'open process',
    },
    {
      icon: '/home/collaborativeWork.png',
      title: 'aboutUs:colaborativeWork',
      alt: 'colaborative work',
    },
    {
      icon: '/home/activeLearning.png',
      title: 'aboutUs:learnability',
      alt: 'learnability',
    },
  ]
  useEffect(() => {
    const handleResize = () => {
      window?.innerWidth < 1000 ? setVisibleItems(8) : setVisibleItems(data.team.length)
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
  useEffect(() => {
    const uniqueRoles: string[] = data.team.reduce((accumulator: string[], person) => {
      const circles = person.circles
      accumulator.push(...circles)
      return accumulator
    }, [])

    function removeDuplicates(arr: string[]): string[] {
      return arr.filter((value, index) => arr.indexOf(value) === index)
    }

    const uniqueCircles = removeDuplicates(uniqueRoles)

    setRoles(uniqueCircles)
  }, [])

  useEffect(() => {
    if (roleSelected === 'all') {
      setCards(data.team)
      return
    }
    const newCards = data.team.filter(e => e.circles.includes(roleSelected))
    setCards(newCards)
  }, [roleSelected])

  return (
    <>
      <section className="gradient-background relative flex !h-auto  flex-col justify-between  overflow-hidden pt-[124px] lg:!h-screen lg:pt-[13%] lg:before:left-[-40%] lg:before:top-[-20%] lg:after:left-[95%] lg:after:top-[30%] ">
        <Image src={'/Noise-Animation.png'} fill alt="" className="-z-10" />
        <div className="z-10 mx-auto justify-between px-4 pb-10 sm:px-6 lg:flex lg:px-8 lg:pb-0 xl:max-w-[1600px] ">
          <div className="pb-12 lg:basis-1/2 lg:pb-0">
            <p className="pb-5 font-mono text-[32px] text-[#08FFFF] lg:pb-0 lg:text-[67px]">
              {t('meetOurTeam:meetOurTeam')}
            </p>
            <p className="font-mono text-xl tracking-tighter text-white lg:tracking-normal">
              {t('meetOurTeam:eachIngenial')}
            </p>
          </div>

          <SlideShow images={slideOneImages} containerClassNames="border-none slideShows-bg" />
          <div className="px-4 pb-[70px] pt-[40px] lg:hidden">
            <DownArrow className="h-8" />
          </div>
        </div>

        <div className="pb-20">
          <SliderIngeniacracy
            title="Leading the change"
            containerClassNames="border-t-[1px] border-b-[1px]  lg:border-solid"
          />
        </div>
      </section>

      <section className="mx-auto px-2 sm:px-6 lg:mt-10 lg:px-8 xl:max-w-[1600px]">
        <div className="flex flex-wrap justify-center gap-2 gap-y-4  lg:gap-5">
          <div
            className={`${
              roleSelected === 'all' ? 'bg-white' : 'border-white text-white'
            } w-fit cursor-pointer rounded-[94px] border  bg-black px-4 py-2 text-xs font-bold lg:text-base`}
            onClick={() => setRoleSelected('all')}
          >
            ALL
          </div>

          {roles.map(e => (
            <div
              className={`${
                roleSelected === e ? 'bg-white' : 'text-white'
              } w-fit cursor-pointer rounded-[94px] border border-white bg-black px-4 py-2 text-xs font-bold hover:opacity-80  lg:text-base`}
              key={e}
              onClick={() => setRoleSelected(e)}
            >
              {e.toUpperCase()}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-8 px-4 py-6 sm:justify-between lg:justify-center lg:px-0 lg:py-0">
          {cards.slice(0, visibleItems).map((e, i) => (
            <div
              className={`h-fit w-[135px] rounded-[16px] bg-[rgb(255,255,255)]/[0.09] p-3 lg:h-[263px] lg:w-[200px] lg:after:bg-none ${
                i > visibleItems - 3 && i < cards.length && 'card-blend'
              } `}
              key={i}
              onClick={() => {
                setIsOpen(true)
                setdataToShow(e)
              }}
            >
              <div className="relative h-[130px] w-full">
                <Image
                  src={e.image}
                  alt="team1"
                  fill
                  className="rounded-[10px] object-cover"
                  quality={100}
                  style={{ objectPosition: '0 0' }}
                  onClick={() => {
                    if (i < visibleItems - 3) {
                      setIsOpen(true)
                      setdataToShow(e)
                    }
                  }}
                />
              </div>

              <p className="mt-2 text-xs text-white">{e.name}</p>
              <p className="mt-1 text-[10px] font-bold text-white/60">{e.role}</p>

              <div className="mt-4 hidden  gap-4 lg:flex">
                <div
                  onClick={() => {
                    setIsOpen(true)
                    setdataToShow(e)
                  }}
                  className="flex w-fit cursor-pointer items-center gap-2 rounded-[28px] border border-white/[0.2] px-4 py-1 text-[12px] text-white hover:border-white"
                >
                  Read me
                  <RightArrow className="h-3 fill-white" />
                </div>

                <div className="grid cursor-pointer place-items-center rounded-full border border-white/[0.2] p-2 hover:border-white">
                  <a href={e.linkedin}>
                    <LinkedinIcon className="h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`${visibleItems > cards.length && 'hidden'} flex justify-between lg:hidden`}
        >
          <div className="mx-3 h-[1px] w-full self-center bg-white"></div>

          <Button
            title="Load more"
            variant="outline"
            className={` min-w-[110px] border-[0.75px] !font-nunito text-[13px] font-medium leading-[160%] hover:!border-[rgb(255,255,255)]/[0.4]`}
            onClick={() => {
              setVisibleItems((prevVisibleItems: number) => prevVisibleItems + 6)
            }}
          />
          <div className="mx-3 h-[1px] w-full self-center bg-white"></div>
        </div>
      </section>

      <div className="mt-28">
        <SliderIngeniacracy title="ingeniacracy" />
      </div>

      <section className="py-12 lg:mx-4 lg:py-0">
        <p className="mx-auto  w-80 py-[40px] text-lg leading-normal -tracking-tighter text-white lg:mt-24 lg:w-1/2 lg:py-0 lg:text-3xl">
          {t('aboutUs:weCommitment')}
        </p>

        <div className="mx-2 mt-10 justify-center gap-14 lg:mx-4 lg:flex">
          <SlideShow images={slideTwoImages} imageClassNames="p-0" />

          <div className="mx-3 mt-2 flex flex-col gap-9 lg:mx-0 lg:mt-0">
            {items.map(e => (
              <div className="flex items-center gap-4" key={e.title}>
                <Image
                  src={e.icon}
                  width={32}
                  height={32}
                  alt={e.alt}
                  className="h-[32px] w-[32px] lg:h-[41px] lg:w-[41px]"
                />
                <p className="text-[15.74px] font-light text-[white] lg:text-lg">{t(e.title)}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-20 min-w-[282px] px-[38px] text-center font-mono text-lg text-[#08FFFF] lg:text-2xl lg:tracking-[-1.2px]">
          {t('aboutUs:weChoose')}
        </p>

        <div className="mx-4 my-28 items-center justify-between rounded-[24px] border border-white bg-white/[0.08] px-8 py-10 lg:mx-auto lg:flex lg:w-[1100px] lg:px-[72px]">
          <p className="pb-[32px] text-[20px] font-medium leading-normal text-white lg:pb-0 lg:text-[24px]">
            {t('meetOurTeam:manyBenefits')}
          </p>
          <Button title="Take a look!" variant="primary" rightArrowBlack size="lg" />
        </div>
      </section>

      <section className="gradient-background !h-auto overflow-hidden lg:h-[500px] lg:py-0 lg:before:!bg-none lg:after:!bg-none">
        <div className="nested-background nested-mobile lg:before:!bg-none lg:after:!bg-none">
          <div className="pt-10 lg:pt-0 ">
            <WantoToChallenge />
          </div>

          <div className="pt-5 text-center">
            <Button
              title="Join us"
              size="lg"
              variant="outline"
              rightIcon
              className="mx-auto hidden lg:flex"
            />
            <Button
              title="Join us"
              size="lg"
              variant="primary"
              rightArrowBlack
              className="mx-auto lg:hidden"
            />
          </div>

          <div className="mt-14 justify-between px-14 lg:mx-auto lg:mt-28 lg:flex lg:w-1/2">
            <div className="lg:w-1/4">
              <SocialMedia />
            </div>
            <div className="flex items-center gap-4 p-6">
              <EmailIcon className="h-6" />

              <p className="text-base font-normal text-white">careers@ingenia.la</p>
            </div>
          </div>
        </div>
      </section>
      <Modal setIsOpen={setIsOpen} isOpen={isOpen} data={dataToShow} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['meetOurTeam', 'aboutUs'])),
    },
  }
}
