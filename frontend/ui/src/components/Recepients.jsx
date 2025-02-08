import { useState, useEffect } from "react";
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
import recipientSchema from "../yup/recipientSchema.js";

// FIX FORM TO EDIT RECIPIENTS
const Recepients = () => {
  const [recipients, setRecipients] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  // const [input, setInput] = useState({
  //   id: "",
  //   fname: "",
  //   lname: "",
  //   quantity: "",
  //   familyType: "",
  //   item_received: "",
  //   region: "",
  //   issued_by: "",
  // });

  const formik = useFormik({
    initialValues: {
      id: "",
      fname: "",
      lname: "",
      quantity: "",
      familyType: "",
      item_received: "",
      region: "",
      issued_by: "",
    },
    validationSchema: recipientSchema,
  });

  //Add Recipient close modal
  const handleAddClose = () => setShowAdd(false);

  //Add Recipient open modal
  const handleAddShow = () => setShowAdd(true);

  //Edit Recipient close modal
  const handleEditClose = () => setShowEdit(false);

  //Edit Recipient open modal
  const handleEditShow = async (id) => {
    const response = await axios.get(
      `http://localhost:5000/api/recepients/${id}`
    );
    const {
      recepient_ID,
      fname,
      lname,
      quantity,
      familyType,
      item_received,
      region,
    } = response.data.data;
    // setInput({
    //   id: recepient_ID,
    //   fname,
    //   lname,
    //   quantity,
    //   familyType,
    //   item_received,
    //   region,
    // });
    formik.setValues({
      id: recepient_ID,
      fname,
      lname,
      quantity,
      familyType,
      item_received,
      region,
    });
    setShowEdit(true);
  };

  //Delete Recipient close modal
  const handleDeleteClose = () => setShowDelete(false);

  //Delete Recipient open modal
  const handleDeleteShow = async (id) => {
    const response = await axios.get(
      `http://localhost:5000/api/recepients/${id}`
    );
    const { recepient_ID } = response.data.data;
    // setInput({ ...input, id: recepient_ID });
    formik.setValues({ ...formik.values, id: recepient_ID });
    setShowDelete(true);
  };

  //Handle input change
  const handleInput = (e) => {
    // setInput({ ...input, [e.target.name]: e.target.value });
    formik.setValues({ ...formik.values, [e.target.name]: e.target.value });
  };

  //Fetching recipients data
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("http://localhost:5000/api/recepients");

      setRecipients(response.data.data);
    };
    fetchData();
  }, [recipients]);

  //Add Recipient logic
  const addItem = async () => {
    // const {
    //   fname,
    //   lname,
    //   quantity,
    //   familyType,
    //   item_received,
    //   region,
    //   issued_by,
    // } = input;
    const {
      fname,
      lname,
      quantity,
      familyType,
      item_received,
      region,
      issued_by,
    } = formik.values;
    if (
      !fname ||
      !lname ||
      !quantity ||
      !familyType ||
      !item_received ||
      !region ||
      !issued_by
    ) {
      return toast.error("Please fill all fields");
    }
    if (
      formik.errors.fname ||
      formik.errors.lname ||
      formik.errors.quantity ||
      formik.errors.familyType ||
      formik.errors.item_received ||
      formik.errors.region ||
      formik.errors.issued_by
    ) {
      return toast.error("Please fill all fields");
    }
    const response = await axios.post("http://localhost:5000/api/recepients", {
      fname,
      lname,
      quantity,
      familyType,
      item_received,
      region,
      issued_by,
    });
    toast.success(response.data.message);
    setShowAdd(false);
  };

  //Delete Recipient logic
  const removeItem = async () => {
    // const { id } = input;
    const { id } = formik.values;
    const response = await axios.delete(
      `http://localhost:5000/api/recepients/${id}`
    );
    setShowDelete(false);
    toast.success(response.data.message);
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios("http://localhost:5000/api/recepients");
        setRecipients(response.data.data);
      };
      fetchData();
    }, [recipients]);
  };

  //Edit Recipient logic
  const editItem = async () => {
    // const { id, fname, lname, quantity, familyType, item_received, region } =
    //   input;
    const { id, fname, lname, quantity, familyType, item_received, region } =
      formik.values;
    if (
      !fname ||
      !lname ||
      !quantity ||
      !familyType ||
      !item_received ||
      !region
    ) {
      return toast.error("Please fill all fields");
    }
    if (
      formik.errors.fname ||
      formik.errors.lname ||
      formik.errors.quantity ||
      formik.errors.familyType ||
      formik.errors.item_received ||
      formik.errors.region
    ) {
      return toast.error("Please fill all fields");
    }
    const response = await axios.put(
      `http://localhost:5000/api/recepients/${id}`,
      { fname, lname, quantity, familyType, item_received, region }
    );
    toast.success(response.data.message);
    setShowEdit(false);
  };
  return (
    <>
      <NavbarTop />
      <ToastContainer />
      {/* Add recipient button */}
      <Button
        variant="success"
        onClick={handleAddShow}
        style={{ marginTop: "20px", width: "300px", marginLeft: "20px" }}
      >
        Add Recipient
      </Button>{" "}
      <Modal show={showAdd} onHide={handleAddClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>Add Recipient</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "black" }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                value={formik.values.fname}
                name="fname"
                onChange={handleInput}
                onBlur={formik.handleBlur}
              />
              {formik.touched.fname && formik.errors.fname ? (
                <div style={{ color: "red" }}>{formik.errors.fname}</div>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                value={formik.values.lname}
                name="lname"
                onChange={handleInput}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lname && formik.errors.lname ? (
                <div style={{ color: "red" }}>{formik.errors.lname}</div>
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
                <div style={{ color: "red" }}>{formik.errors.quantity}</div>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Family Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Family Type"
                name="familyType"
                value={formik.values.familyType}
                onChange={handleInput}
                onBlur={formik.handleBlur}
              />
              {formik.touched.familyType && formik.errors.familyType ? (
                <div style={{ color: "red" }}>{formik.errors.familyType}</div>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Item Received</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Item Received"
                value={formik.values.item_received}
                name="item_received"
                onChange={handleInput}
                onBlur={formik.handleBlur}
              />
              {formik.touched.item_received && formik.errors.item_received ? (
                <div style={{ color: "red" }}>
                  {formik.errors.item_received}
                </div>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Region</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Region"
                value={formik.values.region}
                name="region"
                onChange={handleInput}
                onBlur={formik.handleBlur}
              />
              {formik.touched.fname && formik.errors.fname ? (
                <div style={{ color: "red" }}>{formik.errors.fname}</div>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Issued By</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Issued by"
                value={formik.values.issued_by}
                name="issued_by"
                onChange={handleInput}
                onBlur={formik.handleBlur}
              />
              {formik.touched.fname && formik.errors.fname ? (
                <div style={{ color: "red" }}>{formik.errors.fname}</div>
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
      <Table striped hover variant="dark" className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Quantity </th>
            <th>Family Type</th>
            <th>Item received</th>
            <th>Date</th>
            <th>Region</th>
            <th>Issued By</th>
            <th>Admin</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {recipients.map((recipient, index) => {
            const {
              recepient_ID: id,
              fname,
              lname,
              quantity,
              familyType,
              item_received,
              date,
              region,
              issued_by,
              admin_incharge: admin,
            } = recipient;
            return (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>{fname}</td>
                <td>{lname}</td>
                <td>{quantity}</td>
                <td>{familyType}</td>
                <td>{item_received}</td>
                <td>{date}</td>
                <td>{region}</td>
                <td>{issued_by}</td>
                <td>{admin}</td>
                <td>
                  {/* Edit button */}
                  <Button variant="success" onClick={() => handleEditShow(id)}>
                    Edit
                  </Button>{" "}
                  <Modal show={showEdit} onHide={handleEditClose}>
                    <Modal.Header closeButton>
                      <Modal.Title style={{ color: "black" }}>Edit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ color: "black" }}>
                      <Form>
                        <Form.Group className="mb-3">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter First Name"
                            value={formik.values.fname}
                            name="fname"
                            onChange={handleInput}
                            onBlur={formik.handleBlur}
                          />
                          {formik.touched.fname && formik.errors.fname ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.fname}
                            </div>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Last Name"
                            value={formik.values.lname}
                            name="lname"
                            onChange={handleInput}
                            onBlur={formik.handleBlur}
                          />
                          {formik.touched.lname && formik.errors.lname ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.lname}
                            </div>
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
                            <div style={{ color: "red" }}>
                              {formik.errors.quantity}
                            </div>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Family Type</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Family Type"
                            name="familyType"
                            value={formik.values.familyType}
                            onChange={handleInput}
                            onBlur={formik.handleBlur}
                          />
                          {formik.touched.familyType &&
                          formik.errors.familyType ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.familyType}
                            </div>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Item Received</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Item Received"
                            value={formik.values.item_received}
                            name="item_received"
                            onChange={handleInput}
                            onBlur={formik.handleBlur}
                          />
                          {formik.touched.item_received &&
                          formik.errors.item_received ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.item_received}
                            </div>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Region</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Region"
                            value={formik.values.region}
                            name="region"
                            onChange={handleInput}
                            onBlur={formik.handleBlur}
                          />
                          {formik.touched.fname && formik.errors.fname ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.fname}
                            </div>
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
                  <Button variant="danger" onClick={() => handleDeleteShow(id)}>
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
                        Are you sure you want to delete {fname} {lname}'s
                        details?
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
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Recepients;
