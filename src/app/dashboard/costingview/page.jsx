'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const costs = [
  {
    id: 1,
    product: 'Notebook',
    quantity: 10,
    productPrice: 50,
    shopName: 'ABC Stationery',
    shopPhone: '017xxxxxxx1',
  },
  {
    id: 2,
    product: 'Pen',
    quantity: 20,
    productPrice: 10,
    shopName: 'XYZ Supplies',
    shopPhone: '018xxxxxxx2',
  },
  {
    id: 3,
    product: 'Desk Chair',
    quantity: 5,
    productPrice: 2000,
    shopName: 'Furniture House',
    shopPhone: '019xxxxxxx3',
  },
  {
    id: 4,
    product: 'Whiteboard Marker',
    quantity: 15,
    productPrice: 30,
    shopName: 'Office Store',
    shopPhone: '016xxxxxxx4',
  },
  {
    id: 5,
    product: 'Projector Screen',
    quantity: 2,
    productPrice: 8000,
    shopName: 'Tech World',
    shopPhone: '015xxxxxxx5',
  },
  {
    id: 6,
    product: 'Chalk Box',
    quantity: 8,
    productPrice: 25,
    shopName: 'School Supplies',
    shopPhone: '017xxxxxxx6',
  },
  {
    id: 7,
    product: 'Printer Ink',
    quantity: 3,
    productPrice: 1500,
    shopName: 'Print Shop',
    shopPhone: '018xxxxxxx7',
  },
  {
    id: 8,
    product: 'Eraser',
    quantity: 30,
    productPrice: 5,
    shopName: 'Stationery Corner',
    shopPhone: '019xxxxxxx8',
  },
  {
    id: 9,
    product: 'Desk Lamp',
    quantity: 4,
    productPrice: 1200,
    shopName: 'Light House',
    shopPhone: '016xxxxxxx9',
  },
  {
    id: 10,
    product: 'Calculator',
    quantity: 7,
    productPrice: 900,
    shopName: 'Tech Mart',
    shopPhone: '015xxxxxxx0',
  },
];

const ITEMS_PER_PAGE = 5;

export default function ShowAllCosts() {
  const [selectedId, setSelectedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const selectedCost = costs.find((c) => c.id === selectedId);

  const totalPages = Math.ceil(costs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCosts = costs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  function goToPage(page) {
    setCurrentPage(page);
    setSelectedId(null);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white text-black relative">
      <Link href="/dashboard/costing"><button className='btn btn-primary absolute right-4'>Add Costing</button></Link>
      <h2 className="text-3xl font-bold text-center mb-6">Costing</h2>

      {/* Table */}
      <div className="overflow-x-auto border rounded-lg bg-white">
        <table className="table table-zebra w-full text-sm sm:text-base">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Product Price</th>
              <th>Total Cost</th>
              <th>Shop Name</th>
              <th>Shop Phone</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {currentCosts.map((cost) => (
              <tr key={cost.id}>
                <td>{cost.product}</td>
                <td>{cost.quantity}</td>
                <td>{cost.productPrice} ৳</td>
                <td>{cost.quantity * cost.productPrice} ৳</td>
                <td>{cost.shopName}</td>
                <td>{cost.shopPhone}</td>
                <td>
                  <button
                    className="btn btn-sm btn-outline btn-info"
                    onClick={() => setSelectedId(cost.id)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
          className="btn btn-sm btn-outline"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`btn btn-sm ${page === currentPage ? 'btn-primary' : 'btn-outline'
                }`}
            >
              {page}
            </button>
          );
        })}

        <button
          disabled={currentPage === totalPages}
          onClick={() => goToPage(currentPage + 1)}
          className="btn btn-sm btn-outline"
        >
          Next
        </button>
      </div>

      {/* Details Section */}
      {selectedCost && (
        <div className="mt-8 p-6 bg-white border rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">Details for: {selectedCost.product}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm w-full">
            <p><strong>Product:</strong> {selectedCost.product}</p>
            <p><strong>Quantity:</strong> {selectedCost.quantity}</p>
            <p><strong>Product Price:</strong> {selectedCost.productPrice} ৳</p>
            <p><strong>Total Cost:</strong> {selectedCost.quantity * selectedCost.productPrice} ৳</p>
            <p><strong>Shop Name:</strong> {selectedCost.shopName}</p>
            <p><strong>Shop Phone:</strong> {selectedCost.shopPhone}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-2 mt-6">
            <button className="btn btn-sm btn-warning w-full sm:w-auto">Update</button>
            <button className="btn btn-sm btn-error w-full sm:w-auto">Delete</button>
            <button
              className="btn btn-sm btn-outline w-full sm:w-auto"
              onClick={() => setSelectedId(null)}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
