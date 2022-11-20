import React from "react";

function CreateOrder() {
    return (
        <div className="mx-5 lg:w-1/2 lg:mx-auto my-10 shadow-md sm:rounded-lg py-3">
            <h1 className="text-4xl font-bold text-center my-8 text-nile-blue-900">Create Order</h1>
            <div className="mx-10">
                <form action="">
                    <h2 className="text-3xl font-semibold mt-8 mb-5 text-nile-blue-700" >Order Details</h2>
                    <div className="md:flex md:justify-around">
                        <div>
                            <label className="pb-1 text-nile-blue-600" htmlFor="orderDate">Order Date</label>
                            <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="date" name="orderDate" id="orderDate" placeholder="Order Date"/>
                        </div>
                        <div>
                            <label className="pb-1 text-nile-blue-600" htmlFor="orderTime">Order Time</label>
                            <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="time" name="orderTime" id="orderTime" placeholder="Order Time"/>
                        </div>
                    </div>
                    <h2 className="text-3xl font-semibold mt-8 mb-5 text-nile-blue-700" >Customer Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-center">
                        <div>
                            <label className="pb-1 text-nile-blue-600" htmlFor="customerName">Customer Name</label>
                            <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="name" name="customerName" id="customerName" placeholder="Customer Name"/>
                        </div>
                        <div>
                            <label className="pb-1 text-nile-blue-600" htmlFor="customerPhone">Customer Phone</label>
                            <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="text" name="customerPhone" id="customerPhone" placeholder="Customer Phone"/>
                        </div>
                        <div>
                            <label className="pb-1 text-nile-blue-600" htmlFor="customerEmail">Customer Email</label>
                            <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="email" name="customerEmail" id="customerEmail" placeholder="Customer Email"/>
                        </div>
                        <div>
                            <label className="pb-1 text-nile-blue-600" htmlFor="customerAddress">Customer Address</label>
                            <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="text" name="customerAddress" id="customerAddress" placeholder="Customer Address"/>
                        </div>
                    </div>
                    <h2 className="text-3xl font-semibold mt-8 mb-5 text-nile-blue-700" >Order Items</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-center">
                        <div>
                            <label className="pb-1 text-nile-blue-600" htmlFor="itemName">Item Name</label>
                            <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="text" name="itemName" id="itemName" placeholder="Item Name"/>
                        </div>
                        <div>
                            <label className="pb-1 text-nile-blue-600" htmlFor="itemPrice">Item Price</label>
                            <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="number" name="itemPrice" id="itemPrice" placeholder="Item Price"/>
                        </div>
                        <div>
                            <label className="pb-1 text-nile-blue-600" htmlFor="itemQuantity">Item Quantity</label>
                            <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="number" name="itemQuantity" id="itemQuantity" placeholder="Item Quantity"/>
                        </div>
                        <div>
                            <label className="pb-1 text-nile-blue-600" htmlFor="itemTotal">Item Total</label>
                            <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="number" name="itemTotal" id="itemTotal" placeholder="Item Total"/>
                        </div>
                    </div>
                    <h2 className="text-3xl font-semibold mt-8 mb-5 text-nile-blue-700" >Shipping Details</h2>
                    <div  className="md:flex md:justify-around">
                        <div>
                            <label className="pb-1 text-nile-blue-600" htmlFor="shippingAddress">Shipping Address</label>
                            <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="text" name="shippingAddress" id="shippingAddress" placeholder="Shipping Address"/>
                        </div>
                        <div>
                            <label className="pb-1 text-nile-blue-600" htmlFor="shippingCity">Shipping City</label>
                            <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="text" name="shippingCity" id="shippingCity" placeholder="Shipping City"/>
                        </div>
                    </div>
                    <div className="flex justify-center mt-8 mb-5">
                        <button type="submit"  className="bg-burnt-sienna-500 text-[white] font-medium py-2 px-4 mx-2 rounded-lg">Create Order</button>
                    </div>
                </form>    
            </div>
        </div>
    )
}

export default CreateOrder