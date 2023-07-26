import { EmailIcon, PhoneIcon } from '@/assets/icons'
import Button from '@/components/Button'
import CForm from '@/components/CForm'
import SliderIngeniacracy from '@/components/Ingeniacracy/Slider'
import SocialMedia from '@/components/Utils/SocialMedia'
import { Case } from '@/interfaces'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Router from 'next/router'

function CaseStudies({ cases }: { cases: Case[] }) {
  const { t } = useTranslation('caseStudies')

  return (
    <>
      <section className="gradient-background relative h-screen bg-black/40">
        <Image src={'/Noise-Animation.png'} fill alt="" className="-z-10" />

        <div className="nested-background">
          <div className="custom-container flex h-full flex-col md:flex-row">
            <div className="z-10 mt-20 grid basis-1/2 place-content-center lg:mt-0">
              <p className="font-mono text-[32px] text-white md:text-[67px]">{t('caseStudies')}</p>
              <p className="mt-5 font-mono text-xl text-white md:w-[70%]  lg:mt-10">
                {t('trustTheTeam')}
              </p>
            </div>

            <div className="z-10 grid place-content-center lg:basis-1/2">
              <Image src={'/caseStudies/img1.png'} width={700} height={300} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="custom-container">
        {cases?.map(({ attributes }, i) => (
          <div
            key={i}
            className="flex flex-col justify-center gap-10 border-b border-b-white/[0.11] py-20 text-white lg:flex-row lg:items-center"
          >
            <Image
              src={attributes?.logo?.data?.attributes?.url ?? ''}
              width={200}
              height={50}
              alt={attributes.name}
              className="h-[62px] w-[170px] shrink-0"
              style={{ maxHeight: 80 }}
            />

            <div className="basis-[30%] text-[17px] lg:w-[50%]">
              <p className="font-bold">{t(attributes.title)}</p>

              <p className="mt-4">{t(attributes.body)}</p>

              <Button
                title="Learn more"
                rightIcon
                variant="outline"
                className="mt-4 duration-150 ease-in hover:translate-x-2"
                onClick={() => Router.push('/case-studies/' + attributes.name)}
              />
            </div>
          </div>
        ))}
      </section>
      <SliderIngeniacracy title="INDUSTRIES" />

      <section
        className="py-36"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(32, 32, 32, 0) 29%, #6953FF 100%)',
        }}
      >
        <div className="custom-container flex flex-col lg:flex-row">
          <div className="flex basis-1/2 flex-col justify-between">
            <div>
              <p className="font-mono text-[30px] text-white lg:text-[38px]">
                This is where <br /> your journey begins
              </p>

              <p className="mt-10 font-mono text-[24px] text-white lg:text-[28px]">Lets talk!</p>
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
                <SocialMedia />
              </div>
            </div>
          </div>
          <div className="mt-10 basis-1/2">
            <CForm />

            <div className="mt-14 flex flex-col gap-4 lg:hidden">
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
  const response = await fetch(
    `http://admin.ingenia.la/api/case-studies-lists?locale=${locale}&populate=logo`
  )
  const { data } = await response.json()
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['caseStudies'])),
      cases: data,
    },
    revalidate: 60,
  }
}

export default CaseStudies
