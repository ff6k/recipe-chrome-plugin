// external dependencies
import React, { useMemo, useState } from 'react';
// local components
import { PageTemplate } from '../../component/common';
import {
  PopupSearchBar,
  PopUpHeader,
  PopupDescription,
  PopupRecipeTraits,
} from '../../component/popup';
// types
import { RECIPE_DATA } from '../../type';
//utils
import { mockData } from '../../mock';

const DefaultRecipe = mockData[0];

const Popup: React.FC = () => {
  const [selectedRecipeId, setSelectedRecipeId] = useState<
    number | undefined
  >();

  const selectedRecipe = useMemo(() => {
    if (selectedRecipeId) {
      const searchResult = mockData.find(
        (recipe: RECIPE_DATA) => recipe.id === selectedRecipeId
      );
      return searchResult || DefaultRecipe;
    }

    return DefaultRecipe;
  }, [selectedRecipeId]);

  return (
    <PageTemplate className="h-screen space-y-6">
      <PopupSearchBar data={mockData} onSelectItem={setSelectedRecipeId} />
      <PopUpHeader data={selectedRecipe} />
      <PopupDescription
        difficulty={selectedRecipe.difficulty}
        description={selectedRecipe.description}
        link={selectedRecipe.fullRecipeLink}
        image={selectedRecipe.image}
      />
      <PopupRecipeTraits traits={selectedRecipe.traits} />
    </PageTemplate>
  );
};

export default Popup;
