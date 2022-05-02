import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from './../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [
    {
    itemName: 'Shopping',
    itemDueDate: '01-01-2023',
    itemPriority: 'Low',
    itemCategory: 'personal'
  },
  {
    itemName: 'Practice',
    itemDueDate: '01-10-22',
    itemPriority: 'High',
    itemCategory: 'personal'
  },
  {
    itemName: 'Meeting',
    itemDueDate: '02-07-22',
    itemPriority: 'Middle',
    itemCategory: 'work'
  },

  ]

  today: number = Date.now();
  constructor(private modalCtrl: ModalController) { }

  async addTask() {
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
    });


    modal.onDidDismiss().then(newTaskObjt => {
      console.log(newTaskObjt);
      this.todoList.push(newTaskObjt.data);
    })

    return await modal.present();
  }

  delete(index){
    this.todoList.splice(index, 1)
  }
  complete(index){
    this.todoList.splice(index, 1)
  }



}