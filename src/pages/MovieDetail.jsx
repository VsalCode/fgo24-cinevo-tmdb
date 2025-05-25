import Button from "../components/Button";
import { SelectOptions } from "../components/Input";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

// const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const MovieDetail = () => {
  // const nav = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const { register, handleSubmit} = useForm({
    defaultValues: {
      date: new Date().toISOString().substring(0, 10) 
    }
  })
  const currentUser = useSelector((state) => state.auth.currentUser);

  function handleBookTicket(value) {

    if(currentUser === null){
      toast.error("You must Login or Register!");
    }else {
      // nav("/order");
      const { cinema, date } = value
      console.log(cinema, date);
      
    }
  }

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?append_to_response=credits&api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
        // console.log(res.data);
        const getData = res.data
        
        setData(getData);
        // console.log(getData);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchDetails();
  }, []);
  
  const director = data.credits?.crew?.find(e => e.job === "Director")
  
  return (
    <>
      <section className="flex flex-col justify-end mb-15 pt-25">
        <Toaster/>
        <div className="flex justify-center relative">
          <div className="bg-[linear-gradient(180deg,_rgba(15,16,13,0)_0%,_rgba(15,16,13,0.8)_65.1%)] h-full w-full rounded-[40px] absolute z-40"></div>
          <img className="h-[520px] object-cover w-full rounded-[40px] relative" src={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`} alt="backdrop_path" />
        </div>

        <div className="flex flex-row justify-between gap-15 px-20 mt-[-220px] z-50">
          <div className="flex-center w-[25vw]">
            <img className="rounded-2xl h-100 w-250 object-contain" src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt="Poster_Movie" />
          </div>
          <div className="flex flex-col gap-15 py-2 h-fit text-white w-[75vw]">
            
            <div id="movie-overview" className="flex flex-col items-start justify-center gap-3">
              <p className="font-bold text-3xl bg-third text-primary rounded-sm px-5 py-1">{data.title}</p>
              <p className="text-base font-medium" >{data.overview}</p>
              <div id="movie-information" className="flex gap-3">
                {data.genres &&
                  data.genres?.map((genre) => (
                    <div key={genre.id} className="text-third border-2 font-medium px-3 py-1 rounded-full">
                      {genre.name}
                    </div>
                  ))}
              </div>
            </div>
            
            <div className="text-white text-base flex flex-col gap-4">
              <div className="grid grid-cols-3">
                <div className="flex flex-col justify-end">
                  <p className="text-third">Release Date</p>
                  <p className="font-bold">{data.release_date}</p>
                </div>
                <div className=" flex flex-col justify-end">
                  <p className="text-third">Duration</p>
                  <p className="font-bold">{data.runtime} minute</p>
                </div>
                <div className=" flex flex-col justify-end">
                  <p className="text-third">Directed By</p>
                  <p className="font-bold">{director?.name}</p> 
                </div>
              </div>
              <div>
                <div>
                  <p className="text-third">Cast</p>
                  <p className=" text-sm">
                    {data.credits?.cast?.map((cast) => (cast.name)).join(' , ') }
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <form onSubmit={handleSubmit(handleBookTicket)} className="bg-sixth p-20 h-screen">
        <div className="flex-between pb-15">
          <h3 className="font-semibold">Book Tickets</h3>
          <Button type="submit" style="bg-third text-secondary font-extrabold">
            BOOK NOW
          </Button>
        </div>
        <div className="flex-between gap-10">
          <div className="w-full">
            <h5 className="font-semibold pb-5">Choose Date</h5>
            <SelectOptions {...register('date')} type="date" id="date" name="date" />
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
            <SponsorCheckbox cinema="ebv.id" {...register('cinema')} />
            <SponsorCheckbox cinema="hiflix" {...register('cinema')} />
            <SponsorCheckbox cinema="CineOne21" {...register('cinema')} />
            <SponsorCheckbox cinema="idlix" {...register('cinema')} />
          </div>
        </div>
      </form>
    </>
  );
};

export default MovieDetail;


function SponsorCheckbox({ cinema, ...props }) {
  return (
    <label className={`w-[269px] h-[153px] px-5 flex flex-col justify-center  gap-7 rounded-xl cursor-pointer border text-fourth has-checked:bg-third has-checked:text-secondary relative`}>
      <div className="flex justify-end">
        <input type="radio" name="cinema" value={`${cinema}`} {...props} />
      </div>
      <h2 className="font-semibold">{cinema}</h2>
    </label>
  );
}

