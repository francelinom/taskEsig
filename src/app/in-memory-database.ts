import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Task } from './views/task/shared/task.model';

export class InMemoryDatabase implements InMemoryDbService {
  // tslint:disable-next-line:typedef
  createDb() {
    const task: Task[] = [
      {id: 1, title: 'Estudar Angular', description: 'Estudar Angular até quinta feira', responsible: 'Francelino', priority: 'alta', date: '15/01/2021'},
      {id: 2, title: 'Estudar JS', description: 'Estudar Angular até quinta feira', responsible: 'Eduardo', priority: 'alta', date: '15/01/2021'},
      {id: 3, title: 'Estudar Padrão de Projeto', description: 'Estudar Angular até quinta feira', responsible: 'Milene', priority: 'alta',
        date: '15/01/2021'},
      {id: 4, title: 'Estudar Teste', description: 'Estudar Angular até quinta feira', responsible: 'Maria', priority: 'alta', date: '15/01/2021'},
      {id: 5, title: 'Estudar CSS ', description: 'Estudar Angular até quinta feira', responsible: 'João', priority: 'alta', date: '15/01/2021'}
    ];
    return { task };
  }
}
