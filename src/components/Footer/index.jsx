const Footer = () => {
  return (
    <footer className="flex justify-between mt-5 py-[60px] px-[70px] h-[300px] bg-neutral-100">
      <section className="flex justify-between w-[500px] h-[200]">
        <section className="flex justify-around flex-col h-[120px]">
          <div>
            <p className="text-neutral-400 text-sm md:tracking-wide">
              CONTACT US
            </p>
          </div>
          <div className="text-sm md:tracking-wide text-neutral-800 flex justify-between flex-col h-[70px]">
            <p>+1 (844) 326-6000</p>
            <p>Email Us</p>
            <p>Mon-Fri 9am-3pm PT</p>
          </div>
        </section>
        <section className="flex justify-around flex-col h-[160px]">
          <div>
            <p className="text-neutral-400 text-sm md:tracking-wide">
              CUSTOMERS
            </p>
          </div>
          <div className="text-sm md:tracking-wide text-neutral-800 flex justify-between flex-col h-[118px]">
            <p>Start a Return</p>
            <p>Return Policy</p>
            <p>FAQ</p>
            <p>Catalogs and Mailers</p>
            <p>About Group Gifting</p>
          </div>
        </section>
        <section className="flex justify-around flex-col h-[180px]">
          <div>
            <p className="text-neutral-400 text-sm md:tracking-wide">COMPANY</p>
          </div>
          <div className="text-sm md:tracking-wide text-neutral-800 flex justify-between flex-col h-[140px]">
            <p>About Us</p>
            <p>Sustainability</p>
            <p>Discover Revive</p>
            <p>Careers</p>
            <p>Privacy Policy</p>
            <p>Terms</p>
          </div>
        </section>
      </section>
      <section>
        <section className="flex flex-col justify-between h-[180px] w-[400px]">
          <div>
            <p className="text-neutral-700 font-medium">
              Get the latest new from us
            </p>
          </div>
          <div className="flex flex-col justify-around h-[140px]">
            <input
              className="h-[35px] w-[100%] px-3 text-neutral-600 bg-neutral-100 border-[1px] border-neutral-300"
              type="email"
              placeholder="Enter your email address"
            />
            <p className="text-neutral-600 font-normal text-sm md:tracking-wide">
              By signing up, you agree to our{" "}
              <span className="underline mx-1 cursor-pointer">
                Privacy Policy
              </span>
              and
              <span className="underline mx-1 cursor-pointer">
                Terms of Service
              </span>
              .
            </p>
            <button className="text-sm font-normal md:tracking-wide bg-neutral-900 w-[100px] p-[8px] text-neutral-100">
              Subscribe
            </button>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
