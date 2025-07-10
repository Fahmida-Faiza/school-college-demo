"use client"

import React, { useState } from 'react';

const CostingForm = () => {
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [total, setTotal] = useState('');

  const handleCalculation = (q, p) => {
    const qty = parseInt(q || 0);
    const prc = parseFloat(p || 0);
    setTotal(qty * prc);
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 text-black mb-32">
      <div className="card  shadow-2xl border border-blue-200 rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          🧾 Costing Entry
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="form-control md:col-span-2">
            <label className="label font-semibold">Product</label>
            <input
              type="text"
              placeholder="e.g. Marker Pen"
              className="input bg-white input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Quantity</label>
            <input
              type="number"
              placeholder="e.g. 10"
              className="input bg-white input-bordered"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
                handleCalculation(e.target.value, price);
              }}
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Product Price (৳)</label>
            <input
              type="number"
              placeholder="e.g. 20"
              className="input bg-white input-bordered"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
                handleCalculation(quantity, e.target.value);
              }}
            />
          </div>

          <div className="form-control md:col-span-2">
            <label className="label font-semibold">Total Cost (৳)</label>
            <input
              type="text"
              value={total || ''}
              readOnly
              className="input input-bordered bg-gray-100 text-gray-700"
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Shop Name</label>
            <input
              type="text"
              placeholder="e.g. City Stationery"
              className="input bg-white input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Shop Phone Number</label>
            <input
              type="tel"
              placeholder="e.g. 01XXXXXXXXX"
              className="input bg-white input-bordered"
            />
          </div>

          <div className="form-control md:col-span-2 mt-4">
            <button className="btn btn-primary w-full text-lg">Save Cost Entry</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CostingForm;
