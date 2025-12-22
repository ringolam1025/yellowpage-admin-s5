import type { Schema, Struct } from '@strapi/strapi';

export interface CommonSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_common_social_medias';
  info: {
    displayName: 'Social Media';
  };
  attributes: {
    name: Schema.Attribute.Enumeration<
      [
        'Facebook',
        'Instagram',
        'Threads',
        'Website',
        'Whatsapp',
        'Youtube',
        'LinkedIn',
        'Telegram',
        'Snapchat',
        'Reddit',
        'X',
        'Discord',
        'Line',
        'Signal',
        'GitHub',
        'Truth Social',
      ]
    >;
    url: Schema.Attribute.String;
  };
}

export interface EventCategory extends Struct.ComponentSchema {
  collectionName: 'components_event_categories';
  info: {
    displayName: 'Category';
  };
  attributes: {
    category: Schema.Attribute.Enumeration<
      [
        'Community',
        'Local Fun',
        'Arts & Shows',
        'Food & Markets',
        'Health & Wellness,',
        'Business & Education,',
        'Sports & Outdoors,',
        'Music & Nightlife,',
        'Family & Kids',
      ]
    >;
  };
}

export interface InfluencerInfluencer extends Struct.ComponentSchema {
  collectionName: 'components_influencer_influencers';
  info: {
    displayName: 'influencer';
  };
  attributes: {
    desc: Schema.Attribute.RichText;
    platform: Schema.Attribute.Enumeration<
      [
        'Facebook',
        'Instagram',
        'Threads',
        'Website',
        'Whatsapp',
        'Youtube',
        'LinkedIn',
        'Telegram',
        'Snapchat',
        'Reddit',
        'X',
        'Discord',
        'Line',
        'Signal',
        'GitHub',
        'Truth Social',
      ]
    >;
    thumbnail: Schema.Attribute.Media<'images', true>;
    url: Schema.Attribute.String;
  };
}

export interface ShopOpeningHours extends Struct.ComponentSchema {
  collectionName: 'components_shop_opening_hours';
  info: {
    displayName: 'opening_hours';
    icon: 'clock';
  };
  attributes: {
    close: Schema.Attribute.Time;
    day: Schema.Attribute.Enumeration<
      [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ]
    >;
    isClosed: Schema.Attribute.Boolean;
    open: Schema.Attribute.Time;
  };
}

export interface ShopRewards extends Struct.ComponentSchema {
  collectionName: 'components_shop_rewards';
  info: {
    displayName: 'Rewards';
  };
  attributes: {
    desc: Schema.Attribute.String;
    end_date: Schema.Attribute.Date;
    reward: Schema.Attribute.String;
    start_date: Schema.Attribute.Date;
  };
}

export interface ShopServices extends Struct.ComponentSchema {
  collectionName: 'components_shop_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    duration: Schema.Attribute.Decimal;
    name: Schema.Attribute.String;
    price: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.social-media': CommonSocialMedia;
      'event.category': EventCategory;
      'influencer.influencer': InfluencerInfluencer;
      'shop.opening-hours': ShopOpeningHours;
      'shop.rewards': ShopRewards;
      'shop.services': ShopServices;
    }
  }
}
