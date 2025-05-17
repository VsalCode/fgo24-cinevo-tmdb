const Subscribe = () => {
  return (
    <section className="mx-15 h-fit py-20">
      <form className="bg-third rounded-4xl flex-center flex-col py-15">
        <div className="w-[795px] flex flex-col items-center gap-10 py-10">
          <div>
            <h1 className="font-medium">Subscribe to Our Newsletter</h1>
          </div>
          <div className="flex justify-between w-full gap-5">
            <input type="text" className="input-subscribe" placeholder="Your First Name" />
            <input type="email" className="input-subscribe" placeholder="Your Email Address" />
          </div>
          <button className="w-full bg-primary text-white font-semibold rounded-full py-3">subscribe now</button>
        </div>
      </form>
    </section>
  );
};

export default Subscribe;
