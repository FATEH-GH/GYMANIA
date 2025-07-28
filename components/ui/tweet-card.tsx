import { VerifiedIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface TweetCardProps {
  authorName: string;
  authorImage: string;
  content: string;
  isVerified?: boolean;
  timestamp: string;
}

export default function TweetCard({
  authorName = "Dorian",
  authorImage = "/images/Chest.png",
  content = "All components from KokonutUI can now be open in @v0 🎉1. Click on 'Open in V0' 2. Customize with prompts 3. Deploy to your app",
  isVerified = true,
  timestamp = "Jan 18, 2025",
}: TweetCardProps) {
  return (
    <div
      className={cn(
        "h-[350px] w-full min-w-[200px] md:min-w-[300px] max-w-xl p-1.5 rounded-2xl relative isolate overflow-hidden",
        "bg-white/5 dark:bg-black/90",
        "bg-linear-to-br from-black/5 to-black/[0.02] dark:from-white/5 dark:to-white/[0.02]",
        "backdrop-blur-xl backdrop-saturate-[180%]",
        "border border-black/10 dark:border-white/10",
        "shadow-[0_8px_16px_rgb(0_0_0_/_0.15)] dark:shadow-[0_8px_16px_rgb(0_0_0_/_0.25)]",
        "will-change-transform translate-z-0 font-roboto"
      )}
    >
      <div
        className={cn(
          "w-full p-5 rounded-xl relative h-[350px]",
          "bg-linear-to-br from-black/[0.05] to-transparent dark:from-white/[0.08] dark:to-transparent",
          "backdrop-blur-md backdrop-saturate-150",
          "border border-black/[0.05] dark:border-white/[0.08]",
          "text-black/90 dark:text-white",
          "shadow-xs",
          "will-change-transform translate-z-0",
          "before:absolute before:inset-0 before:bg-linear-to-br before:from-black/[0.02] before:to-black/[0.01] dark:before:from-white/[0.03] dark:before:to-white/[0.01] before:opacity-0 before:transition-opacity before:pointer-events-none",
          "hover:before:opacity-100"
        )}
      >
        <div className="flex gap-3  items-center">
          <div className="shrink-0">
            <div className="h-20 w-20 rounded-full overflow-hidden">
              <Image
                src={authorImage}
                alt={authorName}
                className="h-full w-full object-cover object-center"
                width={200}
                height={200}
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col  ">
              <div className="flex items-center gap-1">
                <span className="font-semibold text-xl text-black dark:text-white/90 hover:underline cursor-pointer">
                  {authorName}
                </span>
                {isVerified && (
                  <VerifiedIcon className="h-4 w-4 text-blue-400" />
                )}
              </div>
              <span className="text-black dark:text-white/50 text-sm mt-2 block relative bottom-0 left-0">
                {timestamp}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <p className="text-black dark:text-white/90 text-[20px]">{content}</p>
        </div>
      </div>
    </div>
  );
}
