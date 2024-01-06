"use client"

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { api } from "@/convex/_generated/api"
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { toast } from "sonner"

const Documents = () => {
    const { user } = useUser()
    const create = useMutation(api.documents.create)

    const onCreate = () => {
        const promise = create({ title: "Sem Título" })
        toast.promise(promise, {
            loading: "Criando uma nova página...",
            success: "Nova página criada com sucesso!",
            error: "Falha ao criar nova página"
        })
    }

    return ( 
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image src="/empty.png" height="300" width="300" alt="Empty" className="dark:hidden"/>
            <Image src="/empty-dark.png" height="300" width="300" alt="Empty" className="hidden dark:block"/>
            <h2 className="text-lg font-medium">Bem vindo ao Jotion do {user?.firstName}</h2>
            <Button onClick={onCreate}>
                <PlusCircle className="h-4 w-4 mr-2" />
                Criar um documento
            </Button>
        </div>
     );
}
 
export default Documents;