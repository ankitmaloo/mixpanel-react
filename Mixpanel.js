import mixpanel from 'mixpanel-browser';

mixpanel.init('YOUR_MIXPANEL_TOKEN');

let TRACKING_ACTIVE = true;  // Set to false if working in dev environment. Or use a snippet which evaluates to true in production like env === production

let actions = {
  identify: (id) => {
    if (TRACKING_ACTIVE) mixpanel.identify(id);
  },
  alias: (id) => {
    if (TRACKING_ACTIVE) mixpanel.alias(id);
  },
  track: (name, props) => {
    if (TRACKING_ACTIVE) mixpanel.track(name, props);
  },
  track_links: (div, name, props) => {
    if (TRACKING_ACTIVE) mixpanel.track_links(div, name, props);
  },
  register: (props) => {
    if (TRACKING_ACTIVE) mixpanel.register(props);
  },
  people: {
    set: (props) => {
      if (TRACKING_ACTIVE) mixpanel.people.set(props);
    },
    increment: (props) => {
      if (TRACKING_ACTIVE) mixpanel.people.increment(props);
    },
  },
};

export let Mixpanel = actions;
