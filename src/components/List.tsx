import React from 'react';

interface IProps {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

const List: React.FC<IProps> = ({people}) => {

  const renderList = (): JSX.Element[] => {
    return people.map(person => {
      return (
        <li className="List">
          <div className="List-header">
            <img src={person.url} alt="person" className="List-img" />
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      )
    })
  }

  return (
    <div>
      <ul>
        {renderList()}
      </ul>
    </div>
  )
}

export default List;