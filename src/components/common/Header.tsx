import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../router/Paths";
import { navLinks } from "../../constants/navLinks";

function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div className="bg-Primary px-4 py-2 flex flex-col space-y-4 md:space-y-0 w-full font-poppinsRegular">
      <div className="flex items-center justify-between w-full">
        <img
          onClick={() => navigate(Paths.home)}
          src="/logo.svg"
          alt="Logo"
          className="w-22.5 h-7.5 md:w-50 md:h-15 cursor-pointer"
        />

        <div className="hidden lg:flex space-x-1 text-lg">
          {navLinks.map((link) => (
            <h6
              key={link.label}
              className={`
              p-2 cursor-pointer
              ${link.muted ? "text-muted" : "text-white hover:text-secondary"}
              ${link.active ? "text-secondary! border-b-secondary border-b-3" : ""}
              ${!link.active && !link.muted ? "hover:border-b-secondary hover:border-b-3" : ""}
            `}
            >
              {link.label}
            </h6>
          ))}
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <img
            src="/world.svg"
            alt="World Icon"
            className="size-6 md:size-10"
          />
          <img src="/ball.svg" alt="Ball Icon" className="size-6 md:size-10" />
          <img
            src="/england3.svg"
            alt="England Flag"
            className="size-6 md:size-10 flex xl:hidden"
          />
          <div className="hidden  bg-[#5D00D9] xl:flex items-center py-2 px-4 rounded-2xl space-x-2 cursor-pointer">
            <img src="/england.svg" alt="England Flag" className="size-4" />
            <h6 className="text-white">Premier League</h6>
            <ChevronDown className="text-[#CAC4D0]" size={16} />
          </div>

          <div className="bg-[#5D00D9] flex items-center p-2 md:py-2 md:px-4 rounded-2xl space-x-2 cursor-pointer">
            <h6 className="text-[#E6E0E9] text-xs">2024/25</h6>
            <ChevronDown className="text-[#CAC4D0]" size={16} />
          </div>

          <img
            src="/england2.svg"
            alt="England Flag"
            className="size-10 hidden md:flex"
          />
          {openMenu ? (
            <X
              onClick={() => setOpenMenu(openMenu ? false : true)}
              className="text-white cursor-pointer flex lg:hidden"
            />
          ) : (
            <Menu
              onClick={() => setOpenMenu(openMenu ? false : true)}
              className="text-white cursor-pointer flex lg:hidden"
            />
          )}
        </div>
      </div>
      {openMenu && (
        <div className="overflow-x-auto scrollbar-hidden flex lg:hidden w-full">
          <div className="flex space-x-2 text-white py-1">
            {navLinks.map((link, index) => (
              <span
                key={index}
                className={`
                text-xs py-1 px-2 cursor-pointer whitespace-nowrap
                ${link.active ? "bg-secondary text-[#0F4D32] rounded-md border-b-2 border-secondary" : ""}
                ${link.muted ? "text-gray-400" : ""}
                hover:text-secondary
                `}
              >
                {link.label}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
