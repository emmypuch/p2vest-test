import * as Yup from "yup";

export const contactValidationSchema = Yup.object({
  fullname: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

export type ContactFormValues = {
  fullname: string;
  email: string;
  message: string;
};
