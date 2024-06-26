import { AuthService } from './auth.service';
import { Body, Controller, Post, Get } from '@nestjs/common';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './schemas/user.schema';
@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService ){}
/*
    @Post('signup')
    signUP(@Body() signUpDto:SignUpDto): Promise<{ token: string }> {
        return this.authService.signUp(signUpDto);
    }*/

    @Post('signup')
    async signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
        return this.authService.signUp(signUpDto);
    }
    @Post('login')
    async login(@Body() loginDto:LoginDto): Promise<{ token: string }> {
        return this.authService.login(loginDto);
    }

}
