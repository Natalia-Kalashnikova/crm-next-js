// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";
// import PromotionFormModal from "@/app/components/promotion-form-modal";

// export interface PageProps {
//   params: { id: string };
// }

// export default function Page({ params }: PageProps) {
//   const router = useRouter();
//   return (
//     <PromotionFormModal
//       companyId={params.id}
//       show={true}
//       onClose={() => router.back()}
//     />
//   );
// }


"use client";  

import React from "react";  
import { useRouter } from "next/navigation";  
import PromotionFormModal from "@/app/components/promotion-form-modal";  

export interface PageProps {  
  params: Promise<{ id: string }>;  
}  

export default function Page({ params }: PageProps) {  
  const router = useRouter();  
  const unwrappedParams = React.use(params); 
  
  return (  
    <PromotionFormModal  
      companyId={unwrappedParams.id} 
      show={true}  
      onClose={() => router.back()}  
    />  
  );  
}  