import {
  DiscordIcon,
  DribleIcon,
  GithubIcon,
  IgIcon,
  LinkedInIcon,
  LogoIcon,
  MediumIcon,
} from '../assets';
import { SocmedList, TSocmed } from './socmed-list';

export const SocmedData: TSocmed[] = [
  { id: 1, icon: <IgIcon />, link: 'https://www.instagram.com/ajeye_/?hl=id' },
  {
    id: 2,
    icon: <LinkedInIcon />,
    link: 'https://www.linkedin.com/in/nurul-asrul-roji-092610238/',
  },
  {
    id: 3,
    icon: <GithubIcon />,
    link: 'https://github.com/nurulasrulroji-ajeye',
  },
  {
    id: 4,
    icon: <DiscordIcon />,
    link: 'https://discord.com/channels/@ajeye_',
  },
  {
    id: 5,
    icon: <MediumIcon />,
    link: 'https://medium.com/@asrulrojin',
  },
  {
    id: 6,
    icon: <DribleIcon />,
    link: 'https://dribbble.com/ajeye15',
  },
];

export const Footer = () => {
  return (
    <>
      <div className="pt-20 px-4 lg:px-56 w-full bg-red-primary pb-5">
        <div className="w-full flex flex-col gap-8 lg:flex-row lg:justify-center lg:gap-16 lg:items-end">
          <div className="max-w-[188px] lg:max-w-xs text-[0.65rem] lg:text-base text-white-color flex flex-col gap-4 ">
            <div>
              <LogoIcon className="text-9xl" />
            </div>
            <p className=" ">
              Jl. Timor Timur E 6 C, Desa/Keluarahan Siduandi, Kec. Mlati, Kab.
              Sleman, Provinsi Daerah Istimewa Yogyakarta.{' '}
            </p>
            <div>
              <p>
                <span className="font-semibold">Phone</span>: +62 8132 3456 7890
              </p>
              <p>
                <span className="font-semibold">Email:</span>{' '}
                fazzaskin.id@gmail.com
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
            © Copyright <span className="font-semibold">Fazza Beauty</span> .
            All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};
