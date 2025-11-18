import { IsNotEmpty } from "class-validator";
//front bata aune dataa 
export class ProfileDto {
    @IsNotEmpty()
    education: string;
    @IsNotEmpty()
    address: string;
    @IsNotEmpty()
    job: string;
    @IsNotEmpty()
    picture: string;
    @IsNotEmpty()
    bankDetails: string;
    @IsNotEmpty()
    userId: number;
}