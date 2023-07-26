import { DownArrowWithoutBorder, EmailIcon } from '@/assets/icons'
import AboutUsSlider from '@/components/Sliders/AboutUsSlider'
import Button from '@/components/Button'
import KnowledgeSlider from '@/components/Ingeniacracy/KnowledgeSlider'
import SliderIngeniacracy from '@/components/Ingeniacracy/Slider'
import SlideShow from '@/components/SlideShow'
import SocialMedia from '@/components/Utils/SocialMedia'
import WantoToChallenge from '@/components/Utils/WantoToChallenge'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'

const Ingeniacracy = () => {
  const { t } = useTranslation(['aboutUs'])

  const slideOneImages = [
    '/ourTeam/slide2-1.png',
    '/ourTeam/slide2-2.png',
    '/ourTeam/slide2-3.png',
    '/ourTeam/slide2-4.png',
  ]

  const items = [
    {
      icon: '/home/peopleFIrst.png',
      title: 'thePerson',
      alt: 'people first',
    },
    {
      icon: '/home/selfManagment.png',
      title: 'selfManagment',
      alt: 'self managment',
    },
    {
      icon: '/home/openProccess.png',
      title: 'openProcesses',
      alt: 'open process',
    },
    {
      icon: '/home/collaborativeWork.png',
      title: 'colaborativeWork',
      alt: 'colaborative work',
    },
    {
      icon: '/home/activeLearning.png',
      title: 'learnability',
      alt: 'learnability',
    },
  ]
  return (
    <section>
      <header className="relative flex h-screen">
        <div className="absolute -left-[1rem] bottom-20 h-7 w-[100px] rotate-90 rounded-3xl border border-white sm:hidden">
          <div className="relative">
            <DownArrowWithoutBorder className="absolute left-2 top-[9px] h-2 w-3 rotate-[-90deg] cursor-pointer !fill-white stroke-white lg:block" />
          </div>
        </div>
      </header>

      <section className="gradient-background flex !h-full flex-col overflow-hidden bg-black/25 text-white before:hidden after:!-right-[203px]  after:left-auto lg:h-[1100px] lg:justify-between lg:px-0 lg:py-0 lg:after:!-right-[403px]">
        <div className="z-10 flex flex-col px-4 sm:px-6 lg:px-16">
          <p className="top-[120px] mt-10 px-4 pb-10 font-mono leading-[117.1%] text-white  lg:text-[56px] xl:absolute xl:right-[10%] 2xl:right-[20%] 3xl:right-[30%]">
            {t('onceUpon')}
          </p>
          <div className="overflow-hidden  sm:basis-full">
            <AboutUsSlider />
          </div>
        </div>
        <div className="mx-4 items-center justify-center gap-14 pb-10 lg:my-14 lg:mt-24 lg:flex">
          <Image
            alt="Ingenia"
            className="hidden lg:block"
            src={'/ingenia_logo.gif'}
            width={330}
            height={130}
          />

          <p className="mt-14 text-[18px] leading-5 lg:mt-0 lg:w-1/4">{t('weAre')}</p>
        </div>
        <Image src={'/particles.gif'} fill className="-z-10" alt="" />
      </section>

      <SliderIngeniacracy title="LEADING THE CHANGE" />
      <section className="mx-4">
        <p className="mt-24 px-2 text-[18px] -tracking-tighter text-white lg:mx-auto lg:w-1/2 lg:px-0 lg:text-3xl">
          {t('weCommitment')}
        </p>

        <div className="mx-4 mt-10 flex flex-col justify-center gap-14 lg:flex-row">
          <SlideShow images={slideOneImages} />
          <div className="flex flex-col gap-9">
            {items.map(e => (
              <div className="flex items-center gap-4" key={e.title}>
                <Image src={e.icon} width={40} height={40} alt={e.alt} />
                <p className="text-lg text-white">{t(e.title)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className=" mt-20 text-center  text-2xl text-[#08FFFF] lg:mt-auto lg:hidden">
          <p className="px-8 text-center  text-2xl text-[#08FFFF] lg:mt-auto">
            {t('weChoose').slice(0, 18)}
          </p>
          <p className=" text-2xl text-[#08FFFF] lg:mt-auto">{t('weChoose').slice(18, 43)}</p>
          <p className=" text-2xl text-[#08FFFF] lg:mt-auto">{t('weChoose').slice(43)}</p>
        </div>
        <div className="mt-20 hidden text-center text-2xl  text-[#08FFFF] lg:block">
          <p className="px-8 text-center  text-2xl text-[#08FFFF] lg:mt-auto">{t('weChoose')}</p>
        </div>

        <div className=" border-b border-b-white/[0.15] p-10" />
      </section>
      {/* Carrousel ntworks */}
      <section className=" mb-20 overflow-hidden lg:mb-28 lg:overflow-auto ">
        <p className="mt-20 text-center font-mono text-3xl text-white/[.70] lg:pb-[50px]">
          {t('knowledgeNetwork')}
        </p>
        <KnowledgeSlider />
      </section>

      <section className="gradient-background overflow-hidden lg:h-[500px] lg:bg-none lg:py-0 lg:before:!bg-none lg:after:!bg-none">
        <div className="nested-background nested-mobile lg:before:!bg-none lg:after:!bg-none">
          <div className="pt-10 lg:pb-[80px] lg:pt-0 ">
            <WantoToChallenge />
          </div>

          <div className="pt-5 text-center">
            <Button
              title="Join us"
              size="lg"
              variant="outline"
              rightArrowBlack
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
    </section>
  )
}

export default Ingeniacracy

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['aboutUs'])),
    },
  }
}
