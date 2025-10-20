"use client";
import { domAnimation, LazyMotion, m, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { IoChatbubblesOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import Toast, { notifyError, notifySuccess, notifyWarning } from "./Toast";
import { LuSendHorizontal } from "react-icons/lu";

const Contact = () => {
  const className =
    "mt-2 w-full rounded-xl focus:bg-transparent outline-none focus:outline-cyan-500 text-white py-2 px-4 text-[0.9rem] bg-white/20";
  const variants = {
    initial: {
      opacity: 0,
      y: "30px",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
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
        .then(() => {
          setLoading(false);
          notifySuccess("Sent successfully.");
          setFormData({ email: "", subject: "", message: "" });
        })
        .catch(() => {
          setLoading(false);
          notifyError("Message could not be sent.");
        });
    }
  };

  return (
    <>
      <Toast />
      <LazyMotion features={domAnimation} strict>
        <m.section
          ref={ref}
          variants={variants}
          animate={inView ? "animate" : "initial"}
          initial="initial"
          className="min-h-[95vh] gap-y-8 my-12 flex flex-col items-center justify-center"
          id="contact"
        >
          <div className="w-full lg:w-1/2">
            <h1 className="text-slate-300 text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] font-[700] text-center flex items-center gap-x-2 justify-center mb-8">
              <span>Let's</span> <span className="gradient">Connect</span>
              <IoChatbubblesOutline className="text-white" />
            </h1>
            <p className="text-slate-200 font-[500]">
              Get in touch via the form or email below — my inbox is always
              open.
            </p>
          </div>
          <m.form
            variants={variants}
            ref={formRef}
            className="w-full md:w-2/3 lg:w-1/2 mx-auto space-y-3"
            onSubmit={(e) => handleSubmit(e)}
          >
            <m.div variants={variants}>
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
            </m.div>
            <m.div variants={variants}>
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
            </m.div>
            <m.div variants={variants}>
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
            </m.div>
            <m.button
              type="submit"
              data-testid="send-btn"
              disabled={loading}
              variants={variants}
              className="bg-gradient-to-r from-cyan-600 to-blue-800 w-[70%] mx-auto text-white py-2 rounded-md disabled:bg-none disabled:bg-gray-600 disabled:cursor-progress flex justify-center"
            >
              {loading ? (
                "Sending..."
              ) : (
                <p className="flex items-center gap-x-1 mx-auto">
                  Send Message <LuSendHorizontal />
                </p>
              )}
            </m.button>
            <p className="text-center text-slate-200">
              My email:{" "}
              <a
                className="underline underline-offset-2"
                href="mailto:destinyolowokere@gmail.com"
              >
                destinyolowokere@gmail.com
              </a>
            </p>
          </m.form>
        </m.section>
      </LazyMotion>
    </>
  );
};

export default Contact;
