const uploadBox = document.querySelector('.upload-box'),
  reviewImg = uploadBox.querySelector('img'),
  fileInput = uploadBox.querySelector('input'),
  widthInput = document.querySelector('.width input'),
  heightInput = document.querySelector('.height input'),
  radioInput = document.querySelector('.radio input');

let ogImageRadio;

const loadFile = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  reviewImg.src = URL.createObjectURL(file);
  reviewImg.addEventListener('load', () => {
    widthInput.value = reviewImg.naturalWidth;
    heightInput.value = reviewImg.naturalHeight;
    ogImageRadio = reviewImg.naturalWidth / reviewImg.naturalHeight;
    document.querySelector('.wrapper').classList.add('active');
  });

  console.log(file);
};

widthInput.addEventListener('keyup', () => {
  const height = radioInput.checked
    ? widthInput.value / ogImageRadio
    : heightInput.value;
  heightInput.value = Math.floor(height);
});

heightInput.addEventListener('keyup', () => {
  const width = radioInput.checked
    ? heightInput.value * ogImageRadio
    : widthInput.value;
  widthInput.value = Math.floor(width);
});

fileInput.addEventListener('change', loadFile);
uploadBox.addEventListener('click', () => {
  fileInput.click();
});
