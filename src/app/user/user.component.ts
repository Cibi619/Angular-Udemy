import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // using @Input() decorator
    @Input({ required: true }) user!: {
      id: string;
      name: string;
      avatar: string;
    }
    @Input({required: true}) selected!: boolean;
    @Output() userClicked = new EventEmitter<string>();
  // the above can be achieved with signals
    // avatar = input.required<string>()
    // name = input<string>()

    get imagePath() {
      return 'assets/users/' + this.user.avatar;
    }
    // imagePath = computed(() => 'assets/users/' + this.avatar())
    onSelected() {
      this.userClicked.emit(this.user.id)
    }
}
