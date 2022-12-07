import Component from '@glimmer/component';
import { APPS, ABOUT, SOCIALS } from '../constants/urls';

export default class FooterComponent extends Component {
  HOME_URL = APPS.HOME;
  WELCOME_URL = APPS.WELCOME;
  EVENTS_URL = APPS.EVENTS;
  MEMBERS_URL = APPS.MEMBERS;
  CRYPTO_URL = APPS.CRYPTO;
  STATUS_URL = APPS.STATUS;
  PROFILE_URL = APPS.PROFILE;

  JOIN_URL = ABOUT.JOIN;
  FAQ_URL = ABOUT.FAQ;
  DISCORD_URL = ABOUT.DISCORD;
  COC_URL = ABOUT.COC;

  LINKEDIN_URL = SOCIALS.LINKEDIN;
  TWITTER_URL = SOCIALS.TWITTER;
  FACEBOOK_URL = SOCIALS.FACEBOOK;
  INSTAGRAM_URL = SOCIALS.INSTAGRAM;
}
