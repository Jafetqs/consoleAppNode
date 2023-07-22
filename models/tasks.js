import Task from "./task.js";
import 'colors';


class Tasks {

    constructor(){
        this._list = {};
    }
    createTask(desc){
        const task = new Task(desc);
        this._list[task.id] = task;
    }
    get listArr (){
        const listado = [];
        //esto de acá es para que se vea el arreglo más ordenado (se ordena segun las key para listarlo más fácil )
        Object.keys(this._list).forEach(key =>{
            const task = this._list[key];
            listado.push(task);
        });
        return listado;
    }
    loadTasksArr(tasks = []){
        tasks.forEach(task => {
            this._list[task.id] = task;
        });
    }
    sortedList(){
 
        let tasks = this.listArr;
        console.log('');   
        tasks.forEach((task,i) => {
            i++;
            // *****************forma 1*********************
            // if(task.completoEn === null){
            //     console.log(`${`${i}`.blue}. ${task.desc} :: ${'Pendiente'.red}`)
            // }else{
            //     console.log(`${`${i}`.blue}. ${task.desc} :: ${'Completada'.green}`)
            // }
            //*****************forma 2**********************
            i = `${i+'.'}`.cyan
            // console.log(task.desc);    
            const {desc, completoEn} = task;  
            const estado = (completoEn)     
                                ? completoEn.green
                                : 'Pendiente'.red;
            console.log(`${i} ${desc} :: ${estado}`);
        });
    }
    listCompPend(completed = true){
        
        let tasks = this.listArr;
        let i = 0;
        console.log('');   
        tasks.forEach((task) => {

            // console.log(task.desc);    
            const {desc, completoEn} = task;  
            const estado = (completoEn)     
                                ? completoEn.green
                                : 'Pendiente'.red;
            if(completed){
                if(completoEn){
                    i++;
                    console.log(`${i.toString().cyan}${'.'.green} ${desc} :: ${estado}`);
                }
            }else{
                if(!completoEn){
                    i++;
                    console.log(`${i.toString().cyan}${'.'.red} ${desc} :: ${estado}`);
                }
            }
        });
    }
    deleteTask(id){
        if(this._list[id]){
            delete this._list[id];
        }
    }
}

export default  Tasks;

