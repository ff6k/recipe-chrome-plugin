import React from 'react';

type props = {
  difficulty: string;
  description: string;
  link: string;
  image: string;
};

const PopupDescription = ({ difficulty, description, link, image }: props) => {
  return (
    <div className="bg-neutral-80 p-2.5 rounded">
      <div className="bg-teal-60 py-2.5 px-5 rounded space-y-4">
        <div className="justify-start flex space-x-3 items-center">
          <img src={image} alt="Paella" className="h-8 w-8" />
          <span className="text-lg font-bold text-left">{`Difficulty: ${difficulty}`}</span>
        </div>
        <div>
          <span className="text-base font-normal">{description}</span>
          <a href={link} target="_blank" rel="noreferrer">
            <button className="w-full py-3 mt-3 bg-neutral-40 text-white text-sm rounded-lg font-serif">
              View Full Recipe
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopupDescription;
