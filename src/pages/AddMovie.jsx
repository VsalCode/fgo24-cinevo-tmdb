const AddMovie = () => {
  return (
    <form className="bg-secondary text-white flex flex-col gap-6 rounded-4xl md:max-w-[65svw] w-full h-fit p-8">
      <p className="text-4xl font-medium text-third">Add New Movie</p>
      <div className="flex flex-col items-start gap-4">
        <label>Upload Image</label>
        <button type="button" className="universal-button bg-third text-primary">
          Upload
        </button>
      </div>

      <InputAddMovie label="Movie Name" id="movieName" placeholder="Input Movie Name" />
      <InputAddMovie label="Category" id="category" placeholder="Input Movie Category" />

      <div className="flex sm:flex-row flex-col gap-4">
        <div className="flex-1">
          <InputAddMovie label="Release date" id="releaseDate" placeholder="Input Release date Movie" />
        </div>
        <div className="flex-1">
          <InputAddMovie label="Duration" id="duration" placeholder="Input Movie duration" />
        </div>
      </div>

      <InputAddMovie label="Director Name" id="director" placeholder="Input director name" />
      <InputAddMovie label="Cast" id="cast" placeholder="Input casts name" />
      <InputAddMovie label="Synopsis" id="synopsis" placeholder="Input movie synopsis" />
      <InputAddMovie label="Add Location" id="location" placeholder="Add Location" />

      <div className="flex sm:flex-row flex-col gap-4">
        <div className="flex-1">
          <InputAddMovie label="Date" id="date" type="date" />
        </div>
        <div className="flex-1">
          <InputAddMovie label="time" id="time" type="time" />
        </div>
      </div>
      <button className="bg-third cursor-pointer py-4 text-primary font-semibold rounded-xl mt-4" type="submit" >Submit</button>
    </form>
  );
};

export default AddMovie;

const InputAddMovie = ({ label, id, type = "text", placeholder }) => {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} className="p-3 bg-[#283246] rounded-xl" />
    </div>
  );
};
