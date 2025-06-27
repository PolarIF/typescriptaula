function promessa(string: string): Promise<string> {
  return new Promise((resolve,) => {
    setTimeout(() => {
      resolve(string);
    }, 1000);
  });
}