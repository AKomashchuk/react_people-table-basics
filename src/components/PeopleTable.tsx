import { Person } from '../types/People';
import PersonRow from './PersonRow';

type Props = {
  people: Person[];
};

const PeopleTable = ({ people }: Props) => {
  return (
    <table className="
      table
      is-bordered
      is-striped
      is-narrow
      is-hoverable
      is-fullwidthle"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>
      <tbody>
        {people.map(person => (
          <PersonRow person={person} key={person.slug} />
        ))}
      </tbody>
    </table>
  );
};

export default PeopleTable;
