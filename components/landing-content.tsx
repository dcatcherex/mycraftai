"use client";

import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { MessageSquare, ArrowRight, Music, ImageIcon, VideoIcon, Code,User2Icon,ScrollTextIcon, NewspaperIcon } from 'lucide-react'
import Image from "next/image";
import { cn } from "@/lib/utils";


const services = [
  {
    service: "Chatbot",
    icon: MessageSquare,
    color: 'text-sky-500',
    bgColor: 'bg-white',
    title: "Software Engineer",
    description: "A chatbot solution that revolutionizes customer interaction and improves user experience.",
  },
  {
    service: "Customer Support",
    icon: User2Icon,
    color: 'text-yellow-500',
    bgColor: 'bg-white',
    title: "Software Engineer",
    description: "Customer support feature designed to address client concerns quickly and efficiently.",
  },
  {
    service: "Prompt Template",
    icon: ScrollTextIcon,
    color: 'text-green-500',
    bgColor: 'bg-white',
    title: "Software Engineer",
    description: "Prompt templates that streamline communication and enhance AI interaction.",
  },
  {
    service: "Content Generator",
    icon: NewspaperIcon,
    color: 'text-violet-500',
    bgColor: 'bg-white',
    title: "Software Engineer",
    description: "Content generator service for creating high-quality, unique content swiftly",
  },

];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <div className="flex justify-center py-4">
        <Image width="100" height="100" alt="mascot" src="/rabbit_rest.svg" />
      </div>
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Our Craft Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white hover:bg-sky-700"
          >
            <div className={cn('mt-6 ml-6  p-2 w-fit rounded-full', )}>
                <item.icon className={cn('w-8 h-8 ', item.color)} />
              </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.service}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0 text-zinc-400 font-light">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
