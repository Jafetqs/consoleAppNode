import 'colors';
import { principalMenu, pause, read, deleteList, confirm, checkList } from './helpers/inquirer.js';
import Tasks from './models/tasks.js';
import { leerDB, saveInfo } from './helpers/guardarArchivo.js';

console.clear();

const main = async() => {

    let opt = '';
    const tasks = new Tasks();

    const tasksDb = leerDB();

    if(tasksDb){ //load tasks
        tasks.loadTasksArr(tasksDb);
    }
    // await pause();

    do{
        //imprimir menú
        opt = await principalMenu();

        switch (opt){
            case '1': 
                
                const desc = await read('Descripción: ');
                tasks.createTask(desc);
            break;
            case '2':
                tasks.sortedList();
            break;
            case '3':
                tasks.listCompPend(true);
            break;
            case '4':
                tasks.listCompPend(false);
            break;
            case '5':
                const ids =  await checkList(tasks.listArr);
                console.log(ids);
            break;
            case '6':
                const id = await deleteList(tasks.listArr);
                if(id !=='0'){
                    const confirmation = await confirm("¿Está seguro?".yellow); 
                    if(confirmation){
                        tasks.deleteTask(id);
                        console.log('¡Task eliminada!'.red);
                    }
                }
            break;
            case '':

            break;
        }

        saveInfo(tasks.listArr);
        await pause();

    }while(opt !== '0');
}

main();