export interface IImage{
    src:string;
    des:string;
}

export interface IInputFiledProps extends HTMLFormControlsCollection{
    label:string
    placeholder?:string
    idAndName:string
    type ?: 'text'|'radio'|'checkbox'|'select'|'number'|'date'|'tel'|'email'
    styles? : string
    fieldStyles?:string
    labelStyles?:string
    messageStyles?:string
    required?:'required'
    value?:any
    min?:number
    max?:number
    options?:IRadioCheckboxOption[]
    onChange?:any
}


export type IRadioCheckboxOption ={label:string, value:string|number}

export interface IBookingForm {
    fullName: string;
    email: string;
    phone: string;
    country: string;
    departureDate?: string;
    safariType?: string;
    tourDuration: string;
    participants?:{kids?:number, adults?:number, infants?:number}
    accommodationLevel?: string;
    otherServices?: string[];
    specialInterests: string;
    status? :string
    id? : string
    userId?: string
   
  }

  export type IGuest = IBookingForm & {
    _id?:string|any
  }|{}


export const EMAIL_USER= process.env.EMAIL_USER
export const EMAIL_PWD= process.env.EMAIL_PWD
export const EMAIL_HOST= process.env.EMAIL_HOST

export interface IUser {
  name : string
  email:string
  password:string
  
}