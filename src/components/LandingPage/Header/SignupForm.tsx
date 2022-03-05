import React from 'react'
import { notification } from 'antd'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { SignupForm } from './types'
import REGISTER_MUTATION from 'src/graphql/mutations/register'

type Props = {
  hideSignupForm: () => void
}

const SignupFormModal = ({ hideSignupForm }: Props) => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SignupForm>({})
  const password = watch('password')
  const [registerUser] = useMutation(REGISTER_MUTATION, {
    onCompleted: () => {
      notification['success']({
        message: 'Registration successful',
        description: "You've registered successfully.",
      })
      hideSignupForm()
      reset()
    },
    onError: () => {
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
        <h4>Signup</h4>
        <p>Join our family!</p>
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
            <a href="#" className="google">
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
      </div>
      <form
        className="form-wrapper"
        onSubmit={handleSubmit((data: SignupForm) => {
          registerUser({
            variables: {
              username: data.username,
              email: data.email,
              password: data.password,
            },
          })
        })}
      >
        <div className="form-group">
          <img src="/assets/img/login/user.svg" />
          <input
            {...register('username', {
              required: 'username is required',
            })}
            type="text"
            className="is-invalid"
            placeholder="Username"
          />
          {errors.username?.message && <div className="invalid-feedback">{errors.username.message}</div>}
        </div>
        <div className="form-group">
          <img src="/assets/img/login/email.svg" />
          <input
            {...register('email', {
              required: 'Email is required',
            })}
            placeholder="Email"
            className="is-invalid"
            type="email"
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
            className="is-invalid"
            type="password"
          />
          {errors.password?.message && <div className="invalid-feedback">{errors.password.message}</div>}
        </div>
        <div className="form-group">
          <img src="/assets/img/login/password.svg" />
          <input
            {...register('confirmPassword', {
              required: 'Confirm password is required',
              validate: (value) => value === password || 'Your password and confirmation password do not match',
            })}
            placeholder="Confirm Password"
            className="is-invalid"
            type="password"
          />
          {errors.confirmPassword?.message && <div className="invalid-feedback">{errors.confirmPassword.message}</div>}
        </div>
        <div className="remember">
          <div className="flex mt-2">
            <input
              {...register('acceptTerms', {
                required: 'Please accept our terms and services',
              })}
              type="checkbox"
              className="is-invalid mr-1"
            />{' '}
            <span>
              I have read and accept the <b>Terms of Service & Privacy policy*</b>
            </span>
          </div>
          {errors.acceptTerms?.message && <div className="invalid-feedback">{errors.acceptTerms.message}</div>}
        </div>
        <button type="submit" className="btn btn-login text-white" style={{ fontSize: '16px' }}>
          Get Started
        </button>
      </form>
      <p className="already">
        Already have account? <a href="#">Login</a>
      </p>
    </div>
  )
}

export default SignupFormModal
