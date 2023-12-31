import React, { Fragment, useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import Hamburger from 'hamburger-react';
import { Link } from 'react-scroll';
import { LogoIcon } from '../assets';

export const Navbar = () => {
  const [scrollDir, setScrollDir] = useState('scrolling down');
  const [scrollY, setScrollY] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      setScrollY(scrollY);

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? 'scrolling down' : 'scrolling up');
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  return (
    <React.Fragment>
      <header className="fixed top-2 z-50 w-full px-4 lg:px-56">
        <nav
          className={`${
            scrollY > 50 ? 'shadow-6 bg-white-color ' : ''
          } w-full flex justify-between px-4 lg:px-8 py-2 items-center rounded-xl `}
        >
          <div className="flex items-center gap-1">
            <div
              className={`${
                scrollY > 50
                  ? ''
                  : 'w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white-color shadow-6 flex justify-center items-center'
              }`}
            >
              <LogoIcon
                className={`${
                  scrollY > 50
                    ? 'text-[#F45050] transition-all ease-in-out duration-700 text-5xl lg:text-6xl'
                    : 'text-[#F45050] text-4xl lg:text-5xl'
                }  `}
              />
            </div>
            <p
              className={`${
                scrollY > 50 ? 'text-[#F45050] ' : 'text-white-color'
              } text-sm font-bold`}
            >
              PT. INTI HURIP
              <br /> (INTI TOUR & TRAVEL)
            </p>
          </div>
          <div className="hidden lg:flex gap-6">
            <div
              className={`${
                scrollY > 50
                  ? 'text-red-primary transition-all ease-in-out hover:text-red-900 duration-700'
                  : 'text-white-color hover:text-white-color/70'
              } font-semibold uppercase  cursor-pointer `}
            >
              <Link activeClass="font-bold" smooth spy to="about">
                Tentang Kami
              </Link>
            </div>
            <div
              className={`${
                scrollY > 50
                  ? 'text-red-primary transition-all ease-in-out hover:text-red-900 duration-700'
                  : 'text-white-color hover:text-white-color/70'
              } font-semibold uppercase  cursor-pointer `}
            >
              <Link activeClass="font-bold" smooth spy to="vimi">
                Visi Misi
              </Link>
            </div>
            <div
              className={`${
                scrollY > 50
                  ? 'text-red-primary transition-all ease-in-out hover:text-red-900 duration-700'
                  : 'text-white-color hover:text-white-color/70'
              } font-semibold uppercase  cursor-pointer `}
            >
              <Link activeClass="font-bold" smooth spy to="produk">
                Produk Kami
              </Link>
            </div>
            <div
              className={`${
                scrollY > 50
                  ? 'text-red-primary transition-all ease-in-out hover:text-red-900 duration-700'
                  : 'text-white-color hover:text-white-color/70'
              } font-semibold uppercase  cursor-pointer `}
            >
              Info
            </div>
          </div>
          <div className="lg:hidden flex">
            <Hamburger
              toggled={isOpen}
              onToggle={(toogled) => {
                if (toogled) {
                  setIsOpen(true);
                } else {
                  setIsOpen(false);
                }
              }}
              size={20}
              rounded
              color={scrollY > 50 ? '#F45050' : '#fff'}
            />
          </div>
        </nav>
      </header>
      <Transition
        as={Fragment}
        show={isOpen}
        enter="transform transition ease-out duration-500"
        enterFrom="translate-x-[30rem]"
        enterTo="translate-y-0"
        leave="transform transition ease-in duration-500"
        leaveFrom="translate-y-0"
        leaveTo=" translate-x-[30rem]"
      >
        <div className="fixed inset-0 z-20 bg-red-primary pt-32 px-4 lg:hidden ">
          <div className="flex gap-6 flex-col">
            <div className="font-semibold uppercase text-white-color">
              <Link onClick={() => setIsOpen(false)} activeClass="font-bold" smooth spy to="about">
                Tentang Kami
              </Link>
            </div>
            <div className="font-semibold uppercase text-white-color">
              <Link onClick={() => setIsOpen(false)} activeClass="font-bold" smooth spy to="vimi">
                Visi Misi
              </Link>
            </div>
            <div className="font-semibold uppercase text-white-color">
              <Link onClick={() => setIsOpen(false)} activeClass="font-bold" smooth spy to="produk">
                Produk Kami
              </Link>
            </div>
            <div className="font-semibold uppercase text-white-color">Info</div>
          </div>
        </div>
      </Transition>
    </React.Fragment>
  );
};
