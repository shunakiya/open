// import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  // const [test, setData] = useState(null);

  // const testFetch = async () => {
  //   try {
  //     const response = await fetch(`http://192.168.137.221:5000`);
  //     const data = await response.json();
  //     setData(data);
  //   } catch (error) {
  //     console.log("Error fetching data:", error);
  //   }
  // };

  return (
    <div className="w-[393px] h-[852px] text-center mx-auto border-2">
      <div className="mt-8 ml-4 mb-4 text-left">
        <h1 className="text-2xl font-semibold">Welcome back,</h1>
        <h1 className="text-2xl font-semibold">Shun!</h1>
      </div>

      <div className="relative items-center">
        <FaSearch className="absolute left-[25px] top-[10px] text-gray-500" />

        <input
          type="text"
          className="w-[360px] rounded-lg border-2 pl-8 py-1 shadow-lg"
          placeholder="Search device"
        />
      </div>

      <div className="grid grid-cols-6 grid-rows-8 gap-2 justify-center items-center mx-3 mt-4">
        <div className="col-span-4 border-2 bg-[#ffc9c9] row-span-4 rounded-xl shadow-xl">
          <p>Locked</p>
          <p>Locked</p>
          <p>Locked</p>
          <p>Locked</p>
          <p>Locked</p>
        </div>

        <div className="col-span-2 bg-[#ffec99] row-span-4 rounded-xl shadow-xl">
          <p>Battery</p>
          <p>Percentage</p>
          <p>Battery</p>
          <p>Percentage</p>
          <p>Percentage</p>
        </div>

        <div className="bg-[#a5d8ff] row-span-4 col-span-2 rounded-xl shadow-xl">
          <p>Settings</p>
          <p>Settings</p>
          <p>Settings</p>
          <p>Settings</p>
          <p>Settings</p>
        </div>

        <div className="bg-[#b2f2bb] row-span-4 col-span-4 rounded-xl shadow-xl">
          <p>Fingeprint</p>
          <p>Fingeprint</p>
          <p>Fingeprint</p>
          <p>Fingeprint</p>
          <p>Fingeprint</p>
        </div>
      </div>
    </div>
  );
}
