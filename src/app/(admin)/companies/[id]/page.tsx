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

"use client";

import React, { useEffect, useState } from "react";
import Header from "@/app/components/header";
import { notFound } from "next/navigation";

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    params
      .then(data => {
        setId(data.id);
      })
      .catch(() => {
        notFound();
      });
  }, [params]);

  useEffect(() => {
    if (id !== null) {
      const idNumber = Number.parseInt(id, 10);
      if (Number.isNaN(idNumber)) {
        notFound();
      }
    }
  }, [id]);

  return (
    <>
      <Header>Company ({id ?? "Loading..."})</Header>
    </>
  );
}
