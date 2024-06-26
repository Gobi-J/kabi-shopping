import React from 'react'
import f1 from '../../assets/images/products/f1.jpg'

const Product = () => {
  return (
    <>
     <section className="px-[20px] py-[20px] md:px-[40px] md:py-[40px] lg:px-[80px] flex gap-8 mt-5">
        <div className="w-2/5">
            <img src={f1} width="100%" className='mb-2'/>
            <div className="flex justify-between">
                <div className="cursor-pointer basis-[24%]">
                    <img src={f1} width="100%" className="small-img" alt="" />
                </div>
                <div className="cursor-pointer basis-[24%]">
                    <img src={f1} width="100%" className="small-img" alt="" />
                </div>
                <div className="cursor-pointer basis-[24%]">
                    <img src={f1} width="100%" className="small-img" alt="" />
                </div>
                <div className="cursor-pointer basis-[24%]">
                    <img src={f1} width="100%" className="small-img" alt="" />
                </div>
            </div>
        </div>
        <div className="w-3/5 pt-7">
            <h6>Home / Shirt</h6>
            <h4 className='pt-10 pb-5'>Men's Fashion Shirt</h4>
            <h2 className='text-xl font-semibold'>₹200</h2>
            <select className='block px-2 py-2 my-2 border'>
                <option>Select Size</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
            </select>
            <input type="number" value={1} className='size-12 pl-2 text-base mr-2 border' />
            <button className="normal" style={{border:'1px solid'}}>Add to cart</button>
            <h4 className='my-3 font-bold'>Product Details</h4>
            <p className='text-justify text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, at a. Vel fugiat nisi iure culpa atque
                voluptate officiis veniam aliquam soluta! Neque, non porro. Ipsum ex assumenda inventore vitae! Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Cum, repudiandae. Repellat officia magnam quia
                voluptatum, officiis nisi dignissimos!</p>
        </div>
    </section>
    
    </>
  )
}

export default Product