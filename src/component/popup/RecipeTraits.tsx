import React from 'react';
import { RECIPE_TRAIT } from '../../type';

type props = {
  traits: RECIPE_TRAIT[];
};

const PopupRecipeTraits = ({ traits }: props) => {
  return (
    <div className="px-6 py-3 bg-neutral-80 grid grid-cols-2 gap-3 rounded">
      {traits.map((trait: RECIPE_TRAIT) => (
        <div className="flex flex-col">
          <span className="text-neutral-20 text-sm">{trait.type}</span>
          <div className="flex space-x-1">
            {trait.value.map((v) => (
              <span
                className="text-base"
                style={
                  v.isGradient
                    ? {
                        background: v.color,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        fontWeight: 500,
                      }
                    : {
                        color: v.color,
                      }
                }
              >
                {v.text}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopupRecipeTraits;
