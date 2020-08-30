// there are two possibilities for type casting
const userInputElement1 = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement2 = document.getElementById('user-input') as HTMLInputElement;
