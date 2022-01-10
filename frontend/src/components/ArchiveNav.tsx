import React from 'react';

type Props = {
  title: string;
  description: string;
};

const ArchiveNav = (props: Props) => {
  const { title, description } = props;

  return (
    <div className="bg-slate-900">
      <div className="container max-w-screen-lg p-4 mx-auto text-white ">
        <h1 className="text-4xl font-bold text-center text-yellow-500">
          {title}
        </h1>
        <p className="p-5">{description}</p>
      </div>
    </div>
  );
};

export default ArchiveNav;
