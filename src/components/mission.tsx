import React from 'react';
import {
  ChevrontUpSVG,
  CloudSVG,
  MissionSVG,
  PackageSVG,
  ShieldSVG,
  TicketSVG,
} from '../assets';
import { Disclosure } from '@headlessui/react';

export const Mission = () => {
  return (
    <div className="bg-red-white-color py-10 px-4 lg:px-56 w-full" id="vimi">
      <div className="w-full flex flex-col items-center gap-10">
        <div className="w-full flex flex-col items-center gap-10 lg:gap-20 lg:flex-row-reverse">
          <MissionSVG className="text-[15rem] text-red-primary lg:text-[25rem]" />
          <div className="w-full flex flex-col gap-3">
            <p className="text-xl text-red-primary">
              Impian Kami Dalam Membangun{' '}
              <span className="font-bold">
                Sistem Bisnis Yang Dapat Di Pelajari Oleh Pemula Dengan
                Bimbingan Mentor Ahli
              </span>
            </p>
            <div className="">
              <Disclosure>
                {({ open }) => (
                  <React.Fragment>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white-color px-4 py-2 text-left text-sm font-medium focus:outline-none text-typo-neutral-100 ">
                      <div className="flex gap-4">
                        <p className="text-sm font-semibold text-red-primary">
                          01
                        </p>
                        <p className="font-medium text-sm">
                          Apa sih Visi dari perusahaan kami?
                        </p>
                      </div>
                      <ChevrontUpSVG
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-typo-neutral-100`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      Menjadi Travel Agent yang kuat dan unggul dalam
                      penyediaan, pendistribusian, penjualan, dan pemasaran
                      produk produk khusus baik ke B2B (Business to Business)
                      maupun B2C (Business to Costumer).
                    </Disclosure.Panel>
                  </React.Fragment>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <React.Fragment>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white-color px-4 py-2 text-left text-sm font-medium focus:outline-none text-typo-neutral-100">
                      <div className="flex gap-4">
                        <p className="text-sm font-semibold text-red-primary">
                          02
                        </p>
                        <p className="font-medium text-sm text-typo-neutral-100">
                          Bagaimana dengan misi kami?
                        </p>
                      </div>
                      <ChevrontUpSVG
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-typo-neutral-100`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <ul className="list-disc ml-2">
                        <li>
                          Membangun insfrastruktur yang kuat dalam pemesanan
                          online.
                        </li>
                        <li>
                          Menggiatkan pembelian tiket dari dalam, terutama dari
                          Divisi Non Ticketing
                        </li>
                        <li>
                          Membangun pasar dengan menerapkan system jaringan
                          penjualan waralaba
                        </li>
                        <li>
                          Membangun Sinergi yang kuat antara jalur distribusi
                          off line dan on line
                        </li>
                        <li>
                          Membangun kualitas staff yang lebih baik - Menyediakan
                          informasi produk yang lengkap
                        </li>
                        <li>
                          Menyediakan layanan berkualitas di sektor off line
                        </li>
                        <li>
                          Mencari, mengembangkan dan memasarkan produk dengan
                          kualitas terbaik
                        </li>
                        <li>
                          Secara kontinyu mengembangkan sumber daya manusia yang
                          berdedikasi tinggi dengan mengikutsertakan pegewai
                          dalam program-program pelatihan.
                        </li>
                      </ul>
                    </Disclosure.Panel>
                  </React.Fragment>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <React.Fragment>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white-color px-4 py-2 text-left text-sm font-medium focus:outline-none text-typo-neutral-100">
                      <div className="flex gap-4">
                        <p className="text-sm font-semibold text-red-primary">
                          03
                        </p>
                        <p className="font-medium text-sm text-typo-neutral-100">
                          Kenapa harus memilih bisnis kami?
                        </p>
                      </div>
                      <ChevrontUpSVG
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-typo-neutral-100`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <ul className="list-disc ml-2">
                        <li>Lokasi strategis di tengah kota</li>
                        <li>
                          Sebagai Standard Travel Agent International di
                          Indonesia
                        </li>
                        <li>
                          Memiliki Staff yang profesional, menyenangkan &
                          terdidik dengan baik
                        </li>
                        <li>
                          Puluhan tahun pengalaman dalam bidang manajemen
                          perjalanan
                        </li>
                        <li>
                          Hubungan sangat erat dan baik dengan perusahaan -
                          perusahaan penerbangan
                        </li>
                        <li>Kemudahan akomodasi hotel</li>
                        <li>Pengantaran dokumen di wilayah Jakarta</li>
                      </ul>
                    </Disclosure.Panel>
                  </React.Fragment>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:max-w-lg lg:grid-cols-4 lg:max-w-4xl lg:w-full">
          <div className="p-5 rounded-lg shadow-6 bg-white-color flex flex-col gap-2">
            <TicketSVG className="text-2xl text-red-primary" />
            <p className="text-xl font-medium text-red-700">Modern Bisnis</p>
            <p className="text-sm text-red-700">
              Memperkenalkan serta mengedukasi tentang apa itu bisnis era
              digital{' '}
            </p>
          </div>
          <div className="p-5 rounded-lg shadow-6 bg-white-color flex flex-col gap-2">
            <PackageSVG className="text-2xl text-red-primary" />
            <p className="text-xl font-medium text-red-700">
              Kemudahan Perjalanan
            </p>
            <p className="text-sm text-red-700">
              Memperkenalkan serta mengedukasi tentang apa itu bisnis era
              digital{' '}
            </p>
          </div>
          <div className="p-5 rounded-lg shadow-6 bg-white-color flex flex-col gap-2">
            <CloudSVG className="text-2xl text-red-primary" />
            <p className="text-xl font-medium text-red-700">Trend Produk</p>
            <p className="text-sm text-red-700">
              Memperkenalkan serta mengedukasi tentang apa itu bisnis era
              digital{' '}
            </p>
          </div>
          <div className="p-5 rounded-lg shadow-6 bg-white-color flex flex-col gap-2">
            <ShieldSVG className="text-2xl text-red-primary" />
            <p className="text-xl font-medium text-red-700">Keamanan Sistem</p>
            <p className="text-sm text-red-700">
              Memperkenalkan serta mengedukasi tentang apa itu bisnis era
              digital{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
