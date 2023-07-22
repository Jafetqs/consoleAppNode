import inquirer from 'inquirer';
import 'colors';

//Configuración de inquierer y los menús interactivos en consola.

const questions = [
    {
        type: 'list',
        name: 'opt',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value:'1',
                name:`${'1.'.blue} Crear tarea`
            },
            {
                value:'2',
                name:`${'2.'.blue} Ver tareas`
            },
            {
                value:'3',
                name:`${'3.'.blue} Listar tareas completadas`
            },
            {
                value:'4',
                name:`${'4.'.blue} Listar tareas pendientes`
            },
            {
                value:'5',
                name:`${'5.'.blue} Completar tarea(s)`
            },
            {
                value:'6',
                name:`${'6.'.blue} Eliminar tarea(s)`
            },
            {
                value:'0',
                name:`${'0.'.red}  Salir`
            },
        ],
    }
];

const pause = async() =>{
    const pauseKey = [
        {
            type:'input',
            name: 'pause',
            message: `Presione ${'ENTER'.red} para continuar`
        }
    ];
    console.log('\n');
    await inquirer.prompt(pauseKey);
    
}

const read = async(message) => {
    const question = [
        {
            type:'input',
            name:'desc',
            message,
            validate(value){
                if(value.length ===0){
                    return 'Por favor ingrese un valor...'
                }
                return true;
            }

        }
    ];
    const {desc} = await inquirer.prompt(question);
    return desc;

}
const deleteList = async(tasks = []) => {

    const choices = tasks.map( (task,i) => {
        const idx = `${i+1}.`.green;
        return {
            value: task.id,
            name: `${idx} ${task.desc}`
        }
    });
    choices.push({
        value: '0',
        name: '* Cancelar *'.red
    });
    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'borrar',
            choices
        }
    ];
    const {id} = await inquirer.prompt(preguntas);
    return id;
}
const confirm = async(message) =>{
    const question = [
        {
            type:'confirm',
            name:'ok',
            message,
        }
    ];
    const {ok} = await inquirer.prompt(question);
    return ok;
}
const checkList = async(tasks = []) => {

    const choices = tasks.map( (task,i) => {
        const idx = `${i+1}.`.green;
        return {
            value: task.id,
            name: `${idx} ${task.desc}`,
            checked: true
        }
    });
    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
        }
    ];
    const {ids} = await inquirer.prompt(pregunta);
    return ids;
}
const principalMenu = async () => {
    console.clear();
    console.log('==========================='.cyan);
    console.log('   Seleccione una opción   '.rainbow);
    console.log('===========================\n'.cyan);

    const {opt} = await inquirer.prompt(questions);// entre {} porque opt regresa un objeto entonces hay que desestructurarlo para conseguir la opt.
    return opt;
}

export { principalMenu,pause,read,deleteList,confirm,checkList };