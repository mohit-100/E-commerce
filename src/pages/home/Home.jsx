import React, { useContext } from 'react'
import Layout from "../../components/layout/Layout"
import Mycontext from "../../context/data/Mycontext"
import HeroSection from "../../components/herosection/Herosection"
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productcard/Productcard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testtimonial/Testimonal'
import Footer from '../../components/footer/Footer'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
// import { addToCart, deleteFromCart } from '../../redux/cartSlice'
function Home() {
  
  return (
           
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard/>
      <div className="flex justify-center -mt-5 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-pink-600 hover:bg-pink-700 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
      <Track/>
      <Testimonial/>
      {/* <Footer/> */}
    </Layout>
    

  )
}

export default Home