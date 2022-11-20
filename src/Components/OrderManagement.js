import React from "react";
import UpdateOrder from "./UpdateOrder";

function OrderManagement() {
  return (
    <div>   
        <div class="overflow-x-auto relative shadow-md rounded-lg md:w-1/2 md:mx-auto mx-5">
            <h1  className="text-4xl font-bold text-center my-8 text-nile-blue-900">OrderManagement</h1>
            <table class="w-full text-sm text-left">
                <thead class="text-sm uppercase bg-nile-blue-100 ">
                    <tr>
                        <th scope="col" class="py-3 px-6 text-center text-nile-blue-700">
                            Service
                        </th>
                        <th scope="col" class="py-3 px-6 text-center text-nile-blue-700">
                            Date
                        </th>
                        <th scope="col" class="py-3 px-6 text-center text-nile-blue-700">
                            Destination
                        </th>
                        <th scope="col" class="py-3 px-6 text-center text-nile-blue-700">
                            Status
                        </th>
                        <th scope="col" class="py-3 px-6 text-center text-nile-blue-700">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b ">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap text-center">
                            1
                        </th>
                        <td class="py-4 px-6 text-center">
                            01/01/2021
                        </td>
                        <td class="py-4 px-6 text-center">
                            Santa Marta
                        </td>
                        <td class="py-4 px-6 text-center">
                            Pending
                        </td>
                        <td class="py-4 px-6 text-center text-burnt-sienna-500">
                            <a href={UpdateOrder} class="font-medium text-blue-600 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class="border-b">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap text-center">
                            2
                        </th>
                        <td class="py-4 px-6 text-center">
                            01/02/2021
                        </td>
                        <td class="py-4 px-6 text-center">
                            Bogotá D.C.
                        </td>
                        <td class="py-4 px-6 text-center">
                            Delivered
                        </td>
                        <td class="py-4 px-6 text-center text-burnt-sienna-500">
                            <a href={UpdateOrder} class="font-medium text-blue-600 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class="border-b">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap text-center">
                            3
                        </th>
                        <td class="py-4 px-6 text-center">
                            01/01/2021
                        </td>
                        <td class="py-4 px-6 text-center">
                            Ibagué
                        </td>
                        <td class="py-4 px-6 text-center">
                            Processing
                        </td>
                        <td class="py-4 px-6 text-center text-burnt-sienna-500">
                            <a href={UpdateOrder} class="font-medium text-blue-600 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class="border-b">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap text-center">
                            4
                        </th>
                        <td class="py-4 px-6 text-center">
                            01/01/2021
                        </td>
                        <td class="py-4 px-6 text-center">
                            Tunja
                        </td>
                        <td class="py-4 px-6 text-center">
                            On the way
                        </td>
                        <td class="py-4 px-6 text-center text-burnt-sienna-500">
                            <a href={UpdateOrder} class="font-medium text-blue-600 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap text-center">
                            5
                        </th>
                        <td class="py-4 px-6 text-center">
                            01/01/2021
                        </td>
                        <td class="py-4 px-6 text-center">
                            Barranquilla
                        </td>
                        <td class="py-4 px-6 text-center">
                            Processing
                        </td>
                        <td class="py-4 px-6 text-center text-burnt-sienna-500">
                            <a href={UpdateOrder} class="font-medium text-blue-600 hover:underline">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default OrderManagement;