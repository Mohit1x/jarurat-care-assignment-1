import { useEffect, useState } from "react";
import "./AddListForm.css";

const AddListForm = ({
  setServices,
  setShowForm,
  handleShowTable,
  services,
  updateId,
  setUpdateId,
}) => {
  const [error, setError] = useState("");
  const id = new Date().getTime();
  const [serviceForm, setServiceForm] = useState({
    name: "",
    description: "",
    price: "",
    id,
  });

  useEffect(() => {
    if (updateId) {
      const foundedService = services.find((service) => service.id == updateId);

      setServiceForm({
        name: foundedService.name,
        description: foundedService.description,
        price: foundedService.price,
      });
    }
  }, [services, updateId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      serviceForm.name.trim() === "" ||
      serviceForm.description.trim() === "" ||
      serviceForm.price.trim() === ""
    ) {
      setError(
        "Error: The following fields cannot be empty: Name,description,price"
      );
      return;
    }

    if (updateId) {
      const index = services.findIndex((service) => service.id == updateId);
      services[index].name = serviceForm.name;
      services[index].description = serviceForm.description;
      services[index].price = serviceForm.price;
      services[index].id = serviceForm.id;
      setShowForm(false);
      setUpdateId(null);
    } else {
      setServices([...services, serviceForm]);
      setShowForm(false);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Create List</h1>
        <button onClick={handleShowTable} className="exit-btn">
          X
        </button>
      </div>
      <form className="form shadow-lg" onSubmit={handleSubmit}>
        <label className="form-label">
          <h2 className="input-text">Name</h2>
          <input
            placeholder="Give your list a name"
            type="text"
            className="input"
            value={serviceForm.name}
            onChange={(e) =>
              setServiceForm((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </label>
        <label className="form-label">
          <h2 className="input-text">Description</h2>
          <input
            placeholder="Enter list description..."
            type="text"
            className="input"
            value={serviceForm.description}
            onChange={(e) =>
              setServiceForm((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
          />
        </label>
        <label className="form-label">
          <h2 className="input-text">Price</h2>
          <input
            placeholder="price: eg ₹120"
            type="number"
            className="input"
            value={serviceForm.price}
            onChange={(e) =>
              setServiceForm((prev) => ({ ...prev, price: e.target.value }))
            }
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="form-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddListForm;
