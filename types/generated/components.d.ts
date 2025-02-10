import type { Schema, Struct } from '@strapi/strapi';

export interface AccountdetailsAccountDetails extends Struct.ComponentSchema {
  collectionName: 'components_accountdetails_account_details';
  info: {
    displayName: 'accountDetails';
  };
  attributes: {
    balance: Schema.Attribute.BigInteger;
    createdDate: Schema.Attribute.Date;
    currency: Schema.Attribute.String;
    interestRate: Schema.Attribute.Decimal;
    type: Schema.Attribute.String;
  };
}

export interface BankAccountHolder extends Struct.ComponentSchema {
  collectionName: 'components_bank_account_holders';
  info: {
    description: '';
    displayName: 'accountHolder';
  };
  attributes: {
    accountDetails: Schema.Attribute.Component<
      'accountdetails.account-details',
      false
    >;
    address: Schema.Attribute.Component<'bank.address', false>;
    contact: Schema.Attribute.Component<'bank.contact', false>;
    firstname: Schema.Attribute.String;
    lastname: Schema.Attribute.String;
    ssn: Schema.Attribute.BigInteger;
    transcations: Schema.Attribute.Component<'bank.transactionsdetails', true>;
  };
}

export interface BankAccounts extends Struct.ComponentSchema {
  collectionName: 'components_bank_accounts';
  info: {
    displayName: 'accounts';
  };
  attributes: {
    accountholder: Schema.Attribute.Component<'bank.account-holder', true>;
    accountNumber: Schema.Attribute.String;
  };
}

export interface BankAddress extends Struct.ComponentSchema {
  collectionName: 'components_bank_addresses';
  info: {
    displayName: 'address';
  };
  attributes: {
    city: Schema.Attribute.String;
    state: Schema.Attribute.String;
    street: Schema.Attribute.String;
    zipcode: Schema.Attribute.Integer;
  };
}

export interface BankContact extends Struct.ComponentSchema {
  collectionName: 'components_bank_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    email: Schema.Attribute.Email;
    phone: Schema.Attribute.BigInteger;
  };
}

export interface BankTransactionsdetails extends Struct.ComponentSchema {
  collectionName: 'components_bank_transactionsdetails';
  info: {
    displayName: 'transactionsdetails';
  };
  attributes: {
    amount: Schema.Attribute.BigInteger;
    date: Schema.Attribute.Date;
    description: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['Deposit', 'withdrawal', 'Transfer']>;
  };
}

export interface BankTranscations extends Struct.ComponentSchema {
  collectionName: 'components_bank_transcations';
  info: {
    displayName: 'transcations';
  };
  attributes: {
    transcations: Schema.Attribute.Component<'bank.transactionsdetails', false>;
  };
}

export interface CategoriesCategory extends Struct.ComponentSchema {
  collectionName: 'components_categories_categories';
  info: {
    displayName: 'category';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'accountdetails.account-details': AccountdetailsAccountDetails;
      'bank.account-holder': BankAccountHolder;
      'bank.accounts': BankAccounts;
      'bank.address': BankAddress;
      'bank.contact': BankContact;
      'bank.transactionsdetails': BankTransactionsdetails;
      'bank.transcations': BankTranscations;
      'categories.category': CategoriesCategory;
    }
  }
}
