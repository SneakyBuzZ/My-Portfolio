import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { AspectRatio } from "./ui/aspect-ratio";

import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const PhotoCard = () => {
  return (
    <div className="text-stone-300 w-full lg:w-5/12 p-10 md:p-12 md:border-r md:border-r-stone-800">
      <Card className="glassmorphism mx-auto w-11/12 bg-[#131313] border border-stone-800 rounded-b-none">
        <CardHeader></CardHeader>
        <CardContent>
          <AspectRatio ratio={1 / 1} className="bg-transparent">
            <img
              src="/images/kaushik.jpg"
              alt="Photo by Drew Beamer"
              height={20}
              className="rounded-md object-fill w-full h-full"
            />
          </AspectRatio>
        </CardContent>
        <CardFooter>
          <p className="text-stone-400 text-center w-full">
            Connect with me 👇
          </p>
        </CardFooter>
      </Card>
      <Card className="glassmorphism mx-auto w-11/12 bg-neutral-800 flex justify-evenly border border-stone-800 rounded-t-none">
        <a
          href="https://www.linkedin.com/in/kaushik-katikala-81a888259/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="m-3" color="#B0B0B0" />
        </a>
        <a
          href="https://x.com/Sneaky_D_Buzz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="m-3" color="#B0B0B0" />
        </a>
        <a
          href="https://github.com/SneakyBuzZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="m-3" color="#B0B0B0" />
        </a>
        <a
          href="https://www.instagram.com/_kaushik_1706/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="m-3" color="#B0B0B0" />
        </a>
      </Card>
    </div>
  );
};

export default PhotoCard;
