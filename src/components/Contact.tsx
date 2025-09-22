"use client";
import { motion, useInView } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { IoChatbubblesOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import Toast, { notifyError, notifySuccess, notifyWarning } from "./Toast";
import { LuSendHorizonal } from "react-icons/lu";

const Contact = () => {
  const className =
    "mt-2 w-full rounded-md focus:bg-transparent outline-none focus:outline-blue-600 text-white py-2 px-4 text-[0.9rem] bg-gray-600";
  const variants = {
    initial: {
      opacity: 0,
      x: "-80px",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };
  const ref = useRef(null);
  const formRef = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    if (
      formData.email.trim().length < 1 ||
      formData.message.trim().length < 1 ||
      formData.subject.trim().length < 1
    ) {
      setLoading(false);
      notifyWarning("Please fill in the fields.");
    }
    if (
      formData.email.trim().length > 1 &&
      formData.message.trim().length > 1 &&
      formData.subject.trim().length > 1 &&
      formRef.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          formRef?.current,
          {
            publicKey: process.env.NEXT_PUBLIC_API_KEY,
          }
        )
        .then(
          () => {
            setLoading(false);
            notifySuccess("Sent successfully.");
            setFormData({ email: "", subject: "", message: "" });
          },
          (error) => {
            setLoading(false);
            error && notifyError("Message could not be sent.");
          }
        );
    }
  };

  return (
    <>
      <Toast />
      <motion.div
        ref={ref}
        variants={variants}
        animate={inView ? "animate" : "initial"}
        initial="initial"
        className="min-h-[95vh] gap-y-[4rem] lg:gap-y-0 lg:gap-x-8 flex flex-col lg:flex-row items-center justify-center"
        id="contact"
      >
        <div className="w-full lg:w-1/2">
          <h1 className="flex items-center gap-x-2 font-[600] text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] ">
            <span className="text-slate-400">Let's</span>
            <span className="text-blue-600">Connect</span>{" "}
            <IoChatbubblesOutline className="text-white" />
          </h1>
          <p className="text-slate-400 font-[500]">
            You can contact me by filling the form or send a direct message via
            the email below. <br />
            My inbox is always open and I'll get back to you.
          </p>
        </div>
        <motion.form
          variants={variants}
          ref={formRef}
          className="w-full space-y-3"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div>
            <label htmlFor="email" className="text-white text-[0.8rem]">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={className}
              onChange={(e) => {
                handleChange(e);
              }}
              value={formData.email}
            />
          </div>
          <motion.div variants={variants}>
            <label htmlFor="subject" className="text-white text-[0.8rem]">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className={className}
              onChange={(e) => {
                handleChange(e);
              }}
              value={formData.subject}
            />
          </motion.div>
          <motion.div variants={variants}>
            <label htmlFor="message" className="text-white text-[0.8rem]">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className={className}
              onChange={(e) => {
                handleChange(e);
              }}
              value={formData.message}
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            disabled={loading}
            variants={variants}
            className="bg-blue-600 text-[0.9rem] w-[70%] mx-auto text-white py-2 rounded-md disabled:bg-gray-600 disabled:cursor-progress flex justify-center"
          >
            {loading ? (
              <span>Sending...</span>
            ) : (
              <p className="flex items-center gap-x-1 mx-auto">
                Send Message <LuSendHorizonal />
              </p>
            )}
          </motion.button>
          <p className="text-center text-slate-400">
            My email: <a className="underline underline-offset-2" href="mailto:destinyolowokere@gmail.com">destinyolowokere@gmail.com</a>
          </p>
        </motion.form>
      </motion.div>
    </>
  );
};

export default Contact;
