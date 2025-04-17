import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsApps extends Struct.ComponentSchema {
  collectionName: 'components_elements_apps';
  info: {
    displayName: 'apps';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    price: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.apps': ElementsApps;
    }
  }
}
