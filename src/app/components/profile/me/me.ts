import {
  Component,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { UserDto } from '../../../interfaces/user';
import { User as UserService } from '../../../services/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-me',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './me.html',
  styleUrls: ['./me.css'],
})
export class Me {
  me: UserDto | null = null;
  profilePictureUrl: string | null = null;

  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {
    const userId = sessionStorage.getItem('userId');
    if (!userId) return;

    this.userService.getUserById(userId).subscribe({
      next: (user) => {
        this.me = user;

        this.userService.getUserProfilePicture(userId).subscribe({
          next: (url: string) => {
            this.profilePictureUrl = url;
            this.cdr.detectChanges();
          },
        });
      },
    });
  }

  onNewsletterToggle() {
    if (!this.me) return;
    const userId = sessionStorage.getItem('userId');
    if (!userId) return;

    this.userService.toggleNewsletter(userId).subscribe({
      error: () => {
        if (this.me) {
          this.me.newsletter_subscribed = !this.me.newsletter_subscribed;
        }
      },
    });
  }

  submitEdit() {
    if (!this.me) return;

    const userId = sessionStorage.getItem('userId');
    if (!userId) return;

    const birthdateStr = this.me.birthdate
      ? new Date(this.me.birthdate).toISOString().split('T')[0]
      : null;

    const payload = {
      name: this.me.name,
      lastname: this.me.lastname,
      gender: this.me.gender,
      birthdate: birthdateStr,
      phone_number: this.me.phone_number ?? null,
    };

    this.userService.updateUser(userId, payload).subscribe({
      next: () => {
        this.editModalRef.nativeElement.close();
      },
      error: () => {},
    });
  }

  @ViewChild('editModal') editModalRef!: ElementRef<HTMLDialogElement>;

  openModal() {
    this.editModalRef.nativeElement.showModal();
  }
}
