import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Notification from "@/components/Elements/Notification";
import Head from "next/head";

interface LostFoundItem {
  name: string;
  contact: string;
  item: string;
  description: string;
  status: "lost" | "found";
}

interface ApiResponse {
  message: string;
  item: LostFoundItem;
}

const LostFoundPage = () => {
  const [formData, setFormData] = useState<LostFoundItem>({
    name: "",
    contact: "",
    item: "",
    description: "",
    status: "lost",
  });
  const [items, setItems] = useState<ApiResponse[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/lost-found", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Item reported successfully!");
        setFormData({
          name: "",
          contact: "",
          item: "",
          description: "",
          status: "lost",
        });
        fetchItems();
      } else {
        setErrorMessage("Failed to report item.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch("/api/lost-found");
      if (response.ok) {
        const data: ApiResponse[] = await response.json();
        setItems(data);
      }
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  return (
    <div className=" min-h-[calc(100vh-7rem)] max-container">
      <Head>
        <title>Lost and Found | Yuvtarang 2k25 | A National Level Youth Festival</title>
      </Head>

      <div className="mb-6 rounded-lg max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold font-serif uppercase tracking-wider text-[--footer]">Lost & Found</h1>
          <p className="text-sm text-gray-600">Fill out the form below to report a lost or found item. We hope this helps!</p>
        </div>

        {/* Notification display */}
        <div>
          {successMessage && (
            <Notification message={successMessage} onDismiss={() => setSuccessMessage(null)} />
          )}
          {errorMessage && (
            <Notification message={errorMessage} onDismiss={() => setErrorMessage(null)} />
          )}
        </div>

        {/* Items list */}
        <div className="">
          <div className="mt-4 justify-items-center">
            <h2 className="font-bold text-[--footer] uppercase text-lg">Currently Reported Lost & Found Items</h2>
            {items.length > 0 ? (
              <ul className="mt-4 grid grid-cols-4 lg:grid-cols-2 gap-10 lg:gap-3">
                {items.map((data, index) => (
                  <li key={index} className="bg-[--primary-light] p-4 rounded-md shadow-md border border-border">
                    <h3 className="font-semibold text-sm font-serif tracking-wider uppercase">{data.item.item}</h3>
                    <p><strong className="capitalize">Status:</strong> {data.item.status}</p>
                    <p><strong className="capitalize">Contact:</strong> {data.item.contact}</p>
                    <p><strong className="capitalize">Description:</strong> {data.item.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center">No items found at the moment. Be the first to report!</p>
            )}
          </div>

          {/* Report Form */}
          <form onSubmit={handleSubmit} className="bg-[--primary-light] border border-[--border] p-8 rounded-md shadow-lg mt-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-2 uppercase font-serif text-xs">Name<span className='px-0.5 -mt-0.5 text-footer'>*</span></label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="w-full p-3 rounded bg-footer border border-[--border] focus:border-primary-light focus:outline-none text-primary placeholder:text-[#987044]"
                />
              </div>
              <div>
                <label htmlFor="contact" className="block font-medium mb-2 uppercase font-serif text-xs">Contact Number<span className='px-0.5 -mt-0.5 text-footer'>*</span></label>
                <input
                  id="contact"
                  name="contact"
                  type="tel"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number"
                  className="w-full p-3 rounded bg-footer border border-[--border] focus:border-primary-light focus:outline-none text-primary placeholder:text-[#987044]"
                />
              </div>
              <div>
                <label htmlFor="item" className="block font-medium mb-2 uppercase font-serif text-xs">Item Name<span className='px-0.5 -mt-0.5 text-footer'>*</span></label>
                <input
                  id="item"
                  name="item"
                  type="text"
                  value={formData.item}
                  onChange={handleChange}
                  required
                  placeholder="Item Name"
                  className="w-full p-3 rounded bg-footer border border-[--border] focus:border-primary-light focus:outline-none text-primary placeholder:text-[#987044]"
                />
              </div>
              <div>
                <label htmlFor="status" className="block font-medium mb-2 uppercase font-serif text-xs">Status</label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded bg-footer border border-[--border] focus:border-primary-light focus:outline-none text-primary"
                >
                  <option value="lost">Lost</option>
                  <option value="found">Found</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="description" className="block font-medium mb-2 uppercase font-serif text-xs">Description<span className='px-0.5 -mt-0.5 text-footer'>*</span></label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Provide more details about your item..."
                className="w-full p-3 rounded bg-footer border border-[--border] focus:border-primary-light focus:outline-none text-primary placeholder:text-[#987044]"
              />
            </div>

            <div className="flex items-center justify-center mt-6">
              <button
                type="submit"
                className="px-10 py-2 bg-footer text-primary transition-all duration-300 ease-in-out rounded hover:bg-footer-secondary font-bold w-fit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LostFoundPage;
