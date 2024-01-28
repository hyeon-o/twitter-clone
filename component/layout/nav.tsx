import Link from "next/link";

export default function NavLayout({
  children,
  title,
}: Readonly<{
  children: React.ReactNode;
  title: string;
}>) {
  return (
    <section>
      <div className="fixed top-0 flex justify-center w-16 h-full py-2 border-r-[1px] border-gray-200">
        <Link href={"/"}>
          <div className="p-3 text-slate-500 hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-200 focus:text-blue-700 focus-visible:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Layer_1"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" />
            </svg>
          </div>
        </Link>
      </div>
      <div className="ml-[4rem] p-5 pt-4">
        {title && (
          <div className="mb-3">
            <h1 className="text-3xl font-extrabold">{title}</h1>
          </div>
        )}
        <div>{children}</div>
      </div>
    </section>
  );
}
