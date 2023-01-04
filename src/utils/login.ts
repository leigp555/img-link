export const githubLogin = () => {
  window.open(
    'https://github.com/login/oauth/authorize?client_id=97bc323362f96abbc3d3&scope=user:email',
    '_self'
  )
}

export const googleLogin = () => {
  interface ParamsType {
    client_id: string
    redirect_uri: string
    response_type: string
    scope: string
    include_granted_scopes: string
    state: string
  }

  const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth'
  const form = document.createElement('form')
  form.setAttribute('method', 'GET')
  form.setAttribute('action', oauth2Endpoint)

  const params: ParamsType = {
    client_id:
      '555143635277-bq9r31dv08umgvkbnsu0fe4h4bhajkbs.apps.googleusercontent.com',
    redirect_uri: 'http://localhost:3000/login',
    response_type: 'token',
    scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
    include_granted_scopes: 'true',
    state: 'pass-through value'
  }
  const arr = Object.keys(params)
  arr.forEach((p: string) => {
    const input = document.createElement('input')
    input.setAttribute('type', 'hidden')
    input.setAttribute('name', p)
    input.setAttribute('value', params[p as keyof ParamsType])
    form.appendChild(input)
  })
  document.body.appendChild(form)
  form.submit()
}
