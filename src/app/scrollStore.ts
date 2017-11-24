import { Optional, Injectable, NgModule } from '@angular/core';
import { NavigationStart, NavigationEnd, Router } from '@angular/router';


/* being able to store the previos scroll position we need to a storage to save the position, I prefer to use the native sessionStorage */


@Injectable()
export class SessionStorageService {
  /* first method */
  write ( key: string, value: any ) {
    if ( value ) {
      value = JSON.stringify( value );
    }
    sessionStorage.setItem( key, value );
  }
  /* Second Method */
  read<T> ( key: string ): T {
    const value: string = sessionStorage.getItem( key );

    if ( value && value !== 'undefined' && value !== 'null' ) {
      return <T>JSON.parse( value );
    }
  }
}

/*  create a Scroll Store */
/* I have injected the router, because considering the usage of this plugin only would make sense if you have a
  multi page aplication */

export class ScrollStore {
  constructor(@Optional() private router: Router, private storageService: SessionStorageService) {
    if (router) {
      this.subscribeToRouter();
    }
  }

/* I will subscribe to it is event and every time  there is a page navigation, I call my function to scroll to top of the page,
   or retrive the previos position */

 subscribeToRouter () {
  this.router.events.subscribe( event => {
    if ( event instanceof NavigationStart ) {
      this.saveScrollPos( this.currentUrl );
    }
    if ( event instanceof NavigationEnd ) {
      this.retrieveScrollPos( event );
    }
  } );
}


  /*  this method is simple a get method that always returns the current url which router will give us */
  private get currentUrl () {
    return this.router.url;
  }
  /*  Getter and Setter for document.body.scrollTop */
  private get scrollTop () {
    return document.body.scrollTop;
  }

  private set scrollTop ( number: number ) {
    document.body.scrollTop = number;
  }

  /* when we start  the navigation, We always want to save the current scroll with the current scroll position
   with the current url, so if we came right back to this page, we can retrieve it and scroll to the previous position */

  private saveScrollPos ( url ) {
    this.storageService.write( url, this.scrollTop );
  }
  /* what we want is at the end of the navigation to the page, check if there is a saved scroll position against the new url and if
   the is one, scroll to that, otherwise scroll to zero (top of the page)  */
  private retrieveScrollPos ( event: NavigationStart ) {
    const retrievedScrollPos = this.storageService.read( event.url );
    if ( retrievedScrollPos === undefined ) {
      console.log( 'No saved position for ' + event.url + ' scroll to zero instead' );
      this.scrollToZero();
    } else {
      console.log( 'Postion found for ' + event.url + ' scroll to' + retrievedScrollPos );
      this.scrollTo( retrievedScrollPos as number );
    }

  }

  /* what is happening is, when retriveScrollPos is called, I am checking  our storageService to see if there
    is a position saved against the url, if there is one, I say scrollTo (retriveScrollPos) and if there is not, means we should
     scroll to top, which I call scrollToZero*/
  private scrollToZero () {
    this.scrollTop = 0;
  }
  private scrollTo ( retrievedScrollPos: number ) {
    this.scrollTop = retrievedScrollPos;
  }


}


@NgModule( {
  providers : [
    SessionStorageService,
    ScrollStore
  ]
} )
export class ScrollStoreModule {
  constructor ( private scrollStore: ScrollStore ) {

  }
}
