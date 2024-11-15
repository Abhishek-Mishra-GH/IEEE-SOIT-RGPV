import { cn } from "../../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    (<div
      className={cn("grid grid-cols-1 md:grid-cols-2 md:py-10 place-items-center md:p-6", className)}>
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full max-w-sm md:max-w-md"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#7796ff] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }} />
            )}
          </AnimatePresence>
          <Card img={item.img} tba={item.tba}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>)
  );
};

export const Card = ({
  className,
  img,
  tba,
  children
}) => {
  return (
    (<div
      className={cn(
        "rounded-2xl h-full w-full max-w-sm md:max-w-md p-4 overflow-hidden bg-white shadow-sm border-2 group-hover:border-slate-700 relative z-40",
        className
      )}>
    
        <CardImg img={img} />

      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>

      <div className="flex font-inter w-full justify-evenly">
        <button className="flex-[0.6] py-2 px-6 border border-blue-600 rounded-md text-blue-600 text-lg">{tba ? "Stay Tuned!" : "Explore"}</button>
        <button className="flex-[0.3] py-2 px-6 border rounded-md  text-black bg-gray-300 text-lg">closed!</button>
      </div>
    </div>)
  );
};

export const CardImg = ({img}) => {
    return (
        (<div className="relative w-full">
        <img
            src={img}
            className="object-cover w-full rounded-2xl"
            alt="card-img"
        />
        </div>)
    );
}

export const CardTitle = ({
  className,
  children
}) => {
  return (
    (<h4 className={cn("text-black text-xl font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>)
  );
};

export const CardDescription = ({
  className,
  children
}) => {
  return (
    (<p
      className={cn("mt-4 text-zinc-600 tracking-wide leading-relaxed text-base", className)}>
      {children}
    </p>)
  );
};
