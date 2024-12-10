const alphanum_characters = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
let random_password = "";

for (let i = 0; i < 10; i++) {
    let random_position = Math.round(Math.random()*35);
    console.log(random_position);
    random_password += alphanum_characters[random_position];
}

console.log(random_password);