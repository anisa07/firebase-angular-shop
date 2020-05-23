import {FormGroup} from '@angular/forms';

export const checkPasswords = (group: FormGroup) => {
  const pass = group.get('password').value;
  const pass2 = group.get('confirmPassword').value;

  return pass === pass2 ? null : { error: 'Passwords are not equal' };
};
