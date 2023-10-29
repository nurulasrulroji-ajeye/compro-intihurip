import { IgIcon, LogoIcon, WaIcon } from '../assets';
import { SocmedList, TSocmed } from './socmed-list';

export const SocmedData: TSocmed[] = [
  {
    id: 1,
    icon: <IgIcon />,
    link: 'https://www.instagram.com/intihurip_travel/',
  },
  {
    id: 2,
    icon: <WaIcon />,
    link: 'https://wa.me/+62',
  },
  // {
  //   id: 3,
  //   icon: <GithubIcon />,
  //   link: 'https://github.com/nurulasrulroji-ajeye',
  // },
  // {
  //   id: 4,
  //   icon: <DiscordIcon />,
  //   link: 'https://discord.com/channels/@ajeye_',
  // },
  // {
  //   id: 5,
  //   icon: <MediumIcon />,
  //   link: 'https://medium.com/@asrulrojin',
  // },
  // {
  //   id: 6,
  //   icon: <DribleIcon />,
  //   link: 'https://dribbble.com/ajeye15',
  // },
];

export const Footer = () => {
  return (
    <>
      <div className="pt-20 px-4 lg:px-56 w-full bg-red-primary pb-5">
        <div className="w-full flex flex-col gap-8 lg:flex-row lg:justify-center lg:gap-16 lg:items-end">
          <div className="max-w-[188px] lg:max-w-xs text-[0.65rem] lg:text-base text-white-color flex flex-col gap-4 ">
            <div className="flex flex-col w-fit">
              <LogoIcon className="text-9xl" />
              <p className="text-sm font-semibold">
                PT. INTI HURIP
                <br /> (INTI TOUR & TRAVEL)
              </p>
            </div>
            <p className=" ">
              jl. kisamaun no.179 kel. sukasari kec. tanggerang kota tanggerang{' '}
            </p>
            <div>
              <p>
                <span className="font-semibold">Phone</span>: +62 21 5521479
              </p>
              <p>
                <span className="font-semibold">Fax:</span> 021-5588175
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-4 lg:max-w-xs">
            <p className="text-xs font-semibold text-white-color lg:text-base">
              Jejaring Sosial Kami
            </p>
            <p className="text-xs text-white-color lg:text-base">
              Tomorrow fermentum hate eu feugiat lide par naso tierra videa
              magna derita valies
            </p>
            <SocmedList data={SocmedData} />
          </div>
        </div>
        <div className="py-5 mt-6 lg:mt-16 w-full bg-white-color rounded-xl text-center">
          <p className="text-xs text-red-primary">
            © Copyright <span className="font-semibold">Inti Hurip Travel</span>{' '}
            2017 . All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};
