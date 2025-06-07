import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addMovieActions } from "../redux/reducer/admin";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidationMovies } from "../components/ValidationMovies";

const AddMovie = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ValidationMovies),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddMovie = (data) => {
    const movie = {
      ...data,
      id: nanoid(),
      genre: data.genre.trim(),
    };

    dispatch(addMovieActions(movie));
    toast.success("Success Add New Movie!");

    setTimeout(() => {
      navigate("/movies-admin");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(handleAddMovie)} className="bg-secondary text-white flex flex-col gap-6 rounded-4xl md:max-w-[65svw] w-full h-fit sm:p-8 py-6 px-4">
      <Toaster />
      <p className="sm:text-4xl text-3xl font-medium text-third">Add New Movie</p>

      <div className="flex sm:flex-row flex-col gap-4">
        <div className="flex-1">
          <InputAddMovie {...register("poster")} errors={errors.poster?.message && <p className="text-red-400 text-sm italic">{errors.poster.message}</p>} label="Poster URL" id="poster" placeholder="Input Poster URL" />
        </div>
        <div className="flex-1">
          <InputAddMovie {...register("backdrop")} errors={errors.backdrop?.message && <p className="text-red-400 text-sm italic">{errors.backdrop.message}</p>} label="Backdrop URL" id="backdrop" placeholder="Input Backdrop Image URL" />
        </div>
      </div>

      <InputAddMovie {...register("title")} errors={errors.title?.message && <p className="text-red-400 text-sm italic">{errors.title.message}</p>} label="Movie Name" id="movieName" placeholder="Input Movie Name" />

      <div className="flex sm:flex-row flex-col gap-4">
        <div className="flex-1">
          <InputAddMovie
            {...register("genre")}
            errors={errors.genre?.message && <p className="text-red-400 text-sm italic">{errors.genre.message}</p>}
            label="Category / Genres"
            id="category"
            placeholder="Input Movie Category / Genres (e.g., Action, Comedy)"
          />
        </div>
        <div className="flex-1">
          <InputAddMovie
            {...register("vote_average")}
            errors={errors.vote_average?.message && <p className="text-red-400 text-sm italic">{errors.vote_average.message}</p>}
            label="Rating"
            id="rating"
            placeholder="Movie Rating (0-10)"
            type="number"
            step="0.1"
          />
        </div>
      </div>

      <div className="flex sm:flex-row flex-col gap-4">
        <div className="flex-1">
          <InputAddMovie
            {...register("releaseDate")}
            errors={errors.releaseDate?.message && <p className="text-red-400 text-sm italic">{errors.releaseDate.message}</p>}
            label="Release Date"
            id="releaseDate"
            placeholder="Input Release Date (YYYY-MM-DD)"
            type="date"
          />
        </div>
        <div className="flex-1">
          <InputAddMovie
            {...register("duration")}
            errors={errors.duration?.message && <p className="text-red-400 text-sm italic">{errors.duration.message}</p>}
            label="Duration (Minutes)"
            id="duration"
            placeholder="Input Movie Duration"
            type="number"
          />
        </div>
      </div>

      <InputAddMovie {...register("director")} errors={errors.director?.message && <p className="text-red-400 text-sm italic">{errors.director.message}</p>} label="Director Name" id="director" placeholder="Input Director Name" />
      <InputAddMovie {...register("cast")} errors={errors.cast?.message && <p className="text-red-400 text-sm italic">{errors.cast.message}</p>} label="Cast" id="cast" placeholder="Input Cast Names (e.g., Actor 1, Actor 2)" />
      <InputAddMovie
        {...register("synopsis")}
        errors={errors.synopsis?.message && <p className="text-red-400 text-sm italic">{errors.synopsis.message}</p>}
        type="textarea"
        label="Synopsis"
        id="synopsis"
        placeholder="Input Movie Synopsis"
      />

      <button className="bg-third cursor-pointer py-4 text-primary font-semibold rounded-xl mt-4" type="submit">
        Submit
      </button>
    </form>
  );
};

const InputAddMovie = ({ label, id, type = "text", placeholder, errors, ...props }) => {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <textarea className="p-3 bg-[#283246] rounded-xl" name={id} id={id} rows={7} placeholder={placeholder} {...props} />
      ) : (
        <input id={id} type={type} placeholder={placeholder} className="p-3 bg-[#283246] rounded-xl" {...props} />
      )}
      {errors}
    </div>
  );
};

export default AddMovie;
