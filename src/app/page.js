import Image from "next/image";
import Link from "next/link";
import {
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandLinkedin,
} from "react-icons/tb";

export default function HomePage() {
  return (
    <main className="flex max-w-screen-lg mx-auto justify-center grow flex-col p-6 lg:px-20 lg:py-10">
      <div className="md:px-12 lg:px-6">
        <div className="w-full flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-24">
          <Image
            src="/images/profil.webp"
            className="rounded-full border-4 mb-4"
            alt="Picture of the author"
            width={250}
            height={250}
            priority
          />
          <div>
            <h1 className="text-center lg:text-start text-4xl lg:text-5xl text-neutral-800 dark:text-neutral-100 font-bold mb-4">
              Full-Stack Web Developer
            </h1>
            <p className="text-lg text-justify mb-4">
              Hello, I&#39;m Muhammad Iqbal Pasha Al Farabi. A lifetime learner,
              college student and web developer based in Bandung, Indonesia. 📍
            </p>
            <div className="flex lg:justify-normal items-center justify-center gap-2">
              <Link
                className="flex items-center gap-6 text-3xl hover:text-teal-500 transition-colors"
                href="https://github.com/miqbalps"
              >
                <TbBrandGithub />
              </Link>
              <Link
                className="flex items-center gap-6 text-3xl hover:text-teal-500 transition-colors"
                href="https://www.linkedin.com/in/iqbalpasha/"
              >
                <TbBrandLinkedin />
              </Link>
              <Link
                className="flex items-center gap-6 text-3xl hover:text-teal-500 transition-colors"
                href="https://www.instagram.com/miqbalpasha_/"
              >
                <TbBrandInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
