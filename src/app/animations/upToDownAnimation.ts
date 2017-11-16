// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const upToDownAnimation =

  trigger('upToDownAnimation', [

    state ('void', style ({position: 'fixed', width: '100%'})),
    state ('*', style({position: 'fixed', width: '100%'})),
    /*
     transition(':enter', [ // before 2.1: transition('void => *', [

     style({ transform: 'translateY(100%)' }),
     animate('0.5s ease-in-out', style({ transform: 'translateY(0%)'}))

     ]),
     */
    transition(':leave', [  // before 2.1: transition('* => void', [

      style({ transform: 'translateY(0%)'}),
      animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)'}))
    ])

  ]);

