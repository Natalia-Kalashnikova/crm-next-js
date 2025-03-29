"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Button from '@/app/components/button';

export interface AddPromotionButtonProps {
    companyId: string;
}

export default function AddPromotionButton({
    companyId,
}: AddPromotionButtonProps) {
    const router = useRouter();
    return (
        <Button
            onClick={() => router.push(`/companies/${companyId}/new-promotion`, { scroll: false })}
        >
            Add promotion
        </Button>
    );
}