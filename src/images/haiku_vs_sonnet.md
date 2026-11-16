# Haiku vs Sonnet: валідація getDiscount

## 1. Прогноз (записаний до запуску)

Різниця буде невеликою, потужніша модель тут не буде очевидно кращою. Завдання крихітне: кілька `if` і один рядок підсумку. Обидві моделі, найімовірніше, перевірять тип `price` і `code`, відхилять від'ємні значення й напишуть майже однакове резюме. Максимум, чого чекаю від Sonnet: трохи ретельніші крайні випадки (NaN, Infinity, пробіли чи регістр у промокоді) і точніші повідомлення про помилки.

## 2. Запит (однаковий для обох моделей)

Вихідна функція:

```js
function getDiscount(price, code) {
  if (code === "SAVE10") return price * 0.9;
  if (code === "SAVE20") return price * 0.8;
  return price;
}
```

Запит: «додати валідацію вхідних даних та коротко підсумувати, що вона робить, в один рядок».

## 3. Відповіді поруч

### Haiku

```js
function getDiscount(price, code) {
  if (typeof price !== "number" || !Number.isFinite(price) || price < 0) {
    throw new TypeError("price має бути невід'ємним скінченним числом");
  }
  if (typeof code !== "string") {
    throw new TypeError("code має бути рядком");
  }
  if (code === "SAVE10") return price * 0.9;
  if (code === "SAVE20") return price * 0.8;
  return price;
}
```

Підсумок: Функція перевіряє, що `price` є скінченним невід'ємним числом, а `code` є рядком, інакше кидає `TypeError`; далі застосовує знижку 10% або 20% за кодом, а невідомий код повертає ціну без змін.

### Sonnet

```js
function getDiscount(price, code) {
  if (typeof price !== "number" || !Number.isFinite(price) || price < 0) {
    throw new TypeError("price must be a non-negative finite number");
  }
  if (code !== undefined && code !== null && typeof code !== "string") {
    throw new TypeError("code must be a string, null or undefined");
  }

  if (code === "SAVE10") return price * 0.9;
  if (code === "SAVE20") return price * 0.8;
  return price;
}
```

Підсумок: функція перевіряє, що `price` — скінченне невід'ємне число, а `code` — рядок (або відсутній), і кидає `TypeError` за некоректних даних, інакше застосовує знижку за промокодом.

## 4. Висновок

Різниця виявилася малою. Обидві моделі дали робочу валідацію й однорядкове резюме. Єдина практична відмінність: Sonnet зберіг поведінку оригіналу і дозволив виклик без промокоду (`undefined` / `null`), а Haiku кидає `TypeError` на `getDiscount(100)`, що ламає існуючі виклики. Зате резюме Haiku повніше: воно згадує 10% і 20%. На 2 млн запусків (оцінка 150 токенів на вхід і 250 на вихід) Haiku коштує приблизно $280, Sonnet приблизно $5 600, тобто у 20 разів більше. Для такого завдання переплачувати немає сенсу: краще взяти Haiku, а єдину проблему закрити уточненням у промпті («code необов'язковий») і кількома тестами.

Примітка: це по одному запуску на модель, а кількість токенів на запуск моя оцінка.
