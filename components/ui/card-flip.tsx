"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, Repeat2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface CardFlipProps {
  image: string;
  title: string;
  duration: string;
  description?: string;
  target: string[];
}

export default function CardFlip({
  image,
  title,
  duration,
  description = "Targeted Muscles.",
  target,
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full max-w-[280px] h-[320px] group [perspective:2000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative w-full h-full",
          "[transform-style:preserve-3d]",
          "transition-all duration-700",
          isFlipped
            ? "[transform:rotateY(180deg)]"
            : "[transform:rotateY(0deg)]"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 w-full h-full",
            "[backface-visibility:hidden] [transform:rotateY(0deg)]",
            "overflow-hidden rounded-2xl",
            "bg-zinc-50 dark:bg-zinc-900",
            "border-2 border-customColor dark:border-customColor/50",
            "shadow-xs dark:shadow-lg",
            "transition-all duration-700",
            "group-hover:shadow-lg dark:group-hover:shadow-xl",
            isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="relative h-full overflow-hidden bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-black">
            <div className="absolute inset-0 flex items-start justify-center pt-24">
              <Image
                src={image}
                alt="image"
                height={150}
                width={150}
                className="object-contain object-center"
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="space-y-1.5">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white leading-snug tracking-tighter transition-all duration-500 ease-out-expo group-hover:translate-y-[-4px]">
                  {title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-200 line-clamp-2 tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-4px] delay-[50ms]">
                  {duration}
                </p>
              </div>
              <div className="relative group/icon">
                <div
                  className={cn(
                    "absolute inset-[-8px] rounded-lg transition-opacity duration-300",
                    "bg-gradient-to-br from-customColor/20 via-customColor/10 to-transparent"
                  )}
                />
                <Repeat2 className="relative z-10 w-4 h-4 text-customColor transition-transform duration-300 group-hover/icon:scale-110 group-hover/icon:-rotate-12" />
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={cn(
            "absolute inset-0 w-full h-full",
            "[backface-visibility:hidden] [transform:rotateY(180deg)]",
            "p-6 rounded-2xl",
            "bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-black",
            "border border-zinc-200 dark:border-zinc-800",
            "shadow-xs dark:shadow-lg",
            "flex flex-col",
            "transition-all duration-700",
            "group-hover:shadow-lg dark:group-hover:shadow-xl",
            !isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white leading-snug tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-2px]">
                {title}
              </h3>
              <p className="text-md  text-zinc-600 dark:text-zinc-400 tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-2px] line-clamp-2">
                {description}
              </p>
            </div>

            <div className="space-y-2">
              {target.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 transition-all duration-500"
                  style={{
                    transform: isFlipped
                      ? "translateX(0)"
                      : "translateX(-10px)",
                    opacity: isFlipped ? 1 : 0,
                    transitionDelay: `${index * 100 + 200}ms`,
                  }}
                >
                  <ArrowRight className="w-3 h-3 text-customColor" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800">
            <Link
              href="#exercises"
              className={cn(
                "group/start relative",
                "flex items-center justify-between",
                "p-3 -m-3 rounded-xl",
                "transition-all duration-300",
                "bg-gradient-to-r from-zinc-100 via-zinc-100 to-zinc-100",
                "dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-800",
                "hover:from-customColor/10 hover:from-0% hover:via-customColor/5 hover:via-100% hover:to-transparent hover:to-100%",
                "dark:hover:from-customColor/20 dark:hover:from-0% dark:hover:via-customColor/10 dark:hover:via-100% dark:hover:to-transparent dark:hover:to-100%",
                "hover:scale-[1.02] hover:cursor-pointer"
              )}
            >
              <span className="text-sm font-medium text-zinc-900 dark:text-white transition-colors duration-300 group-hover/start:text-customColor dark:group-hover/start:text-customColor">
                Start today
              </span>
              <div className="relative group/icon">
                <div
                  className={cn(
                    "absolute inset-[-6px] rounded-lg transition-all duration-300",
                    "bg-gradient-to-br from-customColor/20 via-customColor/10 to-transparent",
                    "opacity-0 group-hover/start:opacity-100 scale-90 group-hover/start:scale-100"
                  )}
                />
                <ArrowRight className="relative z-10 w-4 h-4 text-customColor transition-all duration-300 group-hover/start:translate-x-0.5 group-hover/start:scale-110" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scale {
          0% {
            transform: scale(2);
            opacity: 0;
            box-shadow: 0px 0px 50px rgba(255, 165, 0, 0.5);
          }
          50% {
            transform: translate(0px, -5px) scale(1);
            opacity: 1;
            box-shadow: 0px 8px 20px rgba(255, 165, 0, 0.5);
          }
          100% {
            transform: translate(0px, 5px) scale(0.1);
            opacity: 0;
            box-shadow: 0px 10px 20px rgba(255, 165, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}
