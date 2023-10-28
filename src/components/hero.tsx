import { TravelSVG } from '../assets';

export const Hero = () => {
  return (
    <div className="w-full bg-red-primary py-20 flex flex-col lg:flex-row-reverse items-center gap-4 px-4 lg:px-56">
      <div>
        <TravelSVG className="text-[15rem] lg:text-[25rem]" />
      </div>
      <div className="w-full flex flex-col items-center text-center lg:text-left lg:items-start px-2 gap-3 ">
        <p className="text-2xl font-bold text-white-color lg:text-4xl lg:max-w-[490px]">
          Solusi Terbaik Untuk Meningkatkan Income Kamu
        </p>
        <p className="text-white-color font-medium lg:max-w-[490px]">
          Perluas Jaringan Bisnis Dan Bangun Team Hebat Kamu Untuk Sukses
          Bersama
        </p>
        <button className="shadow-1 bg-white-color py-3 px-8 rounded-full mt-3 font-semibold hover:bg-red-primary hover:border hover:border-white-color hover:text-white-color transition-all ease-in-out duration-500">
          Hubungi Kami
        </button>
      </div>
    </div>
  );
};
