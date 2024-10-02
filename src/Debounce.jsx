import { set } from "mongoose";
import { useEffect } from "react";
import { useState } from "react";

const Debounce = () => {
  const [val, setval] = useState("");
  const [timerId, settimerId] = useState(0);
  const [data, setdata] = useState([]);
  const fetchdata = async () => {
    try {
      let res = {};
      if (val) {
        res = await fetch(
          `https://content-xflix-backend.azurewebsites.net/v1/videos?title=${val}`
        );
      } else {
        res = await fetch(
          `https://content-xflix-backend.azurewebsites.net/v1/videos`
        );
      }
      const resvalue = await res.json();
      setdata(resvalue.videos);
    } catch (err) {
      console.error(err);
    }
  };
  const debounceFn = (fn, delay = 500) => {
    return function (...args) {
      if (timerId) {
        clearTimeout(timerId);
      }
      const newtimerId = setTimeout(() => {
        console.log(fn);

        fn(...args);
      }, delay);
      console.log({ newtimerId, timerId });
      settimerId(newtimerId);
    };
  };

  const handlechange = debounceFn((e) => {
    setval(e.target.value);
  }, 1000);
  useEffect(() => {
    fetchdata();
  }, [val]);
  return (
    <div>
      <input onChange={handlechange} placeholder="search here" />
      {data.length
        ? data.map((item) => <p key={item.id}>{item.title}</p>)
        : null}
    </div>
  );
};
export default Debounce;
