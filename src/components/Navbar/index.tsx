import Image from 'next/image'
import { Disclosure, Transition } from '@headlessui/react'
import Button from '@/components/Button'
import { InstagramIcon, LinkedinIcon, SpotifyIcon, TwitterIcon, YoutubeIcon } from '@/assets/icons'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const { locale, push } = useRouter()
  const pathname = usePathname()
  const items = [
    {
      title: 'About Us',
      content1: 'We Are',
      content2: 'History Timeline',
      content3: 'Ingeniacracy',
      content4: 'Community',
      content5: 'Join us',
      click: '/about-us',
    },
    {
      title: 'Meet the team',
      content1: 'Profile Ingenial',
      click: '/meet-our-team',
    },
    {
      title: 'Our Work',
      content1: 'Drivers',
      content2: 'Capabilities',
      content3: 'Clients',
      content4: 'Industries',
      content5: 'Certifications',
      click: '/our-work',
    },
    {
      title: 'Case studies',
      content1: 'Highlights',
      content2: 'Cases',
      click: '/case-studies',
    },
    {
      title: 'Solutions',
      content1: 'Startia',
      content2: 'Devify',
      content3: 'Go Elevate',
      click: '/solutions',
    },
    // {
    //   title: 'Content Hub',
    //   content1: 'News',
    //   content2: 'Podcast',
    //   content3: 'Newsletter',
    // },
    // {
    //   title: 'Join Us',
    //   content1: 'Open positions',
    //   content2: 'Benefits',
    // },
    {
      title: locale === 'en' ? 'EN' : 'ES',
    },
  ]
  const genericHamburgerLine = `h-[2px] w-6 my-[3px] rounded-full bg-white transition ease transform duration-300`
  return (
    <Disclosure as="nav" className="bg-black/40 backdrop-blur-[10px]">
      {({ open, close }) => (
        <>
          <div className="custom-container">
            <div className="flex flex-1 items-center justify-between">
              <div className="flex h-16 items-center justify-between">
                <div className="flex flex-shrink-0 items-center ">
                  <Transition
                    show={!open}
                    enter="ease-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="/logoImage.png"
                      alt="Your Company"
                      className="cursor-pointer"
                      onClick={() => Router.push('/')}
                    />
                  </Transition>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Transition
                  show={!open}
                  enter="ease-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="hidden gap-3 lg:flex">
                    <Button title="Join us" />
                    <Button title="Get in touch" variant="secondary" />
                  </div>
                </Transition>
                <Disclosure.Button className="rounded-md bg-transparent text-gray-400 hover:text-white">
                  <div className="group flex h-12 flex-col items-center justify-center rounded border-2 border-none">
                    <div
                      className={`${genericHamburgerLine} ${
                        open
                          ? 'translate-y-1 rotate-45 group-hover:opacity-100'
                          : 'group-hover:opacity-100'
                      }`}
                    />
                    <div
                      className={`${genericHamburgerLine} ${
                        open ? 'opacity-0' : ' group-hover:opacity-100'
                      }`}
                    />
                    <div
                      className={`${genericHamburgerLine} ${
                        open
                          ? '-translate-y-3 -rotate-45 group-hover:opacity-100'
                          : ' group-hover:opacity-100'
                      }`}
                    />
                  </div>
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Transition
            show={open}
            className="overflow-hidden"
            enter="transition transition-[max-height] duration-500 ease-in"
            enterFrom="transform max-h-0"
            enterTo="transform max-h-screen"
            leave="transition transition-[max-height] duration-300 ease-out"
            leaveFrom="transform max-h-screen"
            leaveTo="transform max-h-0"
          >
            <Disclosure.Panel>
              <div className=" mx-auto justify-between gap-4 px-2 pb-28 pt-4 text-white   lg:flex lg:max-w-[1600px] lg:px-12 lg:pt-0">
                <div className="absolute left-4 top-0 hidden lg:static lg:block">
                  <Image
                    width={100}
                    height={100}
                    src="/logoImage.png"
                    alt="Your Company"
                    className="cursor-pointer"
                    onClick={() => Router.push('/')}
                  />
                </div>
                {items.map((e, i) => (
                  <div
                    key={e.title}
                    className={`${
                      e.title === 'Join Us'
                        ? '!lg:pb-0 mb-4 border-b-[1px] border-white/[.1] !pb-14 lg:mb-0 lg:border-none'
                        : ''
                    } flex items-center gap-14 pb-6 pl-3 text-lg font-normal text-white lg:flex-col lg:items-start lg:pb-0 lg:pl-0 ${
                      items.length - 1 === i ? 'justify-between' : ''
                    }`}
                  >
                    {e.title === 'EN' || e.title === 'ES' ? (
                      <Link
                        href={pathname}
                        locale={locale === 'en' ? 'es' : locale === 'es' ? 'en' : 'en'}
                      >
                        <p className="lg:order-0 order-2 mr-4 cursor-pointer rounded-[56px] bg-black/[.13]  px-3 py-[7px] text-[18px] font-bold lg:mr-0 lg:bg-none lg:px-0 lg:py-0 ">
                          {e.title}
                        </p>
                      </Link>
                    ) : (
                      <p
                        className="cursor-pointer font-bold"
                        onClick={() => {
                          close()
                          push(e?.click ?? '')
                          if (!['EN', 'ES'].includes(e.title)) return
                          push('', undefined, {
                            locale: locale === 'en' ? 'es' : 'en',
                          })
                        }}
                      >
                        {e.title}
                      </p>
                    )}

                    {['EN', 'ES'].includes(e.title) ? (
                      <div className="flex h-full  cursor-pointer items-center gap-8 space-y-6 lg:order-2 lg:flex-col lg:justify-between lg:gap-0 ">
                        <LinkedinIcon className="h-4 lg:h-6" />
                        <TwitterIcon className="!mt-0 h-4 !space-y-0 lg:h-6" />
                        <InstagramIcon className="!mt-0 h-4 !space-y-0 lg:h-6" />
                        <SpotifyIcon className="!mt-0 h-4 !space-y-0 lg:h-6" />
                        <YoutubeIcon className="!mt-0 h-4 !space-y-0 lg:h-6" />
                      </div>
                    ) : (
                      <div className="hidden cursor-pointer flex-col gap-2 lg:flex">
                        <p>{e.content1}</p>
                        <p>{e.content2}</p>
                        <p>{e.content3}</p>
                        <p>{e.content4}</p>
                        <p>{e.content5}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
