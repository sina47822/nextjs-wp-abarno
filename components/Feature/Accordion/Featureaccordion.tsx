'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FeatureAccordionProps {
  id:string;
  title: string;
  content: string;
  button: string;
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const Featureaccordion = ({
  id,
  content,
  title,
  button,
  index,
  activeIndex,
  setActiveIndex,
}: FeatureAccordionProps) => {
  const isActive = index === activeIndex;

  return (

    <motion.div id={id} layout className="border-b py-4 scroll-mt-40">
      <div
        onClick={() => setActiveIndex(isActive ? -1 : index)}
        className={`cursor-pointer font-semibold text-xl transition-colors duration-300 ${
          isActive ? 'text-black' : 'text-gray-500'
        }`}
      >
        {title}
      </div>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            layout
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-2"
          >
            <p className="text-gray-700 text-justify">{content}</p>
            <Button className="mt-4 bg-emerald-600 text-white hover:bg-emerald-700 font-medium px-6 py-2 rounded-full cursor-pointer">
              {button}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Featureaccordion;