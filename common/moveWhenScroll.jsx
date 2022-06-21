const moveWhenScroll = (element) => {
    window.addEventListener("scroll", () => {
      var scrolled = window.pageYOffset;
      if (element) {
        element.forEach((item) => {
          item.style.backgroundPosition = `41% ${-(scrolled * 0.2)}px`;
        });
      }
    });
  };
  
  export default moveWhenScroll;