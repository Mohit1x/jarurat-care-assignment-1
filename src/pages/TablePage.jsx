import "./TablePage.css";

const TablePage = ({ handleShowForm, services, setServices, setUpdateId }) => {
  const handleDelete = (id) => {
    const deleted = services.filter((service) => service.id !== id);
    setServices(deleted);
  };
  const handleUpdate = (id) => {
    setUpdateId(id);
    handleShowForm();
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="h1-title">Health Care</h1>
        <button className="create-btn" onClick={handleShowForm}>
          Create List
        </button>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        {services.length ? (
          <tbody>
            {services?.map((service, index) => (
              <tr key={index}>
                <td>{service.name}</td>
                <td>{service.description}</td>
                <td>₹{service.price}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(service.id)}
                    className="update-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="delete-btn"
                  >
                    Del
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <h1 className="empty-body">No List Found</h1>
        )}
      </table>
    </div>
  );
};

export default TablePage;
