Requirements

1. Run npm install mixpanel-browser --save in your project folder

2. Save this Mixpanel.js file anywhere in your folder. Update the key in init with your Mixpanel project token.

3. Use this snippet to Mixpanel anywhere in your React repo.


  import { Mixpanel } from './Mixpanel';

  to track:

  - Mixpanel.track(<<Event>>)

  - Mixpanel.people.set(<<Properties>>)

  - Mixpanel.identify(<< User >>)


TRACKING_ACTIVE is used if you want to turn off tracking in a dev environment. 
