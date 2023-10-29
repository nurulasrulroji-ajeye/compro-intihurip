import { ChecklistSVG } from '../assets';

export const About = () => {
  return (
    <div className="py-10 px-4 lg:px-56 w-full" id="about">
      <h1 className="uppercase flex flex-col items-center text-center text-2xl font-bold text-red-primary gap-1">
        Tentang Kami
        <span className="h-[1px] bg-red-primary block w-36" />
      </h1>
      <div className="w-full flex flex-col lg:flex-row lg:justify-center mt-6 lg:mt-10 gap-6 lg:gap-10">
        <div className="flex flex-col gap-3 max-w-[462px]">
          <p className="text-sm lg:text-base">
            Di Init Hurip, kami menganggap perjalanan sebagai sebuah seni, bukan
            sekadar pergi dari satu tempat ke tempat lain. Kami adalah agen
            perjalanan yang memahami bahwa setiap perjalanan adalah peluang
            untuk menginspirasi, menjelajahi, dan mengenali dunia dengan cara
            yang berbeda. Dengan lebih dari 6 tahun pengalaman dalam membawa
            impian perjalanan menjadi kenyataan, kami siap membantu Anda
            menciptakan momen tak terlupakan.
          </p>
          <div className="w-full flex flex-col">
            <div className="flex w-full gap-3">
              <ChecklistSVG className="text-xl text-red-primary" />
              <p className="text-sm lg:text-base">
                sistem yang telah terintegrasi langsung dengan sistem milik
                maskapai penerbangan indonesia.
              </p>
            </div>
            <div className="flex w-full gap-3">
              <ChecklistSVG className="text-xl text-red-primary" />
              <p className="text-sm lg:text-base">
                memaksimalkan pelayanan kepada konsumen dan mitra bisnis kami.
              </p>
            </div>
            <div className="flex w-full gap-3">
              <ChecklistSVG className="text-xl text-red-primary" />
              <p className="text-sm lg:text-base">
                memaksimalkan kaemanan kepada konsumen dan mitra bisnis kami.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3 lg:max-w-[490px]">
          <p className="text-sm lg:text-base">
            Inti Hirup Travel sangat mengutamakan pelayanan dengan berbagai
            alternatif untuk mendukung kebutuhan pelanggan disetiap waktu, yaitu
            dengan tersedianya nomor Emergency 24 Hours. Sebagai PARTNER, kami
            akan memberikan kontribusi Sumber Daya Manusia dan Teknologi
            Informasi untuk meningkatkan efisiensi dalam proses bisnis pelanggan
            kami. Saat ini Inti Hirup Travel mempunyai sekitar 65 orang pegawai
            yang berpengalaman dibidangnya.
          </p>
          <div>
            <button className="py-3 px-8 text-sm text-red-primary font-medium border border-red-primary rounded-lg shadow-6 lg:hover:bg-red-primary lg:hover:text-white transition-all ease-in-out duration-500 mt-4">
              Pelajari Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
