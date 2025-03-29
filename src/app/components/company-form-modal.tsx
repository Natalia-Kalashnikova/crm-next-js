"use client";

import React from "react";
import CompanyForm from "./company-form";
import Modal, { ModalProps } from "./modal";

export default function CompanyFormModal({
  onClose,
  ...rest
}: ModalProps) {
  return (
    <Modal {...rest} onClose={onClose}>
      <CompanyForm onSubmit={onClose} />
    </Modal>
  );
}
