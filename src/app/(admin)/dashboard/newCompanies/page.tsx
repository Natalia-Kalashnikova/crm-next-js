import Header from "@/app/components/header";
import React from "react";

export interface PageProps { }

export default function Page({}: PageProps) {
    return (
        <>
        <Header>Dashboard/New Companies</Header>
        <div>Some additional info</div>
        </>
    );
}