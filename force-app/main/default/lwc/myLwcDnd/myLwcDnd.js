import { LightningElement, track } from 'lwc';
import { tasks } from 'c/data';

export default class Lwcdnd extends LightningElement {
    @track tasklist = tasks;
    @track leftTasks = [];
    @track rightTasks = [];

    connectedCallback() {
        this.distributeTasks();
    }

    distributeTasks() {
        let curLeftTasks = [];
        let curRightTasks = [];
        this.tasklist.forEach(function(t){
            if(t.category === "wip") {
                curLeftTasks.push(t);
            } else {
                curRightTasks.push(t);
            }
        });

        this.leftTasks = curLeftTasks;
        this.rightTasks = curRightTasks;
    }
    handleListItemDrag(evt) {
        // eslint-disable-next-line no-console
        console.log('Dragged id is: ' + evt.detail);
        this.draggingid = evt.detail;
    }
    handleItemDrop(evt) {
        let id = this.draggingid;
        let category = evt.detail;

        let tasks1 = this.tasklist.filter((task)=> {
			if (task.taskid === id){
			task.category = category;
			}              
			return task;       
		});

        this.tasklist = tasks1;
        this.distributeTasks();
    }
    handlelistitemdrop(evt){
        var draggedName;
        var dropedName;
        let id = this.draggingid;
        let dropedId = evt.detail;
        // eslint-disable-next-line no-console
        console.log("Dropedd In In Dnd"+dropedId);
        
        let tasks1 = this.tasklist.filter((task)=> {
			if (task.taskid === id){
                draggedName = task.name;
            }
            if(task.taskid === dropedId){
                dropedName = task.name;
            }            
			return task;       
        });
        let tasks2 = tasks1.filter((task)=> {
			if (task.taskid === id){
                 task.name = dropedName;
            }
            if(task.taskid === dropedId){
               task.name = draggedName;
            }            
			return task;       
		});

        this.tasklist = tasks2;
        this.distributeTasks();
    }
}