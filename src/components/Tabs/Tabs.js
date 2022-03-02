import React, { useState } from "react";

function Tabs({ children }) {
  let [allTabs, setAllTabs] = useState(
    children.map((tab, index) => {
      const obj = {
        label: tab.props.label,
        active: index === 0 ? true : false,
        children: tab.props.children,
      };
      return obj;
    })
  );

  const toggleTabs = (newActiveIndex) => {
    setAllTabs(
      allTabs.map((tab, index) => {
        const obj = {
          label: tab.label,
          active: index === newActiveIndex ? true : false,
          children: tab.children,
        };
        return obj;
      })
    );
  };

  return (
    <>
      <td colSpan="4" className="border border-gray-400">
        <div className="tab-container my-2 mx-5">
          <div className="tab-list flex border-gray-400 border-b-2">
            {allTabs.map((tabElement, index) => (
              <span
                key={index}
                onClick={() => toggleTabs(index)}
                className={` px-4 cursor-pointer ${
                  tabElement.active
                    ? "bg-embl-primary-blue text-white"
                    : "bg-white text-embl-primary-blue"
                }`}
              >
                {tabElement.label}
              </span>
            ))}
          </div>
          <div className="flex h-80 justify-center items-center">
            {allTabs.map(
              (tabElement) => tabElement.active && tabElement.children
            )}
          </div>
        </div>
      </td>
    </>
  );
}

export default Tabs;
