import React from 'react'
import { notification } from 'antd'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import nookies from 'nookies'
import LOGIN_MUTATION from 'src/graphql/mutations/login'
import { LoginForm } from './types'
import { useRouter } from 'next/router'
import { useAuth } from 'src/utils/auth'

const LoginFormModal = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginForm>({})

  const { updateUser } = useAuth()
  const router = useRouter()
  const [loginUser] = useMutation(LOGIN_MUTATION, {
    onCompleted: (data) => {
      const {
        signin: { jwt, user },
      } = data
      nookies.set(undefined, 'token', jwt, {
        path: '/',
      })
      notification['success']({
        message: 'Login successful',
        description: "You've login successfully.",
      })
      updateUser(user)
      router.replace('/feed')
    },
    onError: (error) => {
      console.log(error)
      notification['error']({
        message: 'Error',
        description: 'Something went wrong, Please try later',
      })
    },
  })

  return (
    <div className="login-form-wrapper">
      <div className="logo-wrapper">
        <img src="/assets/img/login/logo.svg" />
      </div>
      <div className="page-title-wrapper">
        <h4>Login</h4>
        <p>Welcome Back!</p>
      </div>
      <div className="social-login-wrapper">
        <ul>
          <li>
            <a href="#" className="twitter">
              <img src="/assets/img/login/twitter.svg" />
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a className="google">
              <img src="/assets/img/login/google.svg" />
              <span>Google</span>
            </a>
          </li>
          <li>
            <a href="#" className="facebook">
              <img src="/assets/img/login/facebook.svg" />
              <span>Facebook</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="muted-text">
        <p className="or">OR</p>
        <p>Login with email</p>
      </div>
      <form
        className="form-wrapper"
        onSubmit={handleSubmit((data: LoginForm) => {
          loginUser({
            variables: {
              identifier: data.email,
              password: data.password,
            },
          })
        })}
      >
        <div className="form-group">
          <img src="/assets/img/login/user.svg" />
          <input
            {...register('email', {
              required: 'Email is required',
            })}
            placeholder="Email"
            type="email"
            className="is-invalid"
          />
          {errors.email?.message && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>
        <div className="form-group">
          <img src="/assets/img/login/password.svg" />
          <input
            {...register('password', {
              required: 'Password is required',
            })}
            placeholder="Password"
            type="password"
            className="is-invalid"
          />
          {errors.password?.message && <div className="invalid-feedback">{errors.password.message}</div>}
        </div>
        <div className="remember">
          <div>
            <input {...register('remember')} type="checkbox" className="is-invalid mr-1" />
            <span>Remember me</span>
          </div>
          <a href="#">Forgot Password</a>
        </div>

        <button type="submit" className="btn btn-login text-white" style={{ fontSize: 16 }}>
          Login
        </button>
      </form>
      <p className="already">
        Join Now? <a href="#">Login</a>
      </p>
    </div>
  )
}

export default LoginFormModal
