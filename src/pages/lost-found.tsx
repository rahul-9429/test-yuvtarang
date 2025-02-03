import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Notification from "@/components/Elements/Notification"; // Assuming you've stored Notification as a component

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

  // Form field change handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
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
        fetchItems(); // Refresh the list after submission
      } else {
        setErrorMessage("Failed to report item.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    fetchItems(); // Fetch items on component mount
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch("/api/lost-found");
      if (response.ok) {
        const data: ApiResponse[] = await response.json(); // Explicitly define the response type
        console.log("Fetched Items:", data);  // Check the structure of the fetched data
        setItems(data);  // Set the items state
      }
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  return (
    <div className="mb-20 min-h-[calc(100vh-6.5rem)] w-full justify-items-center justify-self-center max-container">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Lost & Found</h1>
        <p className="text-sm">Fill out the form below to report a lost or found item. We hope this helps!</p>
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

      <div className="">

        {/* Lost & Found items list */}
        <div className="mt-8 w-full">
          <h2 className="text-xl font-bold">Currently Reported Lost & Found Items</h2>
          <ul className="space-y-4 mt-4">
            {items.length > 0 ? (
              items.map((data, index) => (
                <li key={index} className="bg-background-tertiary p-4 rounded-md shadow-md">
                  {/* Accessing item properties */}
                  <h3 className="font-semibold text-lg">{data.item.item}</h3> {/* Accessing data.item.item */}
                  <p><strong>Status:</strong> {data.item.status}</p>
                  <p><strong>Contact:</strong> {data.item.contact}</p>
                  <p><strong>Description:</strong> {data.item.description}</p>
                </li>
              ))
            ) : (
              <p>No items found at the moment. Be the first to report!</p>
            )}
          </ul>
        </div>

        {/* Report Form */}
        <form onSubmit={handleSubmit} className="bg-background-secondary border border-border w-full p-8 lg:p-4 rounded-md shadow-2xl space-y-4">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 lg:p-2 placeholder:text-foreground-dim placeholder:lg:text-sm rounded bg-background-tertiary border border-border-bright focus:border-foreground focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="contact" className="block text-sm font-medium mb-2">Contact Number</label>
              <input
                id="contact"
                name="contact"
                type="tel"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full p-3 lg:p-2 placeholder:text-foreground-dim placeholder:lg:text-sm rounded bg-background-tertiary border border-border-bright focus:border-foreground focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="item" className="block text-sm font-medium mb-2">Item Name</label>
              <input
                id="item"
                name="item"
                type="text"
                value={formData.item}
                onChange={handleChange}
                required
                className="w-full p-3 lg:p-2 placeholder:text-foreground-dim placeholder:lg:text-sm rounded bg-background-tertiary border border-border-bright focus:border-foreground focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium mb-2">Status</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
                className="w-full p-3 lg:p-2 placeholder:text-foreground-dim placeholder:lg:text-sm rounded bg-background-tertiary border border-border-bright focus:border-foreground focus:outline-none"
              >
                <option value="lost">Lost</option>
                <option value="found">Found</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="description" className="block text-sm font-medium mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full p-3 lg:p-2 placeholder:text-foreground-dim placeholder:lg:text-sm rounded bg-background-tertiary border border-border-bright focus:border-foreground focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="mt-6 px-10 min-w-40 py-2 bg-foreground text-background rounded hover:bg-amongus-orange font-bold w-fit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LostFoundPage;
