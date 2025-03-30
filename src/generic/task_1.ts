/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise<Type>(): Promise<Type> {
  return new Promise((resolve) => {
    resolve(["Text", 50] as Type);
  });
}

getPromise<(string | number)[]>().then((data) => {
  console.log(data);
});
