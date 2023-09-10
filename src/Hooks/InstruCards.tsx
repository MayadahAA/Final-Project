import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface IUser {
  id: string;
  name: string;
  field: string;
  status: string;
}

function Instrucards() {
  const url = "https://64ec522df9b2b70f2bfa1874.mockapi.io/api/v1/users";
  const [instructor, setInstructor] = useState<IUser[]>([]);
  const [search, setSearch] = useState<string>("");

  try {
    useEffect(() => {
      axios.get(url).then((response) => {
        setInstructor(response.data);
      });
    }, [instructor]);
  } catch (error) {
    console.log(error);
  }
  const searchHandler = instructor.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* search input start*/}
      <div className="flex justify-end p-5">
        <input
          type="text"
          className="p-2 rounded-md bg-slate-50 border-2 border-slate-400"
          placeholder="بحث"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap justify-end w-full  h-full gap-4">
        {searchHandler.map((e) => (
          <div key={e.id}>
            <div>
              {/* {instructor.map((e) => (
                <div key={e.id}> */}
              <div className="bg-white items-center gap-5 flex flex-col p-10  text-center ">
                <div
                  className="w-32 rounded-full relative "
                >
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    alt=""
                    className="rounded-full relative"
                  />
                  <div className={`  rounded-full w-7 h-7 absolute right-1 bottom-2 border-white border-2 ${e.status === 'not availble' ? 'bg-slate-400' : 'bg-blue-600'}`}>
                    
                  </div>
                </div>
                <div className="text-center">
                  <h1> {e.name}</h1>
                  <h2>{e.field}</h2>
                </div>
                <div className="flex flex-wrap w-3/4 gap-2 text-center items-center justify-center">
                  <h3 className="bg-purple-50 rounded-full p-1 px-3 text-sm font-medium text-slate-800">
                    #javascript
                  </h3>
                  <h3 className="bg-purple-50 rounded-full p-1 px-3 text-sm font-medium text-slate-800">
                    #javascript
                  </h3>
                  <h3 className="bg-purple-50 rounded-full p-1 px-3 text-sm font-medium text-slate-800">
                    #javascript
                  </h3>
                </div>
                <Link to={`/request/${e.id}`} className="w-full">
                  <button className="bg-purple-700 text-white p-2 w-full">
                    Send Request
                  </button>
                </Link>
              </div>
              {/*  card end */}
              {/* </div> */}
              {/* // ))} */}
            </div>
          </div>
        ))}
      </div>
      {/* search input end*/}
    </>
  );
}

export default Instrucards;