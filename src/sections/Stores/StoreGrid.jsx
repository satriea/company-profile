import { motion } from "framer-motion";

import StoreCard from "./StoreCard";

export default function StoreGrid({ stores = [] }) {
  if (!stores.length) {
    return null;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {stores.map((store, index) => (
        <motion.div
          key={store.id}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
          }}
        >
          <StoreCard store={store} />
        </motion.div>
      ))}
    </div>
  );
} 
