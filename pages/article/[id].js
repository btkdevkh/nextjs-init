export const getStaticPaths = async () => {
  let API_URL = 'https://jsonplaceholder.typicode.com/users'
  const res = await fetch(API_URL)
  const datas = await res.json()

  const paths = datas.map(data => {
    return {
      params: { id: data.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id

  let API_URL = 'https://jsonplaceholder.typicode.com/users/' + id

  const res = await fetch(API_URL)
  const data = await res.json()

  return {
    props: { user: data }
  }
}

export default function Details({ user }) {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.website}</p>
      <p>{user.address.city}</p>
    </div>
  )
}
