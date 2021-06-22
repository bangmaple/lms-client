import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roleConverter'
})
export class RoleConverterPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value === 'ROLE_ADMIN') {
      return 'Quản trị viên';
    } else if (value === 'ROLE_USER') {
      return 'Người dùng';
    }
    return 'Không xác định';
  }

}
