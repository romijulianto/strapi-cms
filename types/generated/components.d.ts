import type { Schema, Attribute } from '@strapi/strapi';

export interface UserUserManagement extends Schema.Component {
  collectionName: 'components_user_user_managements';
  info: {
    displayName: 'User Management';
    icon: 'user';
  };
  attributes: {
    Date: Attribute.DateTime;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'user.user-management': UserUserManagement;
    }
  }
}
