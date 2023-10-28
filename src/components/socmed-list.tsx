export type TSocmed = {
  id: number;
  icon: React.ReactNode;
  link: string;
};

type TSocmedListProps = {
  data: TSocmed[];
};

export const SocmedList = (props: TSocmedListProps) => {
  return (
    <div className="flex gap-2 md:gap-3">
      {props.data.map((item) => (
        <a
          href={item.link}
          target="_blank"
          key={item.id}
          className="text-base w-7 h-7 md:text-lg md:h-8 md:w-8 lg:text-2xl lg:w-10 lg:h-10 rounded-full flex justify-center items-center text-white hover:bg-white-color hover:text-red-primary border border-white-color hover:border-red-primary transition-all ease-in duration-300"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};
