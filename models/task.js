import {v4} from 'uuid';


class Task {
    // id = '';
    // desc = '';
    // completoEn = null;

    constructor(desc){
        this.id = v4();
        this.desc = desc;
        this.completoEn = null;
    }
}
export default Task;