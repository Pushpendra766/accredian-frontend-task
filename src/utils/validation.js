import * as yup from "yup";
const userSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

async function validateForm(dataObject) {
  const isValid = await userSchema.isValid(dataObject);
  console.log(dataObject);
  return isValid;
}

export default validateForm;
