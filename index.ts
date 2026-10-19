import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
let systemName: string = "Sistema de Gestión de Tareas";
let version: number = 0.1;
let username: string = "Adrián Mejía";
console.log("============ " + systemName + " v." + version + " ¡Bienvenido " + username + "!" + "============")

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();