const loginFields = [
    {
        labelText: 'Email address',
        labelFor: 'email-address',
        id: 'email-address',
        name: 'email',
        type: 'email',
        autoComplete: 'email',
        isRequired: true,
        placeholder: 'Email address',
    },
    {
        labelText: 'Password',
        labelFor: 'password',
        id: 'password',
        name: 'password',
        type: 'password',
        autoComplete: 'current-password',
        isRequired: true,
        placeholder: 'Password',
    },
];

const signupFields = [
    {
        labelText: 'Name',
        labelFor: 'name',
        id: 'name',
        name: 'name',
        type: 'text',
        autoComplete: 'name',
        isRequired: true,
        placeholder: 'Name',
    },
    {
        labelText: 'Email address',
        labelFor: 'email-address',
        id: 'email-address',
        name: 'email',
        type: 'email',
        autoComplete: 'email',
        isRequired: true,
        placeholder: 'Email address',
    },
    {
        labelText: 'Password',
        labelFor: 'password',
        id: 'password',
        name: 'password',
        type: 'password',
        autoComplete: 'current-password',
        isRequired: true,
        placeholder: 'Password',
    },
    {
        labelText: 'Confirm Password',
        labelFor: 'confirm-password',
        id: 'confirm-password',
        name: 'confirm-password',
        type: 'password',
        autoComplete: 'confirm-password',
        isRequired: true,
        placeholder: 'Confirm Password',
    },
];

export { loginFields, signupFields };
