export const hadlerScroll = () => {
  if (window.scrollY > 600) {
    return;
  }
  setTimeout(() => {
    window.scroll({
      top: 750,
      behavior: 'smooth',
    });
  }, 750);
};
