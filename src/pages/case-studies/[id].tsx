import { BuildingIcon, User, Wallet } from '@/assets/icons'
import Button from '@/components/Button'
import { Case } from '@/interfaces'
import { checkDrivers } from '@/utils/functions'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Router from 'next/router'
import { useEffect, useState } from 'react'

const CustomCaseStudy = ({ data }: { data: Case }) => {
  const { t } = useTranslation('caseStudies')
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)

      const handleResize = () => {
        setWindowWidth(window.innerWidth)
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])
  const height =
    windowWidth > 1000 && data?.ingeniaWay?.tasks.length > 3
      ? 800
      : windowWidth <= 1000 && data?.ingeniaWay?.tasks.length > 3
      ? 600
      : windowWidth > 1000 && data?.ingeniaWay?.tasks.length <= 3
      ? 500
      : windowWidth <= 1000 && data?.ingeniaWay?.tasks.length <= 3
      ? 500
      : 900
  return (
    <>
      <header className="relative h-screen pt-32">
        {data?.headerImg?.data?.attributes?.url && (
          <Image
            src={data?.headerImg?.data?.attributes?.url}
            fill
            alt=""
            style={{ objectFit: 'cover' }}
            className="-z-10 "
          />
        )}
        <div className="custom-container flex h-full flex-col justify-between text-white">
          <div
            className="flex max-w-fit cursor-pointer items-center gap-2 text-white"
            onClick={() => Router.push('/case-studies')}
          >
            <svg
              width="7"
              height="8"
              viewBox="0 0 7 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.2 7.824L0.344 4.144L4.2 0.48H6.04L2.168 4.144L6.04 7.824H4.2Z"
                fill="white"
              />
            </svg>

            <p>Back to Case Studies</p>
          </div>
          <div className="pb-[50%] lg:pb-[20%]">
            {data?.logo?.data?.attributes?.url && (
              <Image
                src={data?.logo?.data?.attributes?.url}
                height={120}
                width={350}
                alt="santander"
                className="h-auto w-[200px] md:w-[300px]"
              />
            )}

            <h1 className="text-[24px] lg:text-[44px] lg:leading-[65.16px]">{data?.title}</h1>
          </div>
          <div className="absolute bottom-[5%] left-[50%] flex h-[117px] w-[90vw] translate-x-[-50%] justify-between rounded-[15px] border border-white bg-white/30 p-2 backdrop-blur-[15px] lg:-bottom-8 lg:w-[80vw] lg:p-4">
            <div className="flex grow flex-col items-center justify-center md:border-r">
              <div className="flex items-center gap-2">
                <p className="inline text-[17px] font-bold md:text-[32px]">{data?.locations}</p>
                <BuildingIcon className="h-4 md:h-7" />
              </div>
              <p className="text-[14px] font-light md:text-[32px]">Locations</p>
            </div>
            <div className="flex grow flex-col items-center justify-center md:border-r">
              <div className="flex items-center gap-2">
                <p className="text-[17px] font-bold lg:text-[29px]">{data?.industry}</p>
                <Wallet className="h-4 md:h-7" />
              </div>
              <p className="text-[14px] font-light md:text-[32px]">Industry</p>
            </div>
            <div className="flex grow flex-col items-center justify-center">
              <div className="flex items-center gap-2">
                <p className="text-[17px] font-bold lg:text-[29px]">{data?.employees}</p>
                <User className="h-4 md:h-7" />
              </div>

              <p className="text-[14px] font-light md:text-[32px]">Employees</p>
            </div>
          </div>
        </div>
      </header>

      <section className="custom-container py-32 text-white">
        <h2 className="font-mono text-[28px] lg:text-[32px]">{t('challenge')}</h2>
        {data?.challenge?.split('\n\n').map((el, index) => (
          <p key={el} className={`pt-6 text-[18px] lg:text-[24px] ${index > 0 ? 'pt-8' : ''}`}>
            {el}
          </p>
        ))}

        <h2 className="mt-20 font-mono text-[28px] lg:text-[32px]">{t('solution')}</h2>
        {data?.solution?.split('\n\n').map(el => (
          <p key={el} className="pt-3 text-[18px] lg:text-[24px]">
            {el}
          </p>
        ))}
      </section>
      {data?.bodyImg?.data?.attributes?.url && (
        <Image
          src={data?.bodyImg?.data?.attributes?.url}
          height={300}
          width={600}
          alt=""
          className="h-[200px] w-full sm:h-[300px] lg:h-[500px]"
        />
      )}

      <section className="custom-container pt-20 text-white">
        <h2 className="text-center font-mono text-[32px] lg:text-[40px]">Drivers</h2>

        <div className="custom-container flex flex-col flex-wrap justify-center space-y-10 pt-20 lg:flex-row lg:justify-between lg:!px-40">
          {data?.drivers?.split('.').map(el => {
            const Icon: any = checkDrivers(el)
            return (
              el !== '' && (
                <div className="flex shrink-0 items-center justify-between gap-10 sm:justify-center lg:flex-col  lg:gap-0">
                  {Icon && <Icon className="h-28 lg:h-40 " />}

                  <p className="mt-5 text-end text-[20px] lg:text-center lg:text-[26px]">{el}</p>
                </div>
              )
            )
          })}
        </div>

        <div className=" mt-20 rounded-[16px] border border-white bg-white/20 p-10 pb-14 backdrop-blur-2xl">
          <p className="text-center font-mono text-[30px] lg:text-[38px]">Products</p>

          <div className="mt-10 grid gap-x-4 gap-y-8 font-mono text-xl md:grid-cols-2 lg:flex-row lg:pl-10 lg:text-3xl">
            {data?.products?.split('.').map(el => (
              <p key={el}>{el}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="custom-container mt-20 text-white">
        <p className="font-mono text-[28px] lg:text-[38px]">The Ingenia Way</p>

        {data?.ingenialWayText?.split('\n\n').map(e => (
          <p className="mt-4 text-[18px] lg:text-[24px]" key={e}>
            {e}
          </p>
        ))}

        <div className="flex gap-4 lg:gap-10">
          <svg
            width="6"
            height={height}
            viewBox="0 0 6 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-10 shrink-0"
          >
            <line
              x1="3.25"
              y1="4"
              x2="3.25003"
              y2="800"
              stroke="url(#paint0_linear_0_1)"
              stroke-width="0.5"
            />

            <defs>
              <linearGradient
                id="paint0_linear_0_1"
                x1="2.99663"
                y1="130.968"
                x2="3.00142"
                y2="1238.259"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="mt-7 flex flex-col space-y-10">
            {data?.ingeniaWay?.tasks?.map((item, i) =>
              item?.subtasks ? (
                <div key={i}>
                  <div className="relative left-[-22px] top-4 h-2 w-2 rounded-full bg-white lg:left-[-46px]" />

                  <p className="text-[20px] text-white/60">{item.id}</p>
                  <p className="text-[20px] font-bold lg:text-[24px]">{item.description}</p>
                  <ul className="list-disc space-y-2 pl-4 text-[20px] lg:text-[22px]">
                    {item.subtasks.map(el => (
                      <li key={el}>{el}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div key={i}>
                  <div className="relative left-[-22px] top-4 h-2 w-2 rounded-full bg-white lg:left-[-46px]" />
                  <p className="text-[20px] text-white/60">{item.id}</p>
                  <p className="text-[20px] font-bold lg:text-[24px]">{item.description}</p>
                </div>
              )
            )}
          </div>
        </div>

        <div className="mt-40 flex rounded-[16px] border border-white bg-white/10 p-6 lg:p-14">
          <div className="flex flex-col justify-between lg:basis-[60%]">
            <p className="text-[18px] lg:text-[27px]">“{data?.quoteText}”</p>

            <div className="mt-10 flex justify-start gap-6 lg:mt-4 lg:flex-col lg:gap-0">
              <div className="mx-auto h-[77px] w-[77px] shrink-0 rounded-full bg-white lg:hidden"></div>

              <div className="grow">
                <p className="text-[20px] font-bold lg:text-[28px]">{data?.quoteAuthor}</p>
                <p className="text-[16px] lg:text-[20px]">{data?.quoteAuthorRole}</p>
              </div>
            </div>
          </div>

          <div className="hidden basis-[40%] lg:block">
            {data?.quoteAuthorImg?.data?.attributes?.url ? (
              <Image
                src={data?.quoteAuthorImg?.data?.attributes?.url}
                height={300}
                width={600}
                alt=""
                className="h-[300px] w-[300px] rounded-full"
              />
            ) : (
              <div className="mx-auto h-[300px] w-[300px] rounded-full bg-white"></div>
            )}
          </div>
        </div>
      </section>

      <section className="custom-container mt-20">
        <h4 className="text-center font-mono text-[24px] text-white lg:text-[38px]">
          Check more cases
        </h4>

        <div className="mt-10 flex justify-between gap-4 overflow-x-auto">
          {[...Array(4)].map((elem, i) => (
            <div className="h-[320px] w-[300px] shrink-0 rounded-[17px] bg-white/20 p-6" key={i}>
              <div className="relative h-[85%] w-full basis-[80%] rounded-[11px]">
                <Image
                  src="/caseStudies/cablevisionImage.jpg"
                  fill
                  className="rounded-[11px]"
                  alt=""
                />
              </div>

              <div className="basis-[20%]">
                <p className="pt-2 font-nunito leading-[18px] text-white">
                  Architecture, Roadmap and Smart meters
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button
          title="Go back to case studies"
          variant="outline"
          className="mx-auto mt-14 !border-white"
          onClick={() => Router.push('/case-studies')}
        />
      </section>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('http://admin.ingenia.la/api/case-studies-lists')
  const { data }: { data: Case[] } = await response.json()
  const supportedLanguages = ['es', 'en']

  return {
    paths: data.flatMap(el =>
      supportedLanguages.map(lang => ({ params: { id: el.attributes.name }, locale: lang }))
    ),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const response = await fetch(
    `http://admin.ingenia.la/api/cases-studies?locale=${locale}&filters[name][$eq]=${params?.id}&populate=logo,bodyImg,headerImg`
  )
  const data = await response.json()
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['caseStudies'])),
      data: data?.data?.[0]?.attributes ?? {},
    },
  }
}

export default CustomCaseStudy
