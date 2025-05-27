import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { SiYoutube } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex lg:flex-row lg:justify-between flex-col bg-secondary text-white h-fit py-25 px-10 rounded-t-[48px]">
      <div className="grow lg:mb-0 mb-10">
        <img className="md:w-50 w-50 pb-5" src="/src/assets/icon/logo.png" alt="logo-image" />
        <p>Stop waiting in line. Buy tickets conveniently, watch movies quietly.</p>
      </div>
      <div className="flex md:flex-row md:justify-between md:grow flex-col gap-10">
        <div>
          <h6 className="font-bold pb-6">EXPLORE</h6>
          <div className="flex flex-col gap-2">
            <Link>Cinemas</Link>
            <Link>Movies List</Link>
            <Link>My Ticket</Link>
            <Link>Notification</Link>
          </div>
        </div>
        <div>
          <h6 className="font-bold pb-6">OUR SPONSOR</h6>
          <div className="flex flex-col gap-5">
            <img className="w-30" src="/src/assets/sponsor/ebuId.png" alt="sponsor-image" />
            <img className="w-30" src="/src/assets/sponsor/cineOne.png" alt="sponsor-image" />
            <img className="w-30" src="/src/assets/sponsor/hiflix.png" alt="sponsor-image" />
          </div>
        </div>
        <div>
          <h6 className="font-bold pb-6">FOLLOW US</h6>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <FaFacebook/>
              <span>cinevo.id</span>
            </div>
            <div className="flex gap-2 items-center">
              <RiInstagramFill/>
              <span>cinevo.id</span>
            </div>
            <div className="flex gap-2 items-center">
              <FaSquareXTwitter/>
              <span>cinevo.id</span>
            </div>
            <div className="flex gap-2 items-center">
              <SiYoutube/>
              <span>cinevo.id</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
