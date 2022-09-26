import Head from "next/head";
import React, { useState, useEffect } from "react";
import CatGrid from "../components/CatGrid";

export default function Home({ catList }) {
  const [data, setData] = useState(catList);


// use this block for regular database fetching 

  // initial data fetch
  // useEffect(() => {
  //   const getData = async () => {
  //     await fetch("http://localhost:8080/catdata.json")
  //       .then(function (res) {
  //         return res.json();
  //       })
  //       .then(function (data) {
  //         setData(data.cats);
  //       });
  //   };
  //   getData();
  // }, []);

  // const sortByNone = () => {
  //   const getData = async () => {
  //     await fetch("http://localhost:8080/catdata.json")
  //       .then(function (res) {
  //         return res.json();
  //       })
  //       .then(function (data) {
  //         setData(data.cats);
  //       });
  //   };
  //   getData();
  // };

  // const sortByCutest = () => {
  //   const copy = [...data];
  //   let sorted = copy.sort((a, b) => {
  //     return b.cutenessLevel - a.cutenessLevel;
  //   });

  //   setData(sorted);
  // };


    const sortByNone = () => {
  setData(catList)
  };

  const sortByCutest = () => {
    const copy = [...catList];
    let sorted = copy.sort((a, b) => {
      return b.cutenessLevel - a.cutenessLevel;
    });

    setData(sorted);
  };

  const sortByUgliest = () => {
    const copy = [...catList];
    let sorted = copy.sort((a, b) => {
      return a.cutenessLevel - b.cutenessLevel;
    });

    setData(sorted);
  };

  return (
    <div>
            <Head>
      <title>Incorpurrate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <h1 className="text-center pt-6 font-quicksand font-bold text-4xl">
          Cats Incorpurrate<span className="text-base pb-4">&#8482;</span>
        </h1>
        <div className="p-12 flex justify-center items-center">
          <p className="text-lg pr-4 pb-2">Sorting:</p>
          <button
            onClick={sortByCutest}
            className="bg-black text-white p-4 rounded-md mr-4 mb-2 whitespace-nowrap"
          >
            Much cutest
          </button>
          <button
            onClick={sortByUgliest}
            className="bg-black text-white p-4 pl-8 pr-8 rounded-md mr-4 mb-2 whitespace-nowrap"
          >
            Not Cute
          </button>
          <button
            onClick={sortByNone}
            className="bg-black text-white p-4 pl-12 pr-12 rounded-md mr-4 mb-2 whitespace-nowrap"
          >
            None
          </button>
        </div>
        <CatGrid data={data} />
      </div>
    </div>
  );
}


export async function getStaticProps() {
  const res = await fetch("http://localhost:8080/catdata.json");
  const data = await res.json();
  const catList = data.cats
  return {
    props: {
      catList,
    }, 
  }
}
