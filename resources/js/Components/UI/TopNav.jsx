// TopNav.jsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Nav item shape:
 * {
 *   id: 1,
 *   label: "My payments",
 *   isDropDown: true,
 *   submenus: [
 *     { id: "s1", label: "All payments", onClick: () => {} },
 *     { id: "s2", label: "Create payment", onClick: () => {} }
 *   ]
 * }
 */

const NavBarItems = [
  { id: 1, label: "My applications", isDropDown: false },
  {
    id: 2,
    label: "My payments",
    isDropDown: true,
    submenus: [
      { id: "p1", label: "Manage payments", onClick: () => console.log("Manage payments") },
      { id: "p2", label: "Pay an invoice", onClick: () => console.log("Pay an invoice") },
    ],
  },
  { id: 3, label: "Manage groups", isDropDown: false },
  {
    id: 4,
    label: "Related links",
    isDropDown: true,
    submenus: [
      { id: "r1", label: "MARA", onClick: () => console.log("MARA") },
      { id: "r2", label: "Visa finder", onClick: () => console.log("Visa finder") },
      { id: "r3", label: "Pricing estimator", onClick: () => console.log("Pricing estimator") },
      { id: "r4", label: "Visa pricing table", onClick: () => console.log("Visa pricing table") },
      { id: "r5", label: "Visa entitlement(VEVO)", onClick: () => console.log("Visa entitlement(VEVO)") },
      { id: "r6", label: "Maritime Crew visa status enquiry", onClick: () => console.log("Maritime Crew visa status enquiry") },
    ],
  },
  {
    id: 5,
    label: "Help and Support",
    isDropDown: true,
    submenus: [
      { id: "h1", label: "Translation services", onClick: () => console.log("Translation services") },
      { id: "h2", label: "Client feedback", onClick: () => console.log("Client feedback") },
      { id: "h3", label: "Contact us", onClick: () => console.log("Contact us") },
      { id: "h4", label: "ImmiAccount Support", onClick: () => console.log("ImmiAccount Support") },
      { id: "h4", label: "Client service charter", onClick: () => console.log("Client service charter") },
    ],
  },
];

export default function TopNav({ notShow = [] }) {
  const [selected, setSelected] = useState(0);
  const [openMenuId, setOpenMenuId] = useState(null);

  return (
    <div className="relative">
      <div className="flex h-[26px] bg-[#f2f2f2] text-xs select-none">
        {NavBarItems.filter((ele) => !notShow.includes(ele.label)).map((ele, index) => {
          const isOpen = openMenuId === ele.id;
          const hasDropdown = ele.isDropDown && Array.isArray(ele.submenus) && ele.submenus.length > 0;

          return (
            // wrapper contains both the nav label and the submenu so hover stays open while over submenu
            <div
              key={ele.id}
              className={`
                relative h-full px-[6px] flex items-center justify-center
                ${selected === index ? "border-b-[3px] border-b-[#ea7e25]" : ""}
                ${index !== NavBarItems.length - 1 ? "border-r-[1px] border-r-[#bebfc7]" : ""}
              `}
              onMouseEnter={() => hasDropdown ? setOpenMenuId(ele.id) : setOpenMenuId(null)}
              onMouseLeave={() => setOpenMenuId(null)}
              onClick={() => setSelected(index)}
            >
              <div className="flex items-center gap-1 text-[#000] text-[12px]">
                <span>{ele.label}</span>
                {ele.isDropDown && <ChevronDown size={10} />}
              </div>

              {/* Submenu */}
              {hasDropdown && (
                <div
                  // show only when open
                  className={`absolute left-0 top-full z-40`}
                  style={{ display: isOpen ? "block" : "none" }}
                >
                  <div className="bg-[#f2f2f2] overflow-hidden ring-1 ring-[#b1b1b1]">
                    {/* optional small triangle pointer */}
                    {/* <div className="absolute -top-2 left-4 w-3 h-3 rotate-45 bg-white ring-1 ring-black/5" /> */}

                    <ul className="">
                      {ele.submenus.map((s) => (
                        <li
                          key={s.id}
                          className="py-[6px] px-[6px] text-[12px] text-black hover:bg-[#d8f0fc] cursor-pointer whitespace-nowrap font-normal flex items-center"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (typeof s.onClick === "function") s.onClick(s);
                            // close after click (optional)
                            setOpenMenuId(null);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              if (typeof s.onClick === "function") s.onClick(s);
                              setOpenMenuId(null);
                            }
                          }}
                          tabIndex={0}
                        >
                          {s.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
