"use client";
import React from "react";
import { motion } from "framer-motion";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className} style={{ overflow: "hidden" }}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{ display: "flex", flexDirection: "column", gap: "24px", paddingBottom: "24px" }}
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={i}
                style={{
                  padding: "28px",
                  borderRadius: "20px",
                  border: "1px solid #e8eaf0",
                  boxShadow: "0 4px 20px rgba(59, 91, 219, 0.06)",
                  maxWidth: "300px",
                  width: "100%",
                  background: "#ffffff",
                }}
              >
                <p style={{ fontSize: "15px", color: "#3f475e", lineHeight: 1.65 }}>{text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px" }}>
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }}
                  />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "14px", color: "#0f1117", lineHeight: 1.3 }}>{name}</div>
                    <div style={{ fontSize: "13px", color: "#9ca3af", lineHeight: 1.3 }}>{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  );
};
