import Header from "@/components/Header";
import CallToAction from "@/sections/cta";
import Footer from "@/sections/footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center">
      {/* Header Section */}
      <div className="bg-indigo-300 w-full h-[80px] lg:h-[100px]">
        <Header />
      </div>

      {/* Page Content */}
      <div className="w-full lg:w-[80%] border-l border-r border-gray-300 bg-indigo-100">
        {children}
      </div>

      {/* Footer & CTA */}
      <div className="relative bg-black w-full">
        <div className="absolute inset-0 hidden lg:block bg-[url(/footer.jpg)] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <CallToAction />
          <Footer />
        </div>
      </div>
    </div>
  );
}
