export const formatTime: (e: number) => string = (e) => {
  // const h = Math.floor(e / 3600)
  //   .toString()
  //   .padStart(2, "0");

  const m =
    Math.floor((e % 3600) / 60)
      .toString()
      .padStart(2, "0") ?? "00:00";

  const s =
    Math.floor(e % 60)
      .toString()
      .padStart(2, "0") ?? "00:00";

  //   return h + ":" + m + ":" + s;
  return m + ":" + s;
  //return `${h}:${m}:${s}`;
};

// export const formatTime: (timeInSeconds: number) => string = (timeInSeconds) => {
//   const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);
//   const minutes = result.substr(3, 2);
//   const seconds = result.substr(6, 2);

//   // return {
//   //   minutes: result.substr(3, 2),
//   //   seconds: result.substr(6, 2),
//   // };

//   return minutes + ":" + seconds;
// };
