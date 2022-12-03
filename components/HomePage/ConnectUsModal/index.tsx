import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaWindowClose,
} from "react-icons/fa";

import Modal from "../../Modal";
import styles from "./connectusmodal.module.css";
import Button from "../../UI/Button";

type ModalProps = {
  open: Boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const sx = {
  width: "80%",
  maxWidth: "40rem",
  padding: "2rem",
};

const ConnectUsModal = ({ open, setOpenModal }: ModalProps): JSX.Element => {
  const [openDestDropdown, setOpenDestDropdown] =
    React.useState<Boolean>(false);

  const [dropdownValue, setDropdownValue] = React.useState<string>("Select");

  const onClickHandler = () => {
    setOpenModal(false);
  };

  return (
    <Modal sx={sx} open={open} setOpenModal={setOpenModal}>
      <div>
        <FaWindowClose
          onClick={() => setOpenModal(false)}
          className="text-slate-400 text-2xl float-right hover:opacity-80 cursor-pointer"
        />
        <p className="text-base text-gray-500">
          Call us for any query:{" "}
          <a href="tel:+919731105961">
            <span className="text-blue-600 italic underline font-medium">
              +919945473262
            </span>{" "}
          </a>
        </p>
      </div>
      <div className="flex flex-col mt-5">
        <div className="w-full flex justify-between">
          <div className="flex">
            <a
              href="#"
              className="p-2 mr-2 text-white bg-green-500 hover:opacity-60 rounded-md"
            >
              <FaWhatsapp />
            </a>
          </div>
          <div className="flex">
            <a
              href="#"
              className="p-2 mr-2 bg-sky-600 text-white hover:opacity-60 rounded-md"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 mr-2 bg-sky-600 text-white hover:opacity-60 rounded-md"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="p-2 bg-sky-600 text-white hover:opacity-60 rounded-md"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex justify-center">
          <form className="w-full">
            <div className="flex flex-wrap -mx-3 mb:1 md:mb-5">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-4">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Enter your name"
                />
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div className="relative w-full md:w-1/2 px-3 mb-6 md:mb-4 inline-block text-left">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Select Destination
                </label>
                <div>
                  <button
                    onClick={() => setOpenDestDropdown(!openDestDropdown)}
                    type="button"
                    className="inline-flex w-full justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    {dropdownValue}
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {openDestDropdown && (
                  <div
                    className="absolute z-10 mt-2 w-11/12 origin-center rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                  >
                    <div className="py-1" role="none">
                      <a
                        onClick={() => {
                          setDropdownValue("UK");
                          setOpenDestDropdown(false);
                        }}
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-indigo-100"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-0"
                      >
                        UK
                      </a>
                      <a
                        onClick={() => {
                          setDropdownValue("Australia");
                          setOpenDestDropdown(false);
                        }}
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-indigo-100"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-1"
                      >
                        Australia
                      </a>
                      <a
                        onClick={() => {
                          setDropdownValue("Canada");
                          setOpenDestDropdown(false);
                        }}
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-indigo-100"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-2"
                      >
                        Canada
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  Phone Number/Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Albuquerque"
                />
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              {/* dropdown */}
            </div>
            <Button
              variant="bg-indigo-600 rounded-md text-white hover:bg-indigo-700 px-8 py-2"
              onClick={onClickHandler}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default ConnectUsModal;
