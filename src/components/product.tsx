import { useState } from 'react';
import { TTabs, Tabs } from './tab';
import { AdventureIcon, TiketPesawatIcon } from '../assets';

const tabData: TTabs[] = [
  { id: '1', name: 'Semua' },
  { id: '2', name: 'Udara' },
  { id: '3', name: 'Darat' },
  { id: '4', name: 'Laut' },
];

const DATA_PRODUCT = [];

export const Product = () => {
  const [tab, setTab] = useState<string>(tabData[0].id);
  return (
    <div className="bg-white-color py-10 px-4 lg:px-56 w-full " id="produk">
      <h1 className="uppercase flex flex-col items-center text-center text-2xl font-bold text-red-primary gap-1">
        Produk Kami
        <span className="h-[1px] bg-red-primary block w-36" />
      </h1>
      <div className="mt-4 w-full flex flex-col gap-4">
        <p className="text-center text-sm text-typo-neutral-80">
          Produk kecantikan yang bisa meningkatkan kepercayaan diri kamu setiap
          harinya dengan berbagai macam varian yang dapat disesuaikan dengan
          selera yang kamu mau
        </p>
        <Tabs
          data={tabData}
          activeTab={tab}
          setActiveTab={setTab}
          layoutId="tabproduct"
        />
        <div className="w-full flex flex-col items-center mt-2 gap-4">
          <div className="p-2 w-fit bg-white-color rounded-xl shadow-1 flex flex-col gap-5">
            <div className="w-60 h-40 bg-white-color flex justify-center items-center rounded-2xl shadow-6">
              <TiketPesawatIcon className="text-[12rem] text-red-primary" />
            </div>
            <div className="max-w-[15rem]">
              <p className="text-lg font-semibold">Tiket Pesawat</p>
              <p className="text-sm text-typo-neutral-80">
                Kami mendukung semua maskapai penerbangan
              </p>
            </div>
          </div>
          <div className="p-2 w-fit bg-white-color rounded-xl shadow-1 flex flex-col gap-5">
            <div className="w-60 h-40 bg-white-color flex justify-center items-center rounded-2xl shadow-6">
              <AdventureIcon className="text-[12rem] text-red-primary" />
            </div>
            <div className="max-w-[15rem]">
              <p className="text-lg font-semibold">Mini Bus</p>
              <p className="text-sm text-typo-neutral-80">
                Kami menyediakan berbagai macam mini bus
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
