import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

import { MDBRow, MDBCol } from "mdb-react-ui-kit";
function Map() {
  const data = [
    {
      id: 1,
      pic: "https://s.yimg.com/ny/api/res/1.2/kXWWrUQnY06oiaW7nGbL1Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTU5Mw--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/9ba5b39ab1cb462a6a9d956c4b32846e ",
      name: "M S Dhoni",
      text: "40 Years",
      text1: "Batsman and Wicket Keeper",
    },
    {
      id: 2,
      pic: "https://imageio.forbes.com/specials-images/imageserve/5ecebee7938ec500060ab34f/0x0.jpg?format=jpg&crop=2336,2337,x1064,y702,safe&height=416&width=416&fit=bounds",
      name: "Virat Kohli",
      text: "35 Years",
      text1: "RightHand Batsman",
    },
    {
      id: 3,
      pic: "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/jasprit-bumrah.png",
      name: "Bumrah",
      text: "29 Years",
      text1: "Right-Hand Fast Bowler",
    },
    {
      id: 4,
      pic: "https://pbs.twimg.com/media/FCHPj9aVIAIKxmx.jpg",
      name: "Ravindra Jadeja",
      text: "34 Years",
      text1: "All Rounder",
    },
    {
      id: 5,
      pic: "https://m.cricbuzz.com/a/img/v1/192x192/i1/c150980/zaheer-khan.jpg",
      name: "Zheer Khan",
      text: "45 years",
      text1: "Left-Arm Fast Bowler",
    },
    {
      id: 6,
      pic: "https://img.jagranjosh.com/imported/images/E/GK/sachin-records.png",
      name: "Sachin Tendulkar",
      text: "50 years",
      text1: "Right-Hand Batsman",
    },
    {
      id: 7,
      pic: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
      name: "Lionel Messi",
      text: "36 Years",
      text1: "left-footed dribbler",
    },
    {
      id: 8,
      pic: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Sunil_Chhetri_Indian_Football_Player.jpg",
      name: "Sunil Chettri",
      text: "39 Years",
      text1: "Fast Forward Play",
    },
    {
      id: 9,
      pic: "https://cricclubs.com/documentsRep/profilePics/ceb8bea7-bf82-455d-8187-17015bfc6d45.png",
      name: "Smriti Mandhana",
      text: "27 Years",
      text1: "Left-handed",
    },
    {
      id: 10,
      pic: "https://cricket.upcomingwiki.com/public/images/gallery/56868.png",
      name: "Jhulhan Goswami",
      text: "40 Years",
      text1: "Right arm Fast medium.",
    },
  ];
  const [search, setSearch] = useState("");
  let handlerInputChange = (e) => {
    setSearch(e.target.value);
  };
  const filterData = data.filter((searchValue) => {
    const itemSearched = search.toLowerCase();

    return (
    //   searchValue.age.toString().includes(itemSearched) ||
    //   searchValue.id.toString().includes(itemSearched) ||
      searchValue.name.toLowerCase().includes(itemSearched)||
      searchValue.id.toString().includes(itemSearched)||
      searchValue.text.toString().toLowerCase().includes(itemSearched)||
      searchValue.text1.toString().toLowerCase().includes(itemSearched)
    );
  });

  const rows = filterData.map((item) => (
    <MDBCol md="3">
      <div
        className="cardcontainer"
        style={{
          width: "270px",
          marginLeft: "30px",
          paddingLeft: "20px",
          backgroundColor: "rgba(0, 0, 0)",
          marginBottom: "20px",
          marginTop: "20px",
          boxShadow: "1px 1px 20px 1px grey",
          borderRadius: "0px 15px 15px 0px",
        }}
      >
       
        {/* <div>{item.id}</div> */}
        <MDBCard style={{ borderRadius: "0px 15px 15px 0px" }}>
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
         >
            <MDBCardImage
              src={item.pic}
              fluid
              alt="..."
              style={{ height: "12em", paddingLeft: "2em" }}
            />
            {/* <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a> */}
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>{item.name}</MDBCardTitle>
            <MDBCardText style={{ lineHeight: ".7em" }}>
              {item.text}
            </MDBCardText>

            <h6 style={{ lineHeight: "1.2em" }}> {item.text1}</h6>

            {/* <MDBBtn href=''>{item.name}</MDBBtn> */}
          </MDBCardBody>
        </MDBCard>
      </div>
    </MDBCol>

    // <div  className='container'>
    //  {
    //   data.map((item)
    //   {
    //     <div  key>
    //     <img src={item.pic} alt="" />

    //   {item.name}
    //   {item.text}
    //   {item.text1}
    //   </div>
    //   })
    //  }

    // </div>
  ));

  return (
    <div>
         
      <h2
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "5px 10px",
          textAlign: "center",
        }}
      >

        Cricket &nbsp; and &nbsp; Football &nbsp; Players
      </h2>
      <input type="text" value={search} onChange={handlerInputChange} />Search
      <MDBRow>{rows}</MDBRow>
    </div>
  );
}

export default Map;
