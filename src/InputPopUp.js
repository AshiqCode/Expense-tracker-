import { useState } from "react";
import "./index.css";
const InputPopUp = ({
  showPopUp,
  setshowPopUp,
  alluser,
  setalluser,
  currentData,
  isedit,
  setisedit,
}) => {
  const [Subject, setSubject] = useState(isedit ? currentData.Subject : "");
  const [Merchant, setMerchant] = useState(isedit ? currentData.Merchant : "");
  const [Date, setDate] = useState(isedit ? currentData.Date : "");
  const [Total, setTotal] = useState(isedit ? currentData.Total : "");
  const [Category, setCategory] = useState(isedit ? currentData.Category : "");
  const [Description, setDescription] = useState(
    isedit ? currentData.Description : ""
  );
  const [Employee, setEmployee] = useState(isedit ? currentData.Employee : "");

  const adduser = () => {
    const user = {
      Subject,
      Merchant,
      Date,
      Total,
      Category,
      Description,
      Employee,
      id: alluser.length + 1,
    };

    if (isedit) {
      setalluser((prev) =>
        prev.map((expense) =>
          expense.id === currentData.id ? { ...expense, ...user } : expense
        )
      );
    } else {
      setalluser((prev) => [...prev, user]);
    }
    setshowPopUp(false);
    setisedit(false);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 items-center grid mx-auto">
        <div
          style={{ border: "solid white 1px" }}
          className="w-[40%] bg-black mx-auto text-left p-8 text-white rounded-lg"
        >
          <h1 className="mb-2 pb-9 text-2xl">
            {isedit ? "Edit Expense" : "Add a New Expense"}
          </h1>
          <div className="text-[#ffffff99]">
            Subject
            <input
              className="ml-10 p-[1px] text-white bg-white bg-opacity-35 rounded-md float-right w-9/12 pl-2"
              type="text"
              maxLength={20}
              value={Subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
          </div>
          <div className="mt-4 text-[#ffffff99]">
            Merchant
            <input
              className="ml-4 p-[1px] text-white bg-white bg-opacity-35 rounded-md float-right w-9/12 pl-2"
              type="text"
              maxLength={20}
              value={Merchant}
              onChange={(e) => {
                setMerchant(e.target.value);
              }}
            />
          </div>
          <div className="mt-4 text-[#ffffff99]">
            Date
            <input
              className="ml-4 p-[1px] text-white bg-white bg-opacity-35 rounded-md float-right w-9/12 pl-2"
              type="date"
              value={Date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className="mt-4 text-[#ffffff99]">
            Total
            <input
              className="ml-4 p-[1px] text-white bg-white bg-opacity-35 rounded-md float-right w-9/12 pl-2"
              type="number"
              value={Total}
              onChange={(e) => {
                setTotal(e.target.value);
              }}
            />
          </div>
          <div className="mt-4 text-[#ffffff99]">
            Category
            <select
              className="ml-4 p-[1px] text-white bg-white bg-opacity-35 rounded-md float-right w-9/12 pl-2"
              type="text"
              value={Category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option
                className="text-white bg-black bg-opacity-35"
                value="trip"
              >
                Trip
              </option>
              <option
                className="text-white bg-black bg-opacity-35"
                value="Services"
              >
                Services
              </option>
              <option
                className="text-white bg-black bg-opacity-35"
                value="Catering"
              >
                Catering
              </option>
            </select>
          </div>
          <div className="mt-4 text-[#ffffff99]">
            Description
            <textarea
              className="ml-4 p-[1px] text-white bg-white bg-opacity-35 rounded-md float-right w-9/12 pl-2"
              value={Description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="mt-9 text-[#ffffff99]">
            Employee
            <input
              className="ml-4 p-[1px] text-white bg-white bg-opacity-35 rounded-md float-right w-9/12 pl-2"
              type="text"
              value={Employee}
              onChange={(e) => {
                setEmployee(e.target.value);
              }}
            />
          </div>

          <button
            style={{ border: "solid white 1px" }}
            className="bg-slate-400 bg-opacity-10 w-2/5 mx-auto p-2 rounded-lg mt-6 ml-4"
            onClick={() => {
              setshowPopUp(false);
              setisedit(false);
            }}
          >
            close
          </button>
          <button
            style={{ border: "solid white 1px" }}
            className="bg-red-950  w-2/5 mx-auto p-2 rounded-lg mt-6 ml-4"
            onClick={() => {
              adduser();
            }}
          >
            {isedit ? "save changes" : "Save"}
          </button>
        </div>
      </div>
    </>
  );
};

export default InputPopUp;
