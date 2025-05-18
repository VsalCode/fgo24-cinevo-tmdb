const Dropdown = () => {
  return (
    <label className="bg-primary text-white flex items-center rounded-full px-5 py-3">
      <select id="filter" name="filter" className="grow">
        <option className="text-secondary" value="Jakarta" selected>POPULAR</option>
        <option className="text-secondary" value="Bandung">LATEST</option>
        <option className="text-secondary" value="Bekasi">Name (A-Z)</option>
        <option className="text-secondary" value="Depok">Name (Z-A)</option>
      </select>
    </label>
  );
};

export default Dropdown;
