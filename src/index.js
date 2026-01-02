import './styles.css';
import catImage from './assets/images/webpack.jpg';

const container = document.getElementById('image-container');
const img = document.createElement('img');
img.src = catImage;
img.alt = 'Webpack Cat';

container.appendChild(img);

console.log('Проект успешно собран и оформлен!');