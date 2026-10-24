/*
El mensaje de commit sigue la convención Conventional Commits: 
  feat: para nueva funcionalidad.
  fix: para correcciones.
  chore: para tareas de mantenimiento. 
Usaremos esta convención durante todo el proyecto.
*/

import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
let systemName: string = "Task Manager";
let version: number = 0.3;
let username: string = "adrian_mejia";

console.log(
  `  ================================
       ${systemName} v.${version}
     ¡Bienvenido, ${username}!
  ================================`
);
const tasks: string[] = [];

// Variable para controlar la opción del usuario
let opcion: string = "";

// El ciclo se repite mientras la opción NO sea "4" (Salir)
while (opcion !== "4") {
  console.log("\n--- TASK MENU ---");
  console.log("1. Add task ✍️");
  console.log("2. Delete last task 🗑️");
  console.log("3. Task list 📋");
  console.log("4. Close 👋");

  opcion = await rl.question("Choose an option (1-4): ");

  // 1. Agregar tarea con .push()
  if (opcion === "1") {
    const titulo = await rl.question("Write the task title: ");
    tasks.push(titulo);
    console.log(`✅ Task "${titulo}" was added!`);

  // 2. Eliminar última tarea con .pop()
  } else if (opcion === "2") {
    if (tasks.length === 0) {
      console.log("⚠️ No task to delete.");
    } else {
      const eliminada = tasks.pop();
      console.log(`🗑️ Task "${eliminada}" deleted`);
    }

  // 3. Listar tareas con un ciclo for
  } else if (opcion === "3") {
    if (tasks.length === 0) {
      console.log("📭 No registered tasks.");
    } else {
      console.log("\n📋 Your current tasks:");
      for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i]}`);
      }
    }

  // 4. Salir
  } else if (opcion === "4") {
    console.log("👋 Bye");

  } else {
    console.log("❌ Invalid option. Please choose a number from 1-4.");
  }
}

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();

