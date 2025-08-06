import "./index.css";
import avatar from "./assest/avatar.png";
import InputPopUp from "./InputPopUp";
import { useState } from "react";
const Expenses = ({ handleUserData }) => {
  const [showPopUp, setshowPopUp] = useState(false);
  const [alluser, setalluser] = useState([]);
  const handledelete = (e) => {
    const Filtereduser = alluser.filter((Expense) => Expense.id !== e.id);
    console.log(Filtereduser);
    setalluser(Filtereduser);
  };
  return (
    <div className="bg-[rgb(27,27,27)] w-[85%] text-white mt-6 mx-auto">
      <InputPopUp
        setshowPopUp={setshowPopUp}
        showPopUp={showPopUp}
        alluser={alluser}
        setalluser={setalluser}
      />
      <div
        style={{ borderBottom: "solid white 1px" }}
        className="text-left text-2xl pb-2 pl-6 pt-2 font-mono flex justify-between"
      >
        <div>Expenses</div>
        <div>
          <button
            className="font-sans text-[12px] mr-8 bg-cyan-600 px-2 leading-6"
            onClick={() => {
              setshowPopUp(true);
            }}
          >
            ADD Expense
          </button>
        </div>
      </div>
      <div className="h-[600px] flex">
        <div className="bg-[rgb(27,27,27)] w-[15vw] text-white select-none">
          <div className="mt-6">
            <img
              src={avatar}
              alt="img"
              className="rounded-full h-24 mx-auto ]"
            />
            <p className="text-2xl mb-8 font-serif ">Avatar</p>
          </div>
          <div className="bg-slate-400 bg-opacity-10 w-9/12 mx-auto p-2 rounded-lg mt-6 ">
            home
          </div>
          <div className="bg-slate-400 bg-opacity-10 w-9/12 mx-auto p-2 rounded-lg mt-4">
            Expenses
          </div>
          <div className="bg-slate-400 bg-opacity-10 w-9/12 mx-auto p-2 rounded-lg mt-4">
            trips
          </div>
          <div className="bg-slate-400 bg-opacity-10 w-9/12 mx-auto p-2 rounded-lg mt-4">
            approvals
          </div>
          <div className="bg-slate-400 bg-opacity-10 w-9/12 mx-auto p-2 rounded-lg mt-4">
            settings
          </div>
          <div className="bg-slate-400 bg-opacity-10 w-9/12 mx-auto p-2 rounded-lg mt-4">
            support
          </div>
        </div>
        <div className="bg-white bg-opacity-5 w-[75vw]">
          <div className="flex justify-around">
            <div className="w-2/12">Subject</div>
            <div className="w-2/12">Category</div>
            <div className="w-2/12">Merchant</div>
            <div className="w-2/12">Action</div>
          </div>
          {alluser.map((e) => {
            return (
              <div className="flex justify-around" key={e.id}>
                <div className="w-2/12 mt-2">{e.Subject}</div>
                <div className="w-2/12 mt-2">{e.Category}</div>
                <div className="w-2/12 mt-2">{e.Merchant}</div>
                <div className="w-2/12 mt-2">
                  <button
                    className="font-sans text-[12px] bg-slate-600 px-2 leading-6"
                    onClick={() => {
                      handleUserData(e);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="font-sans text-[12px] bg-slate-300 text-black px-2 leading-6 ml-1"
                    onClick={() => {
                      handledelete(e);
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Expenses;
