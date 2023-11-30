import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";

function App() {
  const data = {
    image :"https://images.pexels.com/photos/242124/pexels-photo-242124.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    follows:13933,
    title:"Thunderous Cabinet",
    slug:"thunderous-cabinet",
    songs : [
      {
      id: "093b0869-29a4-4fe9-8753-958b2c10989a",
      title: "Auf Wiederseh'n Sweetheart",
      artists: [
      "Taylor Mante"
      ],
      genre: {
      key: "rock",
      label: "Rock"
      },
      likes: 32287,
      image: "https://images.pexels.com/photos/3621344/pexels-photo-3621344.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      durationInMs: 45787
      },
      {
      id: "f27c5765-934c-4b7b-a483-7751d64adf14",
      title: "Money For Nothing",
      artists: [
      "Ruby Leuschke",
      "Seth Block",
      "Heidi Olson"
      ],
      genre: {
      key: "jazz",
      label: "Jazz"
      },
      likes: 38024,
      image: "https://images.pexels.com/photos/1073078/pexels-photo-1073078.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      durationInMs: 38978
      }]
  };
  return (
    <>
      <Navbar/>
      <Hero/>
      <Card data={data} type={"album"}/>
    </>
  );
}

export default App;
