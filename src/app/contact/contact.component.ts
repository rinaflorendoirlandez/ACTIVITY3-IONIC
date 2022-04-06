import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {

  contactlist  = [
    {id: 1, name: 'Rina F. Irlandez', email: 'rina.irlandezii@evsu.edu.ph'  ,number: '09150857864'},
    {id: 1, name: 'Mae Ann', email: 'maeann.hamtigii@evsu.edu.ph'  ,number: '09272738534'},
    {id: 1, name: 'My Mother', email: 'NONE'  ,number: '09355736472'},
  ]


  constructor(public alertController: AlertController ) {
  }
  async  confirmation(index: number) {
    const alert = await this.alertController.create({
      header: 'Delete?',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
              this.contactlist.splice(index, 1);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', 
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ],
    });

    await alert.present();
  }
  async addUser() {
    let prompt = await this.alertController.create({
      header: 'Add Contact',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
        },{
          name: 'email',
          placeholder: 'Email'
        },
        {
          name: 'number',
          placeholder: 'Number',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: (data) => {
            console.log('Saved clicked');
            
          this.contactlist.push({
            id: data.id,
            name: data.name,
            email: data.email,
            number: data.number,
          });
     
          }
        }
      ]
    });
    await prompt.present();

  }


}