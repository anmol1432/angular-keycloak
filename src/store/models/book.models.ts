export interface Book{
    id:string;
    volumeInfo:{
        title:string;
        author:Array<string>;
    }
}