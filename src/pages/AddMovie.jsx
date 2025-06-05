import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addMovieActions } from "../redux/reducer/admin";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  title: yup
    .string()
    .required("Title Movie is required"),
  poster: yup
    .string()
    .required("Poster URL is required")
    .url("Poster must be a valid URL")
    .matches(/\.(jpg|jpeg|png|webp)$/i, "Poster URL must be an image (jpg, jpeg, png, or webp)"),
  backdrop: yup
    .string()
    .required("Backdrop URL is required")
    .url("Backdrop must be a valid URL")
    .matches(/\.(jpg|jpeg|png|webp)$/i, "Backdrop URL must be an image (jpg, jpeg, png, or webp)"),
  genre: yup
    .string()
    .required("Genre is required"),
  vote_average: yup
    .number()
    .required("Rating is required")
    .min(0, "Rating cannot be less than 0")
    .max(10, "Rating cannot be more than 10")
    .typeError("Rating must be a number"),
  releaseDate: yup
    .string()
    .required("Release date is required")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Release date must be in YYYY-MM-DD format"),
  duration: yup
    .number()
    .required("Duration is required")
    .min(1, "Duration must be at least 1 minute")
    .max(600, "Duration cannot exceed 600 minutes")
    .typeError("Duration must be a number"),
  director: yup
    .string()
    .required("Director name is required"),
  cast: yup
    .string()
    .required("Cast is required"),
  synopsis: yup
    .string()
    .required("Synopsis is required")
    .min(10, "Synopsis must be at least 10 characters")
    .max(1000, "Synopsis cannot exceed 1000 characters"),
});

const AddMovie = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleAddMovie = (data) => {
    console.log("Form Data:", data);
    console.log("Errors:", errors);
    const obj = {
      ...data,
      id: nanoid(),
    };

    dispatch(addMovieActions(obj));
    toast.success("Success Add New Movie!");

    setTimeout(() => {
      nav("/movies-admin");
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit(handleAddMovie)}
      className="bg-secondary text-white flex flex-col gap-6 rounded-4xl md:max-w-[65svw] w-full h-fit sm:p-8 py-6 px-4"
    >
      <Toaster />
      <p className="sm:text-4xl text-3xl font-medium text-third">Add New Movie</p>

      <div className="flex sm:flex-row flex-col gap-4">
        <div className="flex-1">
          <InputAddMovie
            {...register("poster")}
            errors={errors.poster?.message && <p className="text-red-400 text-sm italic">{errors.poster.message}</p>}
            label="Poster URL"
            id="poster"
            placeholder="Input Poster URL"
          />
        </div>
        <div className="flex-1">
          <InputAddMovie
            {...register("backdrop")}
            errors={errors.backdrop?.message && <p className="text-red-400 text-sm italic">{errors.backdrop.message}</p>}
            label="Backdrop URL"
            id="backdrop"
            placeholder="Input Backdrop Image URL"
          />
        </div>
      </div>

      <InputAddMovie
        {...register("title")}
        errors={errors.title?.message && <p className="text-red-400 text-sm italic">{errors.title.message}</p>}
        label="Movie Name"
        id="movieName"
        placeholder="Input Movie Name"
      />

      <div className="flex sm:flex-row flex-col gap-4">
        <div className="flex-1">
          <InputAddMovie
            {...register("genre")}
            errors={errors.genre?.message && <p className="text-red-400 text-sm italic">{errors.genre.message}</p>}
            label="Category / Genres"
            id="category"
            placeholder="Input Movie Category / Genres"
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
            label="Release date"
            id="releaseDate"
            placeholder="Input Release date (YYYY-MM-DD)"
            type="date"
          />
        </div>
        <div className="flex-1">
          <InputAddMovie
            {...register("duration")}
            errors={errors.duration?.message && <p className="text-red-400 text-sm italic">{errors.duration.message}</p>}
            label="Duration (Minute)"
            id="duration"
            placeholder="Input Movie duration"
            type="number"
          />
        </div>
      </div>

      <InputAddMovie
        {...register("director")}
        errors={errors.director?.message && <p className="text-red-400 text-sm italic">{errors.director.message}</p>}
        label="Director Name"
        id="director"
        placeholder="Input director name"
      />
      <InputAddMovie
        {...register("cast")}
        errors={errors.cast?.message && <p className="text-red-400 text-sm italic">{errors.cast.message}</p>}
        label="Cast"
        id="cast"
        placeholder="Input casts name"
      />
      <InputAddMovie
        {...register("synopsis")}
        errors={errors.synopsis?.message && <p className="text-red-400 text-sm italic">{errors.synopsis.message}</p>}
        type="textarea"
        label="Synopsis"
        id="synopsis"
        placeholder="Input movie synopsis"
      />

      <button className="bg-third cursor-pointer py-4 text-primary font-semibold rounded-xl mt-4" type="submit">
        Submit
      </button>
    </form>
  );
};

export default AddMovie;

const InputAddMovie = ({ label, id, type = "text", placeholder, errors, ...props }) => {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <textarea
          className="p-3 bg-[#283246] rounded-xl"
          name={id}
          id={id}
          rows={7}
          placeholder={placeholder}
          {...props}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="p-3 bg-[#283246] rounded-xl"
          {...props}
        />
      )}
      {errors}
    </div>
  );
};