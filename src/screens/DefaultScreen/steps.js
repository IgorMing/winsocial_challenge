const steps = [
  {
    key: 'name',
    placeholder: 'Ex: João da Silva',
    title: 'Digite seu',
    bold: 'nome completo',
  },
  {
    key: 'email',
    placeholder: 'Ex: joao@dominio.com',
    title: 'Digite seu',
    bold: 'email',
  },
  {
    key: 'phone',
    placeholder: 'Ex: (19) 99573-4065',
    title: 'Digite seu',
    bold: 'celular',
  },
  {
    key: 'doc',
    placeholder: 'Ex: 335.264.698-81',
    title: 'Digite seu',
    bold: 'CPF',
  },
  {
    key: 'password',
    placeholder: 'Ex: ******',
    title: 'Digite sua',
    bold: 'senha',
    secure: true,
  },
];

export const orderedKeys = ['name', 'email', 'phone', 'doc', 'password'];

function calcPercentage(index) {
  const part = 100 / orderedKeys.length;
  return part * index + 1;
}

export const getStepByIndex = (index = 0) => {
  const step = steps.find(each => each.key === orderedKeys[index]);
  return {
    index,
    percentage: calcPercentage(index),
    ...step,
  };
};
