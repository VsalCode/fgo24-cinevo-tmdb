import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const OrderPage = () => {
  const nav = useNavigate();

  const [selectedSeats, setSelectedSeats] = useState([]);

  const rows = ["A", "B", "C", "D", "E", "F", "G"];
  const columns = Array.from({ length: 14 }, (_, i) => i + 1);

  const soldSeats = ["C1", "C2", "C3", "F9"]
  const loveNestSeats = ["E8", "E9"]; 

  const handleSeatClick = (seat) => {
    if (soldSeats.includes(seat) || loveNestSeats.includes(seat)) {
      return;
    } 

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const ticketPrice = 10; 
  const totalPayment = selectedSeats.length * ticketPrice;

  function HandleCheckout() {
    if (selectedSeats.length === 0) {
      alert("Anda Belum Memilih Kursi!");
      return;
    }
    nav("/payment");
  }

  return (
    <section className="bg-primary text-white flex flex-col items-center gap-10 py-30">
      <section className="flex items-center">
        <div className="flex-col flex-center gap-3">
          <div className="bg-green-700 text-white font-semibold rounded-full w-9 h-9 flex-center">
            <FaCheck />
          </div>
          <p>Dates & Time</p>
        </div>
        <div className="flex before:content-['------------'] after:content-['------------']">
          <div className="flex flex-col flex-center gap-3 px-5">
            <div className="bg-third text-primary font-bold rounded-full w-9 h-9 flex-center">2</div>
            <p>Seat</p>
          </div>
        </div>
        <div className="flex flex-col flex-center gap-3">
          <div className="bg-secondary text-white font-semibold rounded-full w-9 h-9 flex-center">3</div>
          <p>Payment</p>
        </div>
      </section>
      <section className="flex lg:flex-row flex-col gap-5 sm:mx-7 mx-5 sm:bg-primary ">
        <aside className="w-full sm:max-w-[700px] max-w-[500px] h-fit rounded-xl bg-secondary shadow-xl p-4">
          <div className="h-[143px] w-full flex-between p-3 gap-7">
            <div className="w-[184px] h-full object-cover overflow-hidden rounded-lg">
              <img src="/src/assets/images/placeholder-order.png" alt="poster_movie" />
            </div>
            <div className="flex flex-col items-start justify-center gap-4">
              <p className="text-xl font-semibold">Spider-Man: Homecoming</p>
              <div className="flex gap-2">
                <div className="genre border">Action</div>
                <div className="genre border">Adventure</div>
              </div>
              <p>Regular - 13:00 PM</p>
            </div>
            <div>
              <button className="bg-third text-primary md:text-base text-sm font-bold p-2 rounded-md cursor-pointer">
                Change Now
              </button>
            </div>
          </div>
          <div className="p-3 mt-10">
            <p className="text-xl font-semibold">Choose Your Seat</p>
            <div className="mt-5">
              <div className="text-center mb-3 font-semibold">SCREEN</div>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-15 gap-1">
                  <div></div>
                  {columns.map((col, index) => (
                    <div
                      key={col}
                      className={`text-center font-semibold ${index === 7 ? "ml-4" : ""}`}
                    >
                      {col}
                    </div>
                  ))}
                </div>
                {rows.map((row) => (
                  <div key={row} className="grid grid-cols-15 gap-1 items-center">
                    <div className="font-semibold">{row}</div>
                    {columns.map((col) => {
                      const seat = `${row}${col}`;
                      const isSold = soldSeats.includes(seat);
                      const isLoveNest = loveNestSeats.includes(seat);
                      const isSelected = selectedSeats.includes(seat);
                      return (
                        <button
                          key={seat}
                          onClick={() => handleSeatClick(seat)}
                          className={`md:size-8 sm:size-7 size-5 rounded cursor-pointer ${
                            isSold
                              ? "bg-gray-500 cursor-not-allowed"
                              : isLoveNest
                              ? "bg-pink-400 cursor-not-allowed"
                              : isSelected
                              ? "bg-blue-500"
                              : "bg-gray-200 hover:bg-gray-300"
                          } `}
                          disabled={isSold || isLoveNest}
                        ></button>
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <p className="font-semibold">Seating Key</p>
                <div className="flex gap-3 mt-2">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    <span>Available</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <span>Selected</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-pink-400 rounded"></div>
                    <span>Love Nest</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-gray-500 rounded"></div>
                    <span>Sold</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <aside className="w-full md:max-w-[330px] h-[500px] flex flex-col gap-5">
          <div className="bg-secondary p-5 items-center rounded-lg">
            <div className="text-center text-2xl mb-8 font-bold text-third">
              <p>
                <span>CineOne21</span> Cinema
              </p>
            </div>
            <div className="grid grid-cols-2 mb-8">
              <span className="text-start">Movie selected</span>
              <span className="text-end font-semibold">Spider-Man: Homecoming</span>
            </div>
            <div className="grid grid-cols-2 mb-8">
              <span className="text-start">Tuesday, 07 July 2020</span>
              <span className="text-end font-semibold">13:00pm</span>
            </div>
            <div className="grid grid-cols-2 mb-8">
              <span className="text-start">One ticket price</span>
              <span className="text-end font-semibold">$10</span>
            </div>
            <div className="grid grid-cols-2 mb-8">
              <span className="text-start">Seat choosed</span>
              <span className="text-end font-semibold">
                {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
              </span>
            </div>
            <hr />
            <div className="grid grid-cols-2 my-5 text-xl font-bold">
              <span className="text-start">Total Payment</span>
              <span className="text-end font-semibold text-third">${totalPayment}</span>
            </div>
          </div>
          <button
            onClick={HandleCheckout}
            className="bg-third text-primary font-bold w-full py-4 rounded-md cursor-pointer md:text-base text-sm"
          >
            Checkout Now
          </button>
        </aside>
      </section>
    </section>
  );
};

export default OrderPage;