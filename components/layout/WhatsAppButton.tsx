export default function WhatsAppButton() {
  const phoneNumber = "923479714761";

  const message =
    "Hello, I would like to book an appointment at Dental Villa.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-[0_12px_35px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#20BA5A] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="h-8 w-8 fill-white"
        aria-hidden="true"
      >
        <path d="M380.9 97.1C339-3.1 224.4-33.1 135.4 21.8 53.6 72.2 18.2 171.4 50.1 260L15.9 385l128-33.6c85.9 46.9 193.7 16.1 241.4-68.6 34.2-60.8 32.5-134.6-4.4-185.7zM224.1 349.5c-42.4 0-83.9-11.4-120.2-33.1l-8.6-5.1-75.9 19.9 20.3-74-5.6-9C10.9 210.7 8.9 165 28.6 126.1 65.4 53.2 154.4 23.3 227.2 60.1c35.2 17.8 61.5 48.2 74 85.7 12.5 37.4 9.7 77.6-8.1 112.8-27.2 54-82.6 90.9-145.2 90.9h-23.8zm73.8-83.2c-4-2-23.8-11.8-27.5-13.1-3.7-1.3-6.4-2-9.1 2-2.7 4-10.4 13.1-12.7 15.8-2.3 2.7-4.7 3-8.7 1-4-2-16.9-6.2-32.2-19.8-11.9-10.6-19.9-23.7-22.2-27.7-2.3-4-.2-6.2 1.8-8.2 1.8-1.8 4-4.7 6-7 2-2.3 2.7-4 4-6.7 1.3-2.7.7-5-0.3-7-1-2-9.1-22-12.5-30.1-3.3-7.9-6.7-6.8-9.1-6.9h-7.7c-2.7 0-7 1-10.7 5-3.7 4-14.1 13.8-14.1 33.7s14.5 39.1 16.5 41.8c2 2.7 28.6 43.7 69.3 61.3 9.7 4.2 17.3 6.7 23.2 8.6 9.7 3.1 18.5 2.7 25.5 1.6 7.8-1.2 23.8-9.7 27.2-19.1 3.3-9.4 3.3-17.4 2.3-19.1-1-1.7-3.7-2.7-7.7-4.7z" />
      </svg>

      <span className="pointer-events-none absolute right-20 hidden whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}