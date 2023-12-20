import Image from "next/image";
import { Play } from "react-feather";
import image1 from "../../../public/images/main/instagram-1.jpeg";
import image2 from "../../../public/images/main/instagram-2.jpeg";
import image3 from "../../../public/images/main/instagram-3.jpeg";
import image4 from "../../../public/images/main/instagram-4.jpeg";
import image5 from "../../../public/images/main/instagram-5.jpeg";
import image6 from "../../../public/images/main/instagram-6.jpeg";
import Link from "next/link";
import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

const InstagramPost = ({ image, link }: { image: any; link: string }) => {
  return (
    <Link href={link} rel="noopener noreferrer" target="_blank">
      <div className="w-[280px] h-[280px] relative overflow-hidden rounded-2xl ">
        <Image
          style={{ objectPosition: "0 -100px" }}
          className="transition ease-in-out object-cover object-center hover:scale-125"
          src={image}
          width={280}
          height={280}
          alt="instagram post"
        />
      </div>
      <div className=" relative bottom-1/2 left-[47%] z-20">
        <Play width={30} height={30} />
      </div>
    </Link>
  );
};

export const InstagramPosts = () => {
  const arr = [
    {
      image: image1,
      link: "https://www.instagram.com/reel/Csb32hYroEr/embed/?autoplay=1",
    },
    {
      image: image2,
      link: "https://www.instagram.com/reel/CsZI9wxLCLR/embed/?autoplay=1",
    },
    {
      image: image3,
      link: "https://www.instagram.com/reel/CsJ86aiLbfY/embed/?autoplay=1",
    },
    {
      image: image4,
      link: "https://www.instagram.com/reel/CsHfO0SMi0m/embed/?autoplay=1",
    },
    {
      image: image5,
      link: "https://www.instagram.com/reel/CsE7ZFXuErN/embed/?autoplay=1",
    },
    {
      image: image6,
      link: "https://www.instagram.com/reel/Cry6dygJU5X/embed/?autoplay=1",
    },
  ];

  return (
    <>
      <div className={`text-5xl text-center my-[100px] ${anton.className}`}>
        FOLLOW OUR UPDATES ON INSTAGRAM
      </div>
      <div className="w-full  lg:px-[400px] px-[100px] flex flex-wrap justify-center gap-[30px]">
        {arr.map((el) => {
          return <InstagramPost key={el.link} {...el} />;
        })}
      </div>
    </>
  );
};
