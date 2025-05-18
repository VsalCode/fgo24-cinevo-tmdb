function SponsorCheckbox({ cinema }) {
  return (
    <label className={`w-[269px] h-[153px] px-5 flex flex-col justify-center  gap-7 rounded-xl cursor-pointer border text-fourth has-checked:bg-primary has-checked:text-white relative`}>
      <div className="flex justify-end">
        <input type="radio" name="cinema" />
      </div>
      <h2 className="font-semibold">{cinema}</h2>
    </label>
  );
}

export default SponsorCheckbox;
