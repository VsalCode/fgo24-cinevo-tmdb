import { IoSearch } from "react-icons/io5";
// import { RiArrowDropDownLine } from "react-icons/ri";

export const SelectOptions = ({ id, type, name, ...props }) => {
  if (type === "location") {
    return (
      <label htmlFor={type} className="bg-white flex-between gap-5 rounded-full border py-3 px-5 w-full">
        <IoSearch className="text-xl" />
        <select id={type} name={type}>
          <option value="Jakarta">Jakarta</option>
          <option value="Bandung">Bandung</option>
          <option value="Bekasi" selected>
            Bekasi
          </option>
          <option value="Depok">Depok</option>
        </select>
      </label>
    );
  }
  return (
    <label for={id} className="bg-white flex-between gap-5 rounded-full border py-3 px-3">
      <IoSearch className="text-xl" />
      <input type={type} id={id} name={name} {...props} />
      {/* <RiArrowDropDownLine className="text-4xl" /> */}
    </label>
  );
};
