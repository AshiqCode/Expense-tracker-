import { useState } from "react";
import "./index.css";
import { data } from "autoprefixer";
const InputPopUp = ({ showPopUp, setshowPopUp, alluser, setalluser }) => {
  const [Subject, setSubject] = useState();
  const [Merchant, setMerchant] = useState();
  const [Date, setDate] = useState();
  const [Total, setTotal] = useState();
  const [Category, setCategory] = useState();
  const [Description, setDescription] = useState();
  const [Employee, setEmployee] = useState();
  console.log(alluser);

  const adduser = () => {
    const user = {
      Subject: Subject,
      Merchant: Merchant,
      Date: Date,
      Total: Total,
      Category: Category,
      Description: Description,
      Employee: Employee,
      id: alluser.length + 1,
    };

    setalluser((prev) => [...prev, user]);
  };

  console.log(alluser);

  return (
    <>
      {showPopUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 items-center grid mx-auto">
          <div
            style={{ border: "solid white 1px" }}
            className="w-[40%] bg-black mx-auto text-left p-8 text-white rounded-lg"
          >
            <div className="text-[#ffffff99]">
              Subject
              <input
                className="ml-10 p-[1px] text-white bg-white bg-opacity-35 rounded-md float-right w-9/12 pl-2"
                type="text"
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
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
            <div className="mt-4 text-[#ffffff99]">
              Total
              <input
                className="ml-4 p-[1px] text-white bg-white bg-opacity-35 rounded-md float-right w-9/12 pl-2"
                type="text"
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
              }}
            >
              close
            </button>
            <button
              style={{ border: "solid white 1px" }}
              className="bg-red-950  w-2/5 mx-auto p-2 rounded-lg mt-6 ml-4"
              onClick={adduser}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default InputPopUp;
