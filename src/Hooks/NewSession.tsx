import axios from "axios";
import { useState } from "react";
import Navigation from "../Components/Navigation";

const url = "https://6500f50418c34dee0cd5876c.mockapi.io/community";
export default function NewSession() {
  const id = localStorage.getItem("id");
  const [session, setSession] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
  });

  const input = () => {
    //
    try {
      axios
        .post(url, {
          title: session.title,
          date: session.date,
          time: session.time,
          location: session.location,
          userId: id,
        })
        .then(function (response) {
          console.log(response);
        });
    } catch (Error) {
      console.error();
    }
  };

  return (
    <>
    <div className="flex flex-col md:flex-row bg-slate-100">
      <div className="w-full md:w-1/12">
        <Navigation />
      </div>
      <div className="p-5">

      <a href="/dashboard" className="flex items-center  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 16"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        <h1 className="text-base" >
          رجوع
        </h1>
      </a>
      </div>
      <div className="flex  justify-center p-6 w-full">
        <div className="flex flex-col bg-white border-2 justify-center items-center gap-5 px-3 font-medium w-full md:w-6/12 h-auto md:h-96 p-3 rounded">
          <div className="font-bold self-start ml-5">جلسة جديدة</div>
          <div>
            <input
              className="border border-black rounded w-full md:w-80 p-3"
              placeholder="العنوان"
              type="Title"
              value={session.title}
              onChange={(e) =>
                setSession({ ...session, title: e.target.value })
              }
            />
          </div>
          <div>
            <input
              className="border border-black p-3 rounded w-full md:w-80"
              type="date"
              placeholder="التاريخ"
              value={session.date}
              onChange={(e) =>
                setSession({ ...session, date: e.target.value })
              }
            />
          </div>
          <div>
            <input
              className="border border-black p-3 rounded w-full md:w-80"
              type="text"
              placeholder="الوقت"
              value={session.time}
              onChange={(e) =>
                setSession({ ...session, time: e.target.value })
              }
            />
          </div>
          <div>
            <input
              className="border border-black p-3 rounded w-full md:w-80"
              type="text"
              placeholder="الموقع"
              value={session.location}
              onChange={(e) =>
                setSession({ ...session, location: e.target.value })
              }
            />
          </div>
          <div className="flex w-2/4">
            <button
              className="bg-cyan-500 border w-full h-10 text-white rounded"
              onClick={input}
            >
              ارسال
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
  
  );
}
