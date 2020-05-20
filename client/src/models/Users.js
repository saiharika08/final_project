const Users = [
    { Name: 'Harika', Password_Admin: '2020', Email_Admin: 'tadis1@newpaltz.edu' },
    { Name: 'Venu', Password_Admin: '2020', Email_Admin: 'admin@admin.com' },
    { Name: 'Tadi', Password: '1998', Email: 'tadis1@hawkmail.newpaltz.edu' },
    { Name: 'Venu', Password: '1997', Email: 'naredlav1@hawkmail.newpaltz.edu' },
    { Name: 'Naredla', Password: '1997', Email: 'naredlav1@newpaltz.edu' },
];


export let CurrentUser = null;

export function Login(email, password) {

    const user = Users.find(x => x.Email == email);
    if(!user) throw Error('User not found');
    if(user.Password != password) throw Error('Wrong Password');
    
    return CurrentUser = user;

}

export let CurrentAdmin = null;

export function Admin_Login(email, password) {

    const admin = Users.find(y => y.Email_Admin == email);
    if(!admin) throw Error('User not found');
    if(admin.Password_Admin != password) throw Error('Wrong Password');

    return CurrentAdmin = admin;

}