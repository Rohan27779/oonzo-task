import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() logoutClicked = new EventEmitter<void>();

  logout() {
    // Add logic to clear user authentication or perform logout actions here
    // For example, you can clear the user's session or token
    // After logout, you can redirect the user to the login page
    this.logoutClicked.emit();
  }

}
