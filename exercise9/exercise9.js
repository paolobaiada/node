function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

const getResults = async (callback) => {
  try {
    const data = await callback("Tina");
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
  try {
    const data2 = await callback("Jorge");
  console.log(data2);
  } catch (error) {
    console.log(error.message)
  }
  
try {
    const data3 = await callback("Julien");
  console.log(data3);
} catch (error) {
    console.log(error.message)
}
  
};
getResults(luckyDraw);
