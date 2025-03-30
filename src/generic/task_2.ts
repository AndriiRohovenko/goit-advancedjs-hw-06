/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<Type extends keyof AllType>(
  top: Partial<Pick<AllType, Type>>,
  bottom: Partial<Pick<AllType, Type>>
): AllType {
  return {
    name: (top as AllType).name,
    color: (top as AllType).color,
    position: (bottom as AllType).position,
    weight: (bottom as AllType).weight,
  };
}
