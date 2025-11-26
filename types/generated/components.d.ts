import type { Schema, Struct } from '@strapi/strapi';

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

export interface ShopOpeningHours extends Struct.ComponentSchema {
  collectionName: 'components_shop_opening_hours';
  info: {
    displayName: 'opening_hours';
    icon: 'clock';
  };
  attributes: {
    close: Schema.Attribute.Time & Schema.Attribute.Required;
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
    > &
      Schema.Attribute.Required;
    isClosed: Schema.Attribute.Boolean;
    open: Schema.Attribute.Time & Schema.Attribute.Required;
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

export interface ShopSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_shop_social_medias';
  info: {
    displayName: 'Social Media';
    icon: 'discuss';
  };
  attributes: {
    name: Schema.Attribute.Enumeration<
      ['Facebook', 'Instagram', 'Threads', 'Website', 'Whatsapp']
    >;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'event.category': EventCategory;
      'shop.opening-hours': ShopOpeningHours;
      'shop.services': ShopServices;
      'shop.social-media': ShopSocialMedia;
    }
  }
}
