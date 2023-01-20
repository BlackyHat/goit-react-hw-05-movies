export const hadlerScroll = () => {
  const movieDetailsHeight = 480;
  if (window.scrollY > movieDetailsHeight) {
    return;
  }
  setTimeout(() => {
    window.scroll({
      top: movieDetailsHeight * 1.5,
      behavior: 'smooth',
    });
  }, 750);
};
