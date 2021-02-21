'use strict';

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
