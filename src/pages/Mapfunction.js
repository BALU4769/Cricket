import React from "react";
import { useState } from "react";
import "../stylesheets/Mapfunction.css";

const Mapfunction = () => {
  const data = [
    {
      id: 11,
      pic: "https://s.yimg.com/ny/api/res/1.2/kXWWrUQnY06oiaW7nGbL1Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTU5Mw--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/9ba5b39ab1cb462a6a9d956c4b32846e ",
      name: "M S Dhoni",
      text: "40 Years",
      text1: "Batsman and Wicket Keeper",
      rating:4
    },
    {
      id: 21,
      pic: "https://imageio.forbes.com/specials-images/imageserve/5ecebee7938ec500060ab34f/0x0.jpg?format=jpg&crop=2336,2337,x1064,y702,safe&height=416&width=416&fit=bounds",
      name: "Virat Kohli",
      text: "35 Years",
      text1: "RightHand Batsman",
      rating:5
    },
    {
      id: 31,
      pic: "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/jasprit-bumrah.png",
      name: "Jasprit Bumrah",
      text: "29 Years",
      text1: "Right-Hand Fast Bowler",
      rating:3
    },
    {
      id: 41,
      pic: "https://pbs.twimg.com/media/FCHPj9aVIAIKxmx.jpg",
      name: "Ravindra Jadeja",
      text: "34 Years",
      text1: "All Rounder",
      rating:4
    },
    {
      id: 51,
      pic: "https://m.cricbuzz.com/a/img/v1/192x192/i1/c150980/zaheer-khan.jpg",
      name: "Zheer Khan",
      text: "45 years",
      text1: "Left-Arm Fast Bowler",
      rating:4
    },
    {
      id: 61,
      pic: "https://img.jagranjosh.com/imported/images/E/GK/sachin-records.png",
      name: "Sachin Tendulkar",
      text: "50 years",
      text1: "Right-Hand Batsman",
      rating:5
    },
    {
      id: 71,
      pic: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
      name: "Lionel Messi",
      text: "36 Years",
      text1: "left-footed dribbler",
      rating:5
    },
    {
      id: 81,
      pic: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Sunil_Chhetri_Indian_Football_Player.jpg",
      name: "Sunil Chettri",
      text: "39 Years",
      text1: "Fast Forward Play",
      rating:4
    },
    {
      id: 91,
      pic: "https://cricclubs.com/documentsRep/profilePics/ceb8bea7-bf82-455d-8187-17015bfc6d45.png",
      name: "Smriti Mandhana",
      text: "27 Years",
      text1: "Left-handed",
      rating:3
    },
    {
      id: 101,
      pic: "https://cricket.upcomingwiki.com/public/images/gallery/56868.png",
      name: "Jhulhan Goswami",
      text: "40 Years",
      text1: "Right arm Fast medium.",
      rating:4
    },
  ];
  const  [search,setSearch]=useState('')
  let handlerInputChange=(e)=>{
    setSearch(e.target.value)
  }
  const filterData=data.filter((searchValue)=>
  {
    const itemSearched=search.toLowerCase();
    
    return( 
      searchValue.name.toLowerCase().includes(itemSearched)||
      searchValue.text.toLowerCase().includes(itemSearched)||
      searchValue.text1.toLowerCase().includes(itemSearched) ||
      searchValue.id.toString().includes(itemSearched)||
      searchValue.rating.toString().includes(itemSearched)
    )

  })
  return (
    <div>
      <h1>Cricketers</h1>
      <input type="text" value={search} onChange={handlerInputChange} />
      <div className="container">
        {filterData.map((item) => (
          <div className="cont">
            <div key={item.id} className="container-inner">
              <img src={item.pic} alt="" />
              <div>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
                <p>{item.text1}</p>
                <div className="rating">
                {[...Array(item.rating)].map((_, index) => (
                  <span key={index}>&#9733;</span>
                ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mapfunction;
