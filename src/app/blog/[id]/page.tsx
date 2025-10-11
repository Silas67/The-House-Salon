import React from "react";

interface BlogPageProps {
  params: { id: string };
}

export default async function Page({ params }: BlogPageProps) {
  const { id } = params;

  return (
    <div>
      <div className="min-h-[20vh] w-full text-white p-8 bg-primary space-y-28">
        <div className="max-w-4xl flex items-start flex-col mt-28 Stardom-font gap-2">
          <h1 className="text-6xl max-sm:text-4xl">{id}</h1>
        </div>
      </div>
    </div>
  );
}
