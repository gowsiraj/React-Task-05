import React, { useContext } from 'react';
import { myContext } from '../App';

function Card() {
  const [data, setData] = useContext(myContext);
  const totalprice = data.reduce((total, data) => total + data.price * (data.quantity || 1), 0);
  const totalQuantity = data.reduce((total, data) => total + (data.quantity || 1), 0);
  const handleIncrease = (id, quantity) => {
    setData(preData => {
      return preData.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: (item.quantity + 1 || quantity + 1) }
        }
        return item
      })
    })
  }
  const handleDecrease = (id) => {
    setData((preData) => {
      return preData.map((item) => {
        if (item.id === id) {
          const newQuantity = (item.quantity || 1) > 1 ? item.quantity - 1 : 1;
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    });
  };
  const handleRemove=(id)=>{
    setData((prevData) => prevData.filter((item) => item.id !== id));
  }
  return (
    <>
      <div className='smallheader'>
        <div class="container text-center pt-4 pb-3">
          <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
              Total Quantity : {totalQuantity}
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
              Total price : $ {totalprice}
            </div>
          </div>
        </div>
      </div>
      <div  className='ml-2 mr-2'>
      {
        data.map((item, index) => {
          return (
            
            <div key={index} className="container text-center mt-5 mb-5 relative">
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 cardstyle">
                  <div className="mb-3">
                    <div className="row g-0">
                      <div className="col-md-4 mt-3 mb-2 ">
                        <img src={item.images[0]} className="img-fluid rounded-start " alt="..." />
                        <button type="button" class="btn btn-danger mt-5 absolute" onClick={()=>handleRemove(item.id)}>Remove</button>
                      </div>
                      <div className="col-md-8 car-3">
                        <div className="card-body mt-3">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text mt-2">
                            {item.description}
                          </p>
                          <p className="card-text">
                            <small className="text-body-secondary">Brand : {item.brand}</small>
                          </p>
                          <p className="card-text mt-2">
                            Price : $ {item.price}
                          </p>
                          <div class="container text-center mt-5">
                            <div class="row">
                              <div class="col-2 col-sm-2 col-lg-2 col-md-2 col-xl-2">

                                <button onClick={() => handleIncrease(item.id, item.quantity || 1)}>+</button>

                              </div>
                              <div class="col-2 col-sm-2 col-lg-2 col-md-2 col-xl-2">

                                <p>{item.quantity ||1}</p>

                              </div>

                              <div class="col-2 col-sm-2 col-lg-2 col-md-2 col-xl-2">
                                <button onClick={()=>handleDecrease(item.id, item.quantity || 1)}>-</button>
                              </div>
                              <div class="col-6 col-sm-6 col-lg-6 col-md-6 col-xl-6">
                                <p className="card-text">
                                  total :${item.price*(item.quantity || 1)}
                                </p>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          )

        })
      }
      </div>


    </>
  );
}

export default Card;
