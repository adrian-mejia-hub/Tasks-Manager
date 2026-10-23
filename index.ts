/*
El mensaje de commit sigue la convención Conventional Commits: 
  feat: para nueva funcionalidad.
  fix: para correcciones.
  chore: para tareas de mantenimiento. 
Usaremos esta convención durante todo el proyecto.
*/

// import readline from 'readline/promises';
// import { stdin as input, stdout as output } from 'process';

// const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
let systemName: string = "Task Manager";
let version: number = 0.2;
let username: string = "adrian_mejia";

console.log(
  `  ================================
       ${systemName} v.${version}
     ¡Bienvenido, ${username}!
  ================================`
);

// 🚫 No eliminar las líneas de abajo ⬇️
// rl.close();

