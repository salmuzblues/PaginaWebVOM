"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import the required animation functions from the angular animations module
var animations_1 = require("@angular/animations");
exports.fadeInAnimation = 
// trigger name for attaching this animation to an element using the [@triggerName] syntax
animations_1.trigger('fadeInAnimation', [
    animations_1.state('void', animations_1.style({ position: 'fixed', width: '100%' })),
    animations_1.state('*', animations_1.style({ position: 'fixed', width: '100%' })),
    // route 'enter' transition
    animations_1.transition(':leave', [
        // css styles at start transition
        animations_1.style({ opacity: 1 }),
        // animation and styles at end of transition
        animations_1.animate('.5s ease-in-out', animations_1.style({ opacity: 0 }))
    ]),
]);
