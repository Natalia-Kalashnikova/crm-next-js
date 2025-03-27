import React from 'react';
import Toolbar from '@/app/components/toolbar';
import AddPromotionButton from '@/app/components/add-promotion-button';
import SearchInput from '@/app/components/search-input';

export interface PageProps {
    params: { id: string };
}

export default function Page({params}: PageProps) {
    return (
        <Toolbar action={<AddPromotionButton companyId={params.id} />} >
            <SearchInput />
        </Toolbar>
    );
}