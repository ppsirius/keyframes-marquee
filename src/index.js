export const Marquee = options => {
  document.addEventListener("DOMContentLoaded", init);

  // @TODO add default options
  const defaultOptions = {
    el: null,
    scrollTo: "right",
    speed: 100,
    wrap: true
  };

  function init() {
    const element = document.querySelector(options.el);

    styleElement(element);
    document.body.appendChild(createKeyFrames());
  }

  // @TODO calculate time
  function styleElement(element) {
    element.setAttribute(
      "style",
      `animation: key-frames-move 35s infinite;
      display: inline-block;
      width: 100%;
      animation-timing-function: linear;`
    );
  }

  // @TODO count transforms
  function createKeyFrames() {
    const keyFrames = document.createElement("style");
    keyFrames.type = "text/css";
    keyFrames.id = "key-frames";
    const keyFramesAnimation = `
      @keyframes key-frames-move {
        0% {
          transform:
            translateX(0%)
        }
        100% {
          transform:
            translateX(100%)
        }
      }`;
    keyFrames.innerHTML = keyFramesAnimation;
    return keyFrames;
  }
};

window.Marquee = Marquee;
