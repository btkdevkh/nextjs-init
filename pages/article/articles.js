import Link from 'next/link'

export default function articlesList({ users }) {

  return (
    <>
    <div className='list'>
      {users.map(user => (
        <Link href={`/article/${user.id}`} key={user.id}>
          <a>{user.name}</a>
        </Link>
      ))}
    </div>
    </>
  )
}

export const getStaticProps = async () => {
  let API_URL = 'https://jsonplaceholder.typicode.com/users'

  const res = await fetch(API_URL)
  const datas = await res.json()

  return {
    props: { users: datas }
  }
}
