import { Link } from "react-router-dom";

const AccountSettings = () => {
  return (
    <>
      <section className="bg-secondary w-full rounded-xl grid grid-cols-2">
        <Link to="/account-settings" className="text-center py-5 cursor-pointer font-medium border-b-third border-b-4 hover:opacity-70 transition-colors">Account Settings</Link>
        <Link to="/order-history" className="text-center py-5 cursor-pointerhover:text-third font-medium hover:opacity-70 transition-colors">Order History</Link>
      </section>
      <form className="flex flex-col gap-6" action="">
        <section className="bg-secondary w-full rounded-xl h-fit px-5 py-7">
          <p className="mb-5 text-lg font-semibold text-third">Details Information</p>
          <div className="flex sm:flex-row flex-col gap-5">
            <aside className="flex-1 flex flex-col gap-3">
              <label htmlFor="firstname" className="font-semibold">
                Firstname
              </label>
              <input type="text" id="firstname" placeholder="Enter your First Name" className=" p-3 bg-[#283246] rounded-xl " />
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input type="email" id="email" placeholder="Enter your email" className=" p-3 bg-[#283246] rounded-xl " />
            </aside>
            <aside className="flex-1 flex flex-col gap-3">
              <label htmlFor="lastname" className="font-semibold">
                Lastname
              </label>
              <input type="text" id="lastname" placeholder="Enter your Last Name" className=" p-3 bg-[#283246] rounded-xl " />
              <label htmlFor="email" className="font-semibold">
                Phone Number
              </label>
              <input type="number" id="email" placeholder="Enter your phone number" className=" p-3 bg-[#283246] rounded-xl " />
            </aside>
          </div>
        </section>
        <section className="bg-secondary w-full rounded-xl h-fit px-5 py-7">
          <p className="mb-5 text-lg font-semibold text-third">Account and Privacy</p>
          <div className="flex sm:flex-row flex-col gap-5">
            <div className="flex-1 flex flex-col gap-3">
              <label htmlFor="newPassword" className="font-semibold">
                New Password
              </label>
              <input type="text" id="newPassword" placeholder="Enter your New Password" className=" p-3 bg-[#283246] rounded-xl " />
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <label htmlFor="confirmNewPassword" className="font-semibold">
                Confirm New Password
              </label>
              <input type="text" id="confirmNewPassword" placeholder="Confirm your New Password" className=" p-3 bg-[#283246] rounded-xl " />
            </div>
          </div>
        </section>
        <button type="submit" className=" bg-third py-3 px-15 hover: text-primary font-semibold cursor-pointer rounded-xl">
          Update Changes
        </button>
      </form>
    </>
  );
};

export default AccountSettings;
