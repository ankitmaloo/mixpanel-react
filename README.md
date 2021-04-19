# mixpanel-react

I was trying to find an implementation of Mixpanel on React for the project I am working on. There was no official implementation for react per se, till the point of writing. 

There is react-mixpanel which uses React's Context API. This is a good implementation but too complex for me, when I was just trying to get things done quickly and launch 

1. It requires you to pass Mixpanel to props everytime you want to track something out of render.
2. It needs you to do an environment check while tracking so as to get correct analytics numbers - not inflated by your development work.  

So, I arrived at this to fix both of those issues. 

## Implementation
We will be using mixpanel-browser for calling the Mixpanel API. This is the official Mixpanel library so it will be the most updated one. 

We will be using a small wrapper function to send events to Mixpanel. 

### Requirements

1. Run npm install mixpanel-browser --save in your project folder
2. Save the Mixpanel.js file anywhere in your project folder. Update the file with your API key. 
3. Just import Mixpanel in any other file, and use it like you would call any other react function. Just like below. 
 
 >  import { Mixpanel } from './Mixpanel';
 >  

I will add more functions as they are used. Any function enabled by Mixpanel Javascript advanced can be used in the same way in the library too. 
