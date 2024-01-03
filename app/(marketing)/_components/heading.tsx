"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-5xl space-y-4">
      <h1 className="text-5xl md:text-6xl font-bold">
        Escreva, planeje & compartilhe. <br />
        Com a IA ao seu lado.
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        O Notion é o espaço conectado onde você trabalha melhor e com mais
        rapidez.
      </h3>
      <Button>
        Use o Notion gratuitamente
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
