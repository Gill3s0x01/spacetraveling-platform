import { gql, useQuery } from '@apollo/client'

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string
  title: string
}

function AppOptions() {
  const { loading, error, data } = useQuery<{ lessons: Lesson[] }>(
    GET_LESSONS_QUERY
  )
  console.log(data)

  if (loading) return <p>Loading...</p>

  if (error) return <p>Error :</p>

  return (
    <div>
      <h1>Lessons</h1>
      <ul>
        {data?.lessons.map((lesson) => (
          <li key={lesson.id}>{lesson.title}</li>
        ))}
      </ul>
    </div>
  )
}

// options 1 API call
// useEffect(() => {
//   client
//     .query({ query: GET_LESSONS_QUERY })
//     .then((res) => console.log(res.data))
// }, [])

export default AppOptions
