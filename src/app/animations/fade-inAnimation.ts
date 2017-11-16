// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('fadeInAnimation', [

    state ('void', style ({position: 'fixed', width: '100%'})),
    state ('*', style({position: 'fixed', width: '100%'})),
    // route 'enter' transition
    transition(':leave', [
      // css styles at start transition
      style({opacity: 1}),
      // animation and styles at end of transition
      animate('.5s ease-in-out', style({ opacity: 0}))
    ]),
  ]);
