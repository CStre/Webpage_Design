import { Component } from '@angular/core';
import { Person } from './personal';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent {
  pronouns = ['He/Him', 'She/Her',
    'They/Them', 'Other'];

  residents = ['Yes', 'No'];

  halls = ['Appalachian Heights', 'Belk Hall', 'Cannon Hall',
    'Cone Hall', 'Dogwood Hall', 'Doughton Hall', 'Elkstone Hall',
    'Frank Hall', 'Laurel Creek Hall', 'Living Learning Center (LLC)',
    'Mountain Laurel Hall', 'Mountaineer Hall', 'Newland Hall',
    'New River Hall', 'Raven Rocks', 'Sleep Inn', 'Summit Hall',
    'Thunder Hill', 'White Hall'];

  rooms_app = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `AppalachianHeights RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_belk = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `Belk RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_cannon = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `Cannon RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_cone = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `Cone RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_dog = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `Dogwood RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_dough = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `Doughton RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_elk = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `Elkstone RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_frank = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `Frank RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_laurel = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `LaurelCreek RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_mount = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `Mountaineer RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_newland = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `NewLand RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_newriver = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `NewRiver RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_raven = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `RavenRocks RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_sleep = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `SleepInn RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_summit = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `Summit RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_thunder = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `ThunderHill RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_white = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `White RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_trans = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `MountainLaurel RM_${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_llc = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `LivingLearningCenter RM_${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);


  model = new Person(0, '', '', '', '', '', '', '');
  submitted = false;
  showAdditional1 = false;
  showAdditional2 = false;

  onSubmit() {
    this.submitted = true;
  }

  newSubmission() {
    this.model = new Person(1, '', '', '', '', '', '');
  }

  showAdditionalSection1() {
    if (this.model.pronoun === 'pronoun[3]') {
      this.showAdditional1 = true;
    }
    else {
      this.showAdditional1 = false;
    }
  }

  showAdditionalSection2() {
    if (this.model.resident === 'resident[1]') {
      this.showAdditional2 = true;
    }
    else {
      this.showAdditional2 = false;
    }
  }
}
