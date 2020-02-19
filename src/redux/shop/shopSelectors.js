import { createSelector } from 'reselect';


const selectShop = state => state.shop;


export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(x=>collections[x]) : []
);

export const selectCollection = id =>  createSelector(
    [selectCollections],
    collections => (collections ? collections[id] : null)
);

export const selectCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectCollectionIsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);
