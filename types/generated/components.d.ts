import type { Schema, Struct } from '@strapi/strapi';

export interface CommonBanner extends Struct.ComponentSchema {
  collectionName: 'components_common_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'videos'>;
    url: Schema.Attribute.String;
  };
}

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
        'Health & Wellness',
        'Business & Education',
        'Sports & Outdoors',
        'Music & Nightlife',
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

export interface ShopPremium extends Struct.ComponentSchema {
  collectionName: 'components_shop_premiums';
  info: {
    displayName: 'Premium';
  };
  attributes: {
    premium_end_date: Schema.Attribute.Date;
    premium_start_date: Schema.Attribute.Date;
    premium_type: Schema.Attribute.Enumeration<['free', 'tier_1', 'tier_2']> &
      Schema.Attribute.DefaultTo<'free'>;
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
    icon: Schema.Attribute.Media<'images', true>;
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
      'common.banner': CommonBanner;
      'common.social-media': CommonSocialMedia;
      'event.category': EventCategory;
      'influencer.influencer': InfluencerInfluencer;
      'shop.opening-hours': ShopOpeningHours;
      'shop.premium': ShopPremium;
      'shop.rewards': ShopRewards;
      'shop.services': ShopServices;
    }
  }
}
