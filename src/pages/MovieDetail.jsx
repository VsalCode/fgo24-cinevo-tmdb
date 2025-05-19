import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { SelectOptions } from "../components/Input";
import SponsorCheckbox from "../components/SponsorCheckbox";

const MovieDetail = () => {
  return (
    <>
      <section className="flex flex-col justify-end mb-30 pt-25">
        <div className="flex justify-center relative">
          <div className="bg-[linear-gradient(180deg,_rgba(15,16,13,0)_0%,_rgba(15,16,13,0.8)_65.1%)] h-full w-full rounded-[40px] absolute z-40"></div>
          <img className="w-full rounded-[40px] relative" src="/src/assets/images/backdrop_path.png" alt="" />
        </div>
        <div className="flex gap-15 px-20 mt-[-240px] z-50">
          <div>
            <img src="/src/assets/images/poster_placeholder.png" alt="" />
          </div>
          <div className="flex flex-col justify-between text-white ">
            <div id="movie-overview" className="flex flex-col gap-3">
              <h1 className="font-bold">JUMBO</h1>
              <p>
                Don (Prince Poetiray), a chubby boy often mocked with the nickname "Jumbo," wants to get back at the kids who bully him. However, a spirit named Meri (Quinn Salman) asks for Don's help to be reunited with her family’s grave,
                which has been vandalized.
              </p>
              <div id="movie-information" className="flex gap-3">
                <div className="border-2 font-semibold px-4 py-2 rounded-full">Action</div>
                <div className="border-2 font-semibold px-4 py-2 rounded-full">Adventure</div>
              </div>
            </div>
            <div className="text-white text-base flex gap-10">
              <div>
                <div className="pb-5">
                  <p>Release Date</p>
                  <p className="font-bold">March 31, 2025</p>
                </div>
                <div>
                  <p>Duration</p>
                  <p className="font-bold">1 hours 42 minutes</p>
                </div>
              </div>
              <div>
                <div className="pb-5">
                  <p>Directed By</p>
                  <p className="font-bold">Ryan Adriandhy</p>
                </div>
                <div>
                  <p>Cast</p>
                  <p className="font-bold">Prince Poetiray, Quinn Salman, Graciella Abigail, M. Yusuf Ozkan, M. Adhiyat, Angga Yunanda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <form className="bg-sixth p-20 h-screen">
        <div className="flex-between pb-15">
          <h3 className="font-semibold">Book Tickets</h3>
          <Button type="submit" style="bg-third text-secondary font-extrabold">
            BOOK NOW
          </Button>
        </div>
        <div className="flex-between gap-10">
          <div className="w-full">
            <h5 className="font-semibold pb-5">Choose Date</h5>
            <SelectOptions type="date" id="date" name="date" value="2025-05-22" min="2025-05-22" max="2025-07-01" />
          </div>
          <div className="w-full">
            <h5 className="font-semibold pb-5">Choose Time</h5>
            <SelectOptions type="time" id="time" name="time" value="09:00" min="09:00" max="21:00" />
          </div>
          <div className="w-full">
            <h5 className="font-semibold pb-5">Choose Location</h5>
            <SelectOptions type="location" />
          </div>
        </div>
        <div>
          <h5 className="font-semibold pb-10 pt-15">Choose Cinema</h5>
          <div className="flex-between ">
            <SponsorCheckbox cinema="ebu.id" />
            <SponsorCheckbox cinema="hiflix" />
            <SponsorCheckbox cinema="CineOne21" />
            <SponsorCheckbox cinema="idlix" />
          </div>
        </div>
      </form>
    </>
  );
};

export default MovieDetail;
