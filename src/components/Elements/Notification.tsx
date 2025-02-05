"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NotificationProps {
  message: string;
  onDismiss: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onDismiss }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const isSuccess = message.includes("successfully");

  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
      onDismiss();
    }, 3000);

    return () => { clearTimeout(timer); }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsSmallScreen(mediaQuery.matches);

    const handleResize = (e: MediaQueryListEvent) => {
      setIsSmallScreen(e.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const notificationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  const smallScreenNotificationVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed bottom-10 right-10 md:top-7 max-w-96 h-fit md:right-3 transform -translate-x-1/2 -translate-y-1/2 px-6 py-4 border border-primary rounded-md shadow-lg uppercase font-sans 
            ${isSuccess ? "bg-footer text-primary" : "bg-footer text-red-600"}`}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={isSmallScreen ? smallScreenNotificationVariants : notificationVariants}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <p className="text-xs font-medium tracking-wide">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
