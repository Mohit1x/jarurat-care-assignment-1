import { useState } from "react";
import "./App.css";
import AddListForm from "./pages/AddListForm";
import TablePage from "./pages/TablePage";

function App() {
  const [services, setServices] = useState([
    {
      name: "CheckUp",
      description: "Annual Health CheckUp",
      price: "100",
      id: 1,
    },
    { name: "Vaccination", description: "Flu Vaccination", price: "50", id: 2 },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  console.log(services);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleShowTable = () => {
    setShowForm(false);
  };

  return (
    <div className="main-container">
      {showForm ? (
        <AddListForm
          setServices={setServices}
          services={services}
          setShowForm={setShowForm}
          handleShowTable={handleShowTable}
          updateId={updateId}
          setUpdateId={setUpdateId}
        />
      ) : (
        <TablePage
          setServices={setServices}
          services={services}
          handleShowForm={handleShowForm}
          setUpdateId={setUpdateId}
        />
      )}
    </div>
  );
}

export default App;
