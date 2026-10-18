import { initMenu } from './modules/menu';
import { initSliders } from './modules/sliders';
import { initForm } from './modules/form';
import { initLangSwitch } from './modules/lang-switch';

const bootstrap = () => {
  initMenu();
  initSliders();
  initForm();
  initLangSwitch();
};

bootstrap();
