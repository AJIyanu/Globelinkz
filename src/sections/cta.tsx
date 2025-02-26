import Image from "next/image";

export default function CallToAction() {
  return (
    <div className="w-[80%] flex flex-col bg-indigo-200 p-9 items-center">
      <p className="text-center mx-10 text-2xl italic">
        In today’s fast-paced digital landscape, every moment counts—delay could
        mean competitors capitalizing on opportunities that should be yours. At
        Globlinkz, we’re forging a strategic partnership that transforms
        challenges into digital excellence, because your growth is our priority.
        Reach out today to secure your competitive edge and propel your business
        to new heights.
      </p>
      <div className="mt-10 flex items-center gap-x-12 flex-col md:flex-row">
        <a
          href="#"
          className="rounded-md bg-green-600 flex gap-2 items-center px-4 py-3 text-white text-xl hover:bg-green-700 mb-2 md:mb-0"
        >
          Start a Conversation
          <Image
            width={24}
            height={24}
            src="/icons8-whatsapp-24.png"
            alt="whatsapp--v1"
          />
        </a>
        <a
          href="#"
          className="text-sm/6 font-semibold text-green-700 border-2 border-green-700 rounded-md px-4 py-3"
        >
          Book an Appointment <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
