import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

class PageTransition extends React.Component {
   
  render() {
    const { children }: { children: ReactNode } = this.props;

    return (
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={children.key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    );
  }
}

export default PageTransition;
