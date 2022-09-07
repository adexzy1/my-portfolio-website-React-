const scroll = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop - 75,
    behavior: 'smooth',
  });
};

export default scroll;
