import { handleScrollUpVisibility } from "../ui/scroll-up";
import { fixedHeaderHandler } from "../ui/header";
import { updateSlider, resetSlider } from "../ui/slider";
import { closeMenu } from '../ui/burger-menu';
import { getBreakpoint } from "./utils";
import { resetObserversOnResize } from "./animate";

let [ headerIsVisible, scrollUpBtnIsVisible ] = [ false, false ];
let lastWindowWidth = window.innerWidth;
let currentBreakpoint = getBreakpoint();

export const handleWindowChange = () => {
  const windowScroll = window.scrollY;
  const windowWidth = window.innerWidth;

  // Header visibility
  if (!headerIsVisible && windowScroll > 30 && windowWidth < 1280) {
    headerIsVisible = fixedHeaderHandler(true);
  } else if (headerIsVisible && (windowScroll <= 30 || windowWidth >= 1280)) {
    headerIsVisible = fixedHeaderHandler(false);
  }

  // Scroll up button visibility
  if (!scrollUpBtnIsVisible && windowScroll > 200 && windowWidth > 1280) {
    scrollUpBtnIsVisible = handleScrollUpVisibility(true);
  } else if (scrollUpBtnIsVisible && (windowScroll <= 200 || windowWidth <= 1280)) {
    scrollUpBtnIsVisible = handleScrollUpVisibility(false);
  }

  // Slider and menu state handling
  const crossedToLarge = lastWindowWidth <= 1280 && windowWidth > 1280;
  const crossedToSmall = lastWindowWidth > 1280 && windowWidth <= 1280;

  if (crossedToLarge) {
    resetSlider();
    closeMenu();
  } else if (crossedToSmall) {
    updateSlider();
  }

  // Animation window size change Handler
  const newBreakpoint = getBreakpoint();

  if (currentBreakpoint !== newBreakpoint) {
    currentBreakpoint = newBreakpoint;
    resetObserversOnResize()
  }

  lastWindowWidth = windowWidth;
}
