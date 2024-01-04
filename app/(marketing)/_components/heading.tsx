"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
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
      {isLoading && (
        <div className="2-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Documentos
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Use o Jotion gratuitamente
            <ArrowRight className="h-4 w-4 ml-2"/>
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
