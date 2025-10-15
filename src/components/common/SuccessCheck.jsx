"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SuccessCheck({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center"
          >
            {/* SVG animation from Iconify */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
            >
              <mask id="SVGw4YDQcmY">
                <g
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path
                    strokeDasharray="64"
                    strokeDashoffset="64"
                    d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="1.14s"
                      values="64;0"
                    />
                  </path>
                  <path
                    strokeDasharray="24"
                    strokeDashoffset="24"
                    d="M3 6.5l9 5.5l9 -5.5"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="1.14s"
                      dur="0.38s"
                      values="24;0"
                    />
                  </path>
                  <path
                    fill="#fff"
                    fillOpacity="0"
                    stroke="none"
                    d="M12 11l-8 -5h16l-8 5Z"
                  >
                    <animate
                      fill="freeze"
                      attributeName="fill-opacity"
                      begin="1.9s"
                      dur="0.95s"
                      values="0;1"
                    />
                  </path>
                  <path
                    fill="#000"
                    fillOpacity="0"
                    stroke="none"
                    d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"
                  >
                    <set
                      fill="freeze"
                      attributeName="fill-opacity"
                      begin="1.52s"
                      to="1"
                    />
                  </path>
                  <path
                    strokeDasharray="10"
                    strokeDashoffset="10"
                    d="M16 19l1.75 1.75l3.75 -3.75"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="1.52s"
                      dur="0.38s"
                      values="10;0"
                    />
                  </path>
                </g>
              </mask>
              <rect width="24" height="24" fill="green" mask="url(#SVGw4YDQcmY)" />
            </svg>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="text-green-700 font-semibold mt-4 text-lg"
            >
              Booking Successful!
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
