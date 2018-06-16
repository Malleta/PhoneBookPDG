import {Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgbModal, NgbPagination} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public Persons: IPerson[];
  public searchInput: string;
  public showDeleteButton: boolean;
  public person: IPerson;

  @ViewChild('messageModal') messageModal: ElementRef;
  public MessageModalTitle: string;
  public MessageModalBody: string;

  public p = 1;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private modalService: NgbModal) {
    this.getAll();
  }

  getAll(): void {
    this.http.get<IPerson[]>('/api/GetAll').subscribe(result => {
      this.Persons = result;
    }, error => console.error(error));
  }

  deletePerson(Id: number): void {
    this.http.delete('/api/Delete/' + Id).subscribe(result => {
      if (result === null) {
        this.getAll();
        this.showMessageModal('Successfully deleted', 'Selected person is successfully deleted');
      }
    }, error => console.log(error));
  }

  addPerson(person: IPerson): void {
    this.http.post('/api/NewPerson', person).subscribe(result => {
      if (result === null) {
        this.getAll();
        this.showMessageModal('Successfully added', 'Person is successfully added');
      }
    }, error => console.log(error));
  }

  showModal(content, person?): void {
    this.modalService.open(content);
    this.person = person;
  }

  showMessageModal(title: string, body: string): void {
    this.modalService.open(this.messageModal);
    this.MessageModalTitle = title;
    this.MessageModalBody = body;
  }
}

interface IPerson {
  id?: number;
  firstName: string;
  lastName: string;
  telephoneNumber: string;
}
