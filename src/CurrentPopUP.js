import "./index.css";
const CurrentPopUP = ({
  showUserData,
  setshowUserData,
  currentData,
  isedit,

}) => {

  return (
    <div>
      {showUserData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 items-center grid mx-auto">
          <div
            style={{ border: "solid white 1px" }}
            className="w-[40%] bg-black mx-auto text-left p-8 text-white rounded-lg"
          >
            <h1 className="mb-2 pb-9 text-2xl">Expense Details</h1>
            <div className="text-[#ffffff99]">
              Subject
              <input
                className="ml-10 p-[1px] text-white bg-white bg-opacity-35 rounded-md float-right w-9/12 pl-2"
                type="text"
                maxLength={20}
                defaultValue={currentData.Subject}
                onChange={(e) => {
                  // (e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <div className="mt-4 text-[#ffffff99]">
              Merchant
              <input
                className="ml-10 p-[1px] text-white bg-white bg-opacity-35 rounded-md float-right w-9/12 pl-2"
                type="text"
                maxLength={20}
                defaultValue={currentData.Merchant}
                onChange={(e) => {
                  // setMerchant(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <div className="mt-4 text-[#ffffff99]">
              Date
              <input
                className="ml-10 p-[1px] text-white bg-white bg-opacity-35 rounded-md float-right w-9/12 pl-2"
                type="text"
                maxLength={20}
                defaultValue={currentData.Date}
                onChange={(e) => {
                  // setDate(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <div className="mt-4 text-[#ffffff99]">
              Total
              <input
                className="ml-10 p-[1px] text-white bg-white bg-opacity-35 rounded-md float-right w-9/12 pl-2"
                type="text"
                maxLength={20}
                defaultValue={currentData.Total}
                onChange={(e) => {
                  // setTotal(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <div className="mt-4 text-[#ffffff99]">
              Category
              <input
                className="ml-10 p-[1px] text-white bg-white bg-opacity-35 rounded-md float-right w-9/12 pl-2"
                type="text"
                maxLength={20}
                defaultValue={currentData.Category}
                onChange={(e) => {
                  // setCategory(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <div className="mt-4 text-[#ffffff99]">
              Description
              <input
                className="ml-10 p-[1px] text-white bg-white bg-opacity-35 rounded-md float-right w-9/12 pl-2"
                type="text"
                maxLength={20}
                defaultValue={currentData.Description}
                onChange={(e) => {
                  // setDescription(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <div className="mt-9 text-[#ffffff99]">
              Employee
              <input
                className="ml-10 p-[1px] text-white bg-white bg-opacity-35 rounded-md float-right w-9/12 pl-2"
                type="text"
                maxLength={20}
                defaultValue={currentData.Employee}
                onChange={(e) => {
                  // setEmployee(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>

            <button
              style={{ border: "solid white 1px" }}
              className="bg-slate-400 bg-opacity-10 w-2/5  p-2 rounded-lg mt-8 s mx-auto"
              onClick={() => {
                setshowUserData(false);
              }}
            >
              close
            </button>
            <button
              style={{ border: "solid white 1px" }}
              className="bg-slate-800 w-2/5  p-2 rounded-lg mt-8 s ml-8"
              onClick={() => {
                console.log(currentData);
              }}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentPopUP;
