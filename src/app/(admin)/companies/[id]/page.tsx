// import React from "react";
// import Header from "../../../components/header";

// export interface PageProps {
//   params: { id: string };
// }

// export default function Page({ params }: PageProps) {
//   return (
//     <>
//       <Header>Company ({params.id})</Header>
//     </>
//   );
// }
"use client";

import React, { useEffect, useState } from "react";
import Header from "../../../components/header";

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    params.then(data => {
      setId(data.id);
    });
  }, [params]);

  if (id === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header>Company ({id})</Header>
    </>
  );
}