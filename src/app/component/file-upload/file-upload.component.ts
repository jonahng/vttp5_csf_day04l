import { Component } from '@angular/core';
import { FilesService } from '../../service/files.service';

@Component({
  selector: 'app-file-upload',
  standalone: false,
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})



export class FileUploadComponent {

selectedFile!: File;
constructor(private filesSvc: FilesService){}


uploadFile() {
  if(this.selectedFile){
    this.filesSvc.uploadFile(this.selectedFile).subscribe({
      next:(response)=>{
        console.log(response);
      },
      error:(error) =>{
        console.log(error);
      }

    });
  }

}

handleFileUpload(event: any) {
this.selectedFile=(event.target.files[0]);
}

}
