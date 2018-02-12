export class Employee {

    constructor (
        public id: number=0,
        public firstName: string='',
        public lastName: string='',
        public userEmail: string='',
        public contactNo: string='',
        public userAddress: string='',
        public userName: string='',
        public userPass: string='',
        public gender: string='',
        public qualification: string='',
        public experience: string='',
        public languages: object[]=[{Name:'C/C++',IsEnabled:false}, {Name:'Java',IsEnabled:false}, 
        {Name:'C#',IsEnabled:false}, {Name:'PHP',IsEnabled:false}, 
        {Name:'Python',IsEnabled:false}]
    ) {}
}
