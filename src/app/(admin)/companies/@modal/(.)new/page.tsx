"use client";

import CompanyForm from "@/src/app/components/company-form";
import Modal from "@/src/app/components/modal";
import { useRouter } from "next/router";
import React from "react";

export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();
  return (
    <Modal show={true} onClose={() => router.back()}>
      <CompanyForm onSubmit={console.log} />
    </Modal>
  );
}
