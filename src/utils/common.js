export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  },
};
export const updateFavourites = (id, favourites) => {
  if (favourites.includes(id)) {
    return favourites.filter((resId) => resId !== id);
  } else {
    return [...favourites, id];
  }
};
export const validateString = (value) => {
  return value?.length < 3 || value === null
    ? "Must have at least 3 characters."
    : null;
};
