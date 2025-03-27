// "use client";

// import React, { useEffect, useState } from "react";
// import Header from "@/app/components/header";

// export interface PageProps {
//   params: Promise<{ id: string }>;
// }

// export default function Page({ params }: PageProps) {
//   const [id, setId] = useState<string | null>(null);
  
//   useEffect(() => {
//     params.then(data => {
//       setId(data.id);
//     });
//   }, [params]);

//   if (id === null) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <Header>Company ({id})</Header>
//     </>
//   );
// }

// "use client";

// import React, { useEffect, useState } from "react";
// import Header from "@/app/components/header";
// import { notFound } from "next/navigation";

// export interface PageProps {
//   params: Promise<{ id: string }>;
// }

// export default function Page({ params }: PageProps) {
//   const [id, setId] = useState<string | null>(null);

//   useEffect(() => {
//     params
//       .then(data => {
//         setId(data.id);
//       })
//       .catch(() => {
//         notFound();
//       });
//   }, [params]);

//   useEffect(() => {
//     if (id !== null) {
//       const idNumber = Number.parseInt(id, 10);
//       if (Number.isNaN(idNumber)) {
//         notFound();
//       }
//     }
//   }, [id]);

//   return (
//     <div className="py-6 px-10">
//       <p>{`Information about company(${id})`}</p>
//     </div>
//   );
// }

import React from 'react';
import { notFound } from 'next/navigation';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import CompanyInfo from '@/app/components/company-info';
import { Company, getCompany, getPromotions } from '@/lib/api';
import getQueryClient from '@/lib/utils/getQueryClient';
import CompanyPromotions from '@/app/components/company-promotions';

export interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies', params.id],
    queryFn: () => getCompany(params.id, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  await queryClient.prefetchQuery({
    queryKey: ['promotions', params.id],
    queryFn: () =>
      getPromotions({ companyId: params.id }, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const company = queryClient.getQueryData(['companies', params.id]) as Company;

  if (!company) {
    notFound();
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className='py-6 px-10 grid grid-cols-12 gap-5'>
        <div className='col-span-3'>
          <CompanyInfo companyId={params.id} />
        </div>
        <div className='col-span-9'>
          <CompanyPromotions companyId={params.id} />
        </div>
      </div>
    </HydrationBoundary>
  );
}
