'use strict';

const cost = 129;
const check = document.getElementById('toggler');

document.querySelector('#show').addEventListener('click', () => {
  if (check.hasAttribute('checked')) {
    check.removeAttribute('checked');

    return;
  }
  check.setAttribute('checked', 'checked');
});

document.querySelector('#end').addEventListener('click', () => {
  check.setAttribute('disabled', 'disabled');
  check.removeAttribute('checked');
});

document.querySelector('#end1').addEventListener('click', () => {
  check.setAttribute('disabled', 'disabled');
  check.removeAttribute('checked');
});

document.querySelector('#end2').addEventListener('click', () => {
  check.setAttribute('disabled', 'disabled');
  check.removeAttribute('checked');
});

document.querySelector('#end3').addEventListener('click', () => {
  check.setAttribute('disabled', 'disabled');
  check.removeAttribute('checked');
});

const divs = document.getElementsByClassName('description__text');
const number = document.getElementById('deleteClass');
const btnColorsLeft = document.getElementById('btn_left');
const btnColorsRight = document.getElementById('btn_right');

let i = 0;

divs[i].classList.remove('hidden');
divs[i].classList.add('visible');

document.querySelector('.description__right').addEventListener('click', () => {
  if (divs.length - 1 > i) {
    divs[i].classList.remove('visible');
    divs[i].classList.add('hidden');
    i = (i < divs.length - 1) ? i + 1 : 0;

    if (i === 1) {
      btnColorsLeft.removeAttribute('description__left--gray');
      btnColorsLeft.setAttribute('class', 'description__left colorBlackLeft');
    }

    if (i === divs.length - 1) {
      btnColorsRight.removeAttribute('colorBlackLeft');
      btnColorsRight.setAttribute('class', 'description__left colorGray');
    }

    divs[i].classList.remove('hidden');
    divs[i].classList.add('visible');
    document.querySelector('.description__min').innerHTML = i + 1;

    if (i === divs.length - 1) {
      number.removeAttribute('description__max');
      number.setAttribute('class', 'colorNumberBlack');
    }
  }
});

document.querySelector('.description__left').addEventListener('click', () => {
  if (i > 0) {
    divs[i].classList.remove('visible');
    divs[i].classList.add('hidden');
    i = (i > 0) ? i - 1 : divs.length - 1;

    if (i === divs.length - 2) {
      btnColorsRight.removeAttribute('description__left--gray');
      btnColorsRight.setAttribute('class', 'description__left colorBlackRight');
    }

    if (i === 0) {
      btnColorsLeft.removeAttribute('colorBlackRight');
      btnColorsLeft.setAttribute('class', 'description__left colorGrayRight');
    }

    divs[i].classList.remove('hidden');
    divs[i].classList.add('visible');
    document.querySelector('.description__min').innerHTML = i + 1;
  }
  number.removeAttribute('colorNumberBlack');
  number.setAttribute('class', 'description__max');
});

//! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

document.querySelector('.technology__buttons--1')
  .addEventListener('click', () => {
    const desc = document.getElementById('desc_1');
    const result = document.querySelector('.technology__desc--visible');

    if (result) {
      desc.removeAttribute('technology__desc--visible');
      desc.setAttribute('class', 'technology__desc technology__desc--1');

      if (document.getElementsByClassName('technology__buttons--1-end')
        .length) {
        document.getElementsByClassName('technology__buttons--1-end')[0]
          .style.background = '#0eb4b4';

        return;
      }

      document.getElementsByClassName('technology__buttons--1')[0]
        .style.background = '#0eb4b4';

      return;
    }

    if (document.getElementsByClassName('technology__buttons--1-end')
      .length) {
      document.getElementsByClassName('technology__buttons--1-end')[0]
        .style.background = '#000';
      desc.removeAttribute('technology__desc');

      desc.setAttribute('class',
        'technology__desc--visible technology__desc--1');

      return;
    }

    document.getElementsByClassName('technology__buttons--1')[0]
      .style.background = '#000';
    desc.removeAttribute('technology__desc');
    desc.setAttribute('class', 'technology__desc--visible technology__desc--1');
  });

document.querySelector('.technology__buttons--2')
  .addEventListener('click', () => {
    const desc = document.getElementById('desc_2');
    const result = document.querySelector('.technology__desc--visible');

    if (result) {
      desc.removeAttribute('technology__desc--visible');
      desc.setAttribute('class', 'technology__desc technology__desc--1');

      if (document.getElementsByClassName('technology__buttons--2-end')
        .length) {
        document.getElementsByClassName('technology__buttons--2-end')[0]
          .style.background = '#0eb4b4';

        return;
      }

      document.getElementsByClassName('technology__buttons--2')[0]
        .style.background = '#0eb4b4';

      return;
    }

    if (document.getElementsByClassName('technology__buttons--2-end')
      .length) {
      document.getElementsByClassName('technology__buttons--2-end')[0]
        .style.background = '#000';
      desc.removeAttribute('technology__desc');

      desc.setAttribute('class',
        'technology__desc--visible technology__desc--1');

      return;
    }

    document.getElementsByClassName('technology__buttons--2')[0]
      .style.background = '#000';
    desc.removeAttribute('technology__desc');
    desc.setAttribute('class', 'technology__desc--visible technology__desc--1');
  });

document.querySelector('.technology__buttons--3')
  .addEventListener('click', () => {
    const desc = document.getElementById('desc_3');
    const result = document.querySelector('.technology__desc--visible');

    if (result) {
      desc.removeAttribute('technology__desc--visible');
      desc.setAttribute('class', 'technology__desc technology__desc--1');

      if (document.getElementsByClassName('technology__buttons--3-end')
        .length) {
        document.getElementsByClassName('technology__buttons--3-end')[0]
          .style.background = '#0eb4b4';

        return;
      }

      document.getElementsByClassName('technology__buttons--3')[0]
        .style.background = '#0eb4b4';

      return;
    }

    if (document.getElementsByClassName('technology__buttons--3-end')
      .length) {
      document.getElementsByClassName('technology__buttons--3-end')[0]
        .style.background = '#000';
      desc.removeAttribute('technology__desc');

      desc.setAttribute('class',
        'technology__desc--visible technology__desc--1');

      return;
    }

    document.getElementsByClassName('technology__buttons--3')[0]
      .style.background = '#000';
    desc.removeAttribute('technology__desc');
    desc.setAttribute('class', 'technology__desc--visible technology__desc--1');
  });

document.querySelector('.technology__buttons--4')
  .addEventListener('click', () => {
    const desc = document.getElementById('desc_4');
    const result = document.querySelector('.technology__desc--visible');

    if (result) {
      desc.removeAttribute('technology__desc--visible');
      desc.setAttribute('class', 'technology__desc technology__desc--1');

      if (document.getElementsByClassName('technology__buttons--4-end')
        .length) {
        document.getElementsByClassName('technology__buttons--4-end')[0]
          .style.background = '#0eb4b4';

        return;
      }

      document.getElementsByClassName('technology__buttons--4')[0]
        .style.background = '#0eb4b4';

      return;
    }

    if (document.getElementsByClassName('technology__buttons--4-end')
      .length) {
      document.getElementsByClassName('technology__buttons--4-end')[0]
        .style.background = '#000';
      desc.removeAttribute('technology__desc');

      desc.setAttribute('class',
        'technology__desc--visible technology__desc--1');

      return;
    }

    document.getElementsByClassName('technology__buttons--4')[0]
      .style.background = '#000';
    desc.removeAttribute('technology__desc');
    desc.setAttribute('class', 'technology__desc--visible technology__desc--1');
  });

document.querySelector('.technology__buttons--5')
  .addEventListener('click', () => {
    const desc = document.getElementById('desc_5');
    const result = document.querySelector('.technology__desc--visible');

    if (result) {
      desc.removeAttribute('technology__desc--visible');
      desc.setAttribute('class', 'technology__desc technology__desc--1');

      if (document.getElementsByClassName('technology__buttons--5-end')
        .length) {
        document.getElementsByClassName('technology__buttons--5-end')[0]
          .style.background = '#0eb4b4';

        return;
      }

      document.getElementsByClassName('technology__buttons--5')[0]
        .style.background = '#0eb4b4';

      return;
    }

    if (document.getElementsByClassName('technology__buttons--5-end')
      .length) {
      document.getElementsByClassName('technology__buttons--5-end')[0]
        .style.background = '#000';
      desc.removeAttribute('technology__desc');

      desc.setAttribute('class',
        'technology__desc--visible technology__desc--1');

      return;
    }

    document.getElementsByClassName('technology__buttons--5')[0]
      .style.background = '#000';
    desc.removeAttribute('technology__desc');
    desc.setAttribute('class', 'technology__desc--visible technology__desc--1');
  });

document.querySelector('.technology__buttons--6')
  .addEventListener('click', () => {
    const desc = document.getElementById('desc_6');
    const result = document.querySelector('.technology__desc--visible');

    if (result) {
      desc.removeAttribute('technology__desc--visible');
      desc.setAttribute('class', 'technology__desc technology__desc--1');

      if (document.getElementsByClassName('technology__buttons--6-end')
        .length) {
        document.getElementsByClassName('technology__buttons--6-end')[0]
          .style.background = '#0eb4b4';

        return;
      }

      document.getElementsByClassName('technology__buttons--6')[0]
        .style.background = '#0eb4b4';

      return;
    }

    if (document.getElementsByClassName('technology__buttons--6-end')
      .length) {
      document.getElementsByClassName('technology__buttons--6-end')[0]
        .style.background = '#000';
      desc.removeAttribute('technology__desc');

      desc.setAttribute('class',
        'technology__desc--visible technology__desc--1');

      return;
    }

    document.getElementsByClassName('technology__buttons--6')[0]
      .style.background = '#000';
    desc.removeAttribute('technology__desc');
    desc.setAttribute('class', 'technology__desc--visible technology__desc--1');
  });

document.querySelector('.technology__buttons--7')
  .addEventListener('click', () => {
    const desc = document.getElementById('desc_7');
    const result = document.querySelector('.technology__desc--visible');

    if (result) {
      desc.removeAttribute('technology__desc--visible');
      desc.setAttribute('class', 'technology__desc technology__desc--1');

      if (document.getElementsByClassName('technology__buttons--7-end')
        .length) {
        document.getElementsByClassName('technology__buttons--7-end')[0]
          .style.background = '#0eb4b4';

        return;
      }

      document.getElementsByClassName('technology__buttons--7')[0]
        .style.background = '#0eb4b4';

      return;
    }

    if (document.getElementsByClassName('technology__buttons--7-end')
      .length) {
      document.getElementsByClassName('technology__buttons--7-end')[0]
        .style.background = '#000';
      desc.removeAttribute('technology__desc');

      desc.setAttribute('class',
        'technology__desc--visible technology__desc--1');

      return;
    }

    document.getElementsByClassName('technology__buttons--7')[0]
      .style.background = '#000';
    desc.removeAttribute('technology__desc');
    desc.setAttribute('class', 'technology__desc--visible technology__desc--1');
  });

document.querySelector('.technology__buttons--8')
  .addEventListener('click', () => {
    const desc = document.getElementById('desc_8');
    const result = document.querySelector('.technology__desc--visible');

    if (result) {
      desc.removeAttribute('technology__desc--visible');
      desc.setAttribute('class', 'technology__desc technology__desc--1');

      if (document.getElementsByClassName('technology__buttons--8-end')
        .length) {
        document.getElementsByClassName('technology__buttons--8-end')[0]
          .style.background = '#0eb4b4';

        return;
      }

      document.getElementsByClassName('technology__buttons--8')[0]
        .style.background = '#0eb4b4';

      return;
    }

    if (document.getElementsByClassName('technology__buttons--8-end')
      .length) {
      document.getElementsByClassName('technology__buttons--8-end')[0]
        .style.background = '#000';
      desc.removeAttribute('technology__desc');

      desc.setAttribute('class',
        'technology__desc--visible technology__desc--1');

      return;
    }

    document.getElementsByClassName('technology__buttons--8')[0]
      .style.background = '#000';
    desc.removeAttribute('technology__desc');
    desc.setAttribute('class', 'technology__desc--visible technology__desc--1');
  });

document.querySelector('.technology__buttons--9')
  .addEventListener('click', () => {
    const desc = document.getElementById('desc_9');
    const result = document.querySelector('.technology__desc--visible');

    if (result) {
      desc.removeAttribute('technology__desc--visible');
      desc.setAttribute('class', 'technology__desc technology__desc--1');

      if (document.getElementsByClassName('technology__buttons--9-end')
        .length) {
        document.getElementsByClassName('technology__buttons--9-end')[0]
          .style.background = '#0eb4b4';

        return;
      }

      document.getElementsByClassName('technology__buttons--9')[0]
        .style.background = '#0eb4b4';

      return;
    }

    if (document.getElementsByClassName('technology__buttons--9-end')
      .length) {
      document.getElementsByClassName('technology__buttons--9-end')[0]
        .style.background = '#000';
      desc.removeAttribute('technology__desc');

      desc.setAttribute('class',
        'technology__desc--visible technology__desc--1');

      return;
    }

    document.getElementsByClassName('technology__buttons--9')[0]
      .style.background = '#000';
    desc.removeAttribute('technology__desc');
    desc.setAttribute('class', 'technology__desc--visible technology__desc--1');
  });

document.querySelector('.technology__buttons--10')
  .addEventListener('click', () => {
    const desc = document.getElementById('desc_10');
    const result = document.querySelector('.technology__desc--visible');

    if (result) {
      desc.removeAttribute('technology__desc--visible');
      desc.setAttribute('class', 'technology__desc technology__desc--1');

      if (document.getElementsByClassName('technology__buttons--10-end')
        .length) {
        document.getElementsByClassName('technology__buttons--10-end')[0]
          .style.background = '#0eb4b4';

        return;
      }

      document.getElementsByClassName('technology__buttons--10')[0]
        .style.background = '#0eb4b4';

      return;
    }

    if (document.getElementsByClassName('technology__buttons--10-end')
      .length) {
      document.getElementsByClassName('technology__buttons--10-end')[0]
        .style.background = '#000';
      desc.removeAttribute('technology__desc');

      desc.setAttribute('class',
        'technology__desc--visible technology__desc--1');

      return;
    }

    document.getElementsByClassName('technology__buttons--10')[0]
      .style.background = '#000';
    desc.removeAttribute('technology__desc');
    desc.setAttribute('class', 'technology__desc--visible technology__desc--1');
  });

document.querySelector('.technology__buttons--11')
  .addEventListener('click', () => {
    const desc = document.getElementById('desc_11');
    const result = document.querySelector('.technology__desc--visible');

    if (result) {
      desc.removeAttribute('technology__desc--visible');
      desc.setAttribute('class', 'technology__desc technology__desc--1');

      if (document.getElementsByClassName('technology__buttons--11-end')
        .length) {
        document.getElementsByClassName('technology__buttons--11-end')[0]
          .style.background = '#0eb4b4';

        return;
      }

      document.getElementsByClassName('technology__buttons--11')[0]
        .style.background = '#0eb4b4';

      return;
    }

    if (document.getElementsByClassName('technology__buttons--11-end')
      .length) {
      document.getElementsByClassName('technology__buttons--11-end')[0]
        .style.background = '#000';
      desc.removeAttribute('technology__desc');

      desc.setAttribute('class',
        'technology__desc--visible technology__desc--1');

      return;
    }

    document.getElementsByClassName('technology__buttons--11')[0]
      .style.background = '#000';
    desc.removeAttribute('technology__desc');
    desc.setAttribute('class', 'technology__desc--visible technology__desc--1');
  });

const numberColor = document.getElementById('technology_deleteClass');
const technologyColorsLeft = document.getElementById('technology_btn_left');
const technologyColorsRight = document.getElementById('technology_btn_right');
const remuveContainer = document.getElementById('container_del');
const oneBtn = document.getElementById('one_btn');
const twoBtn = document.getElementById('two_btn');
const threeBtn = document.getElementById('three_btn');
const fourBtn = document.getElementById('four_btn');
const fiveBtn = document.getElementById('five_btn');
const sixBtn = document.getElementById('six_btn');
const sevenBtn = document.getElementById('seven_btn');
const eightBtn = document.getElementById('eight_btn');
const nineBtn = document.getElementById('nine_btn');
const tenBtn = document.getElementById('ten_btn');
const elevenBtn = document.getElementById('eleven_btn');

let count = 0;

document.querySelector('.technology__right').addEventListener('click', () => {
  if (count < 1) {
    count++;
  }

  document.querySelector('.technology__min').innerHTML = 2;

  remuveContainer.removeAttribute('class');
  oneBtn.removeAttribute('class');
  twoBtn.removeAttribute('class');
  threeBtn.removeAttribute('class');
  fourBtn.removeAttribute('class');
  fiveBtn.removeAttribute('class');
  sixBtn.removeAttribute('class');
  sevenBtn.removeAttribute('class');
  eightBtn.removeAttribute('class');
  nineBtn.removeAttribute('class');
  tenBtn.removeAttribute('class');
  elevenBtn.removeAttribute('class');

  remuveContainer
    .setAttribute('class', 'technology__container-two');

  oneBtn
    .setAttribute('class', 'technology__buttons technology__buttons--1-end');

  twoBtn
    .setAttribute('class', 'technology__buttons technology__buttons--2-end');

  threeBtn
    .setAttribute('class', 'technology__buttons technology__buttons--3-end');

  fourBtn
    .setAttribute('class', 'technology__buttons technology__buttons--4-end');

  fiveBtn
    .setAttribute('class', 'technology__buttons technology__buttons--5-end');

  sixBtn
    .setAttribute('class', 'technology__buttons technology__buttons--6-end');

  sevenBtn
    .setAttribute('class', 'technology__buttons technology__buttons--7-end');

  eightBtn
    .setAttribute('class', 'technology__buttons technology__buttons--8-end');

  nineBtn
    .setAttribute('class', 'technology__buttons technology__buttons--9-end');

  tenBtn
    .setAttribute('class', 'technology__buttons technology__buttons--10-end');

  elevenBtn
    .setAttribute('class', 'technology__buttons technology__buttons--11-end');

  if (count === 1) {
    technologyColorsRight.removeAttribute('colorTechnologyBlackLeft');

    technologyColorsRight
      .setAttribute('class', 'technology__right colorTechnologyGray');

    technologyColorsLeft.removeAttribute('technology__left--gray');

    technologyColorsLeft
      .setAttribute('class', 'technology__left colorTechnologyBlackLeft');
  }

  if (count === 1) {
    numberColor.removeAttribute('technology__max');
    numberColor.setAttribute('class', 'colorNumberTechnologyBlack');
  }
});

document.querySelector('.technology__left').addEventListener('click', () => {
  document.querySelector('.technology__min').innerHTML = 1;

  remuveContainer.removeAttribute('class');
  oneBtn.removeAttribute('class');
  twoBtn.removeAttribute('class');
  threeBtn.removeAttribute('class');
  fourBtn.removeAttribute('class');
  fiveBtn.removeAttribute('class');
  sixBtn.removeAttribute('class');
  sevenBtn.removeAttribute('class');
  eightBtn.removeAttribute('class');
  nineBtn.removeAttribute('class');
  tenBtn.removeAttribute('class');
  elevenBtn.removeAttribute('class');

  remuveContainer
    .setAttribute('class', 'technology__container');

  oneBtn
    .setAttribute('class', 'technology__buttons technology__buttons--1');

  twoBtn
    .setAttribute('class', 'technology__buttons technology__buttons--2');

  threeBtn
    .setAttribute('class', 'technology__buttons technology__buttons--3');

  fourBtn
    .setAttribute('class', 'technology__buttons technology__buttons--4');

  fiveBtn
    .setAttribute('class', 'technology__buttons technology__buttons--5');

  sixBtn
    .setAttribute('class', 'technology__buttons technology__buttons--6');

  sevenBtn
    .setAttribute('class', 'technology__buttons technology__buttons--7');

  eightBtn
    .setAttribute('class', 'technology__buttons technology__buttons--8');

  nineBtn
    .setAttribute('class', 'technology__buttons technology__buttons--9');

  tenBtn
    .setAttribute('class', 'technology__buttons technology__buttons--10');

  elevenBtn
    .setAttribute('class', 'technology__buttons technology__buttons--11');

  if (count > 0) {
    count--;
  }

  if (count === 0) {
    technologyColorsRight.removeAttribute('colorTechnologyGray');

    technologyColorsRight
      .setAttribute('class', 'technology__right colorTechnologyBlackRight');

    technologyColorsLeft.removeAttribute('colorTechnologyBlackLeft');

    technologyColorsLeft
      .setAttribute('class', 'technology__left technology__left--gray');
  }

  numberColor.removeAttribute('colorNumberTechnologyBlack');
  numberColor.setAttribute('class', 'technology__max');
});

// ???????????????????????????????????????????????????????????????????????????

const featuresBtn = document.getElementsByClassName('features__inner');
const featuresDeleteClass = document.getElementById('features_deleteClass');
const featuresBtnLeft = document.getElementById('features_btn_left');
const featuresBtnRight = document.getElementById('features_btn_right');

let y = 0;

featuresBtn[y].classList.remove('features__hidden');
featuresBtn[y].classList.add('features__visible');

document.querySelector('.features__right').addEventListener('click', () => {
  if (featuresBtn.length - 1 > y) {
    featuresBtn[y].classList.remove('features__visible');
    featuresBtn[y].classList.add('features__hidden');
    y = (y < featuresBtn.length - 1) ? y + 1 : 0;

    if (y === 1) {
      featuresBtnLeft.removeAttribute('features__left--gray');
      featuresBtnLeft.setAttribute('class', 'features__left color_black_left');
    }

    if (y === featuresBtn.length - 1) {
      featuresBtnRight.removeAttribute('color_black_left');
      featuresBtnRight.setAttribute('class', 'features__left color_gray');
    }

    featuresBtn[y].classList.remove('features__hidden');
    featuresBtn[y].classList.add('features__visible');
    document.querySelector('.features__min').innerHTML = y + 1;

    if (y === featuresBtn.length - 1) {
      featuresDeleteClass.removeAttribute('features__max');
      featuresDeleteClass.setAttribute('class', 'color-numbe-black');
    }
  }
});

document.querySelector('.features__left').addEventListener('click', () => {
  if (y > 0) {
    featuresBtn[y].classList.remove('features__visible');
    featuresBtn[y].classList.add('features__hidden');
    y = (y > 0) ? y - 1 : featuresBtn.length - 1;

    if (y === featuresBtn.length - 2) {
      featuresBtnRight.removeAttribute('features__left--gray');

      featuresBtnRight
        .setAttribute('class', 'features__left color-black-right');
    }

    if (y === 0) {
      featuresBtnLeft.removeAttribute('color-black-right');
      featuresBtnLeft.setAttribute('class', 'features__left color-gray-right');
    }

    featuresBtn[y].classList.remove('features__hidden');
    featuresBtn[y].classList.add('features__visible');
    document.querySelector('.features__min').innerHTML = y + 1;
  }
  featuresDeleteClass.removeAttribute('color-numbe-black');
  featuresDeleteClass.setAttribute('class', 'features__max');
});

document.querySelector('.header__buy').addEventListener('click', () => {
  let twoClick = 0;
  const modlWindow = document.getElementById('open-window');
  const closeHeader = document.getElementById('header');
  const closeMain = document.getElementById('close_main');

  twoClick++;

  if (twoClick === 2) {
    twoClick = 0;

    return;
  }

  closeHeader.removeAttribute('open');
  closeHeader.setAttribute('class', 'close');

  closeMain.removeAttribute('class');
  closeMain.setAttribute('class', 'main close');

  modlWindow.removeAttribute('close');
  modlWindow.setAttribute('class', 'modal-cart  open');
});

document.querySelector('.modal-cart__btn-back')
  .addEventListener('click', () => {
    const modlWindow = document.getElementById('open-window');
    const closeHeader = document.getElementById('header');
    const closeMain = document.getElementById('close_main');

    closeHeader.removeAttribute('class');
    closeHeader.setAttribute('class', 'open');

    closeMain.removeAttribute('class');
    closeMain.setAttribute('class', 'main open');

    modlWindow.removeAttribute('class');
    modlWindow.setAttribute('class', 'modal-cart  close');
  });

let numSilver = 0;
let numGray = 0;
let numBrown = 0;
let numGold = 0;
let numSpace = 0;
const searchSelected = document.getElementsByClassName('modal-cart__elect');
const defoltCrazyBaby = document.getElementById('one-color');
let colorBaby = 'Silver';

defoltCrazyBaby.removeAttribute('class');

defoltCrazyBaby
  .setAttribute('class', 'modal-cart__elect modal-cart__elect--silver');

const photoSilver = document.getElementById('cart_pic');

photoSilver.removeAttribute('src');

photoSilver.setAttribute('src', 'https://i.ibb.co/FwxZdms/Silver.png');

document.querySelector('#one-color').addEventListener('click', (event) => {
  numSilver++;

  colorBaby = 'Silver';

  for (let w = 0; w < searchSelected.length; w++) {
    const result = searchSelected[w];

    if (result.classList.contains('modal-cart__elect--gray')) {
      result.classList.remove('modal-cart__elect--gray');
      numGray = 0;
    }

    if (result.classList.contains('modal-cart__elect--brown')) {
      result.classList.remove('modal-cart__elect--brown');
      numBrown = 0;
    }

    if (result.classList.contains('modal-cart__elect--gold')) {
      result.classList.remove('modal-cart__elect--gold');
      numGold = 0;
    }

    if (result.classList.contains('modal-cart__elect--space')) {
      result.classList.remove('modal-cart__elect--space');
      numSpace = 0;
    }
  }

  if (numSilver === 2) {
    event.currentTarget
      .setAttribute('class', 'modal-cart__elect');
    numSilver = 0;
    colorBaby = '';

    return;
  }

  photoSilver.removeAttribute('src');
  photoSilver.setAttribute('src', 'https://i.ibb.co/FwxZdms/Silver.png');

  event.currentTarget
    .setAttribute('class', 'modal-cart__elect modal-cart__elect--silver');
});

document.querySelector('#two-color').addEventListener('click', (event) => {
  numGray++;
  colorBaby = 'Gray';

  const photoGray = document.getElementById('cart_pic');

  for (let x = 0; x < searchSelected.length; x++) {
    const result = searchSelected[x];

    if (result.classList.contains('modal-cart__elect--silver')) {
      result.classList.remove('modal-cart__elect--silver');
      numSilver = 0;
    }

    if (result.classList.contains('modal-cart__elect--brown')) {
      result.classList.remove('modal-cart__elect--brown');
      numBrown = 0;
    }

    if (result.classList.contains('modal-cart__elect--gold')) {
      result.classList.remove('modal-cart__elect--gold');
      numGold = 0;
    }

    if (result.classList.contains('modal-cart__elect--space')) {
      result.classList.remove('modal-cart__elect--space');
      numSpace = 0;
    }
  }

  if (numGray === 2) {
    event.currentTarget
      .setAttribute('class', 'modal-cart__elect');
    numGray = 0;
    colorBaby = '';

    return;
  }

  photoGray.removeAttribute('src');
  photoGray.setAttribute('src', 'https://i.ibb.co/bsgJyKx/Gray.png');

  event.currentTarget
    .setAttribute('class', 'modal-cart__elect modal-cart__elect--gray');
});

document.querySelector('#three-color').addEventListener('click', (event) => {
  numBrown++;
  colorBaby = 'Brown';

  const photoBrown = document.getElementById('cart_pic');

  for (let z = 0; z < searchSelected.length; z++) {
    const result = searchSelected[z];

    if (result.classList.contains('modal-cart__elect--silver')) {
      result.classList.remove('modal-cart__elect--silver');
      numSilver = 0;
    }

    if (result.classList.contains('modal-cart__elect--gray')) {
      result.classList.remove('modal-cart__elect--gray');
      numGray = 0;
    }

    if (result.classList.contains('modal-cart__elect--gold')) {
      result.classList.remove('modal-cart__elect--gold');
      numGold = 0;
    }

    if (result.classList.contains('modal-cart__elect--space')) {
      result.classList.remove('modal-cart__elect--space');
      numSpace = 0;
    }
  }

  if (numBrown === 2) {
    event.currentTarget
      .setAttribute('class', 'modal-cart__elect');
    numBrown = 0;
    colorBaby = '';

    return;
  }

  photoBrown.removeAttribute('src');
  photoBrown.setAttribute('src', 'https://i.ibb.co/10JCP64/Brown.png');

  event.currentTarget
    .setAttribute('class', 'modal-cart__elect modal-cart__elect--brown');
});

document.querySelector('#four-color').addEventListener('click', (event) => {
  numGold++;
  colorBaby = 'Gold';

  const photoGold = document.getElementById('cart_pic');

  for (let col = 0; col < searchSelected.length; col++) {
    const result = searchSelected[col];

    if (result.classList.contains('modal-cart__elect--silver')) {
      result.classList.remove('modal-cart__elect--silver');
      numSilver = 0;
    }

    if (result.classList.contains('modal-cart__elect--gray')) {
      result.classList.remove('modal-cart__elect--gray');
      numGray = 0;
    }

    if (result.classList.contains('modal-cart__elect--brown')) {
      result.classList.remove('modal-cart__elect--brown');
      numBrown = 0;
    }

    if (result.classList.contains('modal-cart__elect--space')) {
      result.classList.remove('modal-cart__elect--space');
      numSpace = 0;
    }
  }

  if (numGold === 2) {
    event.currentTarget
      .setAttribute('class', 'modal-cart__elect');
    numGold = 0;
    colorBaby = '';

    return;
  }

  photoGold.removeAttribute('src');
  photoGold.setAttribute('src', 'https://i.ibb.co/1ZVm0f4/Gold.png');

  event.currentTarget
    .setAttribute('class', 'modal-cart__elect modal-cart__elect--gold');
});

document.querySelector('#five-color').addEventListener('click', (event) => {
  numSpace++;
  colorBaby = 'Space';

  const photoSpace = document.getElementById('cart_pic');

  for (let fined = 0; fined < searchSelected.length; fined++) {
    const result = searchSelected[fined];

    if (result.classList.contains('modal-cart__elect--silver')) {
      result.classList.remove('modal-cart__elect--silver');
      numSilver = 0;
    }

    if (result.classList.contains('modal-cart__elect--gray')) {
      result.classList.remove('modal-cart__elect--gray');
      numGray = 0;
    }

    if (result.classList.contains('modal-cart__elect--brown')) {
      result.classList.remove('modal-cart__elect--brown');
      numBrown = 0;
    }

    if (result.classList.contains('modal-cart__elect--gold')) {
      result.classList.remove('modal-cart__elect--gold');
      numGold = 0;
    }
  }

  if (numSpace === 2) {
    event.currentTarget
      .setAttribute('class', 'modal-cart__elect');
    numSpace = 0;
    colorBaby = '';

    return;
  }

  photoSpace.removeAttribute('src');
  photoSpace.setAttribute('src', 'https://i.ibb.co/JKSHPMM/Space.png');

  event.currentTarget
    .setAttribute('class', 'modal-cart__elect modal-cart__elect--space');
});

let quantity = 1;

document.querySelector('.modal-cart__addition')
  .addEventListener('click', (event) => {
    quantity++;

    document.querySelector('.modal-cart__col').innerHTML = quantity;
  });

document.querySelector('.modal-cart__subtraction')
  .addEventListener('click', (event) => {
    if (quantity > 0) {
      quantity--;

      document.querySelector('.modal-cart__col').innerHTML = quantity;
    }
  });

// const closeMinCard = document.createElement('button');
const modalCart = document.querySelector('.modal-cart');
const itemsList = modalCart.querySelector('.modal-cart__list');
const sum = document.getElementById('total');
let total = 0;

const url = {
  Silver: 'https://i.ibb.co/nBykLXC/small-Silver.png',
  Brown: 'https://i.ibb.co/KxLZ5yz/small-Gray.png',
  Gray: 'https://i.ibb.co/bsgJyKx/Gray.png',
  Gold: 'https://i.ibb.co/1ZVm0f4/Gold.png',
  Space: 'https://i.ibb.co/JKSHPMM/Space.png',
};

document.querySelector('.modal-cart__add')
  .addEventListener('click', (event) => {
    const id = +new Date();

    if (colorBaby.length === 0 || quantity === 0) {
      return;
    }

    total = quantity;

    let urlPic = '';

    for (const key in url) {
      if (key === colorBaby) {
        urlPic = url[key];
      }
    }

    itemsList.insertAdjacentHTML('beforeend', `
      <li class="modal-cart__product">
        <img
          src="${urlPic}"
          alt=""
          class="modal-cart__small-pic"
        >
        <div class="modal-cart__new-text">
          Color: <span modal-cart__indent>${colorBaby}</span>
        </div>
        <div class="modal-cart__new-amount">
          <button type="button" class="modal-cart__new-subtraction">
          </button>
          <div id = "${id}" class="modal-cart__new-quantity">${quantity}</div>
          <button type="button" class="modal-cart__new-addition">
          </button>
        </div>
        <button type="button" class="modal-cart__min-close"></button>
      </li>
    `);

    const prev = +sum.innerHTML.slice(1);

    sum.innerHTML = `$${((cost * total) + prev).toFixed(2)}`;
  });

itemsList.addEventListener('click', (event) => {
  if (!event.target.matches('.modal-cart__min-close')) {
    return;
  }

  event.target.closest('.modal-cart__product').remove();

  const numberSubtraction = document
    .querySelectorAll('.modal-cart__new-quantity');
  let newSumProducts = 0;

  for (let good = 0; good < numberSubtraction.length; good++) {
    newSumProducts += +numberSubtraction[good].innerHTML;
  }

  total = newSumProducts;

  sum.innerHTML = `$${(cost * newSumProducts).toFixed(2)}`;
});

itemsList.addEventListener('click', (event) => {
  const item = event.target;
  let calc = 0;

  if (item.classList.contains('modal-cart__new-addition')) {
    const prodectNum = event.target.previousElementSibling.id;
    let colNum = +event.target.previousElementSibling.innerHTML;
    const prev1 = +sum.innerHTML.slice(1);

    colNum++;

    calc++;

    sum.innerHTML = `$${((cost * calc) + prev1).toFixed(2)}`;

    document.getElementById(`${prodectNum}`)
      .innerHTML = colNum;
  }

  if (item.classList.contains('modal-cart__new-subtraction')) {
    const prodectNum = event.target.nextElementSibling.id;
    let colNum = +event.target.nextElementSibling.innerHTML;
    const prev1 = +sum.innerHTML.slice(1);

    if (colNum > 0) {
      colNum--;
      calc--;
      sum.innerHTML = `$${(prev1 - cost).toFixed(2)}`;
    }

    document.getElementById(`${prodectNum}`)
      .innerHTML = colNum;
  }
});
