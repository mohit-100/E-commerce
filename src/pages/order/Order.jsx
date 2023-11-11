import React from 'react';
import Layout from "../../components/layout/Layout";
import myContext from '../../context/data/Mycontext'
import {useContext} from "react"
import Loader from "../../components/loader/Loader"

function Order() {
  
  const userid = JSON.parse(localStorage.getItem('user')).user.uid
   console.log("-->", userid);
  const context = useContext(myContext);
  const { mode, Loading, order } = context

  
  
    
    return (
      <Layout>
        {Loading && <Loader />}
        {order.length > 0 ? (
          <div className="h-full pt-10">
            {order
              .filter(obj => obj.userid === userid)
              .map((order) => (
                <div key={order.orderId} className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                  {order.cartItems.map((item) => (
                  
                    <div key={item.id} className="rounded-lg md:w-2/3">
                      <div className={`justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start ${mode === 'dark' ? 'bg-dark' : ''}`}>
                        <img src={item.imageUrl} alt="product-image" className="w-full rounded-lg sm:w-40" />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                          <div className="mt-5 sm:mt-0"> {console.log(item.imageUrl)}
                            <h2 className={`text-lg font-bold text-gray-900 ${mode === 'dark' ? 'text-white' : ''}`}>{item.title}</h2>
                            <p className={`mt-1 text-xs text-gray-700 ${mode === 'dark' ? 'text-white' : ''}`}>{item.description}</p>
                            <p className={`mt-1 text-xs text-gray-700 ${mode === 'dark' ? 'text-white' : ''}`}>{item.price}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        ) : (
          <h2 className='text-center text-2xl text-white'>No Orders</h2>
        )}
      </Layout>
    );
  }
  
  export default Order;