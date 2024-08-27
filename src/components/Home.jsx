import React from "react";
import Sidebar from "./Sidebar";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider.jsx";

function Home() {
  const { data } = useAuth();
  console.log(data);
  return (
    <div className="flex">
      <Sidebar />
      <div>
        {data.map((item) => {
          if (item.type !== "video") return false;
          return <Video key={item.id} video={item?.video}></Video>;
        })}
      </div>
    </div>
  );
}

export default Home;
