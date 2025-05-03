const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between gap-10 md:gap-0 mt-5 py-12 px-6 md:px-[70px] bg-neutral-100">
      <section className="flex flex-col md:flex-row justify-between gap-10 items-center md:gap-16 md:w-[500px]">
        <section className="flex flex-col gap-2">
          <p className="text-neutral-400 text-sm md:tracking-wide">
            CONTACT US
          </p>
          <div className="text-sm md:tracking-wide text-neutral-800 flex flex-col gap-1">
            <p>+1 (844) 326-6000</p>
            <p>Email Us</p>
            <p>Mon-Fri 9am-3pm PT</p>
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <p className="text-neutral-400 text-sm md:tracking-wide">CUSTOMERS</p>
          <div className="text-sm md:tracking-wide text-neutral-800 flex flex-col gap-1">
            <p>Start a Return</p>
            <p>Return Policy</p>
            <p>FAQ</p>
            <p>Catalogs and Mailers</p>
            <p>About Group Gifting</p>
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <p className="text-neutral-400 text-sm md:tracking-wide">COMPANY</p>
          <div className="text-sm md:tracking-wide text-neutral-800 flex flex-col gap-1">
            <p>About Us</p>
            <p>Sustainability</p>
            <p>Discover Revive</p>
            <p>Careers</p>
            <p>Privacy Policy</p>
            <p>Terms</p>
          </div>
        </section>
      </section>

      <section className="md:w-[400px]">
        <section className="flex flex-col gap-4">
          <p className="text-neutral-700 font-medium">
            Get the latest news from us
          </p>
          <input
            className="h-[35px] w-full px-3 text-neutral-600 bg-neutral-100 border border-neutral-300"
            type="email"
            placeholder="Enter your email address"
          />
          <p className="text-neutral-600 font-normal text-sm md:tracking-wide">
            By signing up, you agree to our{" "}
            <span className="underline mx-1 cursor-pointer">
              Privacy Policy
            </span>{" "}
            and
            <span className="underline mx-1 cursor-pointer">
              Terms of Service
            </span>
            .
          </p>
          <button className="text-sm font-normal md:tracking-wide bg-neutral-900 w-[120px] p-2 text-white">
            Subscribe
          </button>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
