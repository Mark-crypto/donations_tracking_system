import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import NavbarTop from "./sub-components/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/Tables.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import donationSchema from "../yup/donationSchema.js";

const Donations = () => {
  //React Hooks - useState
  const [donations, setDonations] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  // const [input, setInput] = useState({
  //   id: "",
  //   item: "",
  //   quantity: "",
  //   driver: "",
  //   destination: "",
  // });

  //Formik
  const formik = useFormik({
    initialValues: {
      id: "",
      item: "",
      quantity: "",
      driver: "",
      destination: "",
    },
    validationSchema: donationSchema,
  });

  //Close Add Modal
  const handleAddShow = () => {
    setShowAdd(true);
  };

  //Close Add Modal
  const handleAddClose = () => {
    setShowAdd(false);
  };

  //Close Edit Modal
  const handleEditClose = () => setShowEdit(false);

  //Edit Donation
  const handleEditShow = async (id) => {
    const response = await axios.get(
      `http://localhost:5000/api/donations/${id}`
    );
    const { item_ID, item, quantity, driver, destination } = response.data.data;
    // setInput({
    //   id: item_ID,
    //   item,
    //   quantity,
    //   driver,
    //   destination,
    // });
    formik.setValues({
      id: item_ID,
      item,
      quantity,
      driver,
      destination,
    });
    setShowEdit(true);
  };

  //Close Delete Modal
  const handleDeleteClose = () => setShowDelete(false);

  //Delete Donation
  const handleDeleteShow = async (id) => {
    const response = await axios.get(
      `http://localhost:5000/api/donations/${id}`
    );
    const { item_ID } = response.data.data;
    // setInput({ ...input, id: item_ID });
    formik.setValues({ ...formik.values, id: item_ID });
    setShowDelete(true);
  };

  //Handle input for onChange
  const handleInput = (e) => {
    // setInput({ ...input, [e.target.name]: e.target.value });
    formik.setValues({ ...formik.values, [e.target.name]: e.target.value });
  };

  //Fetch Donations
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("http://localhost:5000/api/donations");
      setDonations(response.data.data);
    };
    fetchData();
  }, [donations]);

  //Delete Donation logic
  const removeItem = async () => {
    // const { id } = input;
    const { id } = formik.values;
    const response = await axios.delete(
      `http://localhost:5000/api/donations/${id}`
    );
    setShowDelete(false);
    toast.success(response.data.message);
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios("http://localhost:5000/api/donations");
        setDonations(response.data.data);
      };
      fetchData();
    }, [donations]);
  };

  //Add Donation logic
  const addItem = async () => {
    // const { item, quantity, driver, destination } = input;
    const { item, quantity, driver, destination } = formik.values;
    if (!item || !quantity || !driver || !destination) {
      return toast.error("All fields are required");
    }
    if (
      formik.errors.item ||
      formik.errors.destination ||
      formik.errors.driver ||
      formik.errors.quantity
    )
      return toast.error("All fields are required");
    const response = await axios.post("http://localhost:5000/api/donations", {
      item,
      quantity,
      driver,
      destination,
    });
    toast.success(response.data.message);
    setShowAdd(false);
  };

  //Edit Donation logic
  const editItem = async () => {
    // const { id, item, quantity, driver, destination } = input;
    const { item, quantity, driver, destination } = formik.values;
    if (!item || !quantity || !driver || !destination) {
      return toast.error("All fields are required");
    }
    if (
      formik.errors.item ||
      formik.errors.destination ||
      formik.errors.driver ||
      formik.errors.quantity
    )
      return toast.error("All fields are required");
    const response = await axios.put(
      `http://localhost:5000/api/donations/${id}`,
      { item, quantity, driver, destination }
    );
    toast.success(response.data.message);
    setShowEdit(false);
  };
  return (
    <>
      <NavbarTop />
      <ToastContainer />
      <Button
        variant="success"
        onClick={handleAddShow}
        style={{ marginTop: "20px", width: "300px", marginLeft: "20px" }}
      >
        Add Donation
      </Button>{" "}
      {/* Add Donation Modal */}
      <Modal show={showAdd} onHide={handleAddClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>Add Donations</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "black" }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Item</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Item"
                value={formik.values.item}
                name="item"
                onChange={handleInput}
                onBlur={formik.handleBlur}
              />
              {formik.touched.item && formik.errors.item ? (
                <small style={{ color: "red" }}>{formik.errors.item}</small>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Quantity"
                value={formik.values.quantity}
                name="quantity"
                onChange={handleInput}
                onBlur={formik.handleBlur}
              />
              {formik.touched.quantity && formik.errors.quantity ? (
                <small style={{ color: "red" }}>{formik.errors.quantity}</small>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Driver</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Driver"
                value={formik.values.driver}
                name="driver"
                onChange={handleInput}
                onBlur={formik.handleBlur}
              />
              {formik.touched.driver && formik.errors.driver ? (
                <small style={{ color: "red" }}>{formik.errors.driver}</small>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Destination </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Destination"
                name="destination"
                value={formik.values.destination}
                onChange={handleInput}
                onBlur={formik.handleBlur}
              />
              {formik.touched.destination && formik.errors.destination ? (
                <small style={{ color: "red" }}>
                  {formik.errors.destination}
                </small>
              ) : (
                ""
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addItem}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Donation Table */}
      <Table striped hover variant="dark" className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Items</th>
            <th>Quantity</th>
            <th>Dispatch date</th>
            <th>Driver</th>
            <th>Admin</th>
            <th>Destination</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {donations.length !== 0 ? (
            donations.map((donation, index) => {
              const {
                item_ID: id,
                item,
                quantity,
                dispatch_date,
                driver,
                admin_incharge: admin,
                destination,
              } = donation;

              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{item}</td>
                  <td>{quantity}</td>
                  <td>{dispatch_date}</td>
                  <td>{driver}</td>
                  <td>{admin}</td>
                  <td>{destination}</td>
                  <td>
                    {/* Edit button */}
                    <Button
                      variant="success"
                      onClick={() => handleEditShow(id)}
                    >
                      Edit
                    </Button>{" "}
                    <Modal show={showEdit} onHide={handleEditClose}>
                      <Modal.Header closeButton>
                        <Modal.Title style={{ color: "black" }}>
                          Edit
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body style={{ color: "black" }}>
                        <Form>
                          <Form.Group className="mb-3">
                            <Form.Label>Item</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Item"
                              value={formik.values.item}
                              name="item"
                              onChange={handleInput}
                              onBlur={formik.handleBlur}
                            />
                            {formik.touched.item && formik.errors.item ? (
                              <small style={{ color: "red" }}>
                                {formik.errors.item}
                              </small>
                            ) : (
                              ""
                            )}
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Quantity"
                              value={formik.values.quantity}
                              name="quantity"
                              onChange={handleInput}
                              onBlur={formik.handleBlur}
                            />
                            {formik.touched.quantity &&
                            formik.errors.quantity ? (
                              <small style={{ color: "red" }}>
                                {formik.errors.quantity}
                              </small>
                            ) : (
                              ""
                            )}
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Driver</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Driver"
                              value={formik.values.driver}
                              name="driver"
                              onChange={handleInput}
                              onBlur={formik.handleBlur}
                            />
                            {formik.touched.driver && formik.errors.driver ? (
                              <small style={{ color: "red" }}>
                                {formik.errors.driver}
                              </small>
                            ) : (
                              ""
                            )}
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Destination </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Destination"
                              name="destination"
                              value={formik.values.destination}
                              onChange={handleInput}
                              onBlur={formik.handleBlur}
                            />
                            {formik.touched.destination &&
                            formik.errors.destination ? (
                              <small style={{ color: "red" }}>
                                {formik.errors.destination}
                              </small>
                            ) : (
                              ""
                            )}
                          </Form.Group>
                          <Button
                            variant="primary"
                            onClick={editItem}
                            style={{ marginTop: "20px", width: "100%" }}
                          >
                            Edit
                          </Button>
                        </Form>
                      </Modal.Body>
                    </Modal>
                    {/* Delete button */}
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteShow(id)}
                    >
                      Delete
                    </Button>
                    <Modal show={showDelete} onHide={handleDeleteClose}>
                      <Modal.Header closeButton>
                        <Modal.Title style={{ color: "red" }}>
                          Dangerous Action
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body style={{ color: "black" }}>
                        <h5>
                          Are you sure you want to delete item {item} with the
                          id {id}?
                        </h5>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleDeleteClose}>
                          Cancel
                        </Button>
                        <Button variant="danger" onClick={removeItem}>
                          Delete
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={8} style={{ textAlign: "center" }}>
                <h5>No Data Available</h5>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default Donations;
