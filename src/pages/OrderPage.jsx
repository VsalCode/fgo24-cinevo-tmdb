import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCheck } from "react-icons/fa";

const OrderPage = () => {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <section className="flex flex-col items-center gap-10 my-30">
        <div className="flex items-center ">
          <div className="flex-col flex-center gap-3">
            <div className="bg-green-700 text-white font-semibold rounded-full w-9 h-9 flex-center">
              <FaCheck />
            </div>
            <p>Dates & Time</p>
          </div>
          <div className="flex before:content-['------------'] after:content-['------------']">
            <div className="flex-col flex-center gap-3 px-5">
              <div className="bg-primary text-white font-semibold rounded-full w-9 h-9 flex-center ">2</div>
              <p>Seat</p>
            </div>
          </div>
          <div className="flex-col flex-center gap-3">
            <div className="bg-fifth text-white font-semibold rounded-full w-9 h-9 flex-center">3</div>
            <p>Payment</p>
          </div>
        </div>
        <div className="flex gap-5">
            <div className="w-[732px] h-[800px] border shadow-xl"></div>
            <div className="w-[358px] h-[400px] border shadow-xl"></div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default OrderPage;
