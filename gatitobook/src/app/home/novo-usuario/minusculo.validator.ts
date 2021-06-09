import { AbstractControl } from '@angular/forms';

// tslint:disable-next-line: typedef
export function minunsculoValidator(control: AbstractControl){
  const valor = control.value as string;
  if (valor !== valor.toLowerCase()){
    return { minusculo: true};
  } else {

    return null;

  }
}
