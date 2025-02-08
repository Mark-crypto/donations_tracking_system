import * as Yup from "yup";

const recipientSchema = Yup.object({
  fname: Yup.string().required("First name is required"),
  lname: Yup.string().required("Last name is required"),
  quantity: Yup.string().required("Quantity is required"),
  familyType: Yup.string().required("Family Type is required"),
  address: Yup.string().required("Address is required"),
  region: Yup.string().required("Region is required"),
  item_received: Yup.string().required("Item Received is required"),
  issued_by: Yup.string().required("Issued By is required"),
});

export default recipientSchema;
