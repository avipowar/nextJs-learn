"use client";

import React, { useEffect, useState } from "react";

const ClientSidePage = () => {
  const [data, setdata] = useState(null);

  useEffect(() => {
    async function fetchdata() {
      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10",
      );
      const data = await res.json();
      setdata(data);
      // console.log(data);
    }
    fetchdata();
  }, []);

  return <div>ClientSidePage</div>;
};

export default ClientSidePage;
