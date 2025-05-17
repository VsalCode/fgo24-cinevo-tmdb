const BenefitCard = ({icon, text}) => {
  return (
    <div className="flex flex-col justify-between w-[252px] h-[306px] bg-third rounded-xl px-6 py-5">
      <div className="bg-primary size-[50px] text-3xl rounded-full flex-center">
        {icon}
      </div>
      <h5 className="text-secondary font-bold">{text}</h5>
      <p className="text-secondary text-md">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a.</p>
    </div>
  );
};

export default BenefitCard;
