export function Label(name: string): any {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("label: ", name);
    };    
}

export function Required(required: boolean): any {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("required: ", required);
    };    
}

export function FormType(formType: string): any {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("formType: ", formType);
    };    
}