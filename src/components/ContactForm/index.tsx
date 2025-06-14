"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { toast } from "sonner";
import ContactFormStyles from "./ContactForm.module.scss";
import {
  ContactFormValues,
  contactValidationSchema,
} from "@/data/contactValidation";

const ContactForm = () => {
  const initialValues: ContactFormValues = {
    fullname: "",
    email: "",
    message: "",
  };

  const onSubmit = async (
    values: ContactFormValues,
    { setSubmitting, resetForm }: FormikHelpers<ContactFormValues>
  ) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Message sent successfully!");
      resetForm();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactValidationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className={ContactFormStyles.form}>
          <div className={ContactFormStyles.formGroup}>
            <label htmlFor="fullname" className={ContactFormStyles.label}>
              Full name
            </label>
            <Field
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Firstname Lastname"
              className={`${ContactFormStyles.input} ${
                errors.fullname && touched.fullname
                  ? ContactFormStyles.inputError
                  : ""
              }`}
            />
            <ErrorMessage
              name="fullname"
              component="div"
              className={ContactFormStyles.error}
            />
          </div>

          <div className={ContactFormStyles.formGroup}>
            <label htmlFor="email" className={ContactFormStyles.label}>
              Email address
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="joinadoe@mail.com"
              className={`${ContactFormStyles.input} ${
                errors.email && touched.email
                  ? ContactFormStyles.inputError
                  : ""
              }`}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={ContactFormStyles.error}
            />
          </div>

          <div className={ContactFormStyles.formGroup}>
            <label htmlFor="message" className={ContactFormStyles.label}>
              Message
            </label>
            <Field
              as="textarea"
              id="message"
              name="message"
              placeholder="Type here..."
              className={`${ContactFormStyles.input} ${
                ContactFormStyles.textarea
              } ${
                errors.message && touched.message
                  ? ContactFormStyles.inputError
                  : ""
              }`}
              rows={4}
            />
            <ErrorMessage
              name="message"
              component="div"
              className={ContactFormStyles.error}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={ContactFormStyles.submitButton}
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
