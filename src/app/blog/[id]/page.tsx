import React from "react";


export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <div>
      {/* Hero */}
      <div className="min-h-[20vh] w-full text-white  p-8 bg-primary space-y-28">
        <div className="max-w-4xl flex items-start flex-col mt-28 Stardom-font gap-2">
          <h1 className="text-6xl max-sm:text-4xl">{id}</h1>
        </div>
      </div>
    </div>
  );
}
