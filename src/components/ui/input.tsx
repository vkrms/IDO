// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
'use client';
import { cn } from '@/lib/utils/cn';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, style, ...props }, ref) => {
  const radius = 100; // change this to increase the radius of the hover effect
  const [visible, setVisible] = React.useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <motion.div
      style={{
        background: useMotionTemplate`
                        radial-gradient(
                        ${visible ? `${radius}px` : '0px'} circle at ${mouseX}px ${mouseY}px,
                        hotpink,
                        transparent 80%
                        )
                    `,
        flexGrow: 1,

        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className='p-[2px] rounded-lg transition duration-300 group/input'
    >
      <input
        type={type}
        className={cn(
          `
                            flex h-12 w-full border-none bg-transparent  text-black  shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
                            file:text-sm file:font-medium placeholder:text-neutral-400
                            focus-visible:outline-none focus-visible:ring-[2px] 
                             focus-visible:ring-pink-400 focus-visible:ring-opacity-50
                            disabled:cursor-not-allowed disabled:opacity-50           
                            group-hover/input:shadow-none transition duration-400
                            input
                        `,
          className,
        )}
        ref={ref}
        {...props}
      />
    </motion.div>
  );
});
Input.displayName = 'Input';

export { Input };
