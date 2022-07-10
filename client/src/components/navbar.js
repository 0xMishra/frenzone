import React from "react";
import { useGlobalContext } from "../context";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const { currentAccount, connectWallet } = useGlobalContext();

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4 mb-3">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <h1 className="text-red-500 font-bold text-5xl ">
          FREN<span className="text-[#74c8b6] ">ZONE</span>
        </h1>
      </div>
      <ul className="text-white md:flex  list-none flex-row justify-between items-center flex-initial">
        <li className="hidden md:flex">
          {[
            <a
              href="https://twitter.com/0xMishra"
              target="_blank"
              className="text-white text-base text-center mx-2 cursor-pointer"
            >
              Twitter
            </a>,
            <a
              href="http://discordapp.com/users/769610841912770560"
              target="_blank"
              className="text-white text-base text-center mx-2 cursor-pointer"
            >
              Discord
            </a>,
            <a
              href="https://github.com/mishra811/frenzone"
              target="_blank"
              className="text-white text-base text-center mx-2 cursor-pointer"
            >
              Github
            </a>,
          ].map((item, index) => (
            <NavBarItem key={item + index} title={item} />
          ))}
        </li>
        <li>
          {currentAccount ? (
            <p className="text-red-500 text-2xl font-bold">
              {currentAccount.slice(0, 4) +
                "..." +
                currentAccount.slice(39, 42)}
            </p>
          ) : (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center  hover:bg-[#74c8b6] p-2 px-3 rounded-full cursor-pointer bg-red-500"
            >
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
