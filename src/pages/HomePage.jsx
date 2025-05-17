import Navbar from "../components/Navbar";
import { FaMoneyBillWave } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdStars } from "react-icons/md";
import BenefitCard from "../components/BenefitCard";
import NowShowingMovies from "../components/NowShowingMovies";
import UpcomingMovies from "../components/UpcomingMovies";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="h-screen font-sans">
      <Navbar />
      <section className="flex flex-col items-center text-center  mt-30 px-15">
        <div className="flex flex-col items-center gap-5">
          <div className="bg-third rounded-full text-primary font-bold text-md py-1 w-[400px] max-w-full ">MOVIE TICKET PURCHASES #1 IN INDONESIA</div>
          <div>
            <p className="title-section">Experience the Magic of Cinema: </p>
            <p className="text-primary font-extrabold text-6xl ">Book Your Tickets Today</p>
          </div>
          <div>
            <p className="text-fourth text-lg">Sign up and get the ticket with a lot of discount</p>
          </div>
        </div>
        <NowShowingMovies />
      </section>
      <section id="benefit-page" className="bg-secondary text-sixth flex-between px-15 h-fit py-20 rounded-6xl">
        <div className="flex flex-col gap-5 p-2">
          <div className="flex-center bg-third text-primary font-bold rounded-full text-lg py-1 w-[200px]">WHY CHOOSE US</div>
          <h2 className="text-6xl font-medium">Unleashing the Ultimate Movie Experience</h2>
        </div>
        <div className="flex gap-5">
          <BenefitCard text="Guaranted" icon={<MdStars />} />
          <BenefitCard text="Affordable" icon={<FaMoneyBillWave />} />
          <BenefitCard text="24/7 Customer Support" icon={<RiCustomerService2Fill />} />
        </div>
      </section>
      <UpcomingMovies/>
      <Subscribe/>
      <Footer/>
    </div>
  );
};

export default HomePage;
