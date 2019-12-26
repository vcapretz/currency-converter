export const getDataForCurrency = async currency => {
  const fixerResponse = await fetch(
    `https://fixer.handlebarlabs.com/latest?base=${currency}`,
  );

  return await fixerResponse.json();
};
