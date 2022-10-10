export const loginFields = [{
  labelText: 'Username',
  labelFor: 'username',
  id: 'username',
  name: 'username',
  type: 'text',
  isRequired: true,
  placeholder: 'Username'
}, {
  labelText: 'Password',
  labelFor: 'password',
  id: 'password',
  name: 'password',
  type: 'password',
  isRequired: true,
  placeholder: 'Password'
}]

export const signupFields = [{
  labelText: 'Username',
  labelFor: 'username',
  id: 'username',
  name: 'username',
  type: 'text',
  isRequired: true,
  placeholder: 'Username',
  pattern: '[^\n]+'
}, {
  labelText: 'Email address',
  labelFor: 'email',
  id: 'email',
  name: 'email',
  type: 'email',
  isRequired: true,
  placeholder: 'Email address',
  pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'
}, {
  labelText: 'Phone Number',
  labelFor: 'phone',
  id: 'phone',
  name: 'phone',
  type: 'tel',
  isRequired: true,
  placeholder: 'Phone Number',
  pattern: '^[0-9]{10}$'
}, {
  labelText: 'ZIP code',
  labelFor: 'zipcode',
  id: 'zipcode',
  name: 'zipcode',
  type: 'text',
  isRequired: true,
  placeholder: 'ZIP code',
  pattern: '^[0-9]{5}$'
}, {
  labelText: 'Password',
  labelFor: 'password',
  id: 'password',
  name: 'password',
  type: 'password',
  isRequired: true,
  placeholder: 'Password',
  pattern: '[^\n]+'
}, {
  labelText: 'Confirm Password',
  labelFor: 'confirm-password',
  id: 'confirm-password',
  name: 'confirm-password',
  type: 'password',
  isRequired: true,
  placeholder: 'Confirm Password',
  pattern: '[^\n]+'
}]

export const profileFields = [{
  labelText: 'Username',
  labelFor: 'username',
  id: 'username',
  name: 'username',
  type: 'text',
  isRequired: true,
  placeholder: 'Username',
  pattern: '[^\n]+'
}, {
  labelText: 'Email address',
  labelFor: 'email',
  id: 'email',
  name: 'email',
  type: 'email',
  isRequired: true,
  placeholder: 'Email address',
  pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'
}, {
  labelText: 'Phone Number',
  labelFor: 'phone',
  id: 'phone',
  name: 'phone',
  type: 'tel',
  isRequired: true,
  placeholder: 'Phone Number',
  pattern: '^[0-9]{10}$'
}, {
  labelText: 'ZIP code',
  labelFor: 'zipcode',
  id: 'zipcode',
  name: 'zipcode',
  type: 'text',
  isRequired: true,
  placeholder: 'ZIP code',
  pattern: '^[0-9]{5}$'
}, {
  labelText: 'New password',
  labelFor: 'password',
  id: 'password',
  name: 'password',
  type: 'password',
  isRequired: true,
  placeholder: 'New password',
  pattern: '[^\n]+'
}]
