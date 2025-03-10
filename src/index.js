import React from 'react';
import { createRoot } from 'react-dom/client';
import { createElement } from './utils.js';
import App from './app.js';
import Store from './store.js';

const list = [
  { code: 1, title: 'Название элемента', counter: 0 },
  { code: 2, title: 'Некий объект', counter: 0 },
  { code: 3, title: 'Заголовок', counter: 0 },
  { code: 4, title: 'Очень длинное название элемента из семи слов', counter: 0 },
  { code: 5, title: 'Запись', counter: 0 },
  { code: 6, title: 'Шестая запись', counter: 0 },
  { code: 7, title: 'Седьмая запись', counter: 0 },
];

const store = new Store({
  list,
  counter: Math.max(...list.map(item => item.code)) + 1,
});

const root = createRoot(document.getElementById('root'));

store.subscribe(() => {
  root.render(<App store={store} />);
});

// Первый рендер приложения
root.render(<App store={store} />);
