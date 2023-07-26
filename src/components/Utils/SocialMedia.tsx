import { InstagramIcon, LinkedinIcon, SpotifyIcon, TwitterIcon, YoutubeIcon } from '@/assets/icons'

const SocialMedia = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex h-full cursor-pointer flex-row items-center justify-between lg:gap-8 ${className}`}
    >
      <a href="https://www.linkedin.com/company/ingenia.la">
        <LinkedinIcon className="h-6" />
      </a>
      <a href="https://twitter.com/Ingenia_la">
        <TwitterIcon className="h-6" />
      </a>
      <a href="https://www.instagram.com/ingenia.la/">
        <InstagramIcon className="h-6" />
      </a>
      <a href="https://open.spotify.com/show/3XpDnidkR9dY8nlWF1FDQn?si=040efd1a646742eb">
        <SpotifyIcon className="h-6" />
      </a>

      <a href="https://www.youtube.com/channel/UCzPv_AB78iJS6wf4se0Y_pw">
        <YoutubeIcon className="h-6" />
      </a>
    </div>
  )
}

export default SocialMedia
