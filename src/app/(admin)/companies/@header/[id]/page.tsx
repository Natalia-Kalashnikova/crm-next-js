import Header from "@/src/app/components/header";
import React from "react";

export interface PageProps {
    params: {id: string};
}
 
export default function Page({ params }: PageProps) {
    return <Header>{`Company(${params.id})`}</Header>;
}