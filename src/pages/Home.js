import React from 'react'
import Header from './Header'
import '../stylesheets/Home.css'
import Navbar from '../components/Navbar'
import Registration from './Registration'
import Login from './Login'
import image02 from'../images/image02.jpg'
import image09 from'../images/image09.jpeg';
import Body from './Body'








const Home = () => {
  return (
    <div className='image'>
      {/* <Header/> */}
      <Navbar/>        
      {/* <Registration/> */}
      <div className='svg'>
      {/* <img src={image02} alt=""  /> */}
      </div>
      <div class="search">
				<form class="search-form">
					<input type="text" placeholder="Search for books, authors, categories and more.." />
					<input type="submit" value="Submit" />
				</form>
			</div>
      
     
  
        
      
      
      
      
     
     
      
     
      


    </div>
  )
}

export default Home
