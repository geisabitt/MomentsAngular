import { Component } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { __awaiter } from 'tslib';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.css'],
})
export class NewMomentsComponent {
  btnText = 'Compartilhar!';

  constructor(
    private momentService: MomentService, 
    private messagesService: MessagesService,
    private router: Router){}

  async createHandler(moment: Moment){
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image){
      formData.append('image', moment.image);
    }
    //todo

    //enviar para o serice
    await this.momentService.createMoment(formData).subscribe();
    //exibir mensagem
    this.messagesService.add("Momento adicionado com sucesso!")
    //redirect
    this.router.navigate(['/'])    
  }
}
