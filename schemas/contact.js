export default {
  name: 'contact',
  title: 'Contact Info',
  type: 'document',
  fields: [
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string'
    },
    {
      name: 'city',
      title: 'City',
      type: 'string'
    },
    {
      name: 'state',
      title: 'State',
      type: 'string'
    },
    {
      name: 'zip',
      title: 'Zip',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'phone'
    },
    prepare() {
      return {title: 'Contact Info'}
    }
  }
}
