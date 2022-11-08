import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {
    console.log('you just created an account')
    return this.authService.signup()
  }

  @Post('login')
  login() {
    console.log('you just loged in to ur account')
    return this.authService.login()

  }
}
