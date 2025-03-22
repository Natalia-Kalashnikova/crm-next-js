'use client';

import React, { use } from "react";

export interface ErrorComponentProps{
    error: Error;  
}

export default function Error({ }: ErrorComponentProps) {
    return (
        <div>Unexpected error inside slot sales</div>
    );
}