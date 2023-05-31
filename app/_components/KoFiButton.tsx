import Image from "next/image"

export default function KoFiButton() {
  return (
    <a href='https://ko-fi.com/R6R7LSWW7' target='_blank' className="absolute top-5 left-6">
      <Image
        src="https://storage.ko-fi.com/cdn/kofi1.png?v=3"
        width={140}
        height={35}
        alt="Buy Me a Coffee at ko-fi.com"
        className="block border-0"
      />
    </a>
  );
}
