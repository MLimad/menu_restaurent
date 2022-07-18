import React from 'react'
import {GiShoppingCart} from 'react-icons/gi'

function MenuItems({menuList}) {
  return (
    <div>
        <div className="row my-4">
            {
                menuList.map((item,id) =>(
                    <div key={id} className="col-md-3 col-sm-6">
                    <section>
                        <div className="item-price">${item.price}</div>
                        <header className='item-img'>
                            <img src={item.image} alt="" />
                        </header>
                        <div className="item-body">
                            <h5 className='item-title'>{item.title}</h5>
                            <hr />
                            <p className='item-desc'>
                                {item.desc}
                            </p>
                        </div>
                        <button type="button" className="order-item"><GiShoppingCart /> Order Now</button>
                    </section>
                </div>
                ))
            }

        </div>
    </div>
  )
}

export default MenuItems
