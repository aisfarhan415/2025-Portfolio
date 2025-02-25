import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-background text-gray-900 overflow-hidden">
      <section className="flex flex-col items-center text-center w-[788px] relative">
        {/* First Heading (Normal Layout) */}
        <h1 className="text-8xl text-blue font-bold mb-4 lexend break-words leading-normal text-center drop-shadow-[2px_2px_0px_white]">
          From <span className="castoro font-[400]">Renaissance</span> to
          Reimagined
        </h1>

        <p className="text-3xl text-black mb-6 lexend font-extralight">
          Let’s start where history meets creativity—turning old into bold.
        </p>

        {/* Random Positioned Images */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/assets/image.svg"
            alt="Placeholder 1"
            width={145}
            height={145}
            className="absolute object-cover z-10"
            style={{ left: "18px", top: "94px", transform: "rotate(5deg)" }}
          />
          <Image
            src="/assets/rectangle_1.svg"
            alt="Placeholder 2"
            width={145}
            height={145}
            className="absolute object-cover z-20"
            style={{ left: "483px", top: "221px", transform: "rotate(-5deg)" }}
          />
          <Image
            src="/assets/rectangle_3.svg"
            alt="Placeholder 3"
            width={289}
            height={289}
            className="absolute object-cover z-30"
            style={{ left: "532px", top: "480px", transform: "rotate(5deg)" }}
          />
          {/* Second Heading (Ignores Auto Layout) */}
          <h1
  className="absolute text-8xl font-bold lexend break-words leading-normal pointer-events-none z-40 text-transparent"
  style={{
    left: "0px",
    top: "0px",
    WebkitTextStroke: "1px white", // Outline di semua sisi
    WebkitTextFillColor: "transparent", // Biar isi teksnya ilang
  }}
>
  From <span className="castoro font-[400]">Renaissance</span> to Reimagined
</h1>

        </div>
      </section>
    </main>
  );
}
