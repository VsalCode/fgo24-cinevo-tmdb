import { RiArrowDropDownLine } from "react-icons/ri";
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";

const DashboardAdmin = () => {
  const dataHistoryPayment = useSelector((state) => state.ticket.historyPayment);

  const topMovieBook = dataHistoryPayment.reduce((acc, item) => {
    const movieName = item.title || item.name; 
    acc[movieName] = (acc[movieName] || 0) + 1;
    return acc;
  }, {});

  const topMovies = Object.entries(topMovieBook)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, 6);

  const salesChart = [["Movie", "Ticket Sales"], ...topMovies];

  const jakarta = dataHistoryPayment.filter((e) => e.location === 'Jakarta' ).length
  const bandung = dataHistoryPayment.filter((e) => e.location === 'Bandung' ).length
  const bekasi = dataHistoryPayment.filter((e) => e.location === 'Bekasi' ).length
  const depok = dataHistoryPayment.filter((e) => e.location === 'Depok' ).length

  const ticketSales = [
    ["Ticket Sales", "Location Cinema"],
    ["Jakarta", jakarta],
    ["Bandung", bandung],
    ["Bekasi", bekasi],
    ["Depok", depok],
  ];

  return (
    <>
      <section className="bg-secondary text-white flex flex-col gap-6 rounded-4xl md:max-w-[70svw] w-full h-fit p-8">
        <p className="text-3xl font-medium">Sales Chart</p>
        <div className="flex sm:flex-row flex-col sm:items-center items-start gap-3 text-primary">
          <button className="cursor-pointer bg-[#EFF0F6] flex items-center gap-3 py-1 px-4 rounded-lg">
            <span>Movies Name</span> <RiArrowDropDownLine className="text-3xl" />
          </button>
          <button className="cursor-pointer bg-[#EFF0F6] flex items-center gap-3 py-1 px-4 rounded-lg">
            <span>Weekly</span> <RiArrowDropDownLine className="text-3xl" />
          </button>
          <button className="cursor-pointer bg-third font-semibold  gap-3 py-2 px-4 rounded-lg">
            <span>Filter</span>
          </button>
        </div>
        <Chart chartType="PieChart" data={salesChart} width={"100%"} height={"350px"} />
      </section>
      <section className="bg-secondary text-white flex flex-col gap-6 rounded-4xl md:max-w-[70svw] w-full h-fit p-8">
        <p className="text-3xl font-medium">Ticket Sales</p>
        <div className="flex sm:flex-row flex-col sm:items-center items-start gap-3 text-primary">
          <button className="cursor-pointer bg-[#EFF0F6] flex items-center gap-3 py-1 px-4 rounded-lg">
            <span>Category</span> <RiArrowDropDownLine className="text-3xl" />
          </button>
          <button className="cursor-pointer bg-[#EFF0F6] flex items-center gap-3 py-1 px-4 rounded-lg">
            <span>Location</span> <RiArrowDropDownLine className="text-3xl" />
          </button>
          <button className="cursor-pointer bg-third font-semibold  gap-3 py-2 px-4 rounded-lg">
            <span>Filter</span>
          </button>
        </div>
        <Chart chartType="PieChart" data={ticketSales} width={"100%"} height={"350px"} />
      </section>
    </>
  );
};

export default DashboardAdmin;
