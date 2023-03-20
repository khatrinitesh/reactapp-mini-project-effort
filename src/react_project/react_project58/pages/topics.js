import React from 'react';
import Banner from '../components/banner';
import {useParams} from 'react-router-dom';
import {getTopic,getResource,getTopics} from '../components/apitopics';
import {Routes,Route,Link} from 'react-router-dom';

export default function CustomTopics() {
  return (
    <div className='content'>
        <Banner bannerTitle="Topics" bannerDesc="Lorem Ipsum"/>
        <Topics/>
    </div>
  )
}

function Resource(){
  const {topicId,resourceId} = useParams();

  const {name,description,id} = getResource({topicId,resourceId});

  return(
    <>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <a href={`https://ui.dev/${id}`}>Read Post</a>
      </div>
    </>
  )
}


function Topic() {
  const { topicId } = useParams();
  const topic = getTopic(topicId);

  return (
    <div>
      <h2>{topic.name}</h2>
      <p>{topic.description}</p>

      <ul>
        {topic.resources.map((sub) => (
          <li key={sub.id}>
            <Link to={sub.id}>{sub.name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Routes>
        <Route path=":resourceId" element={<Resource />} />
      </Routes>
    </div>
  );
}


function Topics(){
  const topics = getTopics();

  return (
    <div>
      <h1>Topics list</h1>
      <ul>
        {topics.map(({ name, id }) => (
          <li key={id}>
            <Link to={id}>{name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Routes>
        <Route path=":topicId/*" element={<Topic />} />
      </Routes>
    </div>
  );
}
