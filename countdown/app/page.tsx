import Image from 'next/image';
import Countdown from './countdown';

export default function Home() {
  return (
    <main className="uppercase flex min-h-screen flex-col items-center justify-between p-24 text-white text-base">
      <h1 className="text-2xl font-bold text-white tracking-widest">We're launching soon</h1>

      <Countdown />

      <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none">
        <Image
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 fill-black hover:cursor-pointer"
          src="/images/icon-facebook.svg"
          alt="Facebook"
          width={24}
          height={24}
        />
        <Image
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="/images/icon-pinterest.svg"
          alt="Pinterest"
          width={24}
          height={24}
        />
        <Image
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="/images/icon-instagram.svg"
          alt="Instagram"
          width={24}
          height={24}
        />
      </div>
      <div className="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="http://www.ryanpdesigns.com">Ryan Paulson</a>.
      </div>
    </main>
  );
}
