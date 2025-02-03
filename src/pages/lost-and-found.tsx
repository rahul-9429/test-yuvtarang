"use client";
import { useState, ChangeEvent, FormEvent } from "react";

type ItemType = "lost" | "found";

interface LostFoundItem {
  id: number;
  name: string;
  contact: string;
  item: string;
  description: string;
  status: ItemType | string;
}

export default function LostAndFound() {
  const [items, setItems] = useState<LostFoundItem[]>([]);
  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    contact: "",
    item: "",
    description: "",
    status: "lost",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newItem = { ...formData, id: Date.now() };
    setItems([newItem, ...items]);
    setFormData({ id: 0, name: "", contact: "", item: "", description: "", status: "lost" });
  };

  const lostItems = items.filter((item) => item.status === "lost");

  return (
    <div className="max-w-7xl min-h-[calc(100vh-6.5rem)] mx-auto p-8">
      <div className="flex justify-between">

        {/* 🔹 Optimized Bento Grid for Lost & Found Items */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-4 mb-10">
          {items.length === 0 ? (
            <p className="text-gray-500 col-span-full text-center h-full flex items-center justify-center">No items reported yet.</p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className={`p-6 rounded-lg shadow-lg transition-all duration-300 backdrop-blur-md ${item.status === "lost" ? "bg-red-200/50 border-l-4 border-red-500" : "bg-green-200/50 border-l-4 border-green-500"
                  }`}
              >
                <h3 className="text-lg font-semibold">{item.item}</h3>
                {item.status === "lost" && <p className="text-gray-600">{item.description}</p>}
                <p className="mt-2">
                  <span className="font-medium">{item.status.toUpperCase()}</span> - {item.name} ({item.contact})
                </p>
              </div>
            ))
          )}
        </div>

        {/* 🔹 Smart Report Form */}
        <div className="bg-[#271d12] p-8 shadow-md">
          <h2 className="text-2xl mb-4 text-center text-primary-light font-serif uppercase">Report a Lost/Found Item</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Status Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-primary"
              >
                <option value="lost">Lost</option>
                <option value="found">Found</option>
              </select>
            </div>

            {/* Show Different Fields Based on Selection */}
            {formData.status === "lost" ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-primary"
                    required
                  />
                  <input
                    type="text"
                    name="contact"
                    placeholder="Contact Info"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-primary"
                    required
                  />
                </div>

                <input
                  type="text"
                  name="item"
                  placeholder="Item Name"
                  value={formData.item}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-primary"
                  required
                />

                <textarea
                  name="description"
                  placeholder="Description of the item"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-primary"
                  required
                ></textarea>
              </>
            ) : (
              <>
                {/* Found Item Selection */}
                <label className="font-medium">Select Lost Item:</label>
                <select
                  name="item"
                  value={formData.item}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-primary"
                  required
                >
                  <option value="">Select Item</option>
                  {lostItems.length > 0 ? (
                    lostItems.map((lostItem) => (
                      <option key={lostItem.id} value={lostItem.item}>
                        {lostItem.item} (ID: {lostItem.id})
                      </option>
                    ))
                  ) : (
                    <option disabled>No lost items reported</option>
                  )}
                </select>
              </>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
