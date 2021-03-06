import {AbstractControl} from "@angular/forms";

export const WordsValidator = (word:string, count:number)=>(control:AbstractControl)=>{
  return control.value.toLowerCase().includes(word.toLowerCase()) ? null:{noWords: `Too few ${word} included!`}
}
