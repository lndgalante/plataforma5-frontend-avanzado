import Head from 'next/head';

function Users(props) {
  return (
    <div>
      <Head>
        <title>UsuarioS</title>
      </Head>

      <h2>Plataforma 5</h2>

      <ul>
        {props.students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  console.log('Donde vive este log? -> Vive del lado del servidor');

  const students = ['Joaquin', 'Hernan', 'Nadia'];

  return { props: { students } };
}

export default Users;
